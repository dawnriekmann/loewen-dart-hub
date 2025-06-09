
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const Datenschutz = () => {
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
                DATENSCHUTZ
              </h1>
            </div>
            <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
              Informationen zum Schutz Ihrer persönlichen Daten
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
                DATENSCHUTZ
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
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Datenschutzerklärung</h3>
              <p className="mb-4">Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Verantwortlicher</h3>
              <p className="mb-4">Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="bg-white p-4 rounded border-l-4 border-[#002454]">
                <p className="font-semibold">LÖWEN ENTERTAINMENT GmbH</p>
                <p>Saarlandstraße 240<br />55411 Bingen</p>
                <p>Telefon: +49 6721 4070</p>
                <p>E-Mail: info@loewen.de</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Erhebung und Speicherung personenbezogener Daten</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Beim Besuch der Website:</h4>
                  <p>Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in einem sog. Logfile gespeichert.</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>IP-Adresse des anfragenden Rechners</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                    <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Kontaktformular</h3>
              <p>Bei der Nutzung des Kontaktformulars erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verfügung gestellten Umfang. Die Datenverarbeitung dient dem Zweck der Kontaktaufnahme.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Ihre Rechte</h3>
              <p className="mb-4">Sie haben folgende Rechte:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Recht auf Auskunft über Ihre gespeicherten Daten</li>
                <li>Recht auf Berichtigung unrichtiger Daten</li>
                <li>Recht auf Löschung Ihrer Daten</li>
                <li>Recht auf Einschränkung der Datenverarbeitung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Widerspruchsrecht gegen die Verarbeitung</li>
                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">SSL-Verschlüsselung</h3>
              <p>Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Datenschutz;
