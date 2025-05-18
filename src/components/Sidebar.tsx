
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
      if (window.scrollY > 80) { // Changed from 50 to 80 per requirements
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
      "fixed top-0 z-50 w-full backdrop-blur-md transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-sm border-b border-gray-100" 
        : "bg-white/85"
    )}>
      <div className="container mx-auto px-4 max-w-[1320px]">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center">
              <Logo size="md" />
              <span className="text-xl font-poppins font-bold text-primary ml-2 hidden sm:block">ELTI VOYAGES</span>
            </Link>
          </div>
          
          {/* Center Search Button (Airbnb-like) */}
          <div className="hidden md:flex items-center">
            <motion.div 
              className="bg-white rounded-full shadow-sm border border-gray-200 flex items-center h-12 pl-5 pr-2 hover:shadow-md transition-all cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <div className="mr-4">
                <span className="font-medium text-sm">Destination</span>
              </div>
              <div className="border-l border-gray-200 h-6 mx-2"></div>
              <div className="mr-4">
                <span className="font-medium text-sm">Dates</span>
              </div>
              <div className="border-l border-gray-200 h-6 mx-2"></div>
              <div className="mr-2">
                <span className="font-medium text-sm">Voyageurs</span>
              </div>
              <Button size="icon" variant="secondary" className="rounded-full bg-accent flex-shrink-0">
                <Search className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          
          {/* Right Navigation */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden md:flex text-sm"
            >
              <Link to="/billets-avion">Rechercher des vols</Link>
            </Button>
            
            {/* WhatsApp number */}
            <a href="tel:+212656136036" className="hidden md:flex items-center text-primary font-medium">
              <Phone className="h-4 w-4 mr-1" />
              <span>+212 656 13 60 36</span>
            </a>
            
            {/* "Réserver" button */}
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="hidden md:flex"
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
                <Button variant="outline" size="icon" className="rounded-full border-gray-200">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild>
                  <Link to="#reservation" className="cursor-pointer">Réserver un voyage</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">Contacter l'agence</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/billets-avion" className="cursor-pointer">Rechercher des vols</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      {/* Desktop Sidebar (≥1024px) */}
      <div className="fixed left-0 top-0 bottom-0 w-60 bg-white shadow-md border-r border-gray-100 z-40 hidden lg:flex flex-col">
        <div className="flex-grow p-4 overflow-y-auto">
          <div className="flex items-center mb-8 pl-2">
            <Logo size="sm" />
            <span className="text-lg font-poppins font-bold text-primary ml-2">ELTI VOYAGES</span>
          </div>
          
          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = 
                location.pathname === item.path || 
                (item.path === '/' && location.pathname === '/');
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-md transition-colors",
                    isActive
                      ? "bg-primary/5 text-accent border-r-2 border-accent"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", isActive ? "text-accent" : "text-primary/60")} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Sticky "Réserver" button */}
        <div className="p-4 border-t border-gray-100">
          <Button
            variant="secondary"
            className="w-full bg-primary hover:bg-primary/90"
            asChild
          >
            <Link to="#reservation">
              Réserver
            </Link>
          </Button>
        </div>
      </div>
      
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
                          "flex items-center gap-3 px-3 py-4 rounded-md transition-colors border-b border-gray-100",
                          isActive
                            ? "bg-primary/5 text-accent"
                            : "text-gray-700 hover:bg-gray-50"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className={cn("h-5 w-5", isActive ? "text-accent" : "text-primary/60")} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
              
              <div className="p-4 border-t border-gray-100">
                <Button
                  asChild
                  variant="secondary"
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
                  "p-1.5 rounded-full",
                  isActive ? "bg-primary/10" : ""
                )}>
                  <item.icon className={cn(
                    "h-5 w-5",
                    isActive ? "text-accent" : "text-gray-500"
                  )} />
                </div>
                <span className={cn(
                  "text-[10px] mt-0.5",
                  isActive ? "text-accent font-medium" : "text-gray-500"
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
            variant="secondary" 
            className="rounded-full shadow-lg bg-primary text-white px-6 py-6 h-auto"
            asChild
          >
            <Link to="#reservation">
              Réserver
            </Link>
          </Button>
        </motion.div>
      </div>
    </header>
  );
};

export default Sidebar;
