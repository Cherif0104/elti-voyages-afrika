import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, MapPin, Users, Star, Phone, Clock } from "lucide-react";
import Can2025SpecialOffer from "@/components/home/Can2025SpecialOffer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

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

  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{
      backgroundColor: '#172554'
    }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              {/* Logo officiel CAN 2025 */}
              <div className="mr-6">
                <img 
                  src="/lovable-uploads/8cf372e0-686c-4103-8b67-539fa4022a8b.png" 
                  alt="Logo CAN 2025 Morocco" 
                  className="h-24 w-auto object-contain"
                />
              </div>
              <Trophy className="h-16 w-16 text-yellow-400 mr-4" />
              <h1 className="text-5xl md:text-7xl font-bold">CAN 2025</h1>
            </div>
            <h2 className="text-2xl md:text-3xl mb-6">Coupe d'Afrique des Nations - Maroc</h2>
            
            {/* Accroche spéciale */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
              <p className="text-xl md:text-2xl font-bold text-yellow-300 mb-2">
                Page dédiée à la Coupe d'Afrique des Nations 2025 – Destination Maroc
              </p>
              <p className="text-lg text-white/90">
                Nous sommes Sénégalais et nous supportons fièrement les Lions de la Teranga 🇸🇳
              </p>
            </div>

            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Vivez l'événement football le plus prestigieux d'Afrique avec nos packs supporters exclusifs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" className="bg-yellow-500 text-black hover:bg-yellow-400 text-lg px-8" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <Can2025SpecialOffer />

      {/* Key Info */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Dates</h3>
              <p className="text-gray-600">21 Décembre 2025 - 18 Janvier 2026</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Lieu</h3>
              <p className="text-gray-600">Maroc - 6 villes hôtes</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Équipes</h3>
              <p className="text-gray-600">24 équipes africaines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calendrier Section - Matchs du Sénégal */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 text-base font-semibold bg-primary text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Lions de la Teranga 🇸🇳
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Calendrier du Sénégal - CAN 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suivez tous les matchs des Lions de la Teranga à la CAN 2025 au Maroc
            </p>
          </div>

          <Tabs defaultValue="groupes" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="groupes" className="text-sm">Phase de groupes</TabsTrigger>
                <TabsTrigger value="elimination" className="text-sm">Phase finale</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="groupes" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Phase de groupes - Groupe C</h3>
                <p className="text-gray-600">22 Décembre 2025 - 30 Décembre 2025</p>
              </div>
              
              <div className="grid gap-6">
                {senegalMatches.map((day, dayIndex) => (
                  <Card key={dayIndex} className="overflow-hidden border-l-4 border-l-green-500">
                    <CardHeader className="bg-green-50 border-b">
                      <CardTitle className="text-lg flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-green-600" />
                        {day.date}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-0">
                        {day.matches.map((match, matchIndex) => (
                          <div key={matchIndex} className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-yellow-50 hover:from-green-100 hover:to-yellow-100 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-sm text-gray-600 min-w-[60px]">
                                <Clock className="h-4 w-4 mr-1" />
                                {match.time}
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="font-bold text-green-700 text-lg">🇸🇳 {match.team1}</span>
                                <span className="text-gray-400 font-bold">vs</span>
                                <span className="font-semibold text-primary">{match.team2}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              {match.venue}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="elimination" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Phase à élimination directe</h3>
                <p className="text-gray-600">5 Janvier - 18 Janvier 2026 (si qualification)</p>
              </div>

              <div className="grid gap-6">
                {senegalKnockoutMatches.map((phase, phaseIndex) => (
                  <Card key={phaseIndex} className="overflow-hidden border-l-4 border-l-yellow-500">
                    <CardHeader className="bg-yellow-50 border-b">
                      <CardTitle className="text-lg flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
                        {phase.phase}
                      </CardTitle>
                      <CardDescription>{phase.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-0">
                        {phase.matches.map((match, matchIndex) => (
                          <div key={matchIndex} className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-green-50 hover:from-yellow-100 hover:to-green-100 transition-colors">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-sm text-gray-600 min-w-[80px]">
                                <Clock className="h-4 w-4 mr-1" />
                                {match.time}
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="font-bold text-green-700 text-lg">🇸🇳 {match.team1}</span>
                                <span className="text-gray-400 font-bold">vs</span>
                                <span className="font-semibold text-primary text-sm">{match.team2}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-1" />
                              {match.venue}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-500 mb-4">
              * Les horaires sont en heure locale marocaine (GMT+1) | 🇸🇳 Allez les Lions !
            </p>
            <Button className="px-8" asChild>
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                Réserver pour supporter le Sénégal
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour l'aventure ?</h2>
            <p className="text-xl mb-8">
              Contactez nos experts pour personnaliser votre séjour CAN 2025
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>;
};

export default Can2025;
