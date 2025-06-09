
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
      console.log('CreateAdminButton: Starting admin account creation');
      
      // First try to sign up the admin user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email: 'admin@loewen-dart.de',
        password: 'admin123',
        options: {
          data: {
            full_name: 'Admin User'
          }
        }
      });

      console.log('CreateAdminButton: Sign up response:', authData, signUpError);

      if (signUpError) {
        if (signUpError.message.includes('already registered')) {
          // User already exists, try to update their role
          console.log('CreateAdminButton: User already exists, checking profile');
          
          // Try to find existing user and update role
          const { data: existingProfile, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('email', 'admin@loewen-dart.de')
            .maybeSingle();
          
          console.log('CreateAdminButton: Existing profile:', existingProfile, profileError);
          
          if (existingProfile) {
            const { error: updateError } = await supabase
              .from('profiles')
              .update({ role: 'admin' })
              .eq('id', existingProfile.id);
              
            if (updateError) {
              console.error('CreateAdminButton: Error updating role:', updateError);
            } else {
              console.log('CreateAdminButton: Successfully updated role to admin');
            }
          }
          
          toast({
            title: "Admin-Account bereits vorhanden",
            description: "Der Admin-Account existiert bereits und wurde als Admin konfiguriert. E-Mail: admin@loewen-dart.de, Passwort: admin123",
          });
        } else {
          throw signUpError;
        }
      } else if (authData.user) {
        console.log('CreateAdminButton: New user created, updating role');
        
        // Wait a bit for the profile to be created by the trigger
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Update the user's role to admin
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ role: 'admin' })
          .eq('id', authData.user.id);

        if (updateError) {
          console.error('CreateAdminButton: Error updating role:', updateError);
        } else {
          console.log('CreateAdminButton: Successfully set admin role');
        }

        toast({
          title: "Admin-Account erstellt",
          description: "Admin-Account wurde erfolgreich erstellt. E-Mail: admin@loewen-dart.de, Passwort: admin123",
        });
      }
    } catch (error: any) {
      console.error('CreateAdminButton: Error creating admin account:', error);
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
      className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
    >
      {isCreating ? "Erstelle Admin..." : "Admin-Account erstellen"}
    </Button>
  );
};

export default CreateAdminButton;
