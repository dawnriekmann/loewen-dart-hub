
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const Impressum = () => {
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
                IMPRESSUM
              </h1>
            </div>
            <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
              Rechtliche Informationen nach §5 TMG
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
                IMPRESSUM
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
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Angaben gemäß § 5 TMG</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Unternehmen:</h4>
                  <p className="text-lg">LÖWEN ENTERTAINMENT GmbH</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Anschrift:</h4>
                  <p>Saarlandstraße 240<br />55411 Bingen</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Kontakt:</h4>
                  <p>Telefon: <a href="tel:+4967214070" className="text-[#002454] hover:underline">+49 6721 4070</a></p>
                  <p>E-Mail: <a href="mailto:info@loewen.de" className="text-[#002454] hover:underline">info@loewen.de</a></p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Handelsregister:</h4>
                  <p>Registergericht: Amtsgericht Mainz</p>
                  <p>Registernummer: HRB 23327</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Umsatzsteuer-Identifikationsnummer:</h4>
                  <p>DE148266135</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Geschäftsführung:</h4>
                  <p>Christian Arras (Vorsitzender)<br />Oliver Bagus<br />Dr. Daniel Henzgen<br />Jakob Rothwangl</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Vorsitz im Aufsichtsrat:</h4>
                  <p>Uwe Christiansen</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#002454] mb-6">Haftungsausschluss</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Haftung für Inhalte:</h4>
                  <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Haftung für Links:</h4>
                  <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                </div>

                <div>
                  <h4 className="font-semibold text-[#002454] mb-2">Urheberrecht:</h4>
                  <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impressum;
