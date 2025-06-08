
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductHB8 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#002454] via-[#050c21] to-[#001a3d] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 animate-fade-in">
              <h1 className="font-bold text-white mb-6 font-parisine-narrow leading-tight" style={{ fontSize: '58px' }}>
                LÖWEN DARTAUTOMAT
              </h1>
              <h2 className="font-bold text-white mb-8 font-parisine-narrow" style={{ fontSize: '42px' }}>
                HB8
              </h2>
              <p className="text-xl text-blue-200 mb-8 font-light">Von 2021 - Lagerware</p>
              
              {/* Modern glass morphism price box */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 mb-8 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="text-4xl font-bold text-white mb-3" style={{ fontSize: '48px' }}>2.000€</div>
                <div className="text-blue-200 text-lg mb-4">inkl. 19% MwSt.</div>
                <div className="text-blue-200 text-lg mb-6">Versandkosten: 49,95€</div>
                <div className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  ✨ Wenige Verfügbar
                </div>
              </div>
              
              <Button className="bg-gradient-to-r from-[#73afff] to-[#5a9eff] hover:from-[#5a9eff] hover:to-[#4187ff] text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300" style={{ fontSize: '20px' }}>
                Jetzt kaufen
              </Button>
            </div>
            
            <div className="order-1 lg:order-2 animate-scale-in">
              <div className="relative">
                {/* Floating background circle */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-2xl transform scale-150 animate-float"></div>
                
                {/* Image container with proper aspect ratio */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <div className="aspect-[3/4] flex items-center justify-center">
                    <img 
                      src="https://www.loewen.de/fileadmin/_processed_/3/b/csm_DART_HB8_Tunier_Retusche_593a52b77d.png"
                      alt="Löwen Dartautomat HB8"
                      className="max-h-full max-w-full object-contain animate-float"
                      style={{ animationDelay: '1s' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-bold text-[#002454] mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
                PRODUKTBESCHREIBUNG
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-white/50 transform hover:scale-105 transition-all duration-500">
              <h3 className="text-2xl font-bold text-[#002454] mb-6 flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                Lagerware aus 2021
              </h3>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                LÖWEN Turnier Dart HB8 (neuste Version) - Lieferung erfolgt per Spedition
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Seit seiner Markteinführung im Jahre 1996 ist das Löwen Turnier Dart 96 Marktführer in Deutschland. 
                Klares, bedienerfreundliches Design in Verbindung mit erstklassiger Qualität und jeder Menge technischer 
                Highlights: Die Rekordverkaufszahl von über 10.000 Geräten im Jahr der Markteinführung spricht für sich! 
                Nach wie vor ist das Löwen Turnier Dart 96 das beliebteste Dartgerät in der Spielerszene und damit ein 
                lebendiger Klassiker.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-[#002454] mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              SPIELVARIANTEN
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#002454] flex items-center text-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  10 Spielvarianten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2 text-base">
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> 301, 501, 701</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Rapid Fire</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Split Score</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Time Out Handicap</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Cricket</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> High Score</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Shangai</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> 301 Elimination</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#002454] flex items-center text-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  8 Optionen für 301/501/701
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2 text-base">
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Double in</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Double out</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Masters out</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Double in/out</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Double in/Masters out</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> 2er Team</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> 4er Teams</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Handicap</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-[#002454] flex items-center text-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                  11 Cricket Optionen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-2 text-base">
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Cut Throat</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Chance it</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> You pick it</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Masters Cricket</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Cut Throat/Chance it</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Master Cricket/Chance it</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Cut Throat/You pick it</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Masters/You pick it</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> 2er Team</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> 4er Team</li>
                  <li className="flex items-center"><span className="text-blue-500 mr-2">•</span> Handicap</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Data Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bold text-[#002454] mb-6 font-parisine-narrow" style={{ fontSize: '48px' }}>
              TECHNISCHE DATEN
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#002454] flex items-center text-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                    Sicherheit & Qualität
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-3 text-base">
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> CE- und GS-Siegel für geprüfte Sicherheit</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Matrix stationär an der Gehäuserückwand</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Abklappbare Dartsscheibe</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Piezo-Sensor für sichere Trefferkennung</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Infrarot-Sensor für Spielererkennung</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Hergestellt in Deutschland</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#002454] flex items-center text-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                    Features & Funktionen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-3 text-base">
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Dataprint-Schnittstelle</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Programmierbare Gerätenummer</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Einstellbare Spielabschaltung</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Frei programmierbare Bullseye-Wertung</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> Programmierbare Rundenlimits</li>
                    <li className="flex items-start"><span className="text-blue-500 mr-2 mt-1">•</span> "Free Play" Modus möglich</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#002454] flex items-center text-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                    Abmessungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-blue-50/50 rounded-xl p-4">
                      <h4 className="font-semibold text-[#002454] mb-3 flex items-center">
                        <span className="text-blue-500 mr-2">📏</span> Aufgeklappt:
                      </h4>
                      <p className="text-gray-700 font-medium text-lg">H 219cm x B 63cm x T 60cm</p>
                      <p className="text-sm text-gray-600 mt-2 italic">
                        (Achtung: zum Aufklappen benötigt man Platz nach oben!)
                      </p>
                    </div>
                    <div className="bg-blue-50/50 rounded-xl p-4">
                      <h4 className="font-semibold text-[#002454] mb-3 flex items-center">
                        <span className="text-blue-500 mr-2">📦</span> Zusammengeklappt:
                      </h4>
                      <p className="text-gray-700 font-medium text-lg">H 115cm x B 63cm x T 83cm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50/30 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-[#002454] flex items-center text-xl">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 group-hover:animate-pulse"></div>
                    Lieferumfang
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-3 text-base mb-6">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">🎯</span> 1 Dartset</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">📏</span> 1 Abwurflinie</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">🔧</span> Befestigungsmaterial</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">📖</span> Ausführliches Benutzerhandbuch in Deutsch</li>
                  </ul>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500 rounded-lg p-4">
                    <p className="text-sm text-blue-800">
                      <strong>Hinweis:</strong> Die LEO Funktion steht bei diesen Geräten nicht zur Verfügung 
                      und kann auch nicht nachgerüstet werden.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#002454] via-[#050c21] to-[#001a3d] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-bold text-white mb-8 font-parisine-narrow" style={{ fontSize: '48px' }}>
            BEREIT FÜR IHREN LÖWEN HB8?
          </h2>
          <p className="text-blue-200 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            Sichern Sie sich jetzt den beliebten Dartautomaten HB8 aus unserer Lagerware von 2021. 
            Professionelle Speditionslieferung inklusive.
          </p>
          <Button className="bg-gradient-to-r from-[#73afff] to-[#5a9eff] hover:from-[#5a9eff] hover:to-[#4187ff] text-white px-12 py-5 font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300" style={{ fontSize: '22px' }}>
            Jetzt bestellen - 2.000€
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductHB8;
