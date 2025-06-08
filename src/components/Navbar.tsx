
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Facebook, Linkedin } from "lucide-react";

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
    letterSpacing: '0.15em', // Erweiterte Buchstabenabstände
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
          <div className="flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="flex items-center space-x-8">
                {/* Dartautomaten Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-white hover:text-gray-200 font-franklin transition-colors border-0 outline-0 p-0 h-auto min-h-0 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:ml-2 [&>svg]:stroke-[2.5] data-[state=open]:bg-transparent focus:bg-transparent"
                    style={menuItemStyle}
                  >
                    <span style={menuItemStyle}>Dartautomaten</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="bg-white/5 backdrop-blur-xl border border-blue-400/40 rounded-xl shadow-2xl p-4 w-56">
                      <div className="space-y-1">
                        <a 
                          href="#" 
                          className="block px-4 py-3 text-white hover:bg-blue-500/15 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                            <span>LÖWEN HB8</span>
                          </div>
                        </a>
                        <a 
                          href="#" 
                          className="block px-4 py-3 text-white hover:bg-blue-500/15 hover:border-l-4 hover:border-l-cyan-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                            <span>LÖWEN HB9</span>
                          </div>
                        </a>
                        <a 
                          href="#" 
                          className="block px-4 py-3 text-white hover:bg-blue-500/15 hover:border-l-4 hover:border-l-indigo-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
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
                    className="text-white hover:text-gray-200 font-franklin transition-colors"
                    style={menuItemStyle}
                  >
                    <span style={menuItemStyle}>Kontakt</span>
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-8">
              <a 
                href="#" 
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
