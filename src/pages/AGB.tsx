
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const AGB = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.loewen.de/fileadmin/_processed_/5/0/csm_1_gruppe-header_loewen_01665782ea.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/60"></div>
        
        <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
          <div className="text-left">
            <div className="mb-8 animate-fade-in">
              <h1 className="font-bold leading-none font-parisine-narrow" style={{ fontSize: '70px' }}>
                AGB
              </h1>
            </div>
            <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
              Allgemeine Geschäftsbedingungen der LÖWEN Entertainment
            </p>
          </div>
        </div>
      </section>

      {/* Banner */}
      <ContactBanner />

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-8 text-[#002454]">Allgemeine Geschäftsbedingungen</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#002454]">Geltungsbereich</h3>
                <p className="mb-2 text-[#002454]"><strong>LÖWEN ENTERTAINMENT GmbH</strong></p>
                <p className="mb-2 text-[#002454]">Saarlandstraße 240</p>
                <p className="mb-2 text-[#002454]">55411 Bingen</p>
                <p className="mb-2 text-[#002454]"><strong>Telefon:</strong> +49 6721 4070</p>
                <p className="mb-2 text-[#002454]"><strong>E-Mail:</strong> info@loewen.de</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 1 Geltungsbereich</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Rechtsgeschäfte 
                  zwischen der LÖWEN ENTERTAINMENT GmbH (nachfolgend "LÖWEN") und ihren Kunden, soweit nicht 
                  ausdrücklich etwas anderes vereinbart wird.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden 
                  werden nur dann und insoweit Vertragsbestandteil, als LÖWEN ihrer Geltung ausdrücklich 
                  zugestimmt hat.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 2 Vertragsschluss</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) Alle Angebote von LÖWEN sind freibleibend und unverbindlich, soweit sie nicht ausdrücklich 
                  als verbindlich bezeichnet oder mit einer bestimmten Annahmefrist versehen sind.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Der Vertrag kommt durch Auftragsbestätigung oder durch Auslieferung der Ware zustande.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (3) Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 3 Preise und Zahlungsbedingungen</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer in ihrer jeweils 
                  gültigen Höhe.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Die Zahlung erfolgt ohne Abzug innerhalb von 30 Tagen nach Rechnungsdatum, soweit nicht 
                  anders vereinbart.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (3) Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem 
                  Basiszinssatz berechnet.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 4 Lieferung und Leistung</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) Liefertermine oder -fristen sind nur dann verbindlich, wenn sie von LÖWEN ausdrücklich 
                  als verbindlich bestätigt werden.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Die Lieferung erfolgt ab Werk, soweit nichts anderes vereinbart ist.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (3) LÖWEN ist zu Teillieferungen berechtigt, soweit diese dem Kunden zumutbar sind.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 5 Gewährleistung</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) LÖWEN leistet Gewähr für Material- und Fabrikationsfehler nach den gesetzlichen Bestimmungen.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Die Gewährleistungsfrist beträgt 24 Monate ab Lieferung.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (3) Bei berechtigten Gewährleistungsansprüchen kann LÖWEN nach eigener Wahl nachbessern oder 
                  Ersatz liefern.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 6 Haftung</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) LÖWEN haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Schäden aus der 
                  Verletzung des Lebens, des Körpers oder der Gesundheit.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist die Haftung auf 
                  den typischen, vorhersehbaren Schaden begrenzt.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (3) Im Übrigen ist die Haftung ausgeschlossen.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">§ 7 Schlussbestimmungen</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (1) Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (2) Gerichtsstand ist Mainz, soweit der Kunde Vollkaufmann ist.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt die Wirksamkeit der 
                  übrigen Bestimmungen unberührt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AGB;
