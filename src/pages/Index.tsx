
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import UpdateSection from "@/components/UpdateSection";
import AppSection from "@/components/AppSection";
import SocialMediaSection from "@/components/SocialMediaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductsSection />
      <UpdateSection />
      <AppSection />
      <SocialMediaSection />
      <Footer />
    </div>
  );
};

export default Index;
