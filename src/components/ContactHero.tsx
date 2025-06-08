
const ContactHero = () => {
  return (
    <section className="relative bg-slate-900 text-white py-24 pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Kontakt
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Haben Sie Fragen zu unseren Dartautomaten? Wir sind für Sie da und beraten Sie gerne.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
