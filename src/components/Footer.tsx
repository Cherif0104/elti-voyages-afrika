
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-12 lg:pl-64">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Logo size="md" />
              <h3 className="text-xl font-bold font-poppins ml-2">ELTI VOYAGES</h3>
            </div>
            <p className="text-sm font-light italic">« Voyagez plus loin. Vivez mieux. »</p>
            <div className="pt-4">
              <p className="text-sm">17 Rue El Oraibi Jilali,</p>
              <p className="text-sm">Casablanca, Maroc</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Nos services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/billets-avion" className="text-sm hover:text-accent transition-colors">
                  Billets d'avion
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-sm hover:text-accent transition-colors">
                  Hôtels
                </Link>
              </li>
              <li>
                <Link to="/voitures" className="text-sm hover:text-accent transition-colors">
                  Location de véhicules
                </Link>
              </li>
              <li>
                <Link to="/excursions" className="text-sm hover:text-accent transition-colors">
                  Excursions & circuits
                </Link>
              </li>
              <li>
                <Link to="/vip" className="text-sm hover:text-accent transition-colors">
                  Services VIP
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Special Programs */}
          <div>
            <h4 className="text-lg font-bold mb-4">Programmes</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-accent transition-colors">
                  CAN 2025
                </Link>
              </li>
              <li>
                <Link to="/vip" className="text-sm hover:text-accent transition-colors">
                  Voyages religieux
                </Link>
              </li>
              <li>
                <Link to="/vip" className="text-sm hover:text-accent transition-colors">
                  Événements sportifs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-accent transition-colors">
                  Entreprises & MICE
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm">
                <a 
                  href="mailto:contact@eltivoyages.com"
                  className="hover:text-accent transition-colors"
                >
                  contact@eltivoyages.com
                </a>
              </li>
              <li className="text-sm">
                <a 
                  href="https://wa.me/212656136036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: +212 656 13 60 36
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <p className="text-xs">
                Agence de voyages agréée
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} ELTI VOYAGES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
