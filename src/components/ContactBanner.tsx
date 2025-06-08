
import { useDynamicGradientHeight } from "@/hooks/useDynamicGradientHeight";

const ContactBanner = () => {
  const { textRef, gradientHeight } = useDynamicGradientHeight();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
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
              KONTAKT
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
