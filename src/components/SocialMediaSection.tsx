
const SocialMediaSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="font-bold font-parisine-narrow uppercase text-white products-title-gradient" style={{ fontSize: '45px' }}>
              UNSERE SOCIAL MEDIA KANÄLE
            </h2>
          </div>
          
          <p className="text-lg text-[#002454] mt-8 max-w-3xl mx-auto">
            Für regelmäßige News und Updates rund um LÖWEN DART, folge uns direkt auf unseren Social-Media-Kanälen (loewendartofficial):
          </p>
        </div>
        
        <div className="flex justify-center gap-8 mb-12">
          <a 
            href="https://www.facebook.com/loewendartofficial" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img 
              src="https://www.loewen.de//fileadmin/_processed_/5/e/csm_facebook_icon1_5f97167bd4.png" 
              alt="Facebook"
              className="w-16 h-16"
            />
          </a>
          
          <a 
            href="https://www.instagram.com/loewendartofficial/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <img 
              src="https://www.loewen.de/fileadmin/_processed_/f/e/csm_instagram_icon1_b2cf83a61c.png" 
              alt="Instagram"
              className="w-16 h-16"
            />
          </a>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-[#002454] mb-4">
            Weitere Inhalte stehen für Sie in unserem Downloadbereich zur Verfügung!
          </p>
          
          <a 
            href="https://www.loewen-kundenportal.de/downloadbereich/produktinformationen/dart-soccer?utm_source=website&utm_medium=link&utm_campaign=downloadbereich&utm_content=dart"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold text-[#002454] hover:underline"
          >
            Zum Downloadbereich
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
