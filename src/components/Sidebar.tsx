
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Plane, Hotel, Car, Map, Crown, Phone, Trophy, Menu, X, ChevronDown } from 'lucide-react';
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { motion } from "framer-motion";

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Close the mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

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
    <header className={cn(
      "fixed top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
      isScrolled ? "border-b border-border/40 bg-white/95 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <Logo size="md" />
              <span className="text-xl font-poppins font-bold text-primary ml-2 hidden sm:block">ELTI VOYAGES</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList className="flex-wrap justify-center">
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
                          "px-3 py-2", // Reduce padding for better fit
                          isActive ? "bg-primary/10 text-primary" : ""
                        )}
                      >
                        <item.icon className={cn("h-4 w-4 mr-1", isActive ? "text-primary" : "text-gray-500")} />
                        <span className="whitespace-nowrap">{item.name}</span>
                      </Link>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsOpen(!isOpen)}
              className="relative z-50"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
          
          {/* CTA Button */}
          <div className="hidden sm:block">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 whitespace-nowrap"
            >
              <Link to="#reservation">
                Réserver
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="flex flex-col h-full pt-16">
            <div className="overflow-y-auto flex-grow">
              <nav className="flex flex-col space-y-1 p-4">
                {navItems.map((item) => {
                  const isActive = 
                    location.pathname === item.path || 
                    (item.path === '/' && location.pathname === '/');
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-3 py-4 rounded-md transition-colors border-b border-gray-100",
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-primary/60")} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90"
              >
                <Link to="#reservation" onClick={() => setIsOpen(false)}>
                  Réserver
                </Link>
              </Button>
              
              <div className="mt-6 flex justify-between items-center">
                <a href="tel:+212656136036" className="flex items-center gap-2 text-primary">
                  <Phone className="h-4 w-4" />
                  <span>+212 656 13 60 36</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Sidebar;
