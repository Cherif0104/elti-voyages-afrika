
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, MapPin, Clock, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CarsHeroSection = () => {
  return (
    <section className="relative text-white py-20" style={{ backgroundColor: '#172554' }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 px-4 py-2 bg-secondary text-primary">
              <Car className="h-4 w-4 mr-2" />
              Location de véhicules
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Location de
              <span className="block text-secondary">Véhicules</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Explorez le Maroc et le Sénégal en toute liberté avec notre flotte de véhicules premium
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <Car className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-white/80">Véhicules récents</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-white/80">Assurance incluse</div>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-white/80">Service 24h/24</div>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
                <div className="text-white/80">Livraison gratuite</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarsHeroSection;
