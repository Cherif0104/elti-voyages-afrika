
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Trophy, Menu, X, Search, Book, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';
import DesktopNav from '@/components/navigation/DesktopNav';
import MobileNav from '@/components/navigation/MobileNav';
import UserMenu from '@/components/navigation/UserMenu';

type NavItem = {
  name: string;
  path: string;
  icon?: React.ReactNode;
};

const navItems: NavItem[] = [
  { name: "Accueil", path: "/" },
  { name: "CAN 2025", path: "/can2025", icon: <Trophy className="h-4 w-4 mr-1" /> },
  { name: "Billets d'avion", path: "/billets-avion" },
  { name: "Hôtels", path: "/hotels" },
  { name: "Voitures", path: "/voitures" },
  { name: "Excursions", path: "/excursions" },
  { name: "Destinations", path: "/destinations", icon: <Compass className="h-4 w-4 mr-1" /> },
  { name: "Guides de voyage", path: "/guides", icon: <Book className="h-4 w-4 mr-1" /> },
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled 
        ? "bg-white shadow-md border-b border-gray-200" 
        : "bg-white"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo size="md" />
            {/* Removed the ELTI VOYAGES text */}
          </Link>
          
          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />
          
          {/* Right side elements */}
          <div className="flex items-center gap-4">
            {/* Search button */}
            <Button
              variant="outline"
              size="icon"
              className="hidden md:flex border-gray-300"
            >
              <Search className="h-5 w-5 text-primary" />
            </Button>
            
            {/* "Réserver" button */}
            <Button
              size="sm"
              asChild
              className="hidden md:flex bg-secondary text-primary hover:bg-secondary/90"
            >
              <Link to="#reservation">Réserver</Link>
            </Button>
            
            {/* User Profile */}
            <UserMenu />
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                onClick={toggleMenu}
                className="relative z-50"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <MobileNav 
        isOpen={isOpen} 
        navItems={navItems} 
        onClose={() => setIsOpen(false)} 
      />
    </header>
  );
};

export default Navbar;
