
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

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
    lineHeight: '1',
    fontWeight: '500',
    letterSpacing: '0.05em',
    textTransform: 'none' as const,
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
                  className="bg-transparent text-white hover:text-gray-200 font-franklin transition-colors border-0 outline-0 p-0 h-auto min-h-0"
                  style={menuItemStyle}
                >
                  <span style={menuItemStyle}>Dartautomaten</span>
                  <ChevronDown
                    className="ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                    aria-hidden="true"
                    style={{ fontSize: '0.75rem', lineHeight: '1' }}
                  />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-48">
                    <div className="space-y-2">
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        Löwen HB8
                      </a>
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        Löwen HB9
                      </a>
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
                      >
                        Löwen HB10
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
                  Kontakt
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
