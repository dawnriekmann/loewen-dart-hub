
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import ContactHero from "@/components/ContactHero";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
