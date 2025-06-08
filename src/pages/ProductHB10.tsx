
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, Star, Truck, Shield, Award, Users, Zap, Target, ArrowLeft, Plus, Minus, Smartphone, Monitor, Wifi } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductHB10 = () => {
  const navigate = useNavigate();
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    quantity: 1,
    customerType: "private", // "private" or "business"
    companyName: ""
  });
  const [previousCustomerType, setPreviousCustomerType] = useState("private");
  const companyFieldRef = useRef<HTMLDivElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const productDetailsRef = useRef<HTMLElement>(null);

  const basePrice = 3499;
  const originalPrice = 4099;
  const savings = originalPrice - basePrice;
  const calculateTotal = () => {
    return basePrice * formData.quantity;
  };

  const handleInputChange = (field: string, value: string | number) => {
    if (field === "customerType") {
      setPreviousCustomerType(formData.customerType);
    }
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQuantityChange = (delta: number) => {
    const newQuantity = Math.max(1, Math.min(5, formData.quantity + delta));
    setFormData(prev => ({ ...prev, quantity: newQuantity }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

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

  const handleBeratungAnfordern = () => {
    navigate('/kontakt');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section - Dark Theme */}
      <section ref={heroSectionRef} className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
                  Aktuelles Modell
                </Badge>
                <Badge className="bg-green-700 hover:bg-green-600 text-white border-0">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Verfügbar
                </Badge>
              </div>
              
              <h1 className="font-bold text-white mb-4 font-parisine-narrow leading-tight" style={{ fontSize: '58px' }}>
                LÖWEN DARTAUTOMAT
              </h1>
              <h2 className="font-bold text-blue-400 mb-6 font-parisine-narrow" style={{ fontSize: '42px' }}>
                HB10 DART ROT-BLAU (V4)
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-slate-300">
                  <span className="text-sm">Serie:</span>
                  <span className="ml-2 font-semibold text-blue-400">Aktuelle Produktionsreihe</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600" />
                <div className="text-slate-300">
                  <span className="text-sm">Status:</span>
                  <span className="ml-2 font-semibold text-green-400">Sofort verfügbar</span>
                </div>
              </div>
              
              {/* Enhanced Price Box / Checkout Form */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 mb-8 shadow-2xl transition-all duration-500 ease-in-out">
                {!checkoutMode ? (
                  // Normal Price Display Mode
                  <div className="animate-fade-in">
                    <div className="flex items-baseline gap-4 mb-4">
                      <div className="text-5xl font-bold text-white">3.499€</div>
                      <div className="text-slate-400 text-lg line-through">4.099€</div>
                      <Badge className="bg-red-600 text-white">-{savings}€</Badge>
                    </div>
                    <div className="text-slate-300 text-lg mb-6">inkl. 19% MwSt.</div>
                    
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center gap-2 bg-green-900/30 text-green-400 px-3 py-2 rounded-full text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Sofort verfügbar
                      </div>
                      <div className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-2 rounded-full text-sm">
                        <Truck className="w-4 h-4" />
                        Kostenlose Spedition
                      </div>
                    </div>
                    
                    <div className="space-y-3 text-sm text-slate-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        24 Monate Garantie
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-400" />
                        Kostenlose Einrichtung vor Ort
                      </div>
                      <div className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4 text-cyan-400" />
                        LÖWEN DART-App inklusive
                      </div>
                    </div>
                  </div>
                ) : (
                  // Checkout Form Mode - same as HB8
                  <form onSubmit={handleSubmit} className="animate-fade-in">
                    <div className="flex items-center gap-3 mb-6">
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setCheckoutMode(false)}
                        className="text-slate-400 hover:text-white p-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </Button>
                      <h3 className="text-xl font-semibold text-white">Anfrage stellen</h3>
                    </div>

                    {/* Customer Type Selection */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-300 mb-3">Kundentyp</label>
                      <RadioGroup
                        value={formData.customerType}
                        onValueChange={(value) => handleInputChange("customerType", value)}
                        className="flex gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="private" id="private" className="border-slate-600 text-blue-400" />
                          <Label htmlFor="private" className="text-slate-300 cursor-pointer">Privat</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" className="border-slate-600 text-blue-400" />
                          <Label htmlFor="business" className="text-slate-300 cursor-pointer">Geschäftlich</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Company Name Field - with smooth animation */}
                    <div 
                      ref={companyFieldRef}
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        formData.customerType === "business" 
                          ? "max-h-20 opacity-100 mb-4 animate-slide-down" 
                          : "max-h-0 opacity-0 mb-0"
                      }`}
                    >
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Unternehmen</label>
                        <Input
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          placeholder="Ihr Unternehmensname"
                          required={formData.customerType === "business"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Vorname</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          placeholder="Ihr Vorname"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Nachname</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          placeholder="Ihr Nachname"
                          required
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-300 mb-2">E-Mail</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="Ihre E-Mail Adresse"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-300 mb-2">Telefonnummer</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="Ihre Telefonnummer"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-slate-300 mb-2">Menge</label>
                      <div className="flex items-center gap-3">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(-1)}
                          disabled={formData.quantity <= 1}
                          className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 disabled:opacity-50 disabled:border-slate-600 disabled:text-slate-500"
                        >
                          <Minus className="w-4 h-4" />
                        </Button>
                        <span className="text-xl font-semibold text-white min-w-[3rem] text-center">
                          {formData.quantity}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleQuantityChange(1)}
                          disabled={formData.quantity >= 5}
                          className="bg-transparent border-blue-500 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 disabled:opacity-50 disabled:border-slate-600 disabled:text-slate-500"
                        >
                          <Plus className="w-4 h-4" />
                        </Button>
                        <span className="text-sm text-slate-400 ml-2">
                          (Aktuell verfügbar)
                        </span>
                      </div>
                    </div>

                    {/* Integrated Price Calculator */}
                    <div className="bg-slate-900/50 border border-slate-600 rounded-lg p-4 mb-6 animate-scale-in">
                      <div className="space-y-2">
                        <div className="flex justify-between text-slate-300">
                          <span>Einzelpreis:</span>
                          <span>{basePrice.toLocaleString()}€</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Menge:</span>
                          <span>{formData.quantity}x</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Versand:</span>
                          <span className="text-green-400">Kostenlos</span>
                        </div>
                        <Separator className="bg-slate-600" />
                        <div className="flex justify-between text-lg font-semibold text-white">
                          <span>Gesamtpreis:</span>
                          <span>{calculateTotal().toLocaleString()}€</span>
                        </div>
                        <div className="text-sm text-slate-400 text-right">inkl. 19% MwSt.</div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-md shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      Unverbindliche Anfrage stellen
                    </Button>
                  </form>
                )}

                {!checkoutMode && (
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => setCheckoutMode(true)}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl flex-1 transform hover:scale-[1.02]"
                    >
                      Jetzt anfragen
                    </Button>
                    <Button 
                      variant="ghost" 
                      onClick={scrollToProductDetails}
                      className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-6 py-3 text-lg rounded-md transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      Mehr Info
                    </Button>
                  </div>
                )}
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-3xl blur-2xl transform scale-110"></div>
                
                <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  <div className="flex flex-col">
                    <div className="h-[28rem] flex items-center justify-center mb-4">
                      <img 
                        src="https://www.loewen.de/fileadmin/_processed_/6/8/csm_2023-08-08-HB10-Rot-Blau-Links_9b110b3a99.png"
                        alt="Löwen Dartautomat HB10"
                        className="max-h-full max-w-full object-contain drop-shadow-2xl scale-120"
                      />
                    </div>
                    
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-white">EINE NEUE ÄRA DES ELECTRONIC DARTS</h3>
                      <p className="text-slate-300 text-base leading-relaxed">
                        Das neue Erfolgsmodell - Mit neuen Trainings- und Spiel-Modi, einem Touchpad und 
                        dem hochauflösenden Monitor bringt der HB10 den elektronischen Dart-Sport in das Hier und Jetzt.
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                          <Monitor className="w-4 h-4" />
                          <span>23,8" Monitor</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-400">
                          <Smartphone className="w-4 h-4" />
                          <span>App-Integration</span>
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

      {/* Key Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              HIGHLIGHTS
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Der HB10 vereint modernste Technologie mit bewährter LÖWEN-Qualität
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Monitor className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Hochauflösender Monitor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">23,8-Zoll-Monitor für Spielergebnisse und Animationen</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">12,1" Touchpad</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Intuitive Steuerung der Spielauswahl per Touch</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">LED-Ausleuchtung</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Perfekte Ausleuchtung des Targets durch LED</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Wifi className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">WLAN-Funktionalität</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Durch externen WLAN-Stick erweiterbar</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">5 Sprachen</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Deutsch, Englisch, Spanisch, Französisch, Italienisch</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">QR-Code Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">App-Anmeldung über QR-Code im Spielermenü</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LÖWEN DART-App Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
                NOCH MEHR ENTERTAINMENT
              </h2>
              <p className="text-slate-400 text-xl max-w-4xl mx-auto">
                Die neue LÖWEN DART-App ist das perfekte Bindeglied zwischen dem HB10 und dem Smartphone
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Smartphone className="w-6 h-6 text-blue-400 mr-3" />
                    LÖWEN DART-App Features
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span>Übertragung der Ergebnisse vom Gerät in die App</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Anlage von Benutzerprofilen zur Individualisierung</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span>Einsicht in die komplette Spielhistorie</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-blue-400" />
                      <span>Ausführliche Statistiken individuell konfigurierbar</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span>Teilen von Erfolgen direkt per Social Media</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span>Kontinuierliche Erweiterung der Features</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mt-6">
                    <h4 className="text-blue-400 font-semibold mb-2">Einzigartiges Spielerlebnis:</h4>
                    <p className="text-sm text-slate-300">
                      Individuelle Features wie die Darstellung von Spielstatistiken und Trainingserfolgen 
                      bieten Dartfans ein einzigartiges Spielerlebnis und machen sie noch mehr Teil der E-Darts-Community.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <Award className="w-6 h-6 text-green-400 mr-3" />
                    Innovative Technologie
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-green-400 text-sm font-semibold mb-1">Hochleistungsprozessor</div>
                      <div className="text-slate-400 text-xs">Für schnelle Reaktionszeiten und flüssige Animationen</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-blue-400 text-sm font-semibold mb-1">Integrierter Banknotenprüfer</div>
                      <div className="text-slate-400 text-xs">Für professionellen Einsatz in Gastronomie und Vereinen</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-purple-400 text-sm font-semibold mb-1">Bewährtes Treffererkennungssystem</div>
                      <div className="text-slate-400 text-xs">Piezo-Sensoren für 100% akkurate Erkennung</div>
                    </div>
                  </div>
                  
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-6">
                    <h4 className="text-red-400 font-semibold mb-2">Farbvarianten verfügbar:</h4>
                    <p className="text-sm text-red-300">
                      Der HB10 ist in den Farbvarianten blau sowie rot-blau erhältlich. 
                      Diese Ausführung zeigt das rot-blaue Design.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Enhanced */}
      <section ref={productDetailsRef} className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              TECHNISCHE DATEN
            </h2>
            <p className="text-slate-400 text-xl max-w-4xl mx-auto">
              Modernste Technik für professionelle Ansprüche und langfristige Zuverlässigkeit
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Target className="w-6 h-6 text-purple-400 mr-3" />
                    Abmessungen & Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">📏</span> Aufgestellt:
                      </h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-2xl font-bold text-purple-400">236cm</div>
                          <div className="text-xs text-slate-400">Höhe</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">62cm</div>
                          <div className="text-xs text-slate-400">Breite</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">60cm</div>
                          <div className="text-xs text-slate-400">Tiefe</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-3 bg-red-900/20 border border-red-700/50 rounded p-2">
                        <strong>Wichtig:</strong> Zum Aufklappen benötigt man ca. 5cm Platz nach oben! 
                        Bei zu geringer Deckenhöhe Monitor Umbau-Satz verwenden.
                      </p>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <span className="text-blue-400 mr-2">📦</span> Transport zusammengeklappt:
                      </h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-400">123cm</div>
                          <div className="text-xs text-slate-400">Höhe</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">62cm</div>
                          <div className="text-xs text-slate-400">Breite</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">86cm</div>
                          <div className="text-xs text-slate-400">Tiefe</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-3">Transport auf Palette:</h4>
                      <div className="text-center">
                        <div className="text-lg font-bold text-slate-300">90cm x 80cm x 145cm</div>
                        <div className="text-xs text-slate-400 mt-1">Palettenmaße für Speditionsversand</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Zap className="w-6 h-6 text-blue-400 mr-3" />
                    Technische Spezifikationen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-blue-400 text-sm font-semibold">Gewicht</div>
                        <div className="text-slate-300 text-lg font-bold">105kg</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-green-400 text-sm font-semibold">Versorgung</div>
                        <div className="text-slate-300 text-sm">230V ±10% / 50Hz</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-purple-400 text-sm font-semibold">Leistungsaufnahme</div>
                        <div className="text-slate-300 text-lg font-bold">75W</div>
                      </div>
                      <div className="bg-slate-900/50 rounded-lg p-3">
                        <div className="text-blue-400 text-sm font-semibold">Sicherungen</div>
                        <div className="text-slate-300 text-sm">3,15A träge</div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                      <h4 className="text-white font-semibold mb-3">Umgebungsbedingungen:</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-slate-300">
                          <span>Temperatur:</span>
                          <span className="text-green-400">10-35°C</span>
                        </div>
                        <div className="flex justify-between text-slate-300">
                          <span>Luftfeuchtigkeit:</span>
                          <span className="text-blue-400">30-80%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                        <Monitor className="w-4 h-4 mr-2" />
                        Monitor Umbau-Satz:
                      </h4>
                      <p className="text-blue-300 text-sm">
                        Bei zu geringer Deckenhöhe kann der Monitor umgebaut werden. 
                        Ohne Monitor wird eine Höhe von nur 221cm benötigt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <Award className="w-6 h-6 text-green-400 mr-3" />
                  Kompletter Lieferumfang
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center">
                      <Target className="w-5 h-5 text-blue-400 mr-2" />
                      Hauptgerät
                    </h4>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> HB10 Dartautomat komplett</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> 23,8" Monitor integriert</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> 12,1" Touchpad</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> LED-Beleuchtung</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center">
                      <Zap className="w-5 h-5 text-purple-400 mr-2" />
                      Zubehör
                    </h4>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" /> 1x Profi Dartset</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" /> 1x Abwurflinie (Turnier)</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" /> Befestigungsmaterial komplett</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-purple-400 mr-2" /> Deutsches Benutzerhandbuch</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold flex items-center">
                      <Smartphone className="w-5 h-5 text-blue-400 mr-2" />
                      Software & App
                    </h4>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> LÖWEN DART-App</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> QR-Code Integration</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> 5 Sprachen verfügbar</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> Updates über WLAN</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-bold text-white mb-8 font-parisine-narrow" style={{ fontSize: '48px' }}>
              SICHERN SIE SICH JETZT DEN HB10
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Das neueste Modell der erfolgreichen LÖWEN DART-Serie. Mit modernster Technik, 
              App-Integration und 24 Monaten Garantie. Kostenlose Speditionslieferung und professionelle Einrichtung inklusive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToTop}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl text-xl transform hover:scale-[1.02]"
              >
                Jetzt bestellen
              </Button>
              <Button 
                variant="ghost" 
                onClick={handleBeratungAnfordern}
                className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-8 py-5 text-lg rounded-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Beratung anfordern
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
                24 Monate Garantie
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-400" />
                Kostenlose Lieferung
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-purple-400" />
                App-Integration
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
