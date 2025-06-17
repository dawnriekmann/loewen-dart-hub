
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const AppSection = () => {
  const sliderImages = [
    "https://www.loewen-vertrieb.de/fileadmin/user_upload/Banner-Desktop-Dart-App-Startseite-07032023.jpg",
    "https://www.loewen-vertrieb.de/fileadmin/user_upload/DartSlider-V3-HB10Finder-App-12072023.jpg",
    "https://www.loewen-vertrieb.de/fileadmin/user_upload/Banner-Desktop-Dart-App-Statistiken-07032023.jpg",
    "https://www.loewen-vertrieb.de/fileadmin/user_upload/Dartbannner-Spielhistorie-24112023.jpg",
    "https://www.loewen-vertrieb.de/fileadmin/user_upload/Dart-Slider-App-092024.png",
    "https://www.loewen-vertrieb.de/fileadmin/user_upload/Banner-Desktop-Dart-App-SocialMedia-07032023.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-left mb-12">
            <h2 className="text-2xl font-bold text-[#002454]">
              Lade dir jetzt die LÖWEN Dart-App herunter:
            </h2>
          </div>
          
          {/* Image and Description Layout */}
          <div className="flex flex-col lg:flex-row items-start gap-8 mb-12">
            {/* App Icon */}
            <div className="flex-shrink-0">
              <img 
                src="https://www.loewen-vertrieb.de/fileadmin/user_upload/Icon_Dart_App_2000px.png" 
                alt="LÖWEN Dart App Icon"
                className="w-96 h-96 object-contain"
              />
            </div>
            
            {/* Description and Download Buttons */}
            <div className="flex-1">
              <p className="text-xl text-[#002454] mb-8 leading-relaxed">
                Erlebe Dart auf einem neuen Level! Verwalte deine Spiele, tracke deine Statistiken 
                und verbinde dich mit der Dart-Community.
              </p>
              
              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href="#" 
                  className="inline-block transition-all duration-300 hover:scale-105"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://www.loewen-vertrieb.de/fileadmin/user_upload/myNOVO/app-store.png" 
                    alt="Download im App Store"
                    className="h-14 w-auto hover:brightness-110 transition-all duration-300"
                  />
                </a>
                
                <a 
                  href="#" 
                  className="inline-block transition-all duration-300 hover:scale-105"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img 
                    src="https://www.loewen-vertrieb.de/fileadmin/user_upload/myNOVO/google-play.png" 
                    alt="Jetzt bei Google Play"
                    className="h-14 w-auto hover:brightness-110 transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* App Screenshots Slider */}
          <div className="mb-16">
            <div className="w-full max-w-7xl mx-auto">
              <div className="relative overflow-hidden rounded-lg">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {sliderImages.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0 flex justify-center p-8">
                      <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl">
                        <img 
                          src={image} 
                          alt={`Dart App Screenshot ${index + 1}`}
                          className="w-full h-auto object-contain rounded"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentSlide ? 'bg-[#007aff]' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
