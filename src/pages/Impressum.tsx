import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactBanner from "@/components/ContactBanner";

const Impressum = () => {
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
              Rechtliche Informationen zu LÖWEN Entertainment
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
            <h2 className="text-3xl font-bold mb-8 text-[#002454]">Angaben gemäß § 5 TMG</h2>
            
            <div className="bg-slate-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#002454]">Unternehmen</h3>
              <p className="mb-2 text-[#002454]"><strong>LÖWEN ENTERTAINMENT GmbH</strong></p>
              <p className="mb-2 text-[#002454]">Saarlandstraße 240</p>
              <p className="mb-4 text-[#002454]">55411 Bingen</p>
              
              <p className="mb-2 text-[#002454]"><strong>Telefon:</strong> +49 6721 7974020</p>
              <p className="mb-4 text-[#002454]"><strong>E-Mail:</strong> info@loewen-vertrieb.de</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#002454]">Handelsregister</h3>
              <p className="mb-2 text-[#002454]"><strong>Registergericht:</strong> Amtsgericht Mainz</p>
              <p className="mb-2 text-[#002454]"><strong>Registernummer:</strong> HRB 23327</p>
              <p className="mb-4 text-[#002454]"><strong>Umsatzsteuer-ID:</strong> DE148266135</p>
            </div>

            <div className="bg-slate-50 p-8 rounded-lg mb-8">
              <h3 className="text-xl font-semibold mb-4 text-[#002454]">Vertretungsberechtigte Personen</h3>
              <p className="mb-2 text-[#002454]"><strong>Geschäftsführung:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-[#002454]">
                <li>Christian Arras (Vorsitzender)</li>
                <li>Oliver Bagus</li>
                <li>Dr. Daniel Henzgen</li>
                <li>Jakob Rothwangl</li>
              </ul>
              <p className="mb-2 text-[#002454]"><strong>Vorsitz im Aufsichtsrat:</strong> Uwe Christiansen</p>
            </div>

            <h2 className="text-3xl font-bold mb-8 text-[#002454]">Haftungsausschluss</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#002454]">Haftung für Inhalte</h3>
                <p className="text-[#002454] leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#002454]">Haftung für Links</h3>
                <p className="text-[#002454] leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#002454]">Urheberrecht</h3>
                <p className="text-[#002454] leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
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

export default Impressum;
