
import { Building, Star, MapPin, Calendar, Users, Trophy, Heart, Plus, Check, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/can2025/AnimationUtils";
import PartnerLogo from "@/components/PartnerLogo";
import HotelsHeroSection from "@/components/hotels/HotelsHeroSection";
import HotelStatsSection from "@/components/hotels/HotelStatsSection";
import HotelCtaSection from "@/components/hotels/HotelCtaSection";

const HotelCard = ({ category, city, price, features, imageUrl }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-5px] duration-300">
      <div className="w-full h-48 relative group">
        <img 
          src={imageUrl} 
          alt={`${category} - ${city}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <MapPin className="h-4 w-4 inline mr-1" /> {city}
        </div>
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
              <Check className="h-4 w-4 text-primary mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-end">
          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-md"
          >
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
    <div>
      {/* Hero Section avec Widget de recherche */}
      <HotelsHeroSection />
      
      {/* Stats Section */}
      <HotelStatsSection />
      
      {/* Hotel Chains */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Partenariats
            </span>
            <h2 className="text-3xl font-bold text-primary">Nos partenaires hôteliers</h2>
            <p className="text-gray-600 mt-2">Nous collaborons avec les meilleures chaînes hôtelières pour vous offrir un service de qualité</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hotelChains.map((chain, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <PartnerLogo
                  name={chain.name}
                  logoSrc={chain.logo}
                  className="hover:shadow-lg transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Hotel Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Destinations
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Nos hébergements populaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Du riad traditionnel à l'hôtel 5 étoiles, nous vous proposons des hébergements adaptés à tous les budgets et tous les styles.
            </p>
          </motion.div>
          
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
        </div>
      </section>
      
      {/* Additional services */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Services
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Services supplémentaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Personnalisez votre séjour avec nos services additionnels pour une expérience sur mesure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">Spa & Bien-être</h3>
              <p className="text-gray-600">Massages, hammam, soins personnalisés et moments de détente absolue.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">Restauration Privée</h3>
              <p className="text-gray-600">Chef privé, dîners gastronomiques et expériences culinaires uniques.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-primary/5 p-6 rounded-lg hover:bg-primary/10 transition-all duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-primary">Célébrations</h3>
              <p className="text-gray-600">Anniversaires, mariages, événements spéciaux organisés dans des cadres exceptionnels.</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <HotelCtaSection />
      
      {/* Important information */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold text-primary mb-8 text-center">Informations importantes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-sm mb-2">Politiques de réservation</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Paiement sécurisé en ligne</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Confirmation immédiate par email</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Garantie du meilleur prix</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Assistance 24h/24 et 7j/7</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <h4 className="font-bold text-sm mb-2">Services inclus</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Petit-déjeuner (selon établissement)</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Wi-Fi gratuit</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Conciergerie ELTI VOYAGES</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" /> Support téléphonique multilingue</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
