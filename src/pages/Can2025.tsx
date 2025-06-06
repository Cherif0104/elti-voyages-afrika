import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Star, Phone, Clock, Heart, Flag, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Can2025 = () => {
  const packages = [{
    title: "Pack Supporter Standard",
    price: "1,299€",
    description: "L'essentiel pour vivre la CAN 2025",
    features: ["Vol A/R", "Hébergement 7 nuits", "Billets matchs groupe", "Transferts"]
  }, {
    title: "Pack Supporter Premium",
    price: "1,899€",
    description: "L'expérience complète de supporter",
    features: ["Vol A/R", "Hébergement 10 nuits", "Billets tous matchs", "Transferts VIP", "Excursions"]
  }, {
    title: "Pack VIP",
    price: "2,599€",
    description: "L'expérience ultime",
    features: ["Vol A/R Business", "Hôtel 5*", "Billets VIP", "Transferts privés", "Accès lounge"]
  }];

  // Matchs du Sénégal uniquement
  const senegalMatches = [
    {
      date: "22 Décembre 2025",
      matches: [
        { time: "20:00", team1: "Sénégal", team2: "RD Congo", venue: "Casablanca", phase: "Phase de groupes" }
      ]
    },
    {
      date: "26 Décembre 2025", 
      matches: [
        { time: "17:00", team1: "Sénégal", team2: "Cameroun", venue: "Casablanca", phase: "Phase de groupes" }
      ]
    },
    {
      date: "30 Décembre 2025",
      matches: [
        { time: "20:00", team1: "Sénégal", team2: "Bénin", venue: "Casablanca", phase: "Phase de groupes" }
      ]
    }
  ];

  // Matchs potentiels en phase finale (si qualification)
  const senegalKnockoutMatches = [
    {
      phase: "Huitièmes de finale",
      date: "5-6 Janvier 2026",
      matches: [
        { time: "À déterminer", team1: "Sénégal", team2: "Adversaire qualifié", venue: "À déterminer" }
      ]
    },
    {
      phase: "Quarts de finale", 
      date: "9-10 Janvier 2026",
      matches: [
        { time: "À déterminer", team1: "Sénégal", team2: "Vainqueur 1/8", venue: "À déterminer" }
      ]
    },
    {
      phase: "Demi-finales",
      date: "13-14 Janvier 2026", 
      matches: [
        { time: "À déterminer", team1: "Sénégal", team2: "Vainqueur 1/4", venue: "À déterminer" }
      ]
    },
    {
      phase: "Finale",
      date: "18 Janvier 2026",
      matches: [
        { time: "20:00", team1: "Sénégal", team2: "Finaliste", venue: "Casablanca" }
      ]
    }
  ];

  // Animations pour les éléments footballistiques
  const footballAnimation = {
    bounce: {
      y: [0, -20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  const flagWaveAnimation = {
    wave: {
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const heartPulseAnimation = {
    pulse: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Data pour nos offres CAN 2025
  const can2025Offers = [
    {
      image: "/lovable-uploads/f7a5409d-c576-406e-8965-3cfb2a831260.png",
      title: "Pack Supporter Classique",
      description: "Vivez la CAN 2025 en tant que vrai supporter",
      price: "À partir de 899€",
      features: ["Vol A/R Dakar-Casablanca", "Hébergement 7 nuits", "Billets matchs de groupe"]
    },
    {
      image: "/lovable-uploads/6022c9b1-7383-48a2-bf2d-c87386c98ccd.png", 
      title: "Pack Supporter Premium",
      description: "L'expérience complète du supporter sénégalais",
      price: "À partir de 1,299€",
      features: ["Vol A/R", "Hébergement 10 nuits", "Tous les matchs du Sénégal", "Transferts VIP"]
    },
    {
      image: "/lovable-uploads/870be09a-6b38-4b23-8d32-61286d54de50.png",
      title: "Pack VIP Lions",
      description: "Vivez comme les rois de la Teranga",
      price: "À partir de 1,899€", 
      features: ["Vol Business", "Hôtel 5 étoiles", "Billets VIP", "Accès lounge privé"]
    },
    {
      image: "/lovable-uploads/f20045fb-2388-4795-9b23-557d8a04fd11.png",
      title: "Pack Famille Teranga",
      description: "Partagez la passion en famille",
      price: "À partir de 2,499€",
      features: ["4 personnes", "Hébergement familial", "Activités pour enfants", "Guide francophone"]
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section avec animations améliorées */}
      <section className="relative text-white py-20 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a365d 0%, #2d5a2d 30%, #d4af37 100%)'
      }}>
        {/* Motifs africains animés en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <motion.div 
            className="absolute top-10 left-10 text-8xl"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ⚽
          </motion.div>
          <motion.div 
            className="absolute top-32 right-20 text-6xl"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            🥁
          </motion.div>
          <motion.div 
            className="absolute bottom-20 left-32 text-7xl"
            animate={footballAnimation.bounce}
          >
            🦁
          </motion.div>
          <motion.div 
            className="absolute bottom-32 right-10 text-5xl"
            animate={flagWaveAnimation.wave}
          >
            🇸🇳
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Logo officiel CAN 2025 avec effet de brillance */}
              <motion.div 
                className="mr-6 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <img 
                  src="/lovable-uploads/8cf372e0-686c-4103-8b67-539fa4022a8b.png" 
                  alt="Logo CAN 2025 Morocco" 
                  className="h-24 w-auto object-contain drop-shadow-2xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                  animate={{ 
                    x: ["-100%", "100%"],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                />
              </motion.div>
              
              <motion.div
                animate={footballAnimation.bounce}
                className="mr-4"
              >
                <Trophy className="h-16 w-16 text-yellow-400 drop-shadow-lg" />
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-300 via-white to-green-400 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                CAN 2025
              </motion.h1>
            </motion.div>
            
            <motion.h2 
              className="text-2xl md:text-3xl mb-6 text-yellow-200"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Coupe d'Afrique des Nations - Maroc
            </motion.h2>
            
            {/* Accroche spéciale avec animations */}
            <motion.div 
              className="bg-gradient-to-r from-green-600/20 via-yellow-500/20 to-red-600/20 backdrop-blur-sm rounded-lg p-6 mb-8 border border-yellow-400/30"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div className="flex items-center justify-center mb-3">
                <motion.div
                  animate={heartPulseAnimation.pulse}
                  className="mr-3"
                >
                  <Heart className="h-8 w-8 text-red-500 fill-red-500" />
                </motion.div>
                <motion.div
                  animate={flagWaveAnimation.wave}
                  className="mr-3"
                >
                  <Flag className="h-8 w-8 text-green-500" />
                </motion.div>
                <motion.div
                  animate={footballAnimation.bounce}
                >
                  <Zap className="h-8 w-8 text-yellow-400" />
                </motion.div>
              </motion.div>
              
              <p className="text-xl md:text-2xl font-bold text-yellow-300 mb-2">
                🦁 ALLEZ LES LIONS DE LA TERANGA ! 🇸🇳
              </p>
              <p className="text-lg text-white/90">
                Vivons ensemble la passion du football africain au Maroc 🏆
              </p>
            </motion.div>

            <motion.p 
              className="text-xl mb-8 max-w-2xl mx-auto text-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Vibrez avec les Champions d'Afrique 2021 dans leur quête du doublé historique ! 🏆🔥
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 shadow-2xl" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    🚀 En savoir plus
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8 shadow-2xl" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    ⚡ Réserver maintenant
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              ⭐
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Info avec animations améliorées */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div 
              className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-600"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.2)",
                borderLeftColor: "#059669"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={footballAnimation.bounce}
                className="inline-block mb-4"
              >
                <Calendar className="h-12 w-12 text-green-600 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Dates</h3>
              <p className="text-gray-600">21 Décembre 2025 - 18 Janvier 2026</p>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(234, 179, 8, 0.2)",
                borderLeftColor: "#eab308"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <MapPin className="h-12 w-12 text-yellow-600 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Lieu</h3>
              <p className="text-gray-600">Maroc - 6 villes hôtes 🇲🇦</p>
            </motion.div>
            
            <motion.div 
              className="text-center bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)",
                borderLeftColor: "#ef4444"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            >
              <motion.div
                animate={heartPulseAnimation.pulse}
                className="inline-block mb-4"
              >
                <Users className="h-12 w-12 text-red-600 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Équipes</h3>
              <p className="text-gray-600">24 équipes africaines 🌍</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Calendrier Section - Matchs du Sénégal avec animations */}
      <section className="py-16 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block"
            >
              <Badge className="mb-4 px-6 py-3 text-base font-semibold bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-lg">
                <motion.div
                  animate={footballAnimation.bounce}
                  className="inline-block mr-2"
                >
                  <Calendar className="h-5 w-5" />
                </motion.div>
                Lions de la Teranga 🇸🇳🦁
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🏆 Calendrier du Sénégal - CAN 2025 🏆
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Suivez chaque match de nos Lions vers la gloire ! 🦁⚽🔥
            </motion.p>
          </motion.div>

          <Tabs defaultValue="groupes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-gradient-to-r from-green-100 to-yellow-100">
                <TabsTrigger 
                  value="groupes" 
                  className="text-sm font-semibold data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  🏃‍♂️ Phase de groupes
                </TabsTrigger>
                <TabsTrigger 
                  value="elimination" 
                  className="text-sm font-semibold data-[state=active]:bg-yellow-600 data-[state=active]:text-white"
                >
                  🏆 Phase finale
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="groupes" className="space-y-6">
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  🦁 Phase de groupes - Groupe C 🇸🇳
                </h3>
                <p className="text-gray-600">22 Décembre 2025 - 30 Décembre 2025</p>
              </motion.div>
              
              <div className="grid gap-6">
                {senegalMatches.map((day, dayIndex) => (
                  <motion.div
                    key={dayIndex}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden border-l-4 border-l-green-600 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="bg-gradient-to-r from-green-50 to-yellow-50 border-b">
                        <CardTitle className="text-lg flex items-center">
                          <motion.div
                            animate={footballAnimation.bounce}
                            className="mr-2"
                          >
                            <Calendar className="h-5 w-5 text-green-600" />
                          </motion.div>
                          {day.date}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-0">
                          {day.matches.map((match, matchIndex) => (
                            <motion.div 
                              key={matchIndex} 
                              className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-yellow-50 hover:from-green-100 hover:to-yellow-100 transition-all duration-300"
                              whileHover={{ backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                            >
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center text-sm text-gray-600 min-w-[60px]">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {match.time}
                                </div>
                                <div className="flex items-center space-x-3">
                                  <motion.span 
                                    className="font-bold text-green-700 text-lg flex items-center"
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    🇸🇳 {match.team1} 🦁
                                  </motion.span>
                                  <span className="text-gray-400 font-bold">⚔️</span>
                                  <span className="font-semibold text-primary">{match.team2}</span>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                {match.venue} 🇲🇦
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="elimination" className="space-y-6">
              <motion.div 
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-primary mb-2">
                  🏆 Phase à élimination directe 🔥
                </h3>
                <p className="text-gray-600">5 Janvier - 18 Janvier 2026 (si qualification)</p>
              </motion.div>

              <div className="grid gap-6">
                {senegalKnockoutMatches.map((phase, phaseIndex) => (
                  <motion.div
                    key={phaseIndex}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="overflow-hidden border-l-4 border-l-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardHeader className="bg-gradient-to-r from-yellow-50 to-green-50 border-b">
                        <CardTitle className="text-lg flex items-center">
                          <motion.div
                            animate={heartPulseAnimation.pulse}
                            className="mr-2"
                          >
                            <Trophy className="h-5 w-5 text-yellow-600" />
                          </motion.div>
                          {phase.phase} 🏆
                        </CardTitle>
                        <CardDescription>{phase.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="space-y-0">
                          {phase.matches.map((match, matchIndex) => (
                            <motion.div 
                              key={matchIndex} 
                              className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-green-50 hover:from-yellow-100 hover:to-green-100 transition-all duration-300"
                              whileHover={{ backgroundColor: "rgba(234, 179, 8, 0.1)" }}
                            >
                              <div className="flex items-center space-x-4">
                                <div className="flex items-center text-sm text-gray-600 min-w-[80px]">
                                  <Clock className="h-4 w-4 mr-1" />
                                  {match.time}
                                </div>
                                <div className="flex items-center space-x-3">
                                  <motion.span 
                                    className="font-bold text-green-700 text-lg flex items-center"
                                    whileHover={{ scale: 1.1 }}
                                  >
                                    🇸🇳 {match.team1} 🦁
                                  </motion.span>
                                  <span className="text-gray-400 font-bold">⚔️</span>
                                  <span className="font-semibold text-primary text-sm">{match.team2}</span>
                                </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                {match.venue}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 mb-4">
              * Les horaires sont en heure locale marocaine (GMT+1) | 🇸🇳 ALLEZ LES LIONS ! 🦁⚽
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="px-8 bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 shadow-lg" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  🚀 Réserver pour supporter le Sénégal 🇸🇳
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Nos Offres CAN 2025 */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="inline-block"
            >
              <Badge className="mb-4 px-6 py-3 text-base font-semibold bg-gradient-to-r from-green-600 to-yellow-600 text-white shadow-lg">
                <Trophy className="h-5 w-5 mr-2" />
                Nos Offres CAN 2025 🦁
              </Badge>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🇸🇳 Packs Supporters Lions de la Teranga 🇸🇳
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Choisissez votre formule pour vivre la CAN 2025 avec les Champions d'Afrique ! 🏆⚽
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {can2025Offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                  <div className="relative overflow-hidden">
                    <img 
                      src={offer.image} 
                      alt={offer.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <motion.div 
                      className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                      whileHover={{ scale: 1.1 }}
                    >
                      🦁 Lions
                    </motion.div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-green-600 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-600">{offer.price}</span>
                      <span className="text-sm text-gray-500 ml-2">par personne</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {offer.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full bg-gradient-to-r from-green-600 to-yellow-600 hover:from-green-700 hover:to-yellow-700 shadow-lg"
                        asChild
                      >
                        <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                          🚀 Réserver maintenant
                        </a>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm text-gray-500 mb-4">
              🦁 Tous nos packs incluent l'assistance 24h/24 et un guide francophone 🇸🇳
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="border-green-600 text-green-600 hover:bg-green-50"
                asChild
              >
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  💬 Demander un devis personnalisé
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section avec animations africaines */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-yellow-500 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 40 + 20}px`
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {['🥁', '🦁', '⚽', '🏆', '🇸🇳'][Math.floor(Math.random() * 5)]}
            </motion.div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              animate={{ 
                textShadow: [
                  "0 0 10px rgba(255,255,255,0.5)",
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 10px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🚀 Prêt pour l'aventure des Lions ? 🦁
            </motion.h2>
            <p className="text-xl mb-8">
              Rejoignez-nous pour vivre la passion sénégalaise au Maroc ! 🇸🇳❤️🇲🇦
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 shadow-2xl font-bold" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    💬 En savoir plus
                  </a>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-300 shadow-2xl font-bold" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    ⚡ Réserver maintenant
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Can2025;
