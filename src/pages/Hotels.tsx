
import { Building, Star, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/can2025/AnimationUtils";
import PartnerLogo from "@/components/PartnerLogo";

const HotelCard = ({ category, city, price, features, imageUrl }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="w-full h-48 relative">
        <img 
          src={imageUrl} 
          alt={`${category} - ${city}`} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-primary">{category}</h3>
            <p className="text-sm text-gray-500">{city}</p>
          </div>
          <div className="text-xl font-bold">{price}</div>
        </div>
        
        <Separator className="my-4" />
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-end">
          <Button asChild>
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Hotels = () => {
  const hotelCategories = [
    {
      category: "Marrakech",
      city: "Hôtels traditionnels & riads",
      price: "80 € / nuit",
      features: ["Centre historique", "Piscine", "Restaurant traditionnel", "Spa & hammam"],
      imageUrl: "/lovable-uploads/af93fe88-9741-47cf-bb0f-4bdd4f5c1abc.png"
    },
    {
      category: "Dakar",
      city: "Hébergements design",
      price: "95 € / nuit",
      features: ["Vue sur l'océan", "Piscine à débordement", "Restaurant gastronomique", "Centre d'affaires"],
      imageUrl: "/lovable-uploads/1562369a-d2f9-417f-a03c-6ccf5e14e512.png"
    },
    {
      category: "Monument Renaissance",
      city: "Dakar",
      price: "110 € / nuit",
      features: ["Vue panoramique", "Proximité des sites historiques", "Transport inclus", "Visite guidée offerte"],
      imageUrl: "/lovable-uploads/771002fe-2fef-4055-a080-056ff7e51723.png"
    },
    {
      category: "Casablanca",
      city: "Hôtels de luxe",
      price: "150 € / nuit",
      features: ["Club privé", "Conciergerie 24h/24", "Restaurant étoilé", "Transferts privatifs"],
      imageUrl: "/lovable-uploads/e4b218b7-e04c-4ba9-b820-3532d1f43e94.png"
    }
  ];
  
  const hotelChains = [
    {
      name: "Accor",
      logo: "/lovable-uploads/b952d7ee-cc6d-4ab8-8256-37a2f2847ea6.png"
    },
    {
      name: "Radisson",
      logo: "/lovable-uploads/54f2cb9e-5f0f-4f05-b859-3b24e4055428.png"
    },
    {
      name: "Barceló",
      logo: "/lovable-uploads/8a682208-d168-4383-a0bb-619fb16939f9.png"
    },
    {
      name: "Mövenpick",
      logo: "/lovable-uploads/fe852adb-2bf0-40f7-99d3-64654050726b.png"
    },
    {
      name: "Terrou-Bi",
      logo: "/lovable-uploads/7617fa37-efc0-49e0-a799-1ea981449f20.png"
    },
    {
      name: "Fairmont",
      logoSrc: null
    }
  ];
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Hébergements</h1>
        <p className="text-gray-600 mb-8">
          Du riad traditionnel à l'hôtel 5 étoiles en passant par les résidences de standing, nous vous proposons les meilleurs hébergements au Maroc et au Sénégal.
        </p>
        
        {/* Hotel Chains */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">Nos partenaires hôteliers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hotelChains.map((chain, index) => (
              <PartnerLogo
                key={index}
                name={chain.name}
                logoSrc={chain.logo}
                className="hover:shadow-lg transition-all duration-300"
              />
            ))}
          </div>
        </div>
        
        {/* Hotel Categories */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-xl font-bold text-primary mb-6">Nos Destinations populaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hotelCategories.map((hotel, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <HotelCard
                  category={hotel.category}
                  city={hotel.city}
                  price={hotel.price}
                  features={hotel.features}
                  imageUrl={hotel.imageUrl}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Additional services */}
        <div className="mt-12 bg-primary my-12 rounded-lg overflow-hidden">
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Services supplémentaires</h2>
            <p className="mb-6 opacity-90">
              Personnalisez votre séjour avec nos services additionnels pour une expérience sur mesure.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Spa & Bien-être</h3>
                <p className="text-sm opacity-80">Massages, hammam, soins</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Restauration Privée</h3>
                <p className="text-sm opacity-80">Chef privé, dîners gastronomiques</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Célébrations</h3>
                <p className="text-sm opacity-80">Anniversaires, mariages, événements</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center md:justify-end">
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="#reservation">Réserver des services</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hotel search */}
        <div className="bg-gray-50 rounded-lg p-6 mt-12">
          <h3 className="text-lg font-bold text-primary mb-4">Trouver un hébergement</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="city"
                  type="text"
                  placeholder="Marrakech, Dakar..."
                  className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="check-in" className="block text-sm font-medium text-gray-700 mb-1">Arrivée</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="check-in"
                  type="text"
                  placeholder="jj/mm/aaaa"
                  className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="check-out" className="block text-sm font-medium text-gray-700 mb-1">Départ</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="check-out"
                  type="text"
                  placeholder="jj/mm/aaaa"
                  className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Voyageurs</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  id="guests"
                  type="number"
                  min="1"
                  placeholder="2"
                  className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
            </div>
            
            <div className="md:col-span-4">
              <Button className="w-full mt-4">Rechercher des hébergements</Button>
            </div>
          </div>
        </div>
        
        {/* Important information */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-primary mb-4">Informations importantes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-sm mb-2">Politiques de réservation</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Paiement sécurisé en ligne</li>
                <li>• Confirmation immédiate par email</li>
                <li>• Garantie du meilleur prix</li>
                <li>• Assistance 24h/24 et 7j/7</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-bold text-sm mb-2">Services inclus</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Petit-déjeuner (selon établissement)</li>
                <li>• Wi-Fi gratuit</li>
                <li>• Conciergerie ELTI VOYAGES</li>
                <li>• Support téléphonique multilingue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
