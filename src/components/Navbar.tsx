
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Check if we've scrolled past the hero section (first section)
      setIsScrolled(scrollPosition > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItemStyle = {
    fontSize: '1.25rem',
    lineHeight: '1.2',
    fontWeight: '500',
    letterSpacing: '0.2em', // Erweiterte Buchstabenabstände
    textTransform: 'uppercase' as const,
    fontVariant: 'normal' as const,
    verticalAlign: 'baseline' as const,
    height: 'auto',
    padding: '0',
    margin: '0'
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050c21]' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://i.imgur.com/iLQceVb.png" 
              alt="LÖWEN Logo"
              className="h-16 w-auto"
            />
          </div>
          
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-8">
              {/* Dartautomaten Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger 
                  className="bg-transparent text-white hover:text-blue-300 font-franklin transition-colors border-0 outline-0 p-0 h-auto min-h-0 focus:bg-transparent data-[state=open]:bg-transparent hover:bg-transparent active:bg-transparent [&>svg]:w-5 [&>svg]:h-5 [&>svg]:ml-2 [&>svg]:stroke-[3] [&>svg]:text-white focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-0"
                  style={menuItemStyle}
                >
                  <span style={menuItemStyle}>Dartautomaten</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!bg-transparent !border-none !shadow-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-2 focus-visible:ring-blue-600 data-[state=open]:ring-0">
                  <div className="bg-slate-900/90 backdrop-blur-xl border-2 border-blue-500/60 rounded-xl shadow-2xl p-6 w-64 !text-white focus:ring-0 focus:ring-offset-0">
                    <div className="space-y-2">
                      <a 
                        href="#" 
                        className="block px-4 py-3 text-white hover:bg-blue-600/30 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                          <span>LÖWEN HB8</span>
                        </div>
                      </a>
                      <a 
                        href="#" 
                        className="block px-4 py-3 text-white hover:bg-blue-600/30 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                          <span>LÖWEN HB9</span>
                        </div>
                      </a>
                      <a 
                        href="#" 
                        className="block px-4 py-3 text-white hover:bg-blue-600/30 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                          <span>LÖWEN HB10</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Kontakt */}
              <NavigationMenuItem>
                <a 
                  href="#kontakt" 
                  className="text-white hover:text-blue-300 font-franklin transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0 rounded-sm px-1"
                  style={menuItemStyle}
                >
                  <span style={menuItemStyle}>Kontakt</span>
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

