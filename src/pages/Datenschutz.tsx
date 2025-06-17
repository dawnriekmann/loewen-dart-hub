
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://www.loewen-vertrieb.de/fileadmin/_processed_/5/0/csm_1_gruppe-header_loewen_01665782ea.jpg)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/60"></div>
        
        <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
          <div className="text-left">
            <div className="mb-8 animate-fade-in">
              <h1 className="font-bold leading-none font-parisine-narrow" style={{ fontSize: '70px' }}>
                DATENSCHUTZ
              </h1>
            </div>
            <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
              Informationen zum Schutz Ihrer personenbezogenen Daten
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
            <h2 className="text-3xl font-bold mb-8 text-[#002454]">Datenschutzerklärung</h2>
            
            <div className="space-y-8">
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#002454]">Verantwortlicher</h3>
                <p className="mb-2 text-[#002454]"><strong>LÖWEN ENTERTAINMENT GmbH</strong></p>
                <p className="mb-2 text-[#002454]">Saarlandstraße 240</p>
                <p className="mb-2 text-[#002454]">55411 Bingen</p>
                <p className="mb-2 text-[#002454]"><strong>Telefon:</strong> +49 6721 7974020</p>
                <p className="mb-2 text-[#002454]"><strong>E-Mail:</strong> info@loewen-vertrieb.de</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">1. Allgemeine Hinweise</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">2. Datenerfassung auf dieser Website</h3>
                <h4 className="text-lg font-semibold mb-3 text-[#002454]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Impressum dieser Website entnehmen.
                </p>

                <h4 className="text-lg font-semibold mb-3 text-[#002454]">Wie erfassen wir Ihre Daten?</h4>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um 
                  Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer 
                  Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">3. Kontaktformular</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                  inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                  von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage 
                  mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen 
                  erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                  an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">4. Ihre Rechte</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Sie haben jederzeit das Recht:
                </p>
                <ul className="list-disc pl-6 mb-4 text-[#002454]">
                  <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>die Berichtigung oder Löschung dieser Daten zu verlangen</li>
                  <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>der Datenverarbeitung zu widersprechen</li>
                  <li>die Datenübertragbarkeit zu verlangen</li>
                </ul>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
                  personenbezogenen Daten durch uns zu beschweren.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">5. Speicherdauer</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben 
                  Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein 
                  berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, 
                  werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung 
                  Ihrer personenbezogenen Daten haben.
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

export default Datenschutz;
