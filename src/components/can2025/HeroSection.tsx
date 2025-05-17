
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-20 lg:pl-64 relative">
      <div className="bg-placeholder h-[600px] md:h-[700px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8 }}
              className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                CAN 2025 au Maroc
              </h1>
              <p className="text-white/90 text-xl md:text-2xl mb-8">
                Vivez la passion du football africain avec nos offres exclusives pour la Coupe d'Afrique des Nations 2025 au Maroc.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  to="#reservation"
                  className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-4 rounded-lg transition-colors duration-300"
                >
                  Réserver mon pack
                </Link>
                <Link
                  to="#news"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg transition-colors duration-300 border"
                >
                  Dernières actualités
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
