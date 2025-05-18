
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, AlertCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countValues, setCountValues] = useState({
    teams: 0,
    stadiums: 0,
    matches: 0,
    days: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animated counter for stats
    const targetValues = {
      teams: 24,
      stadiums: 6,
      matches: 52,
      days: calculateDaysRemaining()
    };
    
    const duration = 1500; // Animation duration in ms
    const frameDuration = 16; // ms per frame (approx 60fps)
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
  
  // Calculate days remaining until CAN 2025 (estimated June 1st, 2025)
  const calculateDaysRemaining = () => {
    const today = new Date();
    const eventDate = new Date(2025, 5, 1); // June 1st, 2025
    const diffTime = eventDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

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

  // Shine animation for buttons and cards
  const shineAnimation = {
    initial: { x: "-100%", opacity: 0.5 },
    animate: {
      x: "100%",
      opacity: 0,
      transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }
    }
  };
  
  // Floating animation for decorative elements
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <section className="pt-20 lg:pl-64 relative overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        initial={{ y: 0 }}
        animate={{ y: [-20, 0, -20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 -z-10"
        style={{ willChange: "transform" }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523361426107-57cd540162e7?q=80&w=2940&auto=format&fit=crop')",
            backgroundPosition: "center 45%",
            filter: "blur(2px)"
          }}
        />
      </motion.div>

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
        
        {/* Decorative floating elements */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-40 left-20 w-12 h-12 text-white/10"
        >
          <Trophy className="w-full h-full" />
        </motion.div>
        
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-40 right-20 w-16 h-16 text-white/10"
        >
          <Calendar className="w-full h-full" />
        </motion.div>
        
        {/* CAF Logo - Positioned at top left with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
          className="absolute top-10 left-10 z-10"
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
        
        {/* Content container with improved animations */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="max-w-2xl mx-auto md:mx-0 text-center md:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                  <span className="block">CAN 2025</span>
                  <motion.span 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="text-secondary"
                  >
                    au Maroc
                  </motion.span>
                </h1>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-white/95 text-xl md:text-2xl mb-8 font-light"
              >
                Vivez la passion du football africain avec nos offres exclusives pour la Coupe d'Afrique des Nations 2025.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-7 font-semibold relative overflow-hidden group"
                    asChild
                  >
                    <Link to="#reservation">
                      Réserver mon pack
                      <motion.span 
                        variants={shineAnimation}
                        initial="initial"
                        animate="animate"
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </Link>
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
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
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Event stats with animated counters */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-0 right-0 px-4 z-10"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center shadow-md"
              >
                <div className="flex items-center justify-center mb-3">
                  <Trophy className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countValues.teams}
                </div>
                <div className="text-sm md:text-base mt-1 text-white/80">
                  Équipes
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center shadow-md"
              >
                <div className="flex items-center justify-center mb-3">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countValues.stadiums}
                </div>
                <div className="text-sm md:text-base mt-1 text-white/80">
                  Stades
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center shadow-md"
              >
                <div className="flex items-center justify-center mb-3">
                  <Calendar className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countValues.matches}
                </div>
                <div className="text-sm md:text-base mt-1 text-white/80">
                  Matchs
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(255, 255, 255, 0.2)" }}
                transition={{ duration: 0.3 }}
                className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center shadow-md relative"
              >
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 -right-2"
                >
                  <Badge className="bg-secondary text-white shadow-lg">
                    <AlertCircle className="h-3 w-3 mr-1" /> Urgence
                  </Badge>
                </motion.div>
                <div className="flex items-center justify-center mb-3">
                  <Info className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white">
                  {countValues.days}
                </div>
                <div className="text-sm md:text-base mt-1 text-white/80">
                  Jours restants
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Quick stats cards - at the bottom of the hero */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4"
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <motion.div 
                variants={item}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 44, 95, 0.35)" }}
                className="transform-gpu"
              >
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
              
              <motion.div 
                variants={item}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 44, 95, 0.35)" }}
                className="transform-gpu"
              >
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
              
              <motion.div 
                variants={item}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 44, 95, 0.35)" }}
                className="transform-gpu"
              >
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
        
        {/* Limited availability floating indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute top-32 right-10 z-10"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 5px 15px rgba(255,255,255,0.1)", 
                "0 8px 25px rgba(255,255,255,0.2)", 
                "0 5px 15px rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-red-500/80 text-white px-4 py-2 rounded-full backdrop-blur-sm flex items-center gap-2 shadow-lg"
          >
            <Calendar className="h-5 w-5" />
            <span className="font-medium">Places limitées !</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
