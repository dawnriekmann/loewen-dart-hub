
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Main Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#002454] mb-6 font-parisine-narrow uppercase">
              KONTAKT
            </h3>
            
            <div className="space-y-4">
              <div className="text-[#002454]">
                <h4 className="text-xl font-semibold mb-2">LÖWEN ENTERTAINMENT GmbH</h4>
                <div className="space-y-1 text-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 mt-1 text-[#002454]" />
                    <div>
                      <p>Saarlandstraße 240</p>
                      <p>55411 Bingen</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#002454]" />
                  <div>
                    <span className="text-[#002454] text-lg">Telefon: </span>
                    <a 
                      href="tel:+4967217974020" 
                      className="text-[#002454] hover:text-blue-600 transition-colors text-lg font-medium"
                    >
                      +49 6721 7974020
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#002454]" />
                  <div>
                    <span className="text-[#002454] text-lg">E-Mail: </span>
                    <a 
                      href="mailto:info@loewen-vertrieb.de" 
                      className="text-[#002454] hover:text-blue-600 transition-colors text-lg font-medium"
                    >
                      info@loewen-vertrieb.de
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Online Sales Center */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#002454] mb-6 font-parisine-narrow uppercase">
              Online Vertriebscenter
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#002454]" />
                  <div>
                    <span className="text-[#002454] text-lg">Tel.: </span>
                    <a 
                      href="tel:+4967217974020" 
                      className="text-[#002454] hover:text-blue-600 transition-colors text-lg font-medium"
                    >
                      +49 6721 7974020
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#002454]" />
                  <div>
                    <span className="text-[#002454] text-lg">E-Mail: </span>
                    <a 
                      href="mailto:verkauf@loewen-vertrieb.de" 
                      className="text-[#002454] hover:text-blue-600 transition-colors text-lg font-medium"
                    >
                      verkauf@loewen-vertrieb.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 text-[#002454]" />
                  <div className="text-[#002454]">
                    <h4 className="text-lg font-semibold mb-3">Erreichbarkeit*:</h4>
                    <div className="space-y-2 text-lg">
                      <div>Mo. – Sa. von 8 – 20 Uhr</div>
                      <div>So. von 9 – 15 Uhr</div>
                      <div>Feiertage von 9 – 15 Uhr</div>
                    </div>
                    <p className="text-sm text-slate-600 mt-3 italic">*Ausnahmen vorbehalten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
