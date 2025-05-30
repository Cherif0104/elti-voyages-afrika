
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchWidget from "./SearchWidget";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative text-white" style={{ backgroundColor: '#172554' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block text-secondary font-semibold mb-2 text-lg drop-shadow-md">
                Votre partenaire de voyage officiel
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Voyagez au cœur de 
                <span className="block mt-2 text-secondary">l'Afrique</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8 max-w-lg font-medium drop-shadow-md">
                Billets d'avion, hôtels, voitures et packs pour la CAN 2025. Votre voyage sur mesure entre l'Afrique et le monde entier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 font-semibold bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    En savoir plus
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    Réserver
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">Rechercher</h2>
              <SearchWidget />
            </div>
          </div>
        </div>
        
        {/* Limited availability badge */}
        <motion.div 
          className="absolute top-8 right-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Badge className="bg-secondary text-primary px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 shadow-lg animate-pulse">
            <Trophy className="h-5 w-5" />
            Places limitées !
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
