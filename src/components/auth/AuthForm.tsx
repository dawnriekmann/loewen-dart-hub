
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "./AuthContext";
import { useToast } from "@/hooks/use-toast";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('AuthForm: Submitting form', { isLogin, email });
      
      const { error } = isLogin 
        ? await signIn(email, password)
        : await signUp(email, password, fullName);

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
          title: isLogin ? "Anmeldung erfolgreich" : "Registrierung erfolgreich",
          description: isLogin 
            ? "Sie wurden erfolgreich angemeldet." 
            : "Registrierung erfolgreich. Falls die E-Mail-Bestätigung aktiviert ist, bestätigen Sie bitte Ihre E-Mail-Adresse.",
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
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-[#002454]">
            {isLogin ? "Anmelden" : "Registrieren"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-[#002454] mb-2">
                  Vollständiger Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required={!isLogin}
                  className="border-slate-300 focus:border-[#002454] focus:ring-[#002454]"
                />
              </div>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#002454] mb-2">
                E-Mail
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-slate-300 focus:border-[#002454] focus:ring-[#002454]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#002454] mb-2">
                Passwort
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-slate-300 focus:border-[#002454] focus:ring-[#002454]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#002454] hover:bg-[#003366]"
              disabled={loading}
            >
              {loading ? "Wird geladen..." : (isLogin ? "Anmelden" : "Registrieren")}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#002454] hover:underline text-sm"
              >
                {isLogin 
                  ? "Noch kein Konto? Hier registrieren" 
                  : "Bereits ein Konto? Hier anmelden"
                }
              </button>
            </div>
          </form>
          
          {/* Development hint */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded text-sm">
            <p className="text-yellow-800">
              <strong>Entwicklungshinweis:</strong> Falls Sie Probleme mit der E-Mail-Bestätigung haben, 
              deaktivieren Sie diese in den Supabase Authentication-Einstellungen.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;
