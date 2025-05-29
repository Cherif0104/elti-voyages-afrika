
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from '@/components/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mainNavItems = [
    { name: "Accueil", path: "/" },
    { name: "CAN 2025", path: "/can2025" },
    { name: "Vols", path: "/billets-avion" },
    { name: "Hébergements", path: "/hotels" },
    { name: "Voitures", path: "/voitures" },
    { name: "Excursions", path: "/excursions" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="md" />
            <span className="text-xl font-bold text-primary">ELTI VOYAGES</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button size="sm" className="hidden md:flex" asChild>
              <a href="tel:+212614082524">
                <Phone className="h-4 w-4 mr-2" />
                Appeler
              </a>
            </Button>
            
            <Button size="sm" className="bg-secondary text-primary hover:bg-secondary/90" asChild>
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">Réserver</a>
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t py-4">
            <nav className="flex flex-col space-y-2">
              {mainNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="py-2 text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
