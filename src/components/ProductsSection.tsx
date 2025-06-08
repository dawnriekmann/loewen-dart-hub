
const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Dart HB8",
      image: "https://www.loewen.de/fileadmin/_processed_/3/b/csm_DART_HB8_Tunier_Retusche_593a52b77d.png",
    },
    {
      id: 2,
      name: "Dart HB9",
      image: "https://www.loewen.de/fileadmin/_processed_/6/8/csm_HB9_Sport_Dart_760f4d03f8.png",
    },
    {
      id: 3,
      name: "Dart HB10",
      image: "https://www.loewen.de/fileadmin/_processed_/6/8/csm_2023-08-08-HB10-Rot-Blau-Links_9b110b3a99.png",
    }
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-products-text mb-4 max-w-2xl mx-auto">
            Entdecken Sie unsere hochwertigen Dartautomaten - perfekt für jeden Anspruch und jede Umgebung.
          </p>
          
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold font-parisine uppercase text-products-title-bg products-title-gradient">
              UNSERE DARTAUTOMATEN
            </h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="group text-center transform hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-8 mb-6 rounded-lg shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 float-animation"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-products-text mb-3">
                {product.name}
              </h3>
              
              <p className="text-lg font-bold text-products-text cursor-pointer hover:underline">
                Hier öffnen
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
