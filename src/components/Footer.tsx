
import { Link } from "react-router-dom";

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
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Produkte</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link to="/hb8" className="hover:text-white transition-colors">Dart HB8</Link></li>
                <li><Link to="/hb9" className="hover:text-white transition-colors">Dart HB9</Link></li>
                <li><Link to="/hb10" className="hover:text-white transition-colors">Dart HB10</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Zubehör</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Informationen</h4>
              <div className="space-y-2 text-slate-300">
                <p className="font-medium">LÖWEN ENTERTAINMENT GmbH</p>
                <p>Saarlandstraße 240</p>
                <p>55411 Bingen</p>
                <p>
                  <a href="mailto:info@loewen-vertrieb.de" className="hover:text-white transition-colors">
                    info@loewen-vertrieb.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Additional Footer Line */}
      <div className="bg-[#010614] text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center space-x-8 text-sm">
            <Link to="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link to="/kontakt" className="hover:text-gray-300 transition-colors">Kontakt</Link>
            <Link to="/cookie-einstellungen" className="hover:text-gray-300 transition-colors">Cookie-Einstellungen</Link>
            <Link to="/agb" className="hover:text-gray-300 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
