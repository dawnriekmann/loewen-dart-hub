import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, Truck, Shield, Award, Users, Zap, Target } from "lucide-react";

const ProductHB8 = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      {/* Hero Section - Dark Theme */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
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
                  Profi-Gerät
                </Badge>
                <Badge className="bg-slate-700 hover:bg-slate-600 text-slate-200 border-slate-600">
                  <Star className="w-4 h-4 mr-2 fill-blue-400 text-blue-400" />
                  Marktführer
                </Badge>
              </div>
              
              <h1 className="font-bold text-white mb-4 font-parisine-narrow leading-tight" style={{ fontSize: '58px' }}>
                LÖWEN DARTAUTOMAT
              </h1>
              <h2 className="font-bold text-blue-400 mb-6 font-parisine-narrow" style={{ fontSize: '42px' }}>
                HB8 PROFESSIONAL
              </h2>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-slate-300">
                  <span className="text-sm">Baujahr:</span>
                  <span className="ml-2 font-semibold text-blue-400">2021</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-slate-600" />
                <div className="text-slate-300">
                  <span className="text-sm">Status:</span>
                  <span className="ml-2 font-semibold text-green-400">Lagerware verfügbar</span>
                </div>
              </div>
              
              {/* Enhanced Price Box */}
              <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="flex items-baseline gap-4 mb-4">
                  <div className="text-5xl font-bold text-white">2.000€</div>
                  <div className="text-slate-400 text-lg line-through">2.500€</div>
                  <Badge className="bg-red-600 text-white">-20%</Badge>
                </div>
                <div className="text-slate-300 text-lg mb-2">inkl. 19% MwSt.</div>
                <div className="text-slate-300 text-lg mb-6">Versandkosten: 49,95€</div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 bg-green-900/30 text-green-400 px-3 py-2 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4" />
                    Nur 3 Stück verfügbar
                  </div>
                  <div className="flex items-center gap-2 bg-blue-900/30 text-blue-400 px-3 py-2 rounded-full text-sm">
                    <Truck className="w-4 h-4" />
                    Kostenlose Spedition
                  </div>
                </div>
                
                <div className="space-y-3 text-sm text-slate-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    24 Monate Garantie
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    Kostenlose Einrichtung vor Ort
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-400" />
                    Sofort einsatzbereit
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl flex-1 transform hover:scale-[1.02]">
                  Jetzt kaufen
                </Button>
                <Button variant="ghost" className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-6 py-3 text-lg rounded-md transition-all duration-300 transform hover:scale-[1.02]">
                  Mehr Info
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-3xl blur-2xl transform scale-110"></div>
                
                <div className="relative bg-slate-800/30 backdrop-blur-sm rounded-3xl p-8 border border-slate-700 shadow-2xl">
                  <div className="aspect-[3/4] flex flex-col">
                    <div className="flex-1 flex items-center justify-center mb-6">
                      <img 
                        src="https://www.loewen.de/fileadmin/_processed_/3/b/csm_DART_HB8_Tunier_Retusche_593a52b77d.png"
                        alt="Löwen Dartautomat HB8"
                        className="max-h-full max-w-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    
                    <div className="text-center space-y-4">
                      <h3 className="text-2xl font-bold text-white">LÖWEN DARTAUTOMAT HB8</h3>
                      <p className="text-slate-300 text-base leading-relaxed">
                        Der LÖWEN Turnier Dart HB8 ist die neueste Evolution des legendären Dart 96, 
                        der seit 1996 als Marktführer in Deutschland gilt. Ein hochwertiges 
                        Profi-Gerät mit über 10.000 verkauften Geräten im ersten Jahr.
                      </p>
                      
                      <div className="flex items-center justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 text-sm text-blue-400">
                          <Target className="w-4 h-4" />
                          <span>Piezo-Sensoren</span>
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
              WARUM DER HB8?
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto">
              Der HB8 vereint jahrzehntelange Erfahrung mit modernster Technologie für das ultimative Dart-Erlebnis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-white">Präzise Sensorik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Piezo-Sensoren für 100% akkurate Trefferkennung</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-white">Deutsche Qualität</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">CE & GS geprüft, hergestellt in Deutschland</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <CardTitle className="text-white">Multiplayer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Bis zu 8 Spieler gleichzeitig, Teams möglich</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <CardTitle className="text-white">Marktführer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 text-center">Über 10.000 verkaufte Geräte seit 1996</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-20 bg-slate-800">
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
                    Über den HB8
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    Der LÖWEN Turnier Dart HB8 ist die neueste Evolution des legendären Dart 96, 
                    der seit 1996 als Marktführer in Deutschland gilt. Mit über 10.000 verkauften 
                    Geräten im ersten Jahr hat sich dieser Dartautomat als der absolute Klassiker etabliert.
                  </p>
                  <p className="leading-relaxed">
                    Diese Lagerware aus 2021 bietet Ihnen die Möglichkeit, ein hochwertiges 
                    Profi-Gerät zu einem außergewöhnlichen Preis zu erwerben. Jedes Gerät wurde 
                    vor der Lagerung vollständig getestet und versiegelt.
                  </p>
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-4 mt-6">
                    <h4 className="text-blue-400 font-semibold mb-2">Besonderheit dieser Charge:</h4>
                    <p className="text-sm text-slate-300">
                      Originalverpackte Geräte aus der letzten Produktionsserie 2021. 
                      Limitierte Verfügbarkeit mit Sammlerwert.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-2xl flex items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                    Lieferung & Service
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-300">
                      <Truck className="w-5 h-5 text-blue-400" />
                      <span>Professionelle Speditionslieferung deutschlandweit</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Shield className="w-5 h-5 text-green-400" />
                      <span>24 Monate Herstellergarantie</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Users className="w-5 h-5 text-purple-400" />
                      <span>Kostenlose Einrichtung und Einweisung vor Ort</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Zap className="w-5 h-5 text-yellow-400" />
                      <span>Sofort einsatzbereit nach Aufstellung</span>
                    </div>
                  </div>
                  
                  <Separator className="bg-slate-700" />
                  
                  <div className="bg-slate-800/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-3">Lieferumfang komplett:</h4>
                    <ul className="space-y-2 text-sm text-slate-300">
                      <li>• 1x HB8 Dartautomat (komplett montiert)</li>
                      <li>• 1x Profi-Dartset (12 Pfeile)</li>
                      <li>• 1x Abwurflinie (offizielle Turniermaße)</li>
                      <li>• Komplettes Befestigungsmaterial</li>
                      <li>• Deutsches Benutzerhandbuch (120 Seiten)</li>
                      <li>• Garantieschein und Konformitätserklärung</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section - Enhanced */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              SPIELMODI & VARIANTEN
            </h2>
            <p className="text-slate-400 text-xl max-w-4xl mx-auto">
              Mit 10 verschiedenen Spielmodi und über 30 Variationen bietet der HB8 
              unendlichen Spielspaß für Anfänger bis Profis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  Standard Spiele
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-slate-300 font-semibold mb-3">Klassische Modi:</div>
                  <ul className="text-slate-400 space-y-2">
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> 301 (Einsteiger)</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> 501 (Standard)</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> 701 (Profi)</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Rapid Fire</li>
                    <li className="flex items-center"><span className="text-blue-400 mr-2">•</span> Split Score</li>
                  </ul>
                  <div className="bg-blue-900/20 border border-blue-700/50 rounded p-3 mt-4">
                    <p className="text-xs text-blue-300">Perfekt für Turniere und Wettkämpfe</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  Profi Optionen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-slate-300 font-semibold mb-3">Erweiterte Modi:</div>
                  <ul className="text-slate-400 space-y-2">
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Double In/Out</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Masters Out</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Team Modi (2er/4er)</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Handicap System</li>
                    <li className="flex items-center"><span className="text-green-400 mr-2">•</span> Time Out Handicap</li>
                  </ul>
                  <div className="bg-green-900/20 border border-green-700/50 rounded p-3 mt-4">
                    <p className="text-xs text-green-300">Für anspruchsvolle Spieler</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 hover:scale-105 group">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  Cricket Varianten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-slate-300 font-semibold mb-3">11 Cricket Modi:</div>
                  <ul className="text-slate-400 space-y-2">
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Standard Cricket</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Cut Throat</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Masters Cricket</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> You Pick It</li>
                    <li className="flex items-center"><span className="text-purple-400 mr-2">•</span> Chance It</li>
                  </ul>
                  <div className="bg-purple-900/20 border border-purple-700/50 rounded p-3 mt-4">
                    <p className="text-xs text-purple-300">Strategische Spielvarianten</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Enhanced */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-white mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              TECHNISCHE SPEZIFIKATIONEN
            </h2>
            <p className="text-slate-400 text-xl max-w-4xl mx-auto">
              Präzise Engineered für professionelle Ansprüche und jahrelange Zuverlässigkeit
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Shield className="w-6 h-6 text-green-400 mr-3" />
                    Sicherheit & Zertifizierung
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-green-400 text-sm font-semibold">CE-Kennzeichnung</div>
                        <div className="text-slate-400 text-xs">EU-Konformität</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-green-400 text-sm font-semibold">GS-Siegel</div>
                        <div className="text-slate-400 text-xs">Geprüfte Sicherheit</div>
                      </div>
                    </div>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Matrix fest an Gehäuserückwand montiert</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Abklappbare Dartsscheibe für Service</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Piezo-Sensoren für präzise Erkennung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Infrarot-Spielererkennung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-400 mr-2" /> Made in Germany Qualität</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Zap className="w-6 h-6 text-blue-400 mr-3" />
                    Erweiterte Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-blue-400 text-sm font-semibold mb-1">Dataprint-Schnittstelle</div>
                        <div className="text-slate-400 text-xs">Für externe Anzeigetafeln und Statistiken</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3">
                        <div className="text-blue-400 text-sm font-semibold mb-1">Programmierbare Einstellungen</div>
                        <div className="text-slate-400 text-xs">Gerätenummer, Rundenlimits, Bullseye-Wertung</div>
                      </div>
                    </div>
                    <ul className="text-slate-300 space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> Einstellbare Spielabschaltung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> "Free Play" Modus verfügbar</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> Automatische Spielstandspeicherung</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-blue-400 mr-2" /> Mehrsprachige Menüführung</li>
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
                    Abmessungen & Installation
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
                      <p className="text-xs text-slate-400 mt-3 bg-yellow-900/20 border border-yellow-700/50 rounded p-2">
                        <strong>Wichtig:</strong> Zum Aufklappen wird zusätzlicher Platz nach oben benötigt!
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
                    
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                      <h4 className="font-semibold text-white mb-3">Gewicht & Material:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="text-lg font-bold text-slate-300">~85kg</div>
                          <div className="text-xs text-slate-400">Gesamtgewicht</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-slate-300">Stahl/Holz</div>
                          <div className="text-xs text-slate-400">Materialien</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-500">
                <CardHeader>
                  <CardTitle className="text-white flex items-center text-xl">
                    <Award className="w-6 h-6 text-yellow-400 mr-3" />
                    Kompletter Lieferumfang
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Target className="w-5 h-5 text-yellow-400" />
                          <span className="text-white font-semibold">HB8 Hauptgerät</span>
                        </div>
                        <p className="text-slate-400 text-sm">Komplett montiert und getestet</p>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="flex items-center gap-3 mb-2">
                          <Zap className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-semibold">Profi Dart-Set</span>
                        </div>
                        <p className="text-slate-400 text-sm">12 hochwertige Turnier-Darts</p>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-white font-semibold">Zubehör komplett</span>
                        </div>
                        <ul className="text-slate-400 text-sm space-y-1">
                          <li>• Offizielle Turnier-Abwurflinie</li>
                          <li>• Befestigungsmaterial (Wandmontage)</li>
                          <li>• Deutsches Handbuch (120 Seiten)</li>
                          <li>• Garantieschein & Zertifikate</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-4">
                      <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Wichtiger Hinweis:
                      </h4>
                      <p className="text-red-300 text-sm">
                        Die LEO-Funktion (Löwen Entertainment Online) ist bei diesen Geräten nicht verfügbar 
                        und kann auch nicht nachgerüstet werden. Alle anderen Funktionen sind vollumfänglich verfügbar.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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
              SICHERN SIE SICH JETZT IHREN HB8
            </h2>
            <p className="text-slate-300 mb-10 text-lg leading-relaxed">
              Nur noch wenige Exemplare dieser exklusiven Lagerware aus 2021 verfügbar. 
              Mit 24 Monaten Garantie, kostenloser Speditionslieferung und professioneller Einrichtung vor Ort.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-5 font-semibold rounded-md shadow-lg transition-all duration-300 hover:shadow-xl text-xl transform hover:scale-[1.02]">
                Jetzt bestellen
              </Button>
              <Button variant="ghost" className="border border-transparent text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white px-8 py-5 text-lg rounded-md transition-all duration-300 transform hover:scale-[1.02]">
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
                <Users className="w-4 h-4 text-purple-400" />
                Profi-Setup inklusive
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductHB8;
