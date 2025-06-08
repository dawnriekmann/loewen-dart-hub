
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductHB8 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-[#002454] to-[#050c21]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-parisine-narrow">
                LÖWEN DARTAUTOMAT HB8
              </h1>
              <p className="text-xl text-blue-200 mb-4">Von 2021</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <div className="text-3xl font-bold text-white mb-2">2.000€</div>
                <div className="text-blue-200 text-sm mb-4">inkl. 19% MwSt.</div>
                <div className="text-blue-200 text-sm mb-4">Versandkosten: 49,95€</div>
                <div className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Wenige Verfügbar
                </div>
              </div>
              <Button className="bg-[#73afff] hover:bg-[#5a9eff] text-white px-8 py-3 text-lg">
                Jetzt kaufen
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://www.loewen.de/fileadmin/_processed_/3/b/csm_DART_HB8_Tunier_Retusche_593a52b77d.png"
                alt="Löwen Dartautomat HB8"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#002454] mb-8 text-center font-parisine-narrow">
              PRODUKTBESCHREIBUNG
            </h2>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#002454] mb-4">Lagerware aus 2021</h3>
              <p className="text-gray-700 mb-6">
                LÖWEN Turnier Dart HB8 (neuste Version) - Lieferung erfolgt per Spedition
              </p>
              <p className="text-gray-700 mb-6">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002454] mb-12 text-center font-parisine-narrow">
            SPIELVARIANTEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#002454]">10 Spielvarianten</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1">
                  <li>• 301, 501, 701</li>
                  <li>• Rapid Fire</li>
                  <li>• Split Score</li>
                  <li>• Time Out Handicap</li>
                  <li>• Cricket</li>
                  <li>• High Score</li>
                  <li>• Shangai</li>
                  <li>• 301 Elimination</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#002454]">8 Optionen für 301/501/701</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1">
                  <li>• Double in</li>
                  <li>• Double out</li>
                  <li>• Masters out</li>
                  <li>• Double in/out</li>
                  <li>• Double in/Masters out</li>
                  <li>• 2er Team</li>
                  <li>• 4er Teams</li>
                  <li>• Handicap</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-[#002454]">11 Cricket Optionen</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 space-y-1">
                  <li>• Cut Throat</li>
                  <li>• Chance it</li>
                  <li>• You pick it</li>
                  <li>• Masters Cricket</li>
                  <li>• Cut Throat/Chance it</li>
                  <li>• Master Cricket/Chance it</li>
                  <li>• Cut Throat/You pick it</li>
                  <li>• Masters/You pick it</li>
                  <li>• 2er Team</li>
                  <li>• 4er Team</li>
                  <li>• Handicap</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Data Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#002454] mb-12 text-center font-parisine-narrow">
            TECHNISCHE DATEN
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#002454]">Sicherheit & Qualität</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• CE- und GS-Siegel für geprüfte Sicherheit</li>
                    <li>• Matrix stationär an der Gehäuserückwand</li>
                    <li>• Abklappbare Dartsscheibe</li>
                    <li>• Piezo-Sensor für sichere Trefferkennung</li>
                    <li>• Infrarot-Sensor für Spielererkennung</li>
                    <li>• Hergestellt in Deutschland</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#002454]">Features & Funktionen</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Dataprint-Schnittstelle</li>
                    <li>• Programmierbare Gerätenummer</li>
                    <li>• Einstellbare Spielabschaltung</li>
                    <li>• Frei programmierbare Bullseye-Wertung</li>
                    <li>• Programmierbare Rundenlimits</li>
                    <li>• "Free Play" Modus möglich</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#002454]">Abmessungen</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#002454] mb-2">Aufgeklappt:</h4>
                      <p className="text-gray-700">H 219cm x B 63cm x T 60cm</p>
                      <p className="text-sm text-gray-600 mt-1">
                        (Achtung: zum Aufklappen benötigt man Platz nach oben!)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#002454] mb-2">Zusammengeklappt:</h4>
                      <p className="text-gray-700">H 115cm x B 63cm x T 83cm</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#002454]">Lieferumfang</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 1 Dartset</li>
                    <li>• 1 Abwurflinie</li>
                    <li>• Befestigungsmaterial</li>
                    <li>• Ausführliches Benutzerhandbuch in Deutsch</li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
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
      <section className="py-16 bg-[#002454]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-parisine-narrow">
            BEREIT FÜR IHREN LÖWEN HB8?
          </h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Sichern Sie sich jetzt den beliebten Dartautomaten HB8 aus unserer Lagerware von 2021. 
            Professionelle Speditionslieferung inklusive.
          </p>
          <Button className="bg-[#73afff] hover:bg-[#5a9eff] text-white px-8 py-4 text-lg">
            Jetzt bestellen - 2.000€
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductHB8;
