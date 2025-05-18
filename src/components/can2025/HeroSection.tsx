
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, MapPin, AlertCircle, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import SearchWidget from "../SearchWidget";

const HeroSection = () => {
  const [countValues, setCountValues] = useState({
    teams: 0,
    stadiums: 0,
    matches: 0,
    days: 0
  });

  useEffect(() => {
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

  return (
    <section className="relative bg-primary">
      {/* Hero content */}
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center" style={{ minHeight: "75vh" }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523361426107-57cd540162e7?q=80&w=2940&auto=format&fit=crop')",
          backgroundPosition: "center 45%"
        }}>
          <span className="w-full h-full absolute opacity-75 bg-primary"></span>
        </div>
        
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center">
            {/* Hero text */}
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center lg:text-left">
              {/* CAF Logo - Positioned at top left */}
              <div className="absolute top-10 left-10 hidden lg:block">
                <div className="bg-white p-2 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Confederation_of_African_Football_logo.svg/1200px-Confederation_of_African_Football_logo.svg.png" 
                    alt="CAF Logo"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
                <span className="block leading-tight">CAN 2025</span>
                <span className="text-secondary">au Maroc</span>
              </h1>
              <p className="mt-4 text-lg text-white mb-12 font-medium drop-shadow-md max-w-lg mx-auto lg:mx-0">
                Vivez la passion du football africain avec nos offres exclusives pour la Coupe d'Afrique des Nations 2025.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="text-base px-6 py-3 font-medium bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                  asChild
                >
                  <Link to="#reservation">
                    Réserver mon pack
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 text-base px-6 py-3 font-medium transition-all duration-300"
                  asChild
                >
                  <Link to="#news">
                    Dernières actualités
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Search widget */}
            <div className="w-full lg:w-5/12 px-4 mt-12 lg:mt-0">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <SearchWidget />
              </div>
            </div>
          </div>
        </div>
        
        {/* Limited availability badge */}
        <div className="absolute top-8 right-8 z-10">
          <Badge className="bg-secondary text-primary px-3 py-1 text-sm font-medium rounded-md flex items-center gap-2 shadow-lg">
            <Trophy className="h-4 w-4" />
            Places limitées !
          </Badge>
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
          
          {/* Info cards */}
          <div className="flex flex-wrap mt-8">
            <div className="w-full lg:w-10/12 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-secondary/10 rounded-full p-2 mr-3">
                      <Trophy className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm">35ème Édition</h3>
                      <p className="text-xs text-gray-500">Compétition de football africain</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-secondary/10 rounded-full p-2 mr-3">
                      <Trophy className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary text-sm">Été 2025</h3>
                      <p className="text-xs text-gray-500">Dates précises à confirmer</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white shadow-md hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-secondary/10 rounded-full p-2 mr-3">
                      <MapPin className="h-5 w-5 text-secondary" />
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
      </div>
    </section>
  );
};

export default HeroSection;
