import { Link } from "react-router-dom";
import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const ProductsSection = () => {
  const { textRef, gradientHeight } = useDynamicGradientHeight();

  const products = [
    {
      id: 1,
      name: "Dart HB8",
      image: "https://www.loewen.de/fileadmin/_processed_/3/b/csm_DART_HB8_Tunier_Retusche_593a52b77d.png",
      link: "/hb8"
    },
    {
      id: 2,
      name: "Dart HB9",
      image: "https://www.loewen.de/fileadmin/_processed_/6/8/csm_HB9_Sport_Dart_760f4d03f8.png",
      link: "/hb9"
    },
    {
      id: 3,
      name: "Dart HB10",
      image: "https://www.loewen.de/fileadmin/_processed_/6/8/csm_2023-08-08-HB10-Rot-Blau-Links_9b110b3a99.png",
      link: "/hb10"
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="relative">
            <div 
              className="products-title-gradient-container w-full"
              style={{ height: gradientHeight }}
            ></div>
            <h2 
              ref={textRef}
              className="font-bold font-parisine-narrow uppercase text-white relative z-10" 
              style={{ fontSize: '58.5px' }}
            >
              UNSERE DARTAUTOMATEN
            </h2>
          </div>
          
          <p className="text-lg text-[#002454] mt-4 mx-auto whitespace-nowrap">
            Entdecken Sie unsere hochwertigen Dartautomaten - perfekt für jeden Anspruch und jede Umgebung.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group text-center transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <Link to={product.link} className="block">
                <div className="aspect-square overflow-hidden flex items-center justify-center p-4 mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 float-animation"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-[#002454] mb-3">
                  {product.name}
                </h3>
                
                <p className="text-lg font-bold text-[#002454] cursor-pointer hover:underline">
                  Hier öffnen
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
