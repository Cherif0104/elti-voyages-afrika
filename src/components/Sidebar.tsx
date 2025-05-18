
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Plane, Hotel, Car, Map, Crown, Phone, Trophy, Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { motion, AnimatePresence } from "framer-motion";

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
      if (window.scrollY > 80) {
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
    <>
      {/* Desktop Sidebar - Fixed to the left */}
      <div className="fixed left-0 top-0 z-40 h-full w-[290px] bg-white shadow-md hidden lg:flex flex-col">
        <div className="flex h-16 items-center px-6 border-b border-gray-100">
          <Link to="/" className="flex items-center">
            <Logo size="md" />
            <span className="text-xl font-poppins font-bold text-primary ml-2">ELTI VOYAGES</span>
          </Link>
        </div>
        
        <div className="py-6 px-4 flex-1 overflow-y-auto">
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary font-medium border-r-4 border-primary"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-gray-500")} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        <div className="p-6 border-t border-gray-100">
          <Button
            asChild
            className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Link to="#reservation">
              Réserver
            </Link>
          </Button>
          
          <div className="mt-4 flex justify-center items-center">
            <a href="tel:+212656136036" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Phone className="h-4 w-4" />
              <span className="font-medium">+212 656 13 60 36</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header - Full Width */}
      <header className={cn(
        "fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-sm border-b border-gray-100" 
          : "bg-white/90"
      )}>
        <div className="lg:ml-[290px] container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo for Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link to="/" className="flex items-center">
                <Logo size="md" />
                <span className="text-xl font-poppins font-bold text-primary ml-2 hidden sm:block">ELTI VOYAGES</span>
              </Link>
            </div>
            
            {/* Right Navigation */}
            <div className="flex items-center gap-3 md:gap-5 ml-auto">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="hidden md:flex text-sm font-medium hover:bg-primary/5"
              >
                <Link to="/billets-avion">Rechercher des vols</Link>
              </Button>
              
              {/* WhatsApp number */}
              <a href="tel:+212656136036" className="hidden md:flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span>+212 656 13 60 36</span>
              </a>
              
              {/* "Réserver" button */}
              <Button
                size="sm"
                asChild
                className="hidden md:flex bg-secondary hover:bg-secondary/90 text-white shadow-sm hover:shadow-md transition-all"
              >
                <Link to="#reservation">Réserver</Link>
              </Button>
              
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
              
              {/* User Profile / Host */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full border-gray-200 hover:bg-primary/5 transition-colors">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 shadow-md border-gray-100">
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5">
                    <Link to="#reservation">Réserver un voyage</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5">
                    <Link to="/contact">Contacter l'agence</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/5 focus:bg-primary/5">
                    <Link to="/billets-avion">Rechercher des vols</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex flex-col h-full pt-16">
              <div className="overflow-y-auto flex-grow">
                <nav className="flex flex-col p-4">
                  {navItems.map((item) => {
                    const isActive = 
                      location.pathname === item.path || 
                      (item.path === '/' && location.pathname === '/');
                    
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          "flex items-center gap-3 px-4 py-4 rounded-lg transition-all duration-200 border-b border-gray-50",
                          isActive
                            ? "bg-primary/5 text-primary font-medium"
                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className={cn("h-5 w-5", isActive ? "text-primary" : "text-gray-500")} />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
              
              <div className="p-6 border-t border-gray-100">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <Link to="#reservation" onClick={() => setIsOpen(false)}>
                    Réserver
                  </Link>
                </Button>
                
                <div className="mt-6 flex justify-between items-center">
                  <a href="tel:+212656136036" className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
                    <Phone className="h-5 w-5" />
                    <span>+212 656 13 60 36</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Bottom Navigation (Airbnb Style) */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white z-40 lg:hidden">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center justify-center pt-1 pb-0.5"
              >
                <div className={cn(
                  "p-1.5 rounded-full transition-colors",
                  isActive ? "bg-primary/10" : ""
                )}>
                  <item.icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-primary" : "text-gray-500"
                  )} />
                </div>
                <span className={cn(
                  "text-[10px] mt-0.5",
                  isActive ? "text-primary font-medium" : "text-gray-500"
                )}>
                  {item.name.split(" ")[0]}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
      
      {/* Floating "Réserver" button for mobile */}
      <div className="fixed bottom-6 right-6 lg:hidden z-50">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="rounded-full shadow-lg bg-secondary text-white px-6 py-6 h-auto shadow-secondary/20 hover:shadow-secondary/30"
            asChild
          >
            <Link to="#reservation">
              Réserver
            </Link>
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default Sidebar;
