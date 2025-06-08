
import { Button } from "@/components/ui/button";

const AppSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <img 
              src="https://www.loewen.de/fileadmin/user_upload/Icon_Dart_App_2000px.png" 
              alt="Löwen Dart App Icon"
              className="w-32 h-32 mx-auto mb-8 float-animation"
            />
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Lade dir jetzt die Löwen Dart App herunter
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Erlebe Dart auf einem neuen Level! Verwalte deine Spiele, tracke deine Statistiken 
              und verbinde dich mit der Dart-Community.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button asChild className="group transition-all duration-300 hover:scale-105">
              <a 
                href="#" 
                className="inline-block"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/myNOVO/app-store.png" 
                  alt="Download im App Store"
                  className="h-14 w-auto group-hover:brightness-110 transition-all duration-300"
                />
              </a>
            </Button>
            
            <Button asChild className="group transition-all duration-300 hover:scale-105">
              <a 
                href="#" 
                className="inline-block"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://www.loewen.de/fileadmin/user_upload/myNOVO/google-play.png" 
                  alt="Jetzt bei Google Play"
                  className="h-14 w-auto group-hover:brightness-110 transition-all duration-300"
                />
              </a>
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-semibold text-primary mb-2">Spiel-Tracking</h3>
              <p className="text-muted-foreground text-sm">
                Verfolge deine Fortschritte und Statistiken
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-semibold text-primary mb-2">Community</h3>
              <p className="text-muted-foreground text-sm">
                Verbinde dich mit anderen Dart-Spielern
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <h3 className="font-semibold text-primary mb-2">Turniere</h3>
              <p className="text-muted-foreground text-sm">
                Nimm an spannenden Turnieren teil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
