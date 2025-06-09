
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "./AuthContext";
import { useToast } from "@/hooks/use-toast";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('AuthForm: Submitting login form', { email });
      
      const { error } = await signIn(email, password);

      if (error) {
        console.error('AuthForm: Authentication error:', error);
        
        // Handle specific error cases
        if (error.message.includes('Email not confirmed')) {
          toast({
            title: "E-Mail nicht bestätigt",
            description: "Bitte bestätigen Sie Ihre E-Mail-Adresse oder wenden Sie sich an den Administrator.",
            variant: "destructive",
          });
        } else if (error.message.includes('Invalid login credentials')) {
          toast({
            title: "Ungültige Anmeldedaten",
            description: "E-Mail oder Passwort ist falsch.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Fehler",
            description: error.message,
            variant: "destructive",
          });
        }
      } else {
        console.log('AuthForm: Authentication successful');
        toast({
          title: "Anmeldung erfolgreich",
          description: "Sie wurden erfolgreich angemeldet.",
        });
      }
    } catch (error: any) {
      console.error('AuthForm: Unexpected error:', error);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <Card className="w-full max-w-md bg-slate-800 border-slate-700 shadow-2xl">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold text-slate-100 font-parisine-narrow">
            ANMELDEN
          </CardTitle>
          <p className="text-slate-400 mt-2">
            Melden Sie sich in Ihrem Konto an
          </p>
        </CardHeader>
        <CardContent className="px-8 pb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-slate-200">
                E-Mail-Adresse
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454] focus:ring-2 focus:ring-offset-0"
                placeholder="ihre.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-slate-200">
                Passwort
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454] focus:ring-2 focus:ring-offset-0"
                placeholder="Ihr Passwort"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 bg-[#002454] hover:bg-[#003366] text-white font-semibold transition-colors duration-200"
              disabled={loading}
            >
              {loading ? "Wird angemeldet..." : "ANMELDEN"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
