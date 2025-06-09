
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Impressum = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold text-[#002454] mb-8">Impressum</h1>
        
        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-2">
              <p><strong>LÖWEN ENTERTAINMENT GmbH</strong></p>
              <p>Saarlandstraße 240</p>
              <p>55411 Bingen</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Kontakt</h2>
            <div className="space-y-2">
              <p>Telefon: <a href="tel:+49672140700" className="text-blue-600 hover:underline">+49 6721 4070</a></p>
              <p>E-Mail: <a href="mailto:info@loewen.de" className="text-blue-600 hover:underline">info@loewen.de</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Vertretungsberechtigte Geschäftsführer</h2>
            <div className="space-y-2">
              <p>Christian Arras (Vorsitzender)</p>
              <p>Oliver Bagus</p>
              <p>Dr. Daniel Henzgen</p>
              <p>Jakob Rothwangl</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Aufsichtsrat</h2>
            <p>Vorsitzender: Uwe Christiansen</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Registereintrag</h2>
            <div className="space-y-2">
              <p>Registergericht: Amtsgericht Mainz</p>
              <p>Registernummer: HRB 23327</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE148266135</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="space-y-2">
              <p>LÖWEN ENTERTAINMENT GmbH</p>
              <p>Saarlandstraße 240</p>
              <p>55411 Bingen</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#002454] mb-4">Haftungsausschluss</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Haftung für Links</h3>
                <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Urheberrecht</h3>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Impressum;
