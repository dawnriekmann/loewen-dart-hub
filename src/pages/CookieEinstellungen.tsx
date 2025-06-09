
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CookieEinstellungen = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002454] mb-8">Cookie-Einstellungen</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Was sind Cookies?</h2>
            <p>Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert werden. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen über einen bestimmten Zeitraum zu speichern, so dass Sie diese nicht bei jedem Besuch der Website oder beim Navigieren von einer Seite zur anderen erneut eingeben müssen.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Wie wir Cookies verwenden</h2>
            <p>Wir verwenden Cookies, um:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Die ordnungsgemäße Funktion der Website sicherzustellen</li>
              <li>Ihre Präferenzen zu speichern</li>
              <li>Die Leistung unserer Website zu analysieren</li>
              <li>Ihnen relevante Inhalte und Werbung anzuzeigen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Arten von Cookies, die wir verwenden</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold mb-2">Technisch notwendige Cookies</h3>
                <p>Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich. Sie ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.</p>
                <p className="text-sm text-gray-600 mt-1">Rechtliche Grundlage: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold mb-2">Leistungs-Cookies</h3>
                <p>Diese Cookies sammeln Informationen darüber, wie Besucher die Website nutzen, z.B. welche Seiten am häufigsten besucht werden. Diese Daten helfen uns, die Website zu verbessern.</p>
                <p className="text-sm text-gray-600 mt-1">Rechtliche Grundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold mb-2">Funktionalitäts-Cookies</h3>
                <p>Diese Cookies ermöglichen es der Website, erweiterte Funktionalität und Personalisierung bereitzustellen. Sie können von uns oder von Drittanbietern gesetzt werden.</p>
                <p className="text-sm text-gray-600 mt-1">Rechtliche Grundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold mb-2">Marketing-Cookies</h3>
                <p>Diese Cookies werden verwendet, um Werbung zu liefern, die für Sie und Ihre Interessen relevanter ist. Sie können auch verwendet werden, um die Anzahl der Werbeanzeigen zu begrenzen und die Wirksamkeit von Werbekampagnen zu messen.</p>
                <p className="text-sm text-gray-600 mt-1">Rechtliche Grundlage: Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Ihre Wahlmöglichkeiten</h2>
            <div className="space-y-4">
              <p>Sie haben das Recht, der Verwendung von Cookies zuzustimmen oder diese abzulehnen. Die meisten Webbrowser akzeptieren Cookies automatisch, aber Sie können Ihre Browsereinstellungen normalerweise ändern, um Cookies abzulehnen, wenn Sie dies bevorzugen.</p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                <p className="font-semibold text-yellow-800">Wichtiger Hinweis:</p>
                <p className="text-yellow-700">Das Blockieren oder Löschen von Cookies kann die Funktionalität dieser Website beeinträchtigen, und Sie können möglicherweise nicht auf alle Funktionen und Dienste zugreifen.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Cookie-Verwaltung in Ihrem Browser</h2>
            <div className="space-y-2">
              <p>Sie können Cookies in Ihrem Browser verwalten über:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong>Chrome:</strong> Einstellungen > Erweitert > Datenschutz und Sicherheit > Cookies</li>
                <li><strong>Firefox:</strong> Einstellungen > Datenschutz & Sicherheit > Cookies und Website-Daten</li>
                <li><strong>Safari:</strong> Einstellungen > Datenschutz > Cookies und Website-Daten</li>
                <li><strong>Edge:</strong> Einstellungen > Cookies und Websiteberechtigungen</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Kontakt</h2>
            <p>Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:</p>
            <div className="mt-4 space-y-2">
              <p><strong>LÖWEN ENTERTAINMENT GmbH</strong></p>
              <p>Saarlandstraße 240, 55411 Bingen</p>
              <p>E-Mail: <a href="mailto:info@loewen.de" className="text-blue-600 hover:underline">info@loewen.de</a></p>
              <p>Telefon: <a href="tel:+49672140700" className="text-blue-600 hover:underline">+49 6721 4070</a></p>
            </div>
          </section>

          <section className="mt-8 p-4 bg-gray-50 rounded">
            <p className="text-sm">Letzte Aktualisierung: Januar 2024</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookieEinstellungen;
