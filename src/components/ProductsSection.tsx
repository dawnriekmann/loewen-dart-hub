import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "DART HB8"
    },
    {
      id: 2,
      name: "DART HB9"
    },
    {
      id: 3,
      name: "DART HB10"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Einleitungstext */}
        <div className="text-center mb-8">
          <p className="text-xl text-dart max-w-3xl mx-auto">
            Entdecken Sie unsere Premium-Auswahl an professionellen Dartautomaten. 
            Jedes Modell wurde für höchste Qualität und optimale Spielerfahrung entwickelt.
          </p>
        </div>

        {/* Titel mit Gradient-Hintergrund */}
        <div className="text-center mb-16">
          <div className="gradient-title-bg">
            <h2 className="font-parisine text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
              UNSERE DARTAUTOMATEN
            </h2>
          </div>
        </div>
        
        {/* Vereinfachte Produktdarstellung */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-dart mb-6">
                {product.name}
              </h3>
              
              <Button 
                className="bg-dart hover:bg-dart/90 text-white font-bold py-3 px-6 text-lg"
                onClick={() => {
                  // Placeholder - später zur jeweiligen Produktseite leiten
                  console.log(`Navigate to ${product.name} page`);
                }}
              >
                Hier öffnen
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
