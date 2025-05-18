
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Clock } from "lucide-react";
import Logo from "@/components/Logo";
import SearchWidget from "@/components/SearchWidget";

const CarsHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white pt-8 pb-24">
      {/* Background image overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-[-1]" 
        style={{ backgroundImage: "url('/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center mb-6">
          <Logo size="md" className="mr-4" />
          <span className="bg-secondary/80 text-primary px-4 py-1 rounded-full text-sm font-bold inline-block backdrop-blur-sm">
            LOCATION DE VÉHICULES
          </span>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Votre liberté de
                <span className="block mt-2 text-secondary">mouvement</span>
              </h1>
              <p className="text-lg lg:text-xl mb-8 max-w-lg font-medium drop-shadow-md">
                De l'économique au luxe, avec ou sans chauffeur, nous proposons une large gamme de véhicules pour tous vos déplacements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-6 py-5 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                  asChild
                >
                  <Link to="#cars-categories">
                    Explorer les véhicules
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 text-lg px-6 py-5 font-semibold transition-all duration-300"
                  asChild
                >
                  <Link to="#chauffeur">
                    Service chauffeur
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Widget de recherche déplacé en bas et centré */}
        <div className="max-w-5xl mx-auto -mb-36 relative z-20">
          <SearchWidget />
        </div>
        
        {/* Car badge */}
        <motion.div 
          className="absolute top-8 right-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <Badge className="bg-white text-primary px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 shadow-lg">
            <Clock className="h-5 w-5 text-secondary" />
            Réservation 24h/24
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};

export default CarsHeroSection;
