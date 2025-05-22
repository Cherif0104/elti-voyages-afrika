
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Sun, Compass, Clock } from "lucide-react";
import DestinationCard from "@/components/destinations/DestinationCard";
import { Link } from "react-router-dom";

const Destinations = () => {
  const destinations = [
    {
      title: "Marrakech",
      country: "Maroc",
      imageSrc: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
      description: "Ville impériale connue pour ses souks, sa médina et sa place Jemaa el-Fna animée.",
      idealDuration: "3-4 jours",
      bestTime: "Mars à Mai, Sept à Nov",
      highlights: ["Médina", "Jardin Majorelle", "Palais Bahia", "Place Jemaa el-Fna"],
      slug: "marrakech",
      featured: true
    },
    {
      title: "Casablanca",
      country: "Maroc",
      imageSrc: "/lovable-uploads/8bc5d2ec-a33d-48d8-af8e-ca833e69098c.png",
      description: "Capitale économique du Maroc avec sa célèbre mosquée Hassan II et son architecture art déco.",
      idealDuration: "2-3 jours",
      bestTime: "Avril à Juin, Sept à Oct",
      highlights: ["Mosquée Hassan II", "Quartier Habous", "Corniche"],
      slug: "casablanca"
    },
    {
      title: "Fès",
      country: "Maroc",
      imageSrc: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      description: "La plus ancienne des villes impériales avec sa médina labyrinthique classée au patrimoine mondial.",
      idealDuration: "3 jours",
      bestTime: "Mars à Mai, Oct à Nov",
      highlights: ["Médina", "Tanneries", "Université Al Quaraouiyine"],
      slug: "fes"
    },
    {
      title: "Chefchaouen",
      country: "Maroc",
      imageSrc: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
      description: "La célèbre ville bleue nichée dans les montagnes du Rif, connue pour ses ruelles peintes en bleu.",
      idealDuration: "2 jours",
      bestTime: "Avril à Juin, Sept à Oct",
      highlights: ["Médina bleue", "Place Outa el Hammam", "Randonnées"],
      slug: "chefchaouen",
      featured: true
    },
    {
      title: "Dakar",
      country: "Sénégal",
      imageSrc: "/lovable-uploads/28d985f6-366d-45b3-89a2-e799b677f0dd.png",
      description: "Capitale dynamique du Sénégal, mêlant culture, histoire et modernité au bord de l'océan Atlantique.",
      idealDuration: "3 jours",
      bestTime: "Nov à Mai",
      highlights: ["Île de Gorée", "Monument de la Renaissance", "Marché Kermel"],
      slug: "dakar",
      featured: true
    },
    {
      title: "Saly",
      country: "Sénégal",
      imageSrc: "/lovable-uploads/8f78671e-52ba-451f-826b-7eefe225183e.png",
      description: "Station balnéaire du Sénégal offrant plages de sable fin, hôtels de luxe et activités nautiques.",
      idealDuration: "4-5 jours",
      bestTime: "Nov à Mai",
      highlights: ["Plages", "Golf", "Réserve de Bandia"],
      slug: "saly"
    },
    {
      title: "Merzouga",
      country: "Maroc",
      imageSrc: "/lovable-uploads/00639225-b6c9-4ae6-bf80-d8c5154fb25f.png",
      description: "Porte d'entrée vers les dunes majestueuses de l'Erg Chebbi dans le Sahara marocain.",
      idealDuration: "2-3 jours",
      bestTime: "Oct à Avril",
      highlights: ["Dunes de l'Erg Chebbi", "Nuit en bivouac", "Balade à dromadaire"],
      slug: "merzouga"
    },
    {
      title: "Lac Rose",
      country: "Sénégal",
      imageSrc: "/lovable-uploads/8f78671e-52ba-451f-826b-7eefe225183e.png",
      description: "Lac aux eaux roses unique situé près de Dakar, connu pour sa couleur particulière et ses exploitations de sel.",
      idealDuration: "1 jour",
      bestTime: "Nov à Juin",
      highlights: ["Baignade", "Extraction de sel", "Villages de pêcheurs"],
      slug: "lac-rose"
    },
    {
      title: "Essaouira",
      country: "Maroc",
      imageSrc: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      description: "Ville côtière fortifiée connue pour son port de pêche, ses remparts et sa scène artistique.",
      idealDuration: "2 jours",
      bestTime: "Avril à Oct",
      highlights: ["Médina", "Port de pêche", "Plage", "Artisanat"],
      slug: "essaouira"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-secondary font-semibold mb-2 text-lg drop-shadow-md">
              Explorez l'Afrique de l'Ouest et du Nord
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              Destinations
              <span className="block mt-2 text-secondary">Maroc & Sénégal</span>
            </h1>
            <p className="text-lg mb-8 font-medium drop-shadow-md">
              Découvrez les perles cachées du Maroc et du Sénégal, des villes historiques aux paysages naturels époustouflants.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs for Countries */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 w-full max-w-md mx-auto">
            <TabsTrigger value="all" className="flex-1">Toutes</TabsTrigger>
            <TabsTrigger value="morocco" className="flex-1">Maroc</TabsTrigger>
            <TabsTrigger value="senegal" className="flex-1">Sénégal</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations.map((destination, index) => (
                <DestinationCard
                  key={index}
                  {...destination}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="morocco">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter(dest => dest.country === "Maroc")
                .map((destination, index) => (
                  <DestinationCard
                    key={index}
                    {...destination}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="senegal">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destinations
                .filter(dest => dest.country === "Sénégal")
                .map((destination, index) => (
                  <DestinationCard
                    key={index}
                    {...destination}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Destination Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-16"
        >
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
              Pourquoi voyager avec nous
            </span>
            <h2 className="text-3xl font-bold text-primary mb-3">Une expérience de voyage unique</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre connaissance approfondie du Maroc et du Sénégal nous permet de vous offrir des expériences authentiques et inoubliables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Compass className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Experts locaux</h3>
                <p className="text-gray-600 text-sm">
                  Nos équipes sur place possèdent une connaissance approfondie des destinations et de la culture locale.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Voyages sur mesure</h3>
                <p className="text-gray-600 text-sm">
                  Nous créons des itinéraires personnalisés selon vos centres d'intérêt, votre budget et vos envies.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Assistance 24/7</h3>
                <p className="text-gray-600 text-sm">
                  Notre équipe est disponible à tout moment pour vous accompagner et résoudre toute situation imprévue.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
        
        {/* Best Time to Visit */}
        <div className="my-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Quand partir ?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Maroc
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Printemps (Mars-Mai)</h4>
                  <p className="text-sm text-gray-600">
                    Climat idéal, températures douces, paysages verdoyants. Parfait pour la découverte des villes et randonnées dans l'Atlas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Automne (Sept-Nov)</h4>
                  <p className="text-sm text-gray-600">
                    Températures agréables, moins de touristes. Idéal pour visiter les villes impériales et le désert.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Hiver (Déc-Fév)</h4>
                  <p className="text-sm text-gray-600">
                    Doux sur la côte, frais dans les montagnes avec possibilité de neige dans l'Atlas. Période idéale pour le désert.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-2" />
                Sénégal
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Saison sèche (Nov-Mai)</h4>
                  <p className="text-sm text-gray-600">
                    Période optimale pour visiter le Sénégal. Ciel dégagé, températures chaudes mais supportables, idéal pour les plages.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Décembre à Février</h4>
                  <p className="text-sm text-gray-600">
                    Les températures sont les plus agréables, parfait pour combiner plage et visites culturelles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Éviter la saison des pluies (Juin-Oct)</h4>
                  <p className="text-sm text-gray-600">
                    Fortes précipitations, humidité élevée et certaines routes peuvent être difficilement praticables.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="py-12 bg-primary text-white rounded-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <Badge className="mb-4 px-3 py-1 bg-secondary text-primary">
                  Votre prochain voyage
                </Badge>
                <h2 className="text-3xl font-bold mb-2">
                  Prêt à découvrir ces destinations ?
                </h2>
                <p className="text-white/80 max-w-lg">
                  Contactez-nous pour créer votre itinéraire sur mesure au Maroc ou au Sénégal.
                </p>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
              >
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
