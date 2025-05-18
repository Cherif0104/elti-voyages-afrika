
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
      days: 14 // Changed to match the mockup showing 14 days remaining
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
    <section className="pt-0 lg:pl-0 relative overflow-hidden">
      <div className="h-[700px] md:h-[800px] relative overflow-hidden">
        {/* Background image with dark blue overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523361426107-57cd540162e7?q=80&w=2940&auto=format&fit=crop')",
            backgroundPosition: "center 45%"
          }}
        />
        <div className="absolute inset-0 bg-primary/95" /> {/* Solid dark blue overlay */}
        
        {/* CAF Logo - Positioned at top left to match mockup */}
        <div className="absolute top-10 left-10 z-10">
          <div className="bg-white p-2 rounded-full w-24 h-24 flex items-center justify-center">
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Confederation_of_African_Football_logo.svg/1200px-Confederation_of_African_Football_logo.svg.png" 
              alt="CAF Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
        
        {/* Content container */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">
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
            </div>
          </div>
        </div>
        
        {/* Limited availability badge - positioned to match mockup */}
        <div className="absolute top-8 right-8 z-10">
          <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Places limitées !
          </Badge>
        </div>
        
        {/* Stats counters grid - Updated to match mockup */}
        <div className="absolute bottom-0 left-0 right-0 px-4 z-10 bg-primary/30 backdrop-blur-sm py-8">
          <div className="container mx-auto">
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-primary/40 backdrop-blur-sm rounded-md p-6 text-center">
                <div className="text-secondary mb-2">
                  <Trophy className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-4xl font-bold text-white">
                  {countValues.teams}
                </div>
                <div className="text-base mt-1 text-white/80">
                  Équipes
                </div>
              </div>
              
              <div className="bg-primary/40 backdrop-blur-sm rounded-md p-6 text-center">
                <div className="text-secondary mb-2">
                  <MapPin className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-4xl font-bold text-white">
                  {countValues.stadiums}
                </div>
                <div className="text-base mt-1 text-white/80">
                  Stades
                </div>
              </div>
              
              <div className="bg-primary/40 backdrop-blur-sm rounded-md p-6 text-center">
                <div className="text-secondary mb-2">
                  <Calendar className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-4xl font-bold text-white">
                  {countValues.matches}
                </div>
                <div className="text-base mt-1 text-white/80">
                  Matchs
                </div>
              </div>
              
              <div className="bg-primary/40 backdrop-blur-sm rounded-md p-6 text-center relative">
                {/* Urgence badge */}
                <div className="absolute -top-3 -right-3">
                  <Badge className="bg-secondary text-white shadow-md px-2 py-1 text-xs">
                    <AlertCircle className="h-3 w-3 mr-1" /> Urgence
                  </Badge>
                </div>
                <div className="text-secondary mb-2">
                  <Info className="h-8 w-8 mx-auto" />
                </div>
                <div className="text-4xl font-bold text-white">
                  {countValues.days}
                </div>
                <div className="text-base mt-1 text-white/80">
                  Jours restants
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Info cards at bottom - Added to match mockup */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-white shadow-lg border-none">
                <CardContent className="p-4 flex items-center">
                  <div className="bg-secondary/10 rounded-full p-2 mr-3">
                    <Trophy className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">35ème Édition</h3>
                    <p className="text-xs text-gray-500">Compétition de football africain</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-none">
                <CardContent className="p-4 flex items-center">
                  <div className="bg-secondary/10 rounded-full p-2 mr-3">
                    <Calendar className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">Été 2025</h3>
                    <p className="text-xs text-gray-500">Dates précises à confirmer</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg border-none">
                <CardContent className="p-4 flex items-center">
                  <div className="bg-secondary/10 rounded-full p-2 mr-3">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary text-sm">Maroc</h3>
                    <p className="text-xs text-gray-500">Pays hôte officiel</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
