
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactBanner from "@/components/ContactBanner";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ContactHero />
      <ContactBanner />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
