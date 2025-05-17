import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Calendar, Flag, Medal, Football, UsersRound, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import PackageCard from "@/components/PackageCard";
import ServiceCard from "@/components/ServiceCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Can2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Données pour les packages
  const packages = [
    {
      name: "Yoonu Sénégal",
      price: "890 €",
      features: [
        "Vol aller-retour",
        "Hébergement 3★",
        "1 match de groupe",
        "Transferts aéroport",
        "Guide local",
      ],
      isPremium: false,
    },
    {
      name: "Délégation Lions",
      price: "1 590 €",
      features: [
        "Vol aller-retour",
        "Hébergement 4★",
        "3 matchs garantis",
        "Transferts privés",
        "Guide francophone",
        "Excursion culturelle",
      ],
      isPremium: false,
    },
    {
      name: "Lion d'Or",
      price: "1 990 €",
      features: [
        "Vol aller-retour Business",
        "Hébergement 5★",
        "Tous les matchs du Sénégal",
        "Chauffeur personnel",
        "Guide bilingue",
        "Excursions premium",
        "Accès VIP aux stades",
      ],
      isPremium: true,
    },
    {
      name: "Sur mesure",
      price: "2 490 €",
      features: [
        "Vol aller-retour Business",
        "Hébergement de luxe",
        "Place finale garantie",
        "Accès backstage équipes",
        "Chauffeur & concierge 24h/24",
        "Excursions personnalisées",
        "Rencontres privées",
      ],
      isPremium: false,
    },
  ];

  // Données pour les stades
  const stadiums = [
    {
      name: "Stade Mohammed V",
      city: "Casablanca",
      capacity: "45,000",
      matches: ["Groupe A", "Quarts de finale", "Finale"]
    },
    {
      name: "Stade Ibn Batouta",
      city: "Tanger",
      capacity: "65,000",
      matches: ["Groupe B", "Huitièmes de finale", "Demi-finale"]
    },
    {
      name: "Complexe Sportif Prince Moulay Abdellah",
      city: "Rabat",
      capacity: "53,000",
      matches: ["Groupe C", "Huitièmes de finale", "Demi-finale"]
    },
    {
      name: "Stade Adrar",
      city: "Agadir",
      capacity: "45,480",
      matches: ["Groupe D", "Quarts de finale"]
    },
    {
      name: "Grand Stade de Marrakech",
      city: "Marrakech",
      capacity: "45,240",
      matches: ["Groupe E", "Huitièmes de finale", "Match 3e place"]
    },
    {
      name: "Stade de Fès",
      city: "Fès",
      capacity: "45,000",
      matches: ["Groupe F", "Quarts de finale"]
    }
  ];

  // Données pour les dates clés
  const keyDates = [
    { date: "13 décembre 2024", event: "Tirage au sort de la phase finale" },
    { date: "21 décembre 2024", event: "Début de vente des billets individuels" },
    { date: "27 décembre 2024", event: "Annonce des équipes participantes" },
    { date: "12 janvier 2025", event: "Cérémonie d'ouverture" },
    { date: "13 janvier 2025", event: "Premier match (Maroc vs TBD)" },
    { date: "24 janvier - 2 février 2025", event: "Phase à élimination directe" },
    { date: "9 février 2025", event: "Finale à Casablanca" },
  ];

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
    <div className="pt-20 lg:pl-64">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-placeholder h-[500px] md:h-[600px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto md:mx-0"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 flex items-center">
                  <Trophy className="mr-4 h-12 w-12 md:h-16 md:w-16 text-secondary" />
                  CAN 2025 Maroc
                </h1>
                <p className="text-white/90 text-xl md:text-2xl mb-8">
                  La grande fête du football africain vous attend au Maroc pour un tournoi inoubliable. 
                  Réservez dès maintenant votre expérience complète avec ELTI VOYAGES.
                </p>
                <div className="flex flex-wrap gap-4 justify-start">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-6 py-6"
                    asChild
                  >
                    <a href="#packages">
                      Réserver mon pack
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 text-lg px-6 py-6"
                    asChild
                  >
                    <a href="#schedule">
                      Calendrier des matchs
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="bg-white border-b sticky top-[72px] z-20">
        <div className="container mx-auto px-4">
          <NavigationMenu className="justify-start py-2 w-full max-w-full">
            <NavigationMenuList className="w-full flex flex-nowrap overflow-x-auto justify-start gap-1 md:gap-4 no-scrollbar">
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#overview" 
                  className="text-sm font-medium px-3 py-2 hover:text-primary"
                >
                  Vue d'ensemble
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#packages" 
                  className="text-sm font-medium px-3 py-2 hover:text-primary"
                >
                  Packs supporters
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#stadiums" 
                  className="text-sm font-medium px-3 py-2 hover:text-primary"
                >
                  Stades
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#schedule" 
                  className="text-sm font-medium px-3 py-2 hover:text-primary"
                >
                  Calendrier
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#cities" 
                  className="text-sm font-medium px-3 py-2 hover:text-primary"
                >
                  Villes hôtes
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  href="#faq" 
                  className="text-sm font-medium px-3 py-2 hover:text-primary"
                >
                  FAQ
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">La coupe d'Afrique des nations 2025</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              La 35ème édition de la Coupe d'Afrique des Nations se tiendra au Maroc du 12 janvier au 9 février 2025.
              Un événement exceptionnel réunissant les 24 meilleures équipes du continent.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Calendar className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />
                <h3 className="text-xl font-bold ml-4">Dates clés</h3>
              </div>
              <ul className="space-y-3">
                {keyDates.slice(0, 4).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary font-semibold min-w-32">{item.date}:</span>
                    <span className="text-gray-700 ml-2">{item.event}</span>
                  </li>
                ))}
              </ul>
              <Button variant="link" className="mt-4 text-primary p-0" asChild>
                <a href="#schedule">Voir le calendrier complet</a>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Football className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />
                <h3 className="text-xl font-bold ml-4">Les équipes</h3>
              </div>
              <p className="text-gray-700 mb-4">
                24 équipes qualifiées réparties en 6 groupes de 4. Les tenant du titre sénégalais, 
                le Maroc pays hôte et d'autres géants africains comme l'Égypte, le Nigeria, le Cameroun et la 
                Côte d'Ivoire sont attendus.
              </p>
              <Button variant="link" className="mt-4 text-primary p-0">
                Découvrir les équipes
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Medal className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />
                <h3 className="text-xl font-bold ml-4">Nos services</h3>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  <span>Billets garantis pour tous les matchs</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  <span>Hébergements réservés près des stades</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  <span>Transferts aéroport & entre les villes</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  <span>Guides locaux francophones</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  <span>Assistance 24h/24 pendant votre séjour</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-16 p-8 bg-primary/5 rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Pourquoi réserver avec ELTI VOYAGES ?</h3>
                <p className="text-gray-700 mb-6">
                  En tant que spécialiste panafricain du voyage premium et agence officielle, nous vous garantissons :
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  <li className="flex items-center">
                    <Flag className="h-5 w-5 text-primary mr-2" />
                    <span>Billets officiels & garantis</span>
                  </li>
                  <li className="flex items-center">
                    <Flag className="h-5 w-5 text-primary mr-2" />
                    <span>Hébergements sécurisés</span>
                  </li>
                  <li className="flex items-center">
                    <Flag className="h-5 w-5 text-primary mr-2" />
                    <span>Logistique maîtrisée</span>
                  </li>
                  <li className="flex items-center">
                    <Flag className="h-5 w-5 text-primary mr-2" />
                    <span>Assistance en français</span>
                  </li>
                  <li className="flex items-center">
                    <Flag className="h-5 w-5 text-primary mr-2" />
                    <span>Conciergerie 24h/24</span>
                  </li>
                  <li className="flex items-center">
                    <Flag className="h-5 w-5 text-primary mr-2" />
                    <span>15 ans d'expérience</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <motion.div 
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-4 rounded-lg shadow-lg border-4 border-secondary w-64 h-64 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Trophy className="h-20 w-20 text-secondary mx-auto mb-4" />
                    <p className="text-xl font-bold text-primary">Agence Officielle</p>
                    <p className="text-sm text-gray-600 mt-2">Partenaire accrédité<br />CAN 2025</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Packs Supporters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des solutions clé en main pour vivre la compétition comme vous le souhaitez. 
              Chaque pack est entièrement personnalisable selon vos besoins.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {packages.map((pkg, index) => (
              <motion.div key={index} variants={item} className="h-full">
                <PackageCard
                  name={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                  isPremium={pkg.isPremium}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
              asChild
            >
              <a href="#reservation">
                Réserver mon pack maintenant
              </a>
            </Button>
            <p className="mt-4 text-gray-500 text-sm">Consultez-nous pour toute personnalisation</p>
          </motion.div>
        </div>
      </section>
      
      {/* Stadiums Section */}
      <section id="stadiums" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Les Stades de la CAN 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Six stades modernes répartis dans les plus belles villes du Maroc accueilleront les matchs.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full max-w-md mx-auto mb-8 grid grid-cols-3 bg-primary/10">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white">Tous les stades</TabsTrigger>
              <TabsTrigger value="main" className="data-[state=active]:bg-primary data-[state=active]:text-white">Stades principaux</TabsTrigger>
              <TabsTrigger value="final" className="data-[state=active]:bg-primary data-[state=active]:text-white">Phases finales</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stadiums.map((stadium, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Football className="h-16 w-16 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{stadium.name}</h3>
                      <p className="text-gray-600 mb-4">{stadium.city}</p>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <span>Capacité: {stadium.capacity} spectateurs</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Matchs prévus:</p>
                        <div className="flex flex-wrap gap-2">
                          {stadium.matches.map((match, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                              {match}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="main" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stadiums.slice(0, 2).map((stadium, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Football className="h-16 w-16 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{stadium.name}</h3>
                      <p className="text-gray-600 mb-4">{stadium.city}</p>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <span>Capacité: {stadium.capacity} spectateurs</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Matchs prévus:</p>
                        <div className="flex flex-wrap gap-2">
                          {stadium.matches.map((match, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                              {match}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="final" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stadiums.filter(s => s.matches.some(m => m.includes("Finale") || m.includes("Demi-finale"))).map((stadium, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <div className="h-48 bg-gray-200 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Football className="h-16 w-16 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{stadium.name}</h3>
                      <p className="text-gray-600 mb-4">{stadium.city}</p>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <span>Capacité: {stadium.capacity} spectateurs</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold mb-2">Matchs prévus:</p>
                        <div className="flex flex-wrap gap-2">
                          {stadium.matches.map((match, idx) => (
                            <span key={idx} className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                              {match}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Calendrier des Matchs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              La planification officielle des matchs sera annoncée après le tirage au sort du 13 décembre 2024.
              Voici le programme général de la compétition.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-primary/20 ml-4 md:ml-5"></div>
              
              {keyDates.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex mb-10 relative"
                >
                  <div className="flex flex-col items-center mr-4">
                    <div className="rounded-full h-10 w-10 bg-primary flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="h-full w-1 bg-transparent"></div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-6 flex-1 border-l-4 border-primary">
                    <h3 className="font-bold text-lg text-primary mb-1">{item.date}</h3>
                    <p className="text-gray-700">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-primary font-medium">
                Réservez vos packs dès maintenant pour être sûr d'avoir des places pour les matchs que vous souhaitez.
              </p>
              <Button 
                className="mt-6 bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="#packages">
                  Voir les packs disponibles
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Questions Fréquentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Tout ce que vous devez savoir pour préparer votre voyage à la CAN 2025.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">Comment obtenir les billets pour les matchs ?</h3>
                <p className="text-gray-700">
                  Les billets sont inclus dans nos packs supporters. Vous pouvez également acheter des billets individuels 
                  après le 21 décembre 2024, sous réserve de disponibilité. Nous recommandons nos packs pour garantir 
                  l'accès aux matchs les plus demandés.
                </p>
              </div>

              <div className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">Faut-il un visa pour le Maroc ?</h3>
                <p className="text-gray-700">
                  Les ressortissants de nombreux pays africains sont dispensés de visa pour le Maroc. 
                  Vérifiez les conditions d'entrée selon votre nationalité. Notre équipe peut vous 
                  accompagner dans les démarches si un visa est nécessaire.
                </p>
              </div>

              <div className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">Comment se déplacer entre les villes pendant la CAN ?</h3>
                <p className="text-gray-700">
                  Nos packs incluent les transferts entre les villes pour les matchs concernés. Le Maroc dispose 
                  également d'un bon réseau de trains et d'autobus. Des vols intérieurs sont disponibles entre les 
                  principales villes. Nous pouvons organiser tous vos déplacements sur demande.
                </p>
              </div>

              <div className="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">Peut-on combiner la CAN avec des excursions touristiques ?</h3>
                <p className="text-gray-700">
                  Absolument ! C'est même recommandé. Nous proposons des excursions à Marrakech, Essaouira, 
                  Chefchaouen, le désert de Merzouga, etc. Nos packs peuvent être personnalisés pour inclure 
                  ces visites avant, pendant ou après les matchs.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-lg text-primary mb-2">Quelles sont les conditions d'annulation ?</h3>
                <p className="text-gray-700">
                  Les réservations sont remboursables à 100% jusqu'�� 60 jours avant l'événement, puis à 50% 
                  jusqu'à 30 jours avant. À moins de 30 jours, les annulations ne sont plus remboursables, 
                  mais vous pouvez reporter votre voyage ou transférer votre réservation à une autre personne.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="reservation" className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Réservez votre expérience CAN 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ne manquez pas cet événement exceptionnel. Contactez-nous dès maintenant pour garantir votre participation.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 md:w-1/3 w-full"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Contactez-nous</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <a href="tel:+212656136036" className="hover:text-primary">+212 656 13 60 36</a>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <a href="https://wa.me/212656136036" className="hover:text-primary">WhatsApp</a>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <a href="mailto:contact@eltivoyages.com" className="hover:text-primary">contact@eltivoyages.com</a>
                </p>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90" asChild>
                <a href="tel:+212656136036">
                  Appeler maintenant
                </a>
              </Button>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-primary to-primary/80 p-8 rounded-xl shadow-lg text-white md:w-1/3 w-full"
            >
              <h3 className="text-xl font-bold mb-4">Réservation prioritaire</h3>
              <p className="mb-6">
                Laissez vos coordonnées et nous vous contacterons sous 24h pour finaliser votre réservation.
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Votre nom</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Prénom et Nom" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email ou téléphone</label>
                  <input type="text" className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50" placeholder="Email ou numéro WhatsApp" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Pack souhaité</label>
                  <select className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                    <option value="">Sélectionner un pack</option>
                    <option>Yoonu Sénégal (890 €)</option>
                    <option>Délégation Lions (1 590 €)</option>
                    <option>Lion d'Or (1 990 €)</option>
                    <option>Sur mesure</option>
                  </select>
                </div>
              </div>
              <Button className="w-full mt-6 bg-secondary text-primary hover:bg-secondary/90 font-medium">
                Demander un rappel
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Can2025;
