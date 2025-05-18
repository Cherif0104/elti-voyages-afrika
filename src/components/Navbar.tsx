
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Trophy, Phone, Menu, X, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = {
  name: string;
  path: string;
};

const navItems: NavItem[] = [
  { name: "Accueil", path: "/" },
  { name: "CAN 2025", path: "/can2025" },
  { name: "Billets d'avion", path: "/billets-avion" },
  { name: "Hôtels", path: "/hotels" },
  { name: "Voitures", path: "/voitures" },
  { name: "Excursions", path: "/excursions" },
  { name: "VIP / Conciergerie", path: "/vip" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Close the mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-sm border-b border-gray-100" 
        : "bg-white/95"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="md" />
            <span className="text-xl font-bold text-primary ml-2 hidden sm:block">ELTI VOYAGES</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/5 text-primary"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Right side elements */}
          <div className="flex items-center gap-4">
            {/* Phone number */}
            <a href="tel:+212656136036" className="hidden md:flex items-center text-primary font-medium">
              <Phone className="h-4 w-4 mr-1" />
              <span>+212 656 13 60 36</span>
            </a>
            
            {/* Search button */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:flex"
            >
              <Search className="h-5 w-5" />
            </Button>
            
            {/* "Réserver" button */}
            <Button
              size="sm"
              asChild
              className="hidden md:flex"
            >
              <Link to="#reservation">Réserver</Link>
            </Button>
            
            {/* User Profile */}
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
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
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
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-16">
          <div className="flex flex-col h-full">
            <div className="overflow-y-auto flex-grow">
              <nav className="flex flex-col p-4">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        "flex items-center px-3 py-4 rounded-md transition-colors border-b border-gray-100",
                        isActive
                          ? "bg-primary/5 text-primary"
                          : "text-gray-700 hover:bg-gray-50"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
            
            <div className="p-4 border-t border-gray-100">
              <Button
                asChild
                className="w-full"
              >
                <Link to="#reservation" onClick={() => setIsOpen(false)}>
                  Réserver
                </Link>
              </Button>
              
              <div className="mt-6 flex justify-center items-center">
                <a href="tel:+212656136036" className="flex items-center gap-2 text-primary">
                  <Phone className="h-4 w-4" />
                  <span>+212 656 13 60 36</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
