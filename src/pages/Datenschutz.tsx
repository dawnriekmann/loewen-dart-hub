
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Datenschutz = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002454] mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Allgemeine Hinweise</h3>
                <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Datenerfassung auf dieser Website</h3>
                <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">2. Verantwortliche Stelle</h2>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="mt-4 space-y-2">
              <p><strong>LÖWEN ENTERTAINMENT GmbH</strong></p>
              <p>Saarlandstraße 240</p>
              <p>55411 Bingen</p>
              <p>Deutschland</p>
              <p>Telefon: <a href="tel:+49672140700" className="text-blue-600 hover:underline">+49 6721 4070</a></p>
              <p>E-Mail: <a href="mailto:info@loewen.de" className="text-blue-600 hover:underline">info@loewen.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">3. Datenerfassung auf dieser Website</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Server-Log-Dateien</h3>
                <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Kontaktformular</h3>
                <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">4. Ihre Rechte</h2>
            <p>Sie haben folgende Rechte:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Recht auf Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Berichtigung unrichtiger oder Vervollständigung unvollständiger Daten</li>
              <li>Recht auf Löschung der bei uns gespeicherten personenbezogenen Daten</li>
              <li>Recht auf Einschränkung der Datenverarbeitung</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung</li>
              <li>Recht auf Datenübertragbarkeit</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">6. Widerspruch gegen Werbe-Mails</h2>
            <p>Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen.</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Datenschutz;
