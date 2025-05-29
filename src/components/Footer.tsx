
import { ExternalLink, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Logo from './Logo';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 max-w-[1320px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <Logo size="lg" />
              <span className="text-2xl font-poppins font-bold ml-3">ELTI VOYAGES</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Spécialistes du voyage au Maroc et au Sénégal depuis 2010. ELTI VOYAGES vous propose des expériences sur mesure pour découvrir les plus beaux trésors de l'Afrique.
            </p>
            <div className="flex space-x-4 mb-6">
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/can2025" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  CAN 2025
                </Link>
              </li>
              <li>
                <Link to="/billets-avion" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Billets d'avion
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Hôtels
                </Link>
              </li>
              <li>
                <Link to="/voitures" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Voitures
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Nos services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/excursions" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Excursions
                </Link>
              </li>
              <li>
                <Link to="/guides" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Guides de voyage
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Destinations
                </Link>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Services aux entreprises
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-accent transition-colors hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-white/20 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <span className="text-white/80">17 Rue El Oraibi Jilali, Casablanca, Maroc</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <a href="tel:+212014082524" className="text-white/80 hover:text-white transition-colors">
                  +212 014 082 524
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 flex-shrink-0 text-accent" />
                <a href="mailto:contact@eltivoyages.com" className="text-white/80 hover:text-white transition-colors">
                  contact@eltivoyages.com
                </a>
              </li>
            </ul>
            
            <Button 
              variant="secondary"
              asChild 
              className="mt-6 bg-accent text-primary hover:bg-accent/90 w-full group"
            >
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                <Phone className="h-4 w-4 mr-2 group-hover:animate-pulse" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60 text-xs">
            &copy; {currentYear} ELTI VOYAGES. Tous droits réservés.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-white/60 hover:text-accent text-xs transition-colors">Politique de confidentialité</a>
            <a href="#" className="text-white/60 hover:text-accent text-xs transition-colors">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
