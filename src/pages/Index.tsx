
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import UpdateSection from "@/components/UpdateSection";
import HB10Section from "@/components/HB10Section";
import AppSection from "@/components/AppSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";
import HB10FinderButton from "@/components/HB10FinderButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <UpdateSection />
      <HB10Section />
      <AppSection />
      <SocialMediaSection />
      <Footer />
      <HB10FinderButton />
    </div>
  );
};

export default Index;
