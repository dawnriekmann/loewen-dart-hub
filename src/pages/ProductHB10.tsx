
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HB10Section from "@/components/HB10Section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, Truck, Shield, Award, Users, Zap, Target, Monitor, Gamepad2 } from "lucide-react";
import { useRef } from "react";
import ProductInquiryButton from "@/components/ProductInquiryButton";

const ProductHB10 = () => {
  const heroSectionRef = useRef<HTMLElement>(null);
  const productDetailsRef = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    heroSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToProductDetails = () => {
    productDetailsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section - Dark Theme */}
      <section ref={heroSectionRef} className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                  <Award className="w-4 h-4 mr-2" />
                  Premium
                </Badge>
                <Badge className="bg-green-600 hover:bg-green-700 text-white border-0">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verfügbar
                </Badge>
                <Badge className="bg-purple-600 hover:bg-purple-700 text-white border-0">
                  <Monitor className="w-4 h-4 mr-2" />
                  Touchscreen
                </Badge>
              </div>
              
              <h1 className="font-bold text-white mb-4 font-parisine-narrow leading-tight" style={{ fontSize: '58px' }}>
                LÖWEN DARTAUTOMAT
              </h1>
              <h2 className="font-bold text-blue-400 mb-6 font-parisine-narrow" style={{ fontSize: '42px' }}>
                HB10 PREMIUM
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-slate-300">
                  <span className="text-sm">Typ:</span>
                  <span className="ml-2 font-semibold text-blue-400">Premium Dart</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600" />
                <div className="text-slate-300">
                  <span className="text-sm">Status:</span>
                  <span className="ml-2 font-semibold text-green-400">Verfügbar</span>
                </div>
              </div>
              
              {/* Price and CTA Box */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-4">auf Anfrage</div>
                  <div className="text-slate-300 text-lg mb-6">
                    Preis nach individueller Konfiguration
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-2 rounded-full text-sm">
                      <Monitor className="w-4 h-4" />
                      23,8" Monitor
                    </div>
                    <div className="flex items-center gap-2 bg-purple-900/30 text-purple-400 px-3 py-2 rounded-full text-sm">
                      <Gamepad2 className="w-4 h-4" />
                      12,1" Touchpad
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      DSAB-Liga-/Turniergerät
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      Professionelle Installation inklusive
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      LED-Ausleuchtung des Targets
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <ProductInquiryButton
                    productType="HB10"
                    productPrice={0}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 text-lg rounded-md transition-all duration-300 flex-1 transform hover:scale-[1.02]"
                  />
                  <Button 
                    variant="ghost" 
                    onClick={scrollToProductDetails}
                    className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-6 py-3 text-lg rounded-md transition-all duration-300 flex-1 transform hover:scale-[1.02]"
                  >
                    Mehr Info
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-700/20 rounded-3xl blur-2xl transform scale-110"></div>
                
                <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  <div className="flex flex-col">
                    <div className="h-[28rem] flex items-center justify-center mb-4">
                      <img 
                        src="https://www.loewen.de/fileadmin/user_upload/Dart-HB10-092024.jpg"
                        alt="Löwen Dartautomat HB10"
                        className="max-h-full max-w-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-white">LÖWEN DARTAUTOMAT HB10</h3>
                      <p className="text-slate-300 text-base leading-relaxed">
                        Das Premium-Modell mit hochauflösendem Monitor und Touchpad-Steuerung. 
                        Offizielles DSAB-Liga- und Turniergerät mit modernster Technologie.
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                          <Monitor className="w-4 h-4" />
                          <span>Hochauflösend</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-400">
                          <Shield className="w-4 h-4" />
                          <span>DSAB-Zertifiziert</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              PREMIUM FEATURES
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Modernste Technologie für höchste Ansprüche in Liga und Turnier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Monitor className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">HOCHAUFLÖSENDER MONITOR</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">
                  23,8-Zoll-Monitor mit gestochen scharfer Darstellung 
                  für optimale Sichtbarkeit aller Spielinformationen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">TOUCHPAD-STEUERUNG</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">
                  Intuitives 12,1-Zoll-Touchpad für einfache Bedienung 
                  und moderne Benutzerführung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">DSAB-ZERTIFIZIERT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">
                  Offizielles Liga- und Turniergerät des Deutschen 
                  Sportautomatenbundes (DSAB).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration of existing HB10Section content */}
      <section ref={productDetailsRef}>
        <HB10Section />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-white mb-8 font-parisine-narrow" style={{ fontSize: '48px' }}>
              INTERESSIERT AM HB10?
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Fordern Sie jetzt ein individuelles Angebot für den LÖWEN DART HB10 an. 
              Unsere Experten erstellen Ihnen ein maßgeschneidertes Angebot nach Ihren Anforderungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ProductInquiryButton
                productType="HB10"
                productPrice={0}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl text-xl transform hover:scale-[1.02]"
              />
              <Button 
                variant="ghost" 
                onClick={scrollToTop}
                className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-8 py-5 text-lg rounded-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Zurück nach oben
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                DSAB-Zertifiziert
              </div>
              <div className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-blue-400" />
                Premium-Ausstattung
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                Individuelle Beratung
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductHB10;
