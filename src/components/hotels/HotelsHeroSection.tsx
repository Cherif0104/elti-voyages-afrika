
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Users, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HotelsHeroSection = () => {
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
              Hébergements premium
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Hébergements
              <span className="block text-secondary">de Luxe</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Séjournez dans les plus beaux hôtels du Maroc et du Sénégal avec nos partenaires de confiance
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

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-white/80">Hôtels partenaires</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">5★</div>
                <div className="text-white/80">Catégorie maximum</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">12</div>
                <div className="text-white/80">Villes couvertes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">24h</div>
                <div className="text-white/80">Service client</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HotelsHeroSection;
