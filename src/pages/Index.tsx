
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import UpdateSection from "@/components/UpdateSection";
import HB10Section from "@/components/HB10Section";
import AppSection from "@/components/AppSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        <ProductsSection />
        <UpdateSection />
        <HB10Section />
        <AppSection />
        <SocialMediaSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
