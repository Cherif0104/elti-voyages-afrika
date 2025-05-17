
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, MapPin } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="pt-20 lg:pl-64 relative">
      <div className="h-[700px] md:h-[800px] relative overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523361426107-57cd540162e7?q=80&w=2940&auto=format&fit=crop')",
            backgroundPosition: "center 45%"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        
        {/* CAF Logo - Positioned at top left */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute top-10 left-10"
        >
          <div className="bg-white p-2 rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Confederation_of_African_Football_logo.svg/1200px-Confederation_of_African_Football_logo.svg.png" 
                alt="CAF Logo"
                className="w-16 h-16 object-contain"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Content container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            >
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                <span className="block">CAN 2025</span>
                <span className="text-secondary">au Maroc</span>
              </h1>
              <p className="text-white/95 text-xl md:text-2xl mb-8 font-light">
                Vivez la passion du football africain avec nos offres exclusives pour la Coupe d'Afrique des Nations 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  size="lg"
                  className="text-lg px-8 py-7 font-semibold"
                  asChild
                >
                  <Link to="#reservation">
                    Réserver mon pack
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-7 font-semibold"
                  asChild
                >
                  <Link to="#news">
                    Dernières actualités
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Quick stats cards - at the bottom of the hero */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div variants={item}>
                <Card className="bg-white shadow-xl border-none">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-secondary/10 rounded-full p-3 mr-4">
                      <Trophy className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">35ème Édition</h3>
                      <p className="text-sm text-gray-500">Compétition de football africain</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={item}>
                <Card className="bg-white shadow-xl border-none">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-secondary/10 rounded-full p-3 mr-4">
                      <Calendar className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Été 2025</h3>
                      <p className="text-sm text-gray-500">Dates précises à confirmer</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={item}>
                <Card className="bg-white shadow-xl border-none">
                  <CardContent className="p-6 flex items-center">
                    <div className="bg-secondary/10 rounded-full p-3 mr-4">
                      <MapPin className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Maroc</h3>
                      <p className="text-sm text-gray-500">Pays hôte officiel</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
