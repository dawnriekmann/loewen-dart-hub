import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Dart HB8",
      image: "https://www.loewen.de/fileadmin/_processed_/3/b/csm_DART_HB8_Tunier_Retusche_593a52b77d.png",
      description: "Professioneller Dartautomat für Turnier-Niveau",
      features: ["Turnier-Qualität", "Robuste Konstruktion", "Präzise Sensoren"]
    },
    {
      id: 2,
      name: "Dart HB9",
      image: "https://www.loewen.de/fileadmin/_processed_/6/8/csm_HB9_Sport_Dart_760f4d03f8.png",
      description: "Sport-Dartautomat für anspruchsvolle Spieler",
      features: ["Sport-Design", "Erweiterte Features", "Optimale Performance"]
    },
    {
      id: 3,
      name: "Dart HB10",
      image: "https://www.loewen.de/fileadmin/_processed_/6/8/csm_2023-08-08-HB10-Rot-Blau-Links_9b110b3a99.png",
      description: "Premium Dartautomat mit modernster Technologie",
      features: ["Premium-Qualität", "Modernste Technik", "Exklusives Design"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg mb-8" style={{ color: '#002454' }}>
            Entdecken Sie unsere hochwertigen Dartautomaten. 
            Jedes Modell bietet einzigartige Features für das perfekte Dart-Erlebnis.
          </p>
          
          <h2 className="font-parisine font-bold text-4xl md:text-5xl mb-6 title-gradient-bg">
            UNSERE DARTAUTOMATEN
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 float-animation"
                />
              </div>
              
              <CardContent className="text-center p-6">
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#002454' }}>
                  {product.name}
                </h3>
                
                <p 
                  className="text-lg font-bold cursor-pointer hover:underline transition-all duration-300"
                  style={{ color: '#002454' }}
                  onClick={() => {
                    // Hier würde später die Navigation zur Produktseite erfolgen
                    console.log(`Navigating to ${product.name} page`);
                  }}
                >
                  Hier öffnen
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
