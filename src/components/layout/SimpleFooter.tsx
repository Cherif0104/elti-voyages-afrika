import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';
const SimpleFooter = () => {
  return <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo size="md" />
              <span className="text-xl font-bold">ELTI VOYAGES</span>
            </div>
            <p className="text-white/80 mb-4">
              Votre partenaire de confiance pour découvrir l'Afrique. 
              Spécialistes du voyage au Maroc et au Sénégal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><Link to="/can2025" className="text-white/80 hover:text-white transition-colors">CAN 2025</Link></li>
              <li><Link to="/billets-avion" className="text-white/80 hover:text-white transition-colors">Billets d'avion</Link></li>
              <li><Link to="/hotels" className="text-white/80 hover:text-white transition-colors">Hébergements</Link></li>
              <li><Link to="/voitures" className="text-white/80 hover:text-white transition-colors">Location de voitures</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="py-[12px] px-[13px] text-left">Direction commerciale Maroc 
+212 614 082 524 

 Direction Commercial Sénégal  
Mr. Papis Sagna 
+221 77 474 83 74 
+221 78 429 46 46</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@elti-voyages.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Casablanca, Maroc</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            © 2024 ELTI VOYAGES. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>;
};
export default SimpleFooter;