
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Unsere Dartautomaten
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie die drei Premium-Modelle von Löwen Dart - 
            perfekt für jeden Anspruch und jede Umgebung.
          </p>
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
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-primary mb-2">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {product.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-300"
                  size="lg"
                >
                  Mehr erfahren
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
