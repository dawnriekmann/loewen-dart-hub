
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductHB8 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32">
        {/* Main content with increased top padding */}
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">LÖWEN HB8</h1>
          <p className="text-lg text-center text-muted-foreground">
            Produktinformationen für den LÖWEN HB8 Dartautomaten
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductHB8;
