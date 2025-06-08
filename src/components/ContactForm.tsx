
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#002454] mb-4 font-parisine-narrow uppercase">
              Nachricht senden
            </h2>
            <p className="text-lg text-slate-600">
              Haben Sie Fragen oder benötigen Sie weitere Informationen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <Card className="bg-white border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#002454]">Kontaktformular</CardTitle>
              <p className="text-slate-600">
                Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#002454] mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                      placeholder="Ihr vollständiger Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#002454] mb-2">
                      E-Mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                      placeholder="ihre.email@beispiel.de"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#002454] mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                    placeholder="Ihre Telefonnummer"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#002454] mb-2">
                    Betreff *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                    placeholder="Worum geht es in Ihrer Anfrage?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#002454] mb-2">
                    Nachricht *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                    placeholder="Beschreiben Sie Ihre Anfrage ausführlich..."
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-[#002454] hover:bg-[#003366] text-white py-3 text-lg font-semibold transition-colors"
                >
                  Nachricht senden
                </Button>

                <p className="text-sm text-slate-500 text-center">
                  * Pflichtfelder - Ihre Daten werden vertraulich behandelt
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
