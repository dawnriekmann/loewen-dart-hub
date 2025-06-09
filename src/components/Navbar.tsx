import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    letterSpacing: '0.2em',
    textTransform: 'uppercase' as const,
    fontVariant: 'normal' as const,
    verticalAlign: 'baseline' as const,
    height: 'auto',
    padding: '0',
    margin: '0'
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050c21]' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button - Left side on mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0 rounded-sm p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex items-center md:justify-start justify-center flex-1 md:flex-initial">
            <Link to="/">
              <img 
                src="https://i.imgur.com/iLQceVb.png" 
                alt="LÖWEN Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden md:block">
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
                        <Link 
                          to="/hb8"
                          className="block px-4 py-3 text-white hover:bg-blue-600/30 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                            <span>LÖWEN HB8</span>
                          </div>
                        </Link>
                        <Link 
                          to="/hb9" 
                          className="block px-4 py-3 text-white hover:bg-blue-600/30 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                            <span>LÖWEN HB9</span>
                          </div>
                        </Link>
                        <Link 
                          to="/hb10" 
                          className="block px-4 py-3 text-white hover:bg-blue-600/30 hover:border-l-4 hover:border-l-blue-400 rounded-md transition-all duration-200 hover:scale-105 font-medium tracking-wide focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
                            <span>LÖWEN HB10</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Kontakt */}
                <NavigationMenuItem>
                  <Link 
                    to="/kontakt" 
                    className="text-white hover:text-blue-300 font-franklin transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-0 rounded-sm px-1"
                    style={menuItemStyle}
                  >
                    <span style={menuItemStyle}>Kontakt</span>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Spacer for mobile to keep logo centered */}
          <div className="md:hidden w-10"></div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-slate-900/95 backdrop-blur-xl border border-blue-500/60 rounded-xl p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-white font-franklin text-lg font-semibold mb-3 tracking-wide">DARTAUTOMATEN</div>
                <Link 
                  to="/hb8"
                  className="block px-4 py-3 text-white hover:bg-blue-600/30 rounded-md transition-all duration-200 font-medium tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LÖWEN HB8
                </Link>
                <Link 
                  to="/hb9" 
                  className="block px-4 py-3 text-white hover:bg-blue-600/30 rounded-md transition-all duration-200 font-medium tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LÖWEN HB9
                </Link>
                <Link 
                  to="/hb10" 
                  className="block px-4 py-3 text-white hover:bg-blue-600/30 rounded-md transition-all duration-200 font-medium tracking-wide"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  LÖWEN HB10
                </Link>
              </div>
              
              <hr className="border-blue-500/30" />
              
              <Link 
                to="/kontakt" 
                className="block px-4 py-3 text-white hover:bg-blue-600/30 rounded-md transition-all duration-200 font-franklin text-lg font-semibold tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                KONTAKT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
