
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useProductInquiries } from "@/hooks/useProductInquiries";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const { createInquiry } = useProductInquiries();
  
  // Determine product type and price based on current route
  const getProductInfo = () => {
    if (location.pathname.includes('/hb8')) {
      return { type: 'HB8' as const, price: 2000 };
    } else if (location.pathname.includes('/hb10')) {
      return { type: 'HB10' as const, price: 3499 };
    }
    return null;
  };

  const productInfo = getProductInfo();
  const isProductPage = productInfo !== null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    city: "",
    zip: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isProductPage && productInfo) {
      // Submit as product inquiry
      createInquiry.mutate({
        product_type: productInfo.type,
        product_price: productInfo.price,
        customer_name: formData.name,
        customer_email: formData.email,
        customer_phone: formData.phone || undefined,
        customer_company: formData.company || undefined,
        customer_address: formData.address || undefined,
        customer_city: formData.city || undefined,
        customer_zip: formData.zip || undefined,
        message: `${formData.subject}\n\n${formData.message}`,
      });
    } else {
      // Handle general contact form (you can extend this later)
      console.log("General contact form submitted:", formData);
      alert("Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.");
    }
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
      city: "",
      zip: "",
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
              {isProductPage ? `${productInfo?.type} Anfrage senden` : "Nachricht senden"}
            </h2>
            {isProductPage && (
              <p className="text-lg text-slate-600 mb-4">
                Interessiert an dem LÖWEN DART {productInfo?.type}? Preis: {productInfo?.price.toLocaleString('de-DE')} €
              </p>
            )}
            <p className="text-lg text-slate-600">
              Haben Sie Fragen oder benötigen Sie weitere Informationen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>

          <Card className="bg-white border-slate-200 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-[#002454]">
                {isProductPage ? 'Produktanfrage' : 'Kontaktformular'}
              </CardTitle>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <label htmlFor="company" className="block text-sm font-medium text-[#002454] mb-2">
                      Unternehmen
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-[#002454] mb-2">
                    Adresse
                  </label>
                  <Input
                    id="address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                    placeholder="Straße und Hausnummer"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-[#002454] mb-2">
                      Stadt
                    </label>
                    <Input
                      id="city"
                      name="city"
                      type="text"
                      value={formData.city}
                      onChange={handleChange}
                      className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                      placeholder="Ihre Stadt"
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm font-medium text-[#002454] mb-2">
                      PLZ
                    </label>
                    <Input
                      id="zip"
                      name="zip"
                      type="text"
                      value={formData.zip}
                      onChange={handleChange}
                      className="bg-white border-slate-300 text-[#002454] placeholder:text-slate-400 focus:border-[#002454] focus:ring-[#002454]"
                      placeholder="Postleitzahl"
                    />
                  </div>
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
                    placeholder={isProductPage ? `Anfrage zu ${productInfo?.type}` : "Worum geht es in Ihrer Anfrage?"}
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
                  disabled={createInquiry.isPending}
                >
                  {createInquiry.isPending ? "Wird gesendet..." : "Nachricht senden"}
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
