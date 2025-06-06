
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

  const groupMatches = [
    {
      date: "21 Décembre 2025",
      matches: [
        { time: "17:00", team1: "Maroc", team2: "Comores", venue: "Rabat" },
        { time: "20:00", team1: "Mali", team2: "Zambie", venue: "Rabat" }
      ]
    },
    {
      date: "22 Décembre 2025",
      matches: [
        { time: "14:00", team1: "Égypte", team2: "Cap-Vert", venue: "Casablanca" },
        { time: "17:00", team1: "Ghana", team2: "Angola", venue: "Casablanca" },
        { time: "20:00", team1: "Sénégal", team2: "RD Congo", venue: "Casablanca" }
      ]
    },
    {
      date: "23 Décembre 2025",
      matches: [
        { time: "14:00", team1: "Algérie", team2: "Burkina Faso", venue: "Marrakech" },
        { time: "17:00", team1: "Cameroun", team2: "Namibie", venue: "Marrakech" },
        { time: "20:00", team1: "Tunisie", team2: "Madagascar", venue: "Marrakech" }
      ]
    }
  ];

  const knockoutMatches = [
    {
      phase: "Huitièmes de finale",
      date: "5-6 Janvier 2026",
      matches: [
        { time: "17:00", team1: "1er Groupe A", team2: "2e Groupe B", venue: "Casablanca" },
        { time: "20:00", team1: "1er Groupe B", team2: "2e Groupe A", venue: "Rabat" },
        { time: "17:00", team1: "1er Groupe C", team2: "2e Groupe D", venue: "Marrakech" },
        { time: "20:00", team1: "1er Groupe D", team2: "2e Groupe C", venue: "Agadir" }
      ]
    },
    {
      phase: "Quarts de finale",
      date: "9-10 Janvier 2026",
      matches: [
        { time: "17:00", team1: "Vainqueur 1/8 #1", team2: "Vainqueur 1/8 #2", venue: "Casablanca" },
        { time: "20:00", team1: "Vainqueur 1/8 #3", team2: "Vainqueur 1/8 #4", venue: "Rabat" }
      ]
    },
    {
      phase: "Demi-finales",
      date: "13-14 Janvier 2026",
      matches: [
        { time: "18:00", team1: "Vainqueur 1/4 #1", team2: "Vainqueur 1/4 #2", venue: "Casablanca" },
        { time: "18:00", team1: "Vainqueur 1/4 #3", team2: "Vainqueur 1/4 #4", venue: "Rabat" }
      ]
    },
    {
      phase: "Finale",
      date: "18 Janvier 2026",
      matches: [
        { time: "20:00", team1: "Finaliste 1", team2: "Finaliste 2", venue: "Casablanca" }
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

      {/* Calendrier Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 px-4 py-2 text-base font-semibold bg-primary text-white">
              <Calendar className="h-5 w-5 mr-2" />
              Programme officiel
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Calendrier CAN 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Suivez le programme complet de la Coupe d'Afrique des Nations 2025 au Maroc
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
                <h3 className="text-2xl font-bold text-primary mb-2">Phase de groupes</h3>
                <p className="text-gray-600">21 Décembre 2025 - 2 Janvier 2026</p>
              </div>
              
              <div className="grid gap-6">
                {groupMatches.map((day, dayIndex) => (
                  <Card key={dayIndex} className="overflow-hidden">
                    <CardHeader className="bg-primary/5 border-b">
                      <CardTitle className="text-lg flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-primary" />
                        {day.date}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-0">
                        {day.matches.map((match, matchIndex) => (
                          <div key={matchIndex} className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-sm text-gray-600 min-w-[60px]">
                                <Clock className="h-4 w-4 mr-1" />
                                {match.time}
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="font-semibold text-primary">{match.team1}</span>
                                <span className="text-gray-400">vs</span>
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
                <p className="text-gray-600">5 Janvier - 18 Janvier 2026</p>
              </div>

              <div className="grid gap-6">
                {knockoutMatches.map((phase, phaseIndex) => (
                  <Card key={phaseIndex} className="overflow-hidden">
                    <CardHeader className="bg-secondary/10 border-b">
                      <CardTitle className="text-lg flex items-center">
                        <Trophy className="h-5 w-5 mr-2 text-secondary" />
                        {phase.phase}
                      </CardTitle>
                      <CardDescription>{phase.date}</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-0">
                        {phase.matches.map((match, matchIndex) => (
                          <div key={matchIndex} className="flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center text-sm text-gray-600 min-w-[60px]">
                                <Clock className="h-4 w-4 mr-1" />
                                {match.time}
                              </div>
                              <div className="flex items-center space-x-3">
                                <span className="font-semibold text-primary text-sm">{match.team1}</span>
                                <span className="text-gray-400">vs</span>
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
              * Les horaires sont en heure locale marocaine (GMT+1)
            </p>
            <Button className="px-8" asChild>
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                Réserver vos billets maintenant
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
