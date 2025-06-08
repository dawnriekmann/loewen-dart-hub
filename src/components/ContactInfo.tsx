
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-6">Kontaktinformationen</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Unser erfahrenes Team steht Ihnen bei allen Fragen rund um LÖWEN Dartautomaten zur Verfügung. 
          Kontaktieren Sie uns für eine persönliche Beratung.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">E-Mail</h3>
            <a 
              href="mailto:info@loewen-vertrieb.de" 
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              info@loewen-vertrieb.de
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Telefon</h3>
            <a 
              href="tel:02345678910" 
              className="text-blue-400 hover:text-blue-300 transition-colors text-lg"
            >
              02345 678 910
            </a>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Adresse</h3>
            <div className="text-slate-300 text-lg">
              <p>LÖWEN Vertrieb GmbH</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p>Deutschland</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl p-6 mt-8">
        <h3 className="text-xl font-semibold text-white mb-4">Geschäftszeiten</h3>
        <div className="space-y-2 text-slate-300">
          <div className="flex justify-between">
            <span>Montag - Freitag:</span>
            <span>09:00 - 18:00 Uhr</span>
          </div>
          <div className="flex justify-between">
            <span>Samstag:</span>
            <span>10:00 - 14:00 Uhr</span>
          </div>
          <div className="flex justify-between">
            <span>Sonntag:</span>
            <span>Geschlossen</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 mt-6">
        <h3 className="text-xl font-semibold text-white mb-3">Unser Service</h3>
        <ul className="text-blue-100 space-y-2">
          <li>• Persönliche Beratung vor Ort</li>
          <li>• Technischer Support</li>
          <li>• Wartung und Reparatur</li>
          <li>• Ersatzteile und Zubehör</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
