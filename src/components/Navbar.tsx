
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="px-8 md:px-16 lg:px-24 py-4">
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
                <NavigationMenuTrigger className="bg-transparent text-white hover:text-gray-200 text-lg font-medium">
                  Dartautomaten
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
                  className="text-white hover:text-gray-200 text-lg font-medium transition-colors"
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
