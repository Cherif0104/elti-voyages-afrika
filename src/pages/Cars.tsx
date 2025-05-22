import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PartnerLogo from "@/components/PartnerLogo";
import CarsHeroSection from "@/components/cars/CarsHeroSection";
import CarStatsSection from "@/components/cars/CarCtaSection";
import CarCtaSection from "@/components/cars/CarCtaSection";
import CarCategoryCard from "@/components/cars/CarCategoryCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Car, Calendar, ShieldCheck, Sparkles, Info, User, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Cars = () => {
  const carCategories = [
    {
      category: "Économique",
      model: "Dacia Logan ou similaire",
      price: "30 € / jour",
      features: ["5 places", "Climatisation", "Kilométrage illimité", "Assurance de base incluse"],
      imageSrc: "/lovable-uploads/55deb0b9-ef29-4fc9-8305-948cf2e3c2a8.png"
    },
    {
      category: "SUV Compact",
      model: "Dacia Duster ou similaire",
      price: "45 € / jour",
      features: ["5 places", "Climatisation", "Kilométrage illimité", "Assurance de base incluse"],
      imageSrc: "/lovable-uploads/4c49d7c8-dc2d-4f47-8f65-63c7bd6bd975.png"
    },
    {
      category: "Premium",
      model: "Mercedes Classe C ou similaire",
      price: "80 € / jour",
      features: ["5 places", "Climatisation", "Kilométrage illimité", "Assurance tous risques"],
      imageSrc: "/lovable-uploads/0142a976-b82a-4495-8f81-7e28dcbb3852.png"
    },
    {
      category: "Minivan",
      model: "Renault Trafic ou similaire",
      price: "75 € / jour",
      features: ["9 places", "Climatisation", "Kilométrage illimité", "Assurance de base incluse"],
      imageSrc: "/lovable-uploads/551ad016-1ff4-4e98-932b-fd990f5086f9.png"
    }
  ];
  
  const rentalCompanies = [
    {
      name: "Sixt",
      logo: "/lovable-uploads/3d1d0740-fce2-4c0e-8d2a-38464c306939.png"
    },
    {
      name: "Hertz",
      logo: "/lovable-uploads/d80e170b-3282-4f7f-879b-af33bea2727d.png"
    },
    {
      name: "Inzar",
      logo: "/lovable-uploads/cc89c664-211c-47ef-89c5-4c30f61b6c2e.png"
    },
    {
      name: "CTM Transport",
      logo: "/lovable-uploads/eee3c5a7-6c4d-4806-ab11-7e2a4d34df45.png"
    }
  ];
  
  const pickupLocations = [
    "Aéroport de Casablanca",
    "Aéroport de Marrakech",
    "Aéroport de Rabat",
    "Centre-ville de Casablanca",
    "Centre-ville de Marrakech",
    "Agadir",
    "Tanger",
    "Fès",
    "Dakar",
    "Aéroport de Dakar"
  ];

  const additionalServices = [
    {
      title: "Chauffeur professionnel",
      description: "Optez pour un chauffeur expérimenté qui connaît les routes et la culture locale",
      price: "À partir de 80€/jour",
      icon: <User className="h-10 w-10 text-primary" />
    },
    {
      title: "GPS premium",
      description: "Navigation de dernière génération avec cartes détaillées du Maroc et du Sénégal",
      price: "5€/jour",
      icon: <MapPin className="h-10 w-10 text-primary" />
    },
    {
      title: "Siège enfant",
      description: "Sièges homologués pour enfants de tous âges",
      price: "3€/jour",
      icon: <Users className="h-10 w-10 text-primary" />
    },
    {
      title: "Assurance tous risques",
      description: "Couverture complète sans franchise pour une tranquillité totale",
      price: "15€/jour",
      icon: <ShieldCheck className="h-10 w-10 text-primary" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <CarsHeroSection />
      
      {/* Stats Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary mb-2">
                <Car className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600 font-medium">Véhicules</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary mb-2">
                <MapPin className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-gray-600 font-medium">Agences</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary mb-2">
                <Clock className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600 font-medium">Assistance</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary mb-2">
                <MapPin className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <div className="text-gray-600 font-medium">Villes</div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs for Different Services */}
        <Tabs defaultValue="rentals" className="mb-12">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="rentals">Location de voiture</TabsTrigger>
            <TabsTrigger value="chauffeur">Service chauffeur</TabsTrigger>
            <TabsTrigger value="transfers">Transferts aéroport</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rentals" className="mt-0">
            {/* Current Offers Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
                Nos partenaires
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4">Location de voitures</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un large choix de véhicules disponibles dans les principaux aéroports et centres-villes du Maroc et du Sénégal.
              </p>
            </motion.div>
            
            {/* Rental Companies */}
            <div className="mb-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {rentalCompanies.map((company, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <PartnerLogo 
                      name={company.name}
                      logoSrc={company.logo}
                      className="hover:shadow-lg transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Car Categories */}
            <div id="cars-categories" className="scroll-mt-20">
              <h2 className="text-2xl font-bold text-primary mb-6">Nos catégories de véhicules</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {carCategories.map((car, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CarCategoryCard
                      category={car.category}
                      model={car.model}
                      price={car.price}
                      features={car.features}
                      imageSrc={car.imageSrc}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Pickup Locations - New Section */}
            <div className="my-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Points de prise en charge</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {pickupLocations.map((location, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md text-center hover:bg-primary/5 transition-colors">
                    <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                    <span className="text-sm font-medium text-gray-700">{location}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Services - New Section */}
            <div className="my-16">
              <h2 className="text-2xl font-bold text-primary mb-6">Services additionnels</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalServices.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-md transition-all">
                    <div className="p-6">
                      <div className="flex justify-center mb-4">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-center mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm text-center mb-4">{service.description}</p>
                      <div className="text-center font-bold text-primary">{service.price}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="chauffeur">
            {/* VIP Service Banner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden mb-10">
                <div className="bg-gradient-to-r from-primary to-primary/90 text-white p-8">
                  <h2 className="text-2xl font-bold mb-4">Service Chauffeur Privé</h2>
                  <p className="mb-6 opacity-90 max-w-2xl">
                    Optez pour le confort et la sécurité avec notre service de chauffeur privé disponible 24h/24.
                    Nos chauffeurs professionnels connaissent parfaitement les routes et vous accompagnent tout au long de votre séjour.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                      <h3 className="text-lg font-bold mb-2">Transfert Aéroport</h3>
                      <p className="text-sm opacity-80">À partir de 50€</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                      <h3 className="text-lg font-bold mb-2">Journée complète</h3>
                      <p className="text-sm opacity-80">À partir de 150€</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                      <h3 className="text-lg font-bold mb-2">Circuit personnalisé</h3>
                      <p className="text-sm opacity-80">Sur demande</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
            
            {/* Chauffeur Service Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <Card className="p-6">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Expérience Premium</h3>
                <p className="text-gray-600 text-sm">
                  Nos chauffeurs sont sélectionnés pour leur professionnalisme, leur connaissance du terrain et leur maîtrise des langues.
                </p>
              </Card>
              
              <Card className="p-6">
                <Calendar className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Flexibilité totale</h3>
                <p className="text-gray-600 text-sm">
                  Modifiez vos horaires ou votre itinéraire à tout moment selon vos envies ou les imprévus.
                </p>
              </Card>
              
              <Card className="p-6">
                <ShieldCheck className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">Sécurité garantie</h3>
                <p className="text-gray-600 text-sm">
                  Véhicules récents et parfaitement entretenus, chauffeurs expérimentés et service d'assistance 24h/24.
                </p>
              </Card>
            </div>
            
            {/* Popular Routes */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-primary mb-6">Circuits populaires avec chauffeur</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <img src="/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png" alt="Chefchaouen" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Nord du Maroc</h3>
                      <p className="text-sm">4 jours / 3 nuits</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-4">
                      Explorez Tanger, Chefchaouen et Tétouan avec un chauffeur privé qui vous guidera à travers les sites les plus emblématiques.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">À partir de 450€</span>
                      <Button size="sm">Réserver</Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="overflow-hidden">
                  <div className="h-48 relative">
                    <img src="/lovable-uploads/00639225-b6c9-4ae6-bf80-d8c5154fb25f.png" alt="Désert" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">Route des kasbahs</h3>
                      <p className="text-sm">5 jours / 4 nuits</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 mb-4">
                      De Marrakech au désert, en passant par Ouarzazate et les gorges du Dadès, découvrez les paysages époustouflants du sud marocain.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">À partir de 580€</span>
                      <Button size="sm">Réserver</Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="transfers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Transferts aéroport</h2>
                <p className="text-gray-600 mb-6">
                  Commencez votre voyage en toute sérénité avec notre service de transfert aéroport. Un chauffeur vous attendra à votre arrivée avec un panneau à votre nom, prêt à vous conduire à votre hôtel ou destination.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Ponctualité garantie</h3>
                      <p className="text-sm text-gray-600">Nous surveillons les horaires des vols et adaptons le service en cas de retard</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Tous les aéroports</h3>
                      <p className="text-sm text-gray-600">Service disponible dans les principaux aéroports du Maroc et du Sénégal</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center bg-gray-50 p-4 rounded-lg">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Info className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Assistance complète</h3>
                      <p className="text-sm text-gray-600">Aide avec les bagages et informations touristiques pendant le trajet</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Tarifs indicatifs</h3>
                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-bold text-lg mb-4">Maroc</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Aéroport de Casablanca - Centre-ville</span>
                      <span className="font-bold">45€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Aéroport de Marrakech - Centre-ville</span>
                      <span className="font-bold">30€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Aéroport de Rabat - Centre-ville</span>
                      <span className="font-bold">35€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Aéroport de Tanger - Centre-ville</span>
                      <span className="font-bold">25€</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-4">Sénégal</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Aéroport de Dakar - Centre-ville</span>
                      <span className="font-bold">40€</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Aéroport de Dakar - Saly</span>
                      <span className="font-bold">65€</span>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mt-6 bg-secondary text-primary">Demander un devis personnalisé</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-6 mt-12">
          <h3 className="text-lg font-bold text-primary mb-4">Informations complémentaires</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm mb-2">Conditions de location</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Âge minimum: 21 ans</li>
                <li>• Permis de conduire valide depuis plus d'un an</li>
                <li>• Carte de crédit au nom du conducteur</li>
                <li>• Caution requise (montant selon véhicule)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sm mb-2">Services inclus</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Assistance routière 24h/24</li>
                <li>• Prise en charge aéroport/hôtel</li>
                <li>• Conseils itinéraires personnalisés</li>
                <li>• Support téléphonique multilingue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="mb-6 lg:mb-0">
              <Badge className="mb-4 px-3 py-1 bg-secondary text-primary">
                Réservation facile
              </Badge>
              <h2 className="text-3xl font-bold mb-2">
                Prêt à réserver votre véhicule ?
              </h2>
              <p className="text-white/80 max-w-lg">
                Complétez notre formulaire en quelques étapes pour recevoir un devis sur mesure.
              </p>
            </div>
            
            <Button 
              asChild
              size="lg"
              className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
            >
              <Link to="/contact">
                Demander un devis
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
