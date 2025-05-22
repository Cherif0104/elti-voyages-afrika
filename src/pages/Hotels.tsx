import { Building, Star, MapPin, Calendar, Users, Trophy, Heart, Plus, Check, ChevronRight, Home, Building2, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/components/can2025/AnimationUtils";
import PartnerLogo from "@/components/PartnerLogo";
import HotelsHeroSection from "@/components/hotels/HotelsHeroSection";
import HotelStatsSection from "@/components/hotels/HotelStatsSection";
import HotelCtaSection from "@/components/hotels/HotelCtaSection";

const AccommodationCard = ({ category, city, price, features, imageUrl, type }) => {
  // Icon mapping for different accommodation types
  const getTypeIcon = () => {
    switch(type) {
      case "hotel": return <Building className="h-4 w-4 text-primary" />;
      case "apartment": return <Building2 className="h-4 w-4 text-primary" />;
      case "villa": return <Home className="h-4 w-4 text-primary" />;
      case "riad": return <BedDouble className="h-4 w-4 text-primary" />;
      default: return <Building className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:translate-y-[-5px] duration-300">
      <div className="w-full h-48 relative group">
        <img 
          src={imageUrl} 
          alt={`${category} - ${city}`} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-2 left-2 bg-white/90 px-2 py-1 rounded text-xs font-medium flex items-center gap-1">
          {getTypeIcon()}
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
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
  const accommodations = [
    // Morocco
    {
      category: "Hôtel Royal Mansour",
      city: "Marrakech, Maroc",
      price: "350 € / nuit",
      features: ["Service 5 étoiles", "Spa de luxe", "Restaurant gastronomique", "Piscine privée"],
      imageUrl: "/lovable-uploads/af93fe88-9741-47cf-bb0f-4bdd4f5c1abc.png",
      type: "hotel",
      country: "maroc"
    },
    {
      category: "Riad Palais Sebban",
      city: "Médina de Marrakech, Maroc",
      price: "120 € / nuit",
      features: ["Patio traditionnel", "Piscine", "Terrasse panoramique", "Décoration authentique"],
      imageUrl: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
      type: "riad",
      country: "maroc"
    },
    {
      category: "Villa Palmeraie",
      city: "Palmeraie, Marrakech, Maroc",
      price: "280 € / nuit",
      features: ["Jardin privé", "Piscine", "Personnel de maison", "6 chambres"],
      imageUrl: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      type: "villa",
      country: "maroc"
    },
    {
      category: "Appartements Marina",
      city: "Casablanca, Maroc",
      price: "90 € / nuit",
      features: ["Vue sur mer", "Sécurité 24h/24", "Entièrement meublé", "Proche commerces"],
      imageUrl: "/lovable-uploads/8bc5d2ec-a33d-48d8-af8e-ca833e69098c.png",
      type: "apartment",
      country: "maroc"
    },
    // Senegal
    {
      category: "Radisson Blu Hotel",
      city: "Dakar, Sénégal",
      price: "160 € / nuit",
      features: ["Vue sur l'océan", "Piscine à débordement", "Restaurant gastronomique", "Centre d'affaires"],
      imageUrl: "/lovable-uploads/1562369a-d2f9-417f-a03c-6ccf5e14e512.png",
      type: "hotel",
      country: "senegal"
    },
    {
      category: "Villa Saly",
      city: "Saly, Sénégal",
      price: "220 € / nuit",
      features: ["Accès plage privée", "Piscine", "Personnel inclus", "4 chambres"],
      imageUrl: "/lovable-uploads/28d985f6-366d-45b3-89a2-e799b677f0dd.png",
      type: "villa",
      country: "senegal"
    },
    {
      category: "Appartement Corniche",
      city: "Dakar, Sénégal",
      price: "85 € / nuit",
      features: ["Vue panoramique", "Sécurité", "Entièrement équipé", "Parking"],
      imageUrl: "/lovable-uploads/771002fe-2fef-4055-a080-056ff7e51723.png",
      type: "apartment",
      country: "senegal"
    },
    {
      category: "Terrou-Bi Resort",
      city: "Dakar, Sénégal",
      price: "175 € / nuit",
      features: ["Casino", "Plage privée", "Restaurants", "Centre de bien-être"],
      imageUrl: "/lovable-uploads/e4b218b7-e04c-4ba9-b820-3532d1f43e94.png",
      type: "hotel",
      country: "senegal"
    },
    // Other destinations
    {
      category: "Kasbah Tamadot",
      city: "Asni, Atlas, Maroc",
      price: "450 € / nuit",
      features: ["Vue sur montagne", "Expérience berbère", "Piscine", "Restaurant gourmet"],
      imageUrl: "/lovable-uploads/8f78671e-52ba-451f-826b-7eefe225183e.png",
      type: "hotel",
      country: "maroc"
    },
    {
      category: "Riad Fès",
      city: "Fès, Maroc",
      price: "180 € / nuit",
      features: ["Spa", "Restaurant marocain", "Terrasse", "Médina UNESCO"],
      imageUrl: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      type: "riad",
      country: "maroc"
    },
    {
      category: "Lagoon Apartments",
      city: "Mbour, Sénégal",
      price: "95 € / nuit",
      features: ["Vue lagune", "2 chambres", "Terrasse privée", "Accès piscine"],
      imageUrl: "/lovable-uploads/00639225-b6c9-4ae6-bf80-d8c5154fb25f.png",
      type: "apartment",
      country: "senegal"
    },
    {
      category: "Villa Cap Skirring",
      city: "Casamance, Sénégal",
      price: "140 € / nuit",
      features: ["Vue océan", "Jardin tropical", "Personnel", "Sport aquatiques"],
      imageUrl: "/lovable-uploads/8f78671e-52ba-451f-826b-7eefe225183e.png",
      type: "villa",
      country: "senegal"
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
      
      {/* Accommodation Types */}
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
              Hébergements
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Solutions d'hébergement variées</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection d'hébergements pour tous les goûts et tous les budgets au Maroc, au Sénégal et dans nos autres destinations.
            </p>
          </motion.div>
          
          {/* Tabs for filtering by accommodation type */}
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8 w-full max-w-3xl mx-auto grid grid-cols-5 gap-2">
              <TabsTrigger value="all" className="flex-1">Tous</TabsTrigger>
              <TabsTrigger value="hotel" className="flex-1 flex items-center justify-center gap-1">
                <Building className="h-4 w-4" />
                <span>Hôtels</span>
              </TabsTrigger>
              <TabsTrigger value="riad" className="flex-1 flex items-center justify-center gap-1">
                <BedDouble className="h-4 w-4" />
                <span>Riads</span>
              </TabsTrigger>
              <TabsTrigger value="apartment" className="flex-1 flex items-center justify-center gap-1">
                <Building2 className="h-4 w-4" />
                <span>Appartements</span>
              </TabsTrigger>
              <TabsTrigger value="villa" className="flex-1 flex items-center justify-center gap-1">
                <Home className="h-4 w-4" />
                <span>Villas</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations.map((accommodation, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <AccommodationCard
                      category={accommodation.category}
                      city={accommodation.city}
                      price={accommodation.price}
                      features={accommodation.features}
                      imageUrl={accommodation.imageUrl}
                      type={accommodation.type}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="hotel">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations
                  .filter(acc => acc.type === "hotel")
                  .map((accommodation, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <AccommodationCard
                        category={accommodation.category}
                        city={accommodation.city}
                        price={accommodation.price}
                        features={accommodation.features}
                        imageUrl={accommodation.imageUrl}
                        type={accommodation.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="riad">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations
                  .filter(acc => acc.type === "riad")
                  .map((accommodation, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <AccommodationCard
                        category={accommodation.category}
                        city={accommodation.city}
                        price={accommodation.price}
                        features={accommodation.features}
                        imageUrl={accommodation.imageUrl}
                        type={accommodation.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="apartment">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations
                  .filter(acc => acc.type === "apartment")
                  .map((accommodation, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <AccommodationCard
                        category={accommodation.category}
                        city={accommodation.city}
                        price={accommodation.price}
                        features={accommodation.features}
                        imageUrl={accommodation.imageUrl}
                        type={accommodation.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="villa">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations
                  .filter(acc => acc.type === "villa")
                  .map((accommodation, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <AccommodationCard
                        category={accommodation.category}
                        city={accommodation.city}
                        price={accommodation.price}
                        features={accommodation.features}
                        imageUrl={accommodation.imageUrl}
                        type={accommodation.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Tabs for filtering by country */}
          <Tabs defaultValue="all" className="mt-12">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-primary">Explorer par destination</h3>
            </div>
            
            <TabsList className="mb-8 w-full max-w-md mx-auto">
              <TabsTrigger value="all" className="flex-1">Toutes</TabsTrigger>
              <TabsTrigger value="maroc" className="flex-1">Maroc</TabsTrigger>
              <TabsTrigger value="senegal" className="flex-1">Sénégal</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations.map((accommodation, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <AccommodationCard
                      category={accommodation.category}
                      city={accommodation.city}
                      price={accommodation.price}
                      features={accommodation.features}
                      imageUrl={accommodation.imageUrl}
                      type={accommodation.type}
                    />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="maroc">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations
                  .filter(acc => acc.country === "maroc")
                  .map((accommodation, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <AccommodationCard
                        category={accommodation.category}
                        city={accommodation.city}
                        price={accommodation.price}
                        features={accommodation.features}
                        imageUrl={accommodation.imageUrl}
                        type={accommodation.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
            
            <TabsContent value="senegal">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {accommodations
                  .filter(acc => acc.country === "senegal")
                  .map((accommodation, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <AccommodationCard
                        category={accommodation.category}
                        city={accommodation.city}
                        price={accommodation.price}
                        features={accommodation.features}
                        imageUrl={accommodation.imageUrl}
                        type={accommodation.type}
                      />
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          </Tabs>
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
