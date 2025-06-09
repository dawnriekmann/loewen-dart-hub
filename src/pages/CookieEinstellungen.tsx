
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const CookieEinstellungen = () => {
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
                COOKIE-EINSTELLUNGEN
              </h1>
            </div>
            <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
              Informationen über Cookies und Ihre Einstellungsmöglichkeiten
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
                COOKIES
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
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Was sind Cookies?</h3>
              <p>Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert werden. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen über einen bestimmten Zeitraum zu speichern, so dass Sie diese nicht bei jedem Besuch der Website oder beim Navigieren von einer Seite zur anderen erneut eingeben müssen.</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Wie wir Cookies verwenden</h3>
              <p className="mb-4">Wir verwenden Cookies, um:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Die ordnungsgemäße Funktion der Website sicherzustellen</li>
                <li>Ihre Präferenzen zu speichern</li>
                <li>Die Leistung unserer Website zu analysieren</li>
                <li>Ihnen relevante Inhalte und Werbung anzuzeigen</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Arten von Cookies</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded">
                  <h4 className="font-semibold text-[#002454] mb-2">Technisch notwendige Cookies</h4>
                  <p className="mb-2">Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.</p>
                  <p className="text-sm text-slate-600">Rechtliche Grundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded">
                  <h4 className="font-semibold text-[#002454] mb-2">Leistungs-Cookies</h4>
                  <p className="mb-2">Diese Cookies sammeln Informationen darüber, wie Besucher die Website nutzen, z.B. welche Seiten am häufigsten besucht werden. Diese Daten helfen uns, die Website zu verbessern.</p>
                  <p className="text-sm text-slate-600">Rechtliche Grundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
                </div>

                <div className="border-l-4 border-yellow-500 pl-4 bg-white p-4 rounded">
                  <h4 className="font-semibold text-[#002454] mb-2">Funktionale Cookies</h4>
                  <p className="mb-2">Diese Cookies ermöglichen der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden.</p>
                  <p className="text-sm text-slate-600">Rechtliche Grundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 bg-white p-4 rounded">
                  <h4 className="font-semibold text-[#002454] mb-2">Marketing-Cookies</h4>
                  <p className="mb-2">Diese Cookies werden verwendet, um Werbung für Sie und Ihre Interessen relevanter zu machen. Sie werden auch verwendet, um die Anzahl der Anzeigen zu begrenzen und die Wirksamkeit von Werbekampagnen zu messen.</p>
                  <p className="text-sm text-slate-600">Rechtliche Grundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Cookie-Verwaltung</h3>
              <div className="space-y-4">
                <p>Sie können Ihre Cookie-Einstellungen jederzeit ändern. Die meisten Webbrowser erlauben eine gewisse Kontrolle über die meisten Cookies über die Browser-Einstellungen.</p>
                <p>Um mehr über Cookies zu erfahren, einschließlich wie Sie sehen können, welche Cookies gesetzt wurden und wie Sie sie verwalten und löschen können, besuchen Sie <a href="https://www.allaboutcookies.org" className="text-[#002454] hover:underline" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>.</p>
                <p className="font-semibold text-[#002454]">Hinweis:</p>
                <p>Wenn Sie Cookies deaktivieren, funktionieren möglicherweise nicht alle Funktionen dieser Website ordnungsgemäß.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Kontakt</h3>
              <p className="mb-4">Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, können Sie uns kontaktieren:</p>
              <div className="bg-white p-4 rounded border-l-4 border-[#002454]">
                <p className="font-semibold">LÖWEN ENTERTAINMENT GmbH</p>
                <p>Saarlandstraße 240<br />55411 Bingen</p>
                <p>E-Mail: info@loewen.de</p>
                <p>Telefon: +49 6721 4070</p>
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
