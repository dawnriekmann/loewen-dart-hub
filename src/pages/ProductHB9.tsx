
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, Truck, Shield, Award, Users, Zap, Target, AlertCircle, Lightbulb, Timer, Gamepad2 } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProductHB9 = () => {
  const navigate = useNavigate();
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

  const handleBeratungAnfordern = () => {
    navigate('/kontakt');
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
                  Sport-Gerät
                </Badge>
                <Badge className="bg-red-600 hover:bg-red-700 text-white border-0">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Nicht verfügbar
                </Badge>
                <Badge className="bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600">
                  <Lightbulb className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                  LED-Zahlenkranz
                </Badge>
              </div>
              
              <h1 className="font-bold text-white mb-4 font-parisine-narrow leading-tight" style={{ fontSize: '58px' }}>
                LÖWEN DARTAUTOMAT
              </h1>
              <h2 className="font-bold text-blue-400 mb-6 font-parisine-narrow" style={{ fontSize: '42px' }}>
                HB9 SPORT
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-slate-300">
                  <span className="text-sm">Typ:</span>
                  <span className="ml-2 font-semibold text-blue-400">Sport Dart</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600" />
                <div className="text-slate-300">
                  <span className="text-sm">Status:</span>
                  <span className="ml-2 font-semibold text-red-400">Nicht mehr verfügbar</span>
                </div>
              </div>
              
              {/* Info Box - No Price */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-4">Nicht verfügbar</div>
                  <div className="text-slate-300 text-lg mb-6">
                    Dieses Modell wird nicht mehr produziert
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-2 rounded-full text-sm">
                      <Lightbulb className="w-4 h-4" />
                      Beleuchteter Zahlenkranz
                    </div>
                    <div className="flex items-center gap-2 bg-purple-900/30 text-purple-400 px-3 py-2 rounded-full text-sm">
                      <Gamepad2 className="w-4 h-4" />
                      Exklusive Spielmodi
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm text-slate-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      Made in Germany Qualität
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      Nachfolger: HB8 Professional verfügbar
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-purple-400" />
                      Piezo-Sensoren & LED-Technologie
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    variant="ghost" 
                    onClick={scrollToProductDetails}
                    className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-6 py-3 text-lg rounded-md transition-all duration-300 flex-1 transform hover:scale-[1.02]"
                  >
                    Mehr Info
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={handleBeratungAnfordern}
                    className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-6 py-3 text-lg rounded-md transition-all duration-300 flex-1 transform hover:scale-[1.02]"
                  >
                    Beratung
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
                        src="https://www.loewen-vertrieb.de/fileadmin/_processed_/6/8/csm_HB9_Sport_Dart_760f4d03f8.png"
                        alt="Löwen Dartautomat HB9"
                        className="max-h-full max-w-full object-contain drop-shadow-2xl scale-120"
                      />
                    </div>
                    
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-white">LÖWEN DARTAUTOMAT HB9</h3>
                      <p className="text-slate-300 text-base leading-relaxed">
                        Das SPORT DART besitzt alle beliebten Eigenschaften seines großen Bruders dem TURNIER DART. 
                        Das lichtanimierte Electronic-Dart Gerät besticht durch seinen beleuchteten Zahlenkranz 
                        mit einzigartigen Spiel-Features.
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                          <Lightbulb className="w-4 h-4" />
                          <span>LED-Zahlenkranz</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-green-400">
                          <Shield className="w-4 h-4" />
                          <span>Made in Germany</span>
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
              EINZIGARTIGE FEATURES
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Der HB9 bietet exklusive LED-animierte Spielmodi, die es bei keinem anderen Dartautomaten gibt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-white">PLAY THE LIGHT</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">
                  Erziele die maximale Punktzahl innerhalb der beleuchteten Segmente. 
                  Der Schwierigkeitsgrad steigt von Runde zu Runde.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Timer className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <CardTitle className="text-white">SHORTY</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">
                  Das Spiel für Könner und Profis: Beende das Spiel vor dem Aus 
                  durch die Rundenbegrenzung.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">BONUS-ROULETTE</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">
                  Verwandle den beleuchteten Zahlenkranz in ein Lichtspiel-Roulette 
                  und gewinne Bonusrunden.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section ref={productDetailsRef} className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
                PRODUKTDETAILS
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                    Über den HB9
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Das SPORT DART besitzt alle beliebten Eigenschaften seines großen Bruders dem TURNIER DART. 
                    Das lichtanimierte Electronic-Dart Gerät besticht durch seinen beleuchteten Zahlenkranz 
                    mit einzigartigen Spiel-Features.
                  </p>
                  <p className="leading-relaxed">
                    Der HB9 war ein revolutionäres Gerät mit LED-Technologie und exklusiven Spielmodi, 
                    die es bei anderen Dartautomaten nicht gibt. Diese Funktionen machten ihn zu einem 
                    besonderen Erlebnis für Dart-Enthusiasten.
                  </p>
                  <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4 mt-6">
                    <h4 className="text-red-400 font-semibold mb-2">Produktionsstatus:</h4>
                    <p className="text-sm text-slate-300">
                      Der HB9 wird nicht mehr produziert. Als Nachfolger empfehlen wir den 
                      HB8 Professional mit modernster Technologie.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <div className="w-4 h-4 bg-purple-500 rounded-full mr-4"></div>
                    Unterschiede zum HB8
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Lightbulb className="w-5 h-5 text-yellow-400" />
                      <span>Höhere technische Ausstattung durch den beleuchteten Zahlenkranz</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Gamepad2 className="w-5 h-5 text-purple-400" />
                      <span>Exklusive Spiele: PLAY THE LIGHT, SHORTY, BONUS-ROULETTE</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Star className="w-5 h-5 text-blue-400" />
                      <span>Unterschiedliche äußere Optik mit LED-Features</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Target className="w-5 h-5 text-green-400" />
                      <span>Erweiterte Lichtanimationen und Effekte</span>
                    </div>
                  </div>
                  
                  <Separator className="bg-slate-700" />
                  
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Gemeinsame Eigenschaften:</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• Piezo-Sensoren für präzise Trefferkennung</li>
                      <li>• Infrarot-Spielererkennung</li>
                      <li>• Made in Germany Qualität</li>
                      <li>• Robuste Bauweise und Langlebigkeit</li>
                      <li>• Standard 01er-Spiele und Cricket-Varianten</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              SPIELMODI & VARIANTEN
            </h2>
            <p className="text-slate-400 text-xl max-w-4xl mx-auto">
              8 Optionen für 01er-Spiele und 11 Optionen für Cricket plus die exklusiven LED-Spielmodi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  01er-Spiele
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-slate-300 font-semibold mb-3">8 Optionen:</div>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> 301</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> 501</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> 701</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Rapid Fire</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Split Score</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Time Out Handicap</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Cricket / HiScore</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Shanghai / 301 Elimination</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  Cricket Varianten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-slate-300 font-semibold mb-3">11 Optionen:</div>
                  <ul className="text-slate-400 space-y-2 text-sm">
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Chance It</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> You Pick It</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Cut Throat</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Masters Cricket</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Chance It/Cut Throat</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Chance It/Masters Cricket</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> You Pick It/Cut Throat</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> You Pick It/Masters Cricket</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> 2er-/4er-Team</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  Exklusive Modi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-slate-300 font-semibold mb-3">LED-Features:</div>
                  <div className="space-y-3">
                    <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-3">
                      <div className="text-yellow-400 font-semibold text-sm">PLAY THE LIGHT</div>
                      <p className="text-xs text-slate-400 mt-1">Beleuchtete Segmente treffen</p>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-700/50 rounded p-3">
                      <div className="text-orange-400 font-semibold text-sm">SHORTY</div>
                      <p className="text-xs text-slate-400 mt-1">Rundenbegrenzte Spiele</p>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-700/50 rounded p-3">
                      <div className="text-purple-400 font-semibold text-sm">BONUS-ROULETTE</div>
                      <p className="text-xs text-slate-400 mt-1">Lichtspiel für Bonusrunden</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              TECHNISCHE DATEN
            </h2>
            <p className="text-slate-400 text-xl max-w-4xl mx-auto">
              Hochwertige deutsche Ingenieurskunst mit erweiterten LED-Features
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    Technische Ausstattung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Dataprint-Schnittstelle zur Auswertung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Matrix stationär an Gehäuserückwand</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Abklappbare Dartsscheibe</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Piezo-Sensor für Trefferkennung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Infrarot-Sensor für Spielererkennung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Einstellbare Spielabschaltung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Programmierbare Bullseye-Wertung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Stufenlos programmierbare Rundenlimits</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Lightbulb className="w-6 h-6 text-yellow-400 mr-3" />
                    LED-Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-yellow-400 text-sm font-semibold mb-1">Beleuchteter Zahlenkranz</div>
                      <div className="text-slate-400 text-xs">Vollständig animierbare LED-Segmente</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-yellow-400 text-sm font-semibold mb-1">Lichtanimationen</div>
                      <div className="text-slate-400 text-xs">Dynamische Effekte für Spielmodi</div>
                    </div>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /> PLAY THE LIGHT Modus</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /> BONUS-ROULETTE Funktion</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /> Interaktive Lichteffekte</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-yellow-400 mr-2" /> Segment-spezifische Beleuchtung</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Target className="w-6 h-6 text-purple-400 mr-3" />
                    Abmessungen & Gewicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <span className="text-purple-400 mr-2">📏</span> Betriebsstellung (aufgeklappt):
                      </h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-2xl font-bold text-purple-400">219cm</div>
                          <div className="text-xs text-slate-400">Höhe</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">63cm</div>
                          <div className="text-xs text-slate-400">Breite</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">60cm</div>
                          <div className="text-xs text-slate-400">Tiefe</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-3 bg-slate-800/50 border border-slate-700 rounded p-2">
                        <strong>Achtung:</strong> Zum Aufklappen wird Platz nach oben benötigt!
                      </p>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <span className="text-blue-400 mr-2">📦</span> Transportstellung (zusammengeklappt):
                      </h4>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-400">115cm</div>
                          <div className="text-xs text-slate-400">Höhe</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">63cm</div>
                          <div className="text-xs text-slate-400">Breite</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">83cm</div>
                          <div className="text-xs text-slate-400">Tiefe</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Award className="w-6 h-6 text-blue-400 mr-3" />
                    Lieferumfang & Hinweise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                      <div className="flex items-center gap-3 mb-2">
                        <Target className="w-5 h-5 text-blue-400" />
                        <span className="text-white font-semibold">Kompletter Lieferumfang</span>
                      </div>
                      <ul className="text-slate-400 text-sm space-y-1">
                        <li>• 1 Dartset (12 Pfeile)</li>
                        <li>• 1 Abwurflinie</li>
                        <li>• Befestigungsmaterial</li>
                        <li>• Ausführliches Handbuch (Deutsch)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4">
                      <h4 className="text-blue-400 font-semibold mb-2 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Free Play Modus:
                      </h4>
                      <p className="text-blue-300 text-sm">
                        Der HB9 kann auf "Free Play" eingestellt werden, 
                        so dass kein Münzeinwurf nötig ist.
                      </p>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        Wichtiger Hinweis:
                      </h4>
                      <p className="text-red-300 text-sm">
                        Die LEO Funktion steht bei den Geräten nicht zur Verfügung 
                        und kann auch nicht nachgerüstet werden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
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
              INTERESSE AM HB9?
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Obwohl der HB9 nicht mehr verfügbar ist, beraten wir Sie gerne zu alternativen Modellen 
              oder helfen bei der Suche nach gebrauchten HB9 Geräten.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleBeratungAnfordern}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl text-xl transform hover:scale-[1.02]"
              >
                Beratung anfordern
              </Button>
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
                Made in Germany
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Einzigartige LED-Features
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-purple-400" />
                Persönliche Beratung
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductHB9;
