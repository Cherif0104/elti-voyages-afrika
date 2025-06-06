import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Trophy, MapPin, AlertCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchWidget from "../SearchWidget";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const HeroSection = () => {
  const [countValues, setCountValues] = useState({
    teams: 0,
    stadiums: 0,
    matches: 0,
    days: 0
  });

  useEffect(() => {
    // Check if we need to scroll to header on page load
    if (window.location.hash === '#header') {
      setTimeout(() => {
        const headerElement = document.getElementById('header-section');
        if (headerElement) {
          headerElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }

    // Animated counter for stats
    const targetValues = {
      teams: 24,
      stadiums: 6,
      matches: 52,
      days: 14
    };
    
    const duration = 1500;
    const frameDuration = 16;
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setCountValues({
        teams: Math.floor(progress * targetValues.teams),
        stadiums: Math.floor(progress * targetValues.stadiums),
        matches: Math.floor(progress * targetValues.matches),
        days: Math.floor(progress * targetValues.days)
      });
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCountValues(targetValues);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, []);

  return (
    <section id="can2025-header" className="relative" style={{ backgroundColor: '#172554' }}>
      {/* Hero content */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[75vh]">
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          <div className="flex flex-wrap items-center">
            {/* Hero text */}
            <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center lg:text-left">
              {/* Logo - Positioned at top */}
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 inline-block lg:text-left"
              >
                <Logo size="lg" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              >
                <span className="block leading-tight">CAN 2025</span>
                <span className="text-secondary">au Maroc</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                <p className="text-yellow-300 text-xl md:text-2xl font-bold mb-4 drop-shadow-md">
                  Vivez la CAN 2025 et vos voyages d'exception avec ELTI VOYAGES
                </p>
                <p className="mt-4 text-lg text-white mb-8 font-medium drop-shadow-md max-w-lg mx-auto lg:mx-0">
                  Supportons le Sénégal vers la victoire avec nos offres exclusives pour la Coupe d'Afrique des Nations 2025.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="text-base px-6 py-3 font-medium bg-green-600 hover:bg-green-700 text-white transition-all duration-300"
                    asChild
                  >
                    <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                      En savoir plus
                    </a>
                  </Button>
                  
                  <Button
                    size="lg"
                    className="text-base px-6 py-3 font-medium bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                    asChild
                  >
                    <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                      Réserver
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            {/* Search widget */}
            <div className="w-full lg:w-5/12 px-4 mt-12 lg:mt-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="bg-white rounded-lg shadow-xl p-6"
              >
                <SearchWidget />
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Limited availability badge */}
        <div className="absolute top-8 right-8 z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Badge className="bg-secondary text-primary px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 shadow-lg">
              <Trophy className="h-5 w-5" />
              Places limitées !
            </Badge>
          </motion.div>
        </div>
      </div>
      
      {/* Stats cards section */}
      <div className="relative -mt-24 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-gray-50 rounded-md p-4 md:p-6 text-center border hover:border-primary transition-colors duration-300">
                    <div className="text-secondary mb-2">
                      <Trophy className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {countValues.teams}
                    </div>
                    <div className="text-base mt-1 text-gray-600 font-medium">
                      Équipes
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-md p-4 md:p-6 text-center border hover:border-primary transition-colors duration-300">
                    <div className="text-secondary mb-2">
                      <MapPin className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {countValues.stadiums}
                    </div>
                    <div className="text-base mt-1 text-gray-600 font-medium">
                      Stades
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-md p-4 md:p-6 text-center border hover:border-primary transition-colors duration-300">
                    <div className="text-secondary mb-2">
                      <Trophy className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {countValues.matches}
                    </div>
                    <div className="text-base mt-1 text-gray-600 font-medium">
                      Matchs
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-md p-4 md:p-6 text-center relative border hover:border-primary transition-colors duration-300">
                    {/* Urgence badge */}
                    <div className="absolute -top-3 -right-3">
                      <Badge className="bg-red-500 text-white shadow-md px-2 py-1 text-xs">
                        <AlertCircle className="h-3 w-3 mr-1" /> Urgence
                      </Badge>
                    </div>
                    <div className="text-secondary mb-2">
                      <Info className="h-8 w-8 mx-auto" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {countValues.days}
                    </div>
                    <div className="text-base mt-1 text-gray-600 font-medium">
                      Jours restants
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Partner logos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-wrap mt-8 justify-center"
          >
            <div className="w-full lg:w-10/12 mx-auto bg-white/90 p-4 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-center">
                <div className="flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/fr/8/84/Logo_Air_S%C3%A9n%C3%A9gal.png" alt="Air Senegal" className="h-10 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="https://logos-world.net/wp-content/uploads/2021/08/Royal-Air-Maroc-Logo.png" alt="Royal Air Maroc" className="h-10 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="https://static.designmynight.com/uploads/2023/04/fairmont-logo-colour-primary-rgb.png" alt="Fairmont" className="h-10 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="https://1000logos.net/wp-content/uploads/2020/02/Four-Seasons-Logo-1997.png" alt="Four Seasons" className="h-10 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="https://www.hotelsbarriere.com/content/dam/hotels-barriere/logos/barriere/logos-barriere.svg" alt="Barriere" className="h-10 object-contain" />
                </div>
                <div className="flex justify-center">
                  <img src="https://logos-world.net/wp-content/uploads/2023/02/Barcelo-Logo-500x281.png" alt="Barcelo" className="h-10 object-contain" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
