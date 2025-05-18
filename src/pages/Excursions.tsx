
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SearchWidget from "@/components/SearchWidget";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, BadgeDollarSign } from "lucide-react";
import ExcursionsStatsSection from "@/components/excursions/ExcursionsStatsSection";

type Excursion = {
  title: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const ExcursionCard = ({ excursion }: { excursion: Excursion }) => {
  const { title, location, duration, price, description, featured, size } = excursion;
  
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-1 row-span-1 md:row-span-2",
    large: "col-span-1 md:col-span-2 row-span-1"
  };
  
  const sizeClass = sizeClasses[size || 'small'];
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 bg-placeholder overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        {featured && (
          <span className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold py-1 px-2 rounded">
            Populaire
          </span>
        )}
      </div>
      
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2 text-xs text-gray-500">
          <MapPin className="h-3.5 w-3.5" />
          <span>{location}</span>
          <span className="mx-1">•</span>
          <Clock className="h-3.5 w-3.5" />
          <span>{duration}</span>
        </div>
        
        <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <BadgeDollarSign className="h-4 w-4 text-secondary mr-1" />
            <span className="font-bold text-secondary">{price}</span>
          </div>
          <Button size="sm" variant="booking" asChild>
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Excursions = () => {
  const excursions: Excursion[] = [
    {
      title: "Essaouira, la ville bleue",
      location: "Au départ de Marrakech",
      duration: "1 jour",
      price: "À partir de 65 €",
      description: "Découvrez la cité fortifiée d'Essaouira, son port de pêche pittoresque et ses remparts face à l'océan.",
      featured: true,
      size: 'medium'
    },
    {
      title: "Désert de Merzouga",
      location: "Maroc",
      duration: "3 jours",
      price: "À partir de 290 €",
      description: "Une aventure inoubliable dans le désert du Sahara, avec nuit en bivouac sous les étoiles et balade à dos de dromadaire.",
      featured: true,
      size: 'large'
    },
    {
      title: "Chefchaouen",
      location: "Nord du Maroc",
      duration: "2 jours",
      price: "À partir de 180 €",
      description: "Explorez la célèbre ville bleue nichée dans les montagnes du Rif.",
      size: 'small'
    },
    {
      title: "Saint-Louis du Sénégal",
      location: "Sénégal",
      duration: "2 jours",
      price: "À partir de 220 €",
      description: "Visite de l'ancienne capitale coloniale inscrite au patrimoine mondial de l'UNESCO.",
      size: 'small'
    },
    {
      title: "Vallée de l'Ourika",
      location: "Haut Atlas, Maroc",
      duration: "1 jour",
      price: "À partir de 75 €",
      description: "Explorez les magnifiques paysages de la vallée de l'Ourika et découvrez le mode de vie berbère.",
      size: 'medium'
    },
    {
      title: "Île de Gorée",
      location: "Dakar, Sénégal",
      duration: "1 jour",
      price: "À partir de 85 €",
      description: "Visite guidée de ce lieu chargé d'histoire, symbole de la traite négrière.",
      size: 'small'
    },
    {
      title: "Cascades d'Ouzoud",
      location: "Moyen Atlas, Maroc",
      duration: "1 jour",
      price: "À partir de 70 €",
      description: "Les plus belles chutes d'eau du Maroc, dans un cadre naturel préservé.",
      size: 'small'
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <span className="inline-block text-secondary font-semibold mb-2 text-lg drop-shadow-md">
                  Découvrez des lieux extraordinaires
                </span>
                <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                  Excursions &
                  <span className="block mt-2 text-secondary">Circuits</span>
                </h1>
                <p className="text-lg lg:text-xl mb-8 max-w-lg font-medium drop-shadow-md">
                  Explorez les plus beaux sites du Maroc et du Sénégal avec nos excursions guidées et nos circuits sur mesure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                    asChild
                  >
                    <a href="#excursions">
                      Voir les excursions
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">Rechercher</h2>
                <SearchWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div id="excursions" className="container mx-auto px-4 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6">Nos excursions populaires</h2>
        <p className="text-gray-600 mb-6 sm:mb-8">
          Des expériences authentiques pour découvrir les trésors cachés de l'Afrique. Choisissez parmi nos excursions guidées et circuits sur mesure.
        </p>
        
        {/* Excursions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {excursions.map((excursion, index) => (
            <ExcursionCard key={index} excursion={excursion} />
          ))}
        </div>
        
        {/* Stats Section */}
        <ExcursionsStatsSection />
        
        {/* Custom Excursion CTA */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-10 my-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6 md:w-2/3">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 text-primary">Créez votre circuit sur mesure</h3>
              <p className="text-gray-600">
                Une destination particulière vous intéresse ? Vous souhaitez un itinéraire personnalisé ?
                Notre équipe d'experts locaux peut concevoir un voyage unique qui correspond parfaitement à vos envies.
              </p>
            </div>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 whitespace-nowrap"
              size="lg"
            >
              <a href="#reservation">Demander un devis</a>
            </Button>
          </div>
        </div>
        
        {/* What's Included Section */}
        <div className="my-12">
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">Ce qui est inclus</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Transport confortable</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Véhicules climatisés et confortables adaptés à la taille du groupe, avec chauffeur professionnel.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Guide expert</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Accompagnement par un guide local francophone ou anglophone passionné et connaisseur de la région.
              </p>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <span className="text-lg sm:text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Expériences authentiques</h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                Rencontres avec les locaux, découvertes culturelles et culinaires, activités typiques de la région.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Excursions;
