
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const CookieEinstellungen = () => {
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
                COOKIE-EINSTELLUNGEN
              </h1>
            </div>
            <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
              Verwalten Sie Ihre Cookie-Präferenzen
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
            <h2 className="text-3xl font-bold mb-8 text-[#002454]">Cookie-Richtlinie</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-[#002454]">Was sind Cookies?</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. 
                  Sie ermöglichen es der Website, sich an Ihre Aktionen und Präferenzen zu erinnern, damit Sie diese nicht 
                  bei jedem Besuch oder beim Navigieren zwischen Seiten erneut eingeben müssen.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#002454]">Notwendige Cookies</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unbedingt erforderlich und können 
                  nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf von Ihnen durchgeführte 
                  Aktionen gesetzt, wie z.B. das Festlegen Ihrer Datenschutzeinstellungen oder das Ausfüllen von Formularen.
                </p>
                <div className="flex items-center justify-between p-4 bg-white rounded border border-[#002454]">
                  <span className="font-medium text-[#002454]">Erforderliche Cookies</span>
                  <span className="text-sm text-[#002454]">Immer aktiv</span>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#002454]">Funktionale Cookies</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Diese Cookies ermöglichen es der Website, verbesserte Funktionalität und Personalisierung bereitzustellen. 
                  Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.
                </p>
                <div className="flex items-center justify-between p-4 bg-white rounded border border-[#002454]">
                  <div>
                    <span className="font-medium block text-[#002454]">Funktionale Cookies</span>
                    <span className="text-sm text-[#002454]">Verbesserte Website-Funktionen</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#002454] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002454]"></div>
                  </label>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#002454]">Analyse-Cookies</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie anonyme 
                  Informationen sammeln und melden. Diese Informationen helfen uns, die Website zu verbessern.
                </p>
                <div className="flex items-center justify-between p-4 bg-white rounded border border-[#002454]">
                  <div>
                    <span className="font-medium block text-[#002454]">Analyse-Cookies</span>
                    <span className="text-sm text-[#002454]">Website-Verbesserungen durch Nutzungsanalyse</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#002454] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002454]"></div>
                  </label>
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-[#002454]">Marketing-Cookies</h3>
                <p className="text-[#002454] leading-relaxed mb-4">
                  Diese Cookies können über unsere Website von unseren Werbepartnern gesetzt werden. Sie können von 
                  diesen Unternehmen verwendet werden, um ein Profil Ihrer Interessen zu erstellen und Ihnen relevante 
                  Anzeigen auf anderen Websites zu zeigen.
                </p>
                <div className="flex items-center justify-between p-4 bg-white rounded border border-[#002454]">
                  <div>
                    <span className="font-medium block text-[#002454]">Marketing-Cookies</span>
                    <span className="text-sm text-[#002454]">Personalisierte Werbung</span>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#002454] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#002454]"></div>
                  </label>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <button className="bg-[#002454] text-white px-6 py-3 rounded-lg hover:bg-[#002454]/90 transition-colors">
                  Einstellungen speichern
                </button>
                <button className="border border-[#002454] text-[#002454] px-6 py-3 rounded-lg hover:bg-[#002454]/10 transition-colors">
                  Alle akzeptieren
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CookieEinstellungen;
