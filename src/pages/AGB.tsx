
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const AGB = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002454] mb-8">Allgemeine Geschäftsbedingungen</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 1 Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der LÖWEN ENTERTAINMENT GmbH und ihren Kunden über die Lieferung von E-Dart Automaten und Zubehör.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 2 Vertragsschluss</h2>
            <div className="space-y-2">
              <p>1. Unsere Angebote sind freibleibend und unverbindlich.</p>
              <p>2. Der Vertrag kommt durch unsere schriftliche Auftragsbestätigung oder durch Lieferung der Ware zustande.</p>
              <p>3. Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
            <div className="space-y-2">
              <p>1. Es gelten die Preise zum Zeitpunkt der Auftragsbestätigung.</p>
              <p>2. Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.</p>
              <p>3. Die Zahlung erfolgt innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug.</p>
              <p>4. Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 4 Lieferung und Lieferzeit</h2>
            <div className="space-y-2">
              <p>1. Liefertermine sind nur dann verbindlich, wenn sie von uns schriftlich bestätigt wurden.</p>
              <p>2. Die Lieferzeit verlängert sich angemessen bei höherer Gewalt, Arbeitskampf oder anderen unvorhersehbaren Hindernissen.</p>
              <p>3. Die Gefahr geht mit der Übergabe an den Spediteur oder Frachtführer auf den Kunden über.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 5 Gewährleistung</h2>
            <div className="space-y-2">
              <p>1. Wir gewährleisten, dass die gelieferten E-Dart Automaten frei von Sach- und Rechtsmängeln sind.</p>
              <p>2. Die Gewährleistungsfrist beträgt 24 Monate ab Lieferung.</p>
              <p>3. Mängel sind unverzüglich schriftlich anzuzeigen.</p>
              <p>4. Bei berechtigten Mängelrügen leisten wir nach unserer Wahl Nachbesserung oder Ersatzlieferung.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 6 Haftung</h2>
            <div className="space-y-2">
              <p>1. Wir haften nur für Schäden, die auf Vorsatz oder grober Fahrlässigkeit beruhen.</p>
              <p>2. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit nicht wesentliche Vertragspflichten verletzt werden.</p>
              <p>3. Die Haftung für mittelbare Schäden und entgangenen Gewinn ist ausgeschlossen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 7 Eigentumsvorbehalt</h2>
            <div className="space-y-2">
              <p>1. Die gelieferte Ware bleibt bis zur vollständigen Bezahlung unser Eigentum.</p>
              <p>2. Der Kunde ist berechtigt, die Ware im ordentlichen Geschäftsverlauf zu verkaufen.</p>
              <p>3. Bei Pfändung oder anderen Eingriffen Dritter sind wir unverzüglich zu benachrichtigen.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 8 Datenschutz</h2>
            <p>Wir verarbeiten personenbezogene Daten zur Vertragsabwicklung gemäß der Datenschutz-Grundverordnung (DSGVO). Details entnehmen Sie unserer Datenschutzerklärung.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">§ 9 Schlussbestimmungen</h2>
            <div className="space-y-2">
              <p>1. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
              <p>2. Gerichtsstand ist Mainz, soweit der Kunde Vollkaufmann ist.</p>
              <p>3. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Gültigkeit des Vertrages im Übrigen unberührt.</p>
            </div>
          </section>

          <section className="mt-8 p-4 bg-gray-50 rounded">
            <p className="text-sm">Stand: Januar 2024</p>
            <p className="text-sm">LÖWEN ENTERTAINMENT GmbH, Saarlandstraße 240, 55411 Bingen</p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AGB;
