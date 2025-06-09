
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Mail, Lock, User, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let result;
      if (isLogin) {
        result = await signIn(formData.email, formData.password);
      } else {
        result = await signUp(formData.email, formData.password, formData.firstName, formData.lastName);
      }

      if (result.error) {
        toast({
          title: 'Fehler',
          description: result.error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: isLogin ? 'Erfolgreich angemeldet' : 'Konto erstellt',
          description: isLogin 
            ? 'Willkommen zurück!' 
            : 'Bitte überprüfen Sie Ihre E-Mail für die Bestätigung.',
        });
        
        if (isLogin) {
          navigate('/');
        }
      }
    } catch (error) {
      toast({
        title: 'Fehler',
        description: 'Ein unerwarteter Fehler ist aufgetreten.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-md">
          <div className="mb-8">
            <Link 
              to="/"
              className="inline-flex items-center text-[#002454] hover:text-[#050c21] transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück zur Startseite
            </Link>
          </div>

          <Card className="shadow-xl border-0 bg-white">
            <CardHeader className="text-center pb-8 pt-8">
              <div className="w-16 h-16 bg-[#002454] rounded-full flex items-center justify-center mx-auto mb-6">
                <User className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold text-[#002454] font-parisine-narrow">
                {isLogin ? 'ANMELDEN' : 'REGISTRIEREN'}
              </CardTitle>
              <p className="text-gray-600 mt-4 text-lg">
                {isLogin 
                  ? 'Willkommen zurück bei LÖWEN Entertainment' 
                  : 'Werden Sie Teil der LÖWEN Familie'
                }
              </p>
            </CardHeader>
            
            <CardContent className="px-8 pb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-[#002454] font-semibold">Vorname</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="pl-12 h-12 border-2 border-gray-200 focus:border-[#002454] focus:ring-[#002454] text-base"
                          placeholder="Vorname"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-[#002454] font-semibold">Nachname</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="pl-12 h-12 border-2 border-gray-200 focus:border-[#002454] focus:ring-[#002454] text-base"
                          placeholder="Nachname"
                          required={!isLogin}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#002454] font-semibold">E-Mail-Adresse</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-12 h-12 border-2 border-gray-200 focus:border-[#002454] focus:ring-[#002454] text-base"
                      placeholder="ihre.email@beispiel.de"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-[#002454] font-semibold">Passwort</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-12 h-12 border-2 border-gray-200 focus:border-[#002454] focus:ring-[#002454] text-base"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-[#002454] hover:bg-[#050c21] text-white font-semibold text-base transition-all duration-200 transform hover:scale-[1.02]"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-5 w-5 animate-spin" />}
                  {isLogin ? 'ANMELDEN' : 'KONTO ERSTELLEN'}
                </Button>
              </form>

              <div className="mt-8 text-center">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">oder</span>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="mt-6 text-[#002454] hover:text-[#050c21] transition-colors font-semibold text-base"
                >
                  {isLogin 
                    ? 'Noch kein Konto? Jetzt registrieren' 
                    : 'Bereits ein Konto? Hier anmelden'
                  }
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Auth;
