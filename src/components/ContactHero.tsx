

const ContactHero = () => {
  return (
    <section className="relative h-[60vh] flex items-center overflow-hidden">
      {/* Banner Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://www.loewen-vertrieb.de/fileadmin/_processed_/5/0/csm_1_gruppe-header_loewen_01665782ea.jpg)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 to-slate-900/60"></div>
      
      {/* Content - Left aligned like HeroSection */}
      <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
        <div className="text-left">
          <div className="mb-8 animate-fade-in">
            <h1 className="font-bold leading-none font-parisine-narrow" style={{ fontSize: '70px' }}>
              KONTAKT
            </h1>
          </div>
          
          <p className="mb-12 animate-fade-in opacity-90 max-w-4xl leading-relaxed" style={{ fontSize: '18px' }}>
            Ihr direkter Draht zu LÖWEN Entertainment - wir sind für Sie da
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
