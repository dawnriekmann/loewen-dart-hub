
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        console.log("Video autoplay successful");
      } catch (error) {
        console.log("Autoplay prevented, video will play on user interaction:", error);
      }
    };

    // Try to play when video is loaded
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo);
    }

    // Cleanup
    return () => {
      video.removeEventListener('loadeddata', playVideo);
    };
  }, []);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video && video.paused) {
      video.play().catch(console.error);
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden font-open-sans">
      {/* Video Background */}
      <video 
        ref={videoRef}
        className="video-background cursor-pointer"
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        onClick={handleVideoClick}
      >
        <source 
          src="https://www.loewen.de/fileadmin/user_upload/240409_Headervideo_Darts_Produktseite_2024.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="video-overlay"></div>
      
      {/* Content - Left aligned */}
      <div className="relative z-10 text-white px-8 md:px-16 lg:px-24 w-full max-w-7xl mx-auto">
        <div className="text-left">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              LÖWEN
            </h1>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
              DART
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 animate-fade-in opacity-90 max-w-2xl leading-relaxed">
            Die E-Dart Produkte des internationalen Marktführers
          </p>
        </div>
      </div>
      
      {/* Scroll indicator with new image and text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center cursor-pointer animate-bounce" onClick={scrollToProducts}>
        <div className="font-franklin text-sm md:text-base font-medium tracking-wider mb-2">
          JETZT ENTDECKEN!
        </div>
        <img 
          src="https://www.loewen.de/_assets/522279b556b280de835e1011f7255b60/img/arrow-dotted-scroll-down.png" 
          alt="Scroll down arrow"
          className="h-8 w-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
