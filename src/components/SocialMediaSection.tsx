import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const SocialMediaSection = () => {
  const { textRef, gradientHeight } = useDynamicGradientHeight();

  return (
    <section className="py-20 bg-slate-50">
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
              UNSERE SOCIAL MEDIA KANÄLE
            </h2>
          </div>
          
          <p className="text-lg text-[#002454] mt-4 max-w-3xl mx-auto">
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
              className="w-7 h-12.5"
              style={{ width: '28px', height: '50px' }}
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
              className="w-12.5 h-12.5"
              style={{ width: '50px', height: '50px' }}
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
            className="text-lg font-bold text-[#002454] cursor-pointer hover:underline"
          >
            Zum Downloadbereich
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
