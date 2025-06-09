
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const CreateAdminButton = () => {
  const [isCreating, setIsCreating] = useState(false);
  const { toast } = useToast();

  const createAdminAccount = async () => {
    setIsCreating(true);
    
    try {
      // First sign up the admin user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: 'admin@loewen-dart.de',
        password: 'admin123',
        options: {
          data: {
            full_name: 'Admin User'
          }
        }
      });

      if (signUpError) {
        if (signUpError.message.includes('already registered')) {
          toast({
            title: "Admin-Account bereits vorhanden",
            description: "Der Admin-Account existiert bereits. Sie können sich mit admin@loewen-dart.de und Passwort 'admin123' anmelden.",
          });
        } else {
          throw signUpError;
        }
      } else {
        // Update the user's role to admin
        if (authData.user) {
          const { error: updateError } = await supabase
            .from('profiles')
            .update({ role: 'admin' })
            .eq('id', authData.user.id);

          if (updateError) {
            console.error('Error updating role:', updateError);
          }
        }

        toast({
          title: "Admin-Account erstellt",
          description: "Admin-Account wurde erfolgreich erstellt. E-Mail: admin@loewen-dart.de, Passwort: admin123",
        });
      }
    } catch (error: any) {
      toast({
        title: "Fehler",
        description: error.message || "Fehler beim Erstellen des Admin-Accounts",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <Button
      onClick={createAdminAccount}
      disabled={isCreating}
      className="bg-red-600 hover:bg-red-700"
    >
      {isCreating ? "Erstelle Admin..." : "Admin-Account erstellen"}
    </Button>
  );
};

export default CreateAdminButton;
