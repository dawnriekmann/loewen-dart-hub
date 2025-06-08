
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          Löwen Dart
        </h1>
        <p className="text-xl md:text-2xl mb-12 animate-fade-in opacity-90 max-w-3xl mx-auto leading-relaxed">
          Die E-Dart Produkte des internationalen Marktführers
        </p>
        
        <Button 
          onClick={scrollToProducts}
          size="lg"
          className="bg-white text-primary hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg font-semibold animate-fade-in"
        >
          Jetzt Entdecken
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ArrowDown className="h-6 w-6" />
      </div>
    </section>
  );
};

export default HeroSection;
