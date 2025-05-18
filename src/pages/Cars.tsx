
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import PartnerLogo from "@/components/PartnerLogo";
import CarsHeroSection from "@/components/cars/CarsHeroSection";
import CarStatsSection from "@/components/cars/CarStatsSection";
import CarCtaSection from "@/components/cars/CarCtaSection";
import CarCategoryCard from "@/components/cars/CarCategoryCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, MapPin, Car } from "lucide-react";
import { Link } from "react-router-dom";

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
        
        {/* VIP Service Banner */}
        <div className="my-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
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
                
                <Button 
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
                >
                  <Link to="#reservation">
                    Réserver maintenant
                  </Link>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
        
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
