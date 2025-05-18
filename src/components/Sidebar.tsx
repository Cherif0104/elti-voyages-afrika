
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Plane, Hotel, Car, Map, Crown, Phone, Trophy, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

type NavItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { name: "Accueil – CAN 2025", path: "/", icon: Home },
  { name: "CAN 2025", path: "/can2025", icon: Trophy },
  { name: "Billets d'avion", path: "/billets-avion", icon: Plane },
  { name: "Hôtels", path: "/hotels", icon: Hotel },
  { name: "Voitures", path: "/voitures", icon: Car },
  { name: "Excursions", path: "/excursions", icon: Map },
  { name: "VIP / Conciergerie", path: "/vip", icon: Crown },
  { name: "Contacts & Support", path: "/contact", icon: Phone },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    // Close the mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === '/') {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY;

        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop - 100;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute('id') || '';

          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection('#' + sectionId);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
            <span className="text-xl font-poppins font-bold text-primary ml-2 hidden md:block">ELTI VOYAGES</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => {
                const isActive = 
                  location.pathname === item.path || 
                  (item.path === '/' && location.pathname === '/') ||
                  (activeSection && item.name.toLowerCase().includes(activeSection.substring(1)));
                
                return (
                  <NavigationMenuItem key={item.path}>
                    <Link
                      to={item.path}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        isActive ? "bg-primary/10 text-primary" : ""
                      )}
                    >
                      <item.icon className={cn("h-4 w-4 mr-2", isActive ? "text-primary" : "text-gray-500")} />
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="bg-white shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90"
          >
            <Link to="#reservation">
              Réserver
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-1 p-4 bg-white border-t">
            {navItems.map((item) => {
              const isActive = 
                location.pathname === item.path || 
                (item.path === '/' && location.pathname === '/');
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-white" : "text-primary")} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 mt-4"
            >
              <Link to="#reservation" onClick={() => setIsOpen(false)}>
                Réserver
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Sidebar;
