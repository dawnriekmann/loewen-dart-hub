
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
    letterSpacing: '0.05em',
    textTransform: 'none' as const,
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
                  className="bg-transparent text-white hover:text-gray-200 font-franklin transition-colors border-0 outline-0 p-0 h-auto min-h-0 [&>svg]:w-3 [&>svg]:h-3 [&>svg]:ml-1"
                  style={menuItemStyle}
                >
                  <span style={menuItemStyle}>Dartautomaten</span>
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
