
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://i.imgur.com/iLQceVb.png" 
              alt="LÖWEN Logo"
              className="h-12 w-auto"
            />
          </div>
          
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {/* Dartautomaten */}
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#dartautomaten"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    "text-primary hover:text-primary"
                  )}
                >
                  Dartautomaten
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* LÖWEN Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-primary hover:text-primary">
                  LÖWEN Geräte
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[300px]">
                    <NavigationMenuLink 
                      href="#hb8"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-primary">Löwen HB8</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Professioneller Dartautomat für höchste Ansprüche
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="#hb9"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-primary">Löwen HB9</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Moderne Dart-Technologie mit innovativen Features
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink 
                      href="#hb10"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none text-primary">Löwen HB10</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Neueste Generation der LÖWEN Dartautomaten
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Kontakt */}
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#kontakt"
                  className={cn(
                    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                    "text-primary hover:text-primary"
                  )}
                >
                  Kontakt
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
