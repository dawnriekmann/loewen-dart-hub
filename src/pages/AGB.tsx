
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const AGB = () => {
  const { textRef, gradientHeight } = useDynamicGradientHeight();

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
              Allgemeine Geschäftsbedingungen der LÖWEN ENTERTAINMENT GmbH
            </p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="relative">
              <div 
                className="products-title-gradient-container w-full"
                style={{ height: gradientHeight }}
              ></div>
              <h2 
                ref={textRef}
                className="font-bold font-parisine-narrow uppercase text-white relative z-10" 
                style={{ fontSize: '58.5px' }}
              >
                AGB
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8 text-slate-700">
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 1 Geltungsbereich</h3>
              <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die Lieferung von E-Dart Automaten und Zubehör sowie für alle sonstigen Leistungen der LÖWEN ENTERTAINMENT GmbH. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, wir haben ihrer Geltung ausdrücklich zugestimmt.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 2 Vertragsschluss</h3>
              <div className="space-y-4">
                <p>Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Lieferung der Ware zustande.</p>
                <p>Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 3 Preise und Zahlungsbedingungen</h3>
              <div className="space-y-4">
                <p>Alle Preise verstehen sich netto zuzüglich der gesetzlichen Mehrwertsteuer in der jeweils gültigen Höhe.</p>
                <p>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu zahlen.</p>
                <p>Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9% über dem Basiszinssatz berechnet.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 4 Lieferung und Lieferzeit</h3>
              <div className="space-y-4">
                <p>Liefertermine sind nur dann verbindlich, wenn sie von uns schriftlich bestätigt wurden.</p>
                <p>Die Lieferfrist beginnt mit dem Datum unserer Auftragsbestätigung.</p>
                <p>Teillieferungen sind zulässig, soweit sie für den Kunden zumutbar sind.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 5 Gewährleistung</h3>
              <div className="space-y-4">
                <p>Wir gewähren auf unsere E-Dart Automaten eine Gewährleistung von 24 Monaten ab Lieferdatum.</p>
                <p>Mängel sind unverzüglich schriftlich anzuzeigen. Bei berechtigten Mängelrügen leisten wir nach unserer Wahl Nachbesserung oder Ersatzlieferung.</p>
                <p>Schlägt die Nacherfüllung fehl, kann der Kunde nach seiner Wahl Minderung oder Rücktritt vom Vertrag verlangen.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 6 Haftung</h3>
              <div className="space-y-4">
                <p>Unsere Haftung ist auf Vorsatz und grobe Fahrlässigkeit beschränkt.</p>
                <p>Diese Haftungsbeschränkung gilt nicht für die Verletzung von Leben, Körper und Gesundheit sowie für die Verletzung wesentlicher Vertragspflichten.</p>
                <p>Die Haftung für mittelbare und unvorhersehbare Schäden ist ausgeschlossen.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 7 Eigentumsvorbehalt</h3>
              <p>Die gelieferte Ware bleibt bis zur vollständigen Zahlung aller Forderungen aus der Geschäftsverbindung unser Eigentum. Der Kunde ist berechtigt, die Vorbehaltsware im ordnungsgemäßen Geschäftsverkehr zu veräußern.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">§ 8 Schlussbestimmungen</h3>
              <div className="space-y-4">
                <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
                <p>Gerichtsstand ist Mainz, soweit der Kunde Vollkaufmann ist.</p>
                <p>Sollten einzelne Bestimmungen unwirksam sein, wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.</p>
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
