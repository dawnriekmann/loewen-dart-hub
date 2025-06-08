

const Footer = () => {
  return (
    <>
      <footer className="bg-[#050c21] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-6">
                <img 
                  src="https://i.imgur.com/iLQceVb.png" 
                  alt="LÖWEN Logo"
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-slate-300 mb-6 max-w-md">
                Der internationale Marktführer für professionelle E-Dart Automaten. 
                Qualität und Innovation seit Jahrzehnten.
              </p>
              
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produkte</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Dart HB8</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dart HB9</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dart HB10</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Zubehör</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Informationen</h4>
              <div className="text-slate-300 space-y-1">
                <div className="font-semibold text-white">LÖWEN ENTERTAINMENT GmbH</div>
                <div>Saarlandstraße 240</div>
                <div>55411 Bingen</div>
                <div className="pt-2">
                  <div>Telefon: <a href="tel:+492345678910" className="hover:text-white transition-colors">+49 2345678910</a></div>
                  <div>E-Mail: <a href="mailto:info@loewen-vertrieb.de" className="hover:text-white transition-colors">info@loewen-vertrieb.de</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Additional Footer Line */}
      <div className="bg-[#010614] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 text-sm">
            <a href="#" className="hover:text-gray-300 transition-colors">Impressum</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Kontakt</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie-Einstellungen</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

