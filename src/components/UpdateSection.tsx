
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const UpdateSection = () => {
  const sliderImages = [
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-1.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-2.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-3.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-4.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-5.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-6.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-7.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-8.png",
    "https://www.loewen.de/fileadmin/user_upload/Dart-Slider-V4-092024-9.png"
  ];

  const downloadItems = [
    {
      id: 1,
      image: "https://medien.loewen-kundenportal.de/marketing/Kundenportal/Downloadbereich/ab%2002_2025/Dart/Titel_V4.04-02042025.png",
      title: "HB10 - V4.0-4 (April 2025)",
      subtitle: "Update-Datei"
    },
    {
      id: 2,
      image: "https://www.loewen.de/fileadmin/user_upload/Video-Bild.PNG",
      title: "HB10 - V4",
      subtitle: "Promovideo"
    },
    {
      id: 3,
      image: "https://www.loewen.de/fileadmin/user_upload/Titel_dart.PNG",
      title: "HB10",
      subtitle: "Update-Anleitung"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality - slower speed
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 6000); // Changed from 4000 to 6000ms (slower)

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Title with gradient background */}
        <div className="text-center mb-16">
          <div className="relative">
            <div className="products-title-gradient-container w-full"></div>
            <h2 className="font-bold font-parisine-narrow uppercase text-white relative z-10" style={{ fontSize: '58.5px' }}>
              JETZT NEU: HB10 UPDATE V4.0-4 (April 2025)
            </h2>
          </div>
        </div>

        {/* Long description text */}
        <div className="max-w-5xl mx-auto mb-16 text-[#002454] space-y-6">
          <p className="text-lg">
            Für das LÖWEN DART HB10 gibt es jetzt eine neue Softwareversion (V4.0-4). Die Update-Datei können Sie hier kostenlos herunterladen.
          </p>
          
          <p className="text-lg">
            Die Version 4 enthält viele attraktive Features für Dart-Fans und Aufsteller. Zum Beispiel das innovative Fun-Game Road to Vegas oder das bei Dartern beliebte Trainingsspiel Bob´s 27. Mit dem neuen Turniermodus können sich Ihre Spielgäste außerdem individuelle Turniere mit bis zu acht Spielern konfigurieren. Das erhöht den Unterhaltungswert und die Verweildauer.
          </p>
          
          <p className="text-lg">
            Weitere Features sind die Ausweisung von Statistikkennzahlen zu allen Spielen, neue Optionen für Trainingsspiele sowie die Vergabe einer Gerätenummer in den Einstellungen. Für ein benutzerfreundliches Handling sorgt die Neugestaltung des unteren Monitors im laufenden Spiel mitsamt möglicher Pfeilrücknahme und optimiertem Spieler- bzw. Reihenfolgewechsel. Neue Sounds und Animationen sowie Bugfixing komplettieren die Softwareversion 4.
          </p>
          
          <p className="text-lg">
            Insofern das Gerät vernetzt und mindestens mit Softwareversion 3 ausgestattet ist findet der Downloadprozess im Hintergrund statt. Die Installation kann über das Service-Menü unter Gerät {"->"} Netzwerk {"->"} Remote Update angestoßen werden.
            Alle Informationen zum alternativen Prozess erhalten Sie im Dokument „Update-Anleitung" innerhalb des Downloadbereichs.
          </p>
        </div>

        {/* Banner Slider with custom dots navigation - 50% larger */}
        <div className="mb-16">
          <div className="w-full max-w-7xl mx-auto"> {/* Changed from max-w-5xl to max-w-7xl for 50% larger */}
            <div className="relative overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {sliderImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 flex justify-center p-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 max-w-5xl"> {/* Changed from max-w-3xl to max-w-5xl for 50% larger */}
                      <img 
                        src={image} 
                        alt={`HB10 Update Slide ${index + 1}`}
                        className="w-full h-auto object-contain rounded"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dots Navigation with #007aff color */}
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

        {/* Three columns with download items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {downloadItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img 
                src={item.image} 
                alt={item.title}
                className="flex-shrink-0"
                style={{ width: '80px', height: '100px' }}
              />
              <div className="flex flex-col text-left">
                <h3 className="text-lg text-[#002454] mb-1">
                  {item.title}
                </h3>
                <p className="text-xl font-bold text-[#002454] mb-2">
                  {item.subtitle}
                </p>
                <p className="text-lg font-bold text-[#002454] cursor-pointer hover:underline">
                  Zum Downloadbereich
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text section */}
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

export default UpdateSection;
