import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, Hotel, Car, Map, Crown, Star, MapPin, UsersRound, CalendarDays, Coffee, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import PartnerLogo from "@/components/PartnerLogo";
import PopularDestinations from "@/components/PopularDestinations";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import BookingForm from "@/components/BookingForm";

const Index = () => {
  const [animateStats, setAnimateStats] = useState(false);
  
  // Reference for stats section
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, margin: "-100px" });
  
  // Example data for destinations
  const popularDestinations = [
    {
      name: "Marrakech",
      image: "/lovable-uploads/e067fb96-d7e6-4ba5-890d-84d016ad9522.png",
      country: "Maroc",
      price: "À partir de 499€"
    },
    {
      name: "Casablanca",
      image: "/lovable-uploads/e959261a-76fe-4475-8048-4cf15a7e9ed2.png",
      country: "Maroc",
      price: "À partir de 449€"
    },
    {
      name: "Dakar",
      image: "/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png",
      country: "Sénégal",
      price: "À partir de 599€"
    },
    {
      name: "Agadir",
      image: "/lovable-uploads/56e41311-f7d0-403c-9283-eb68ac5cf2d6.png",
      country: "Maroc",
      price: "À partir de 479€"
    }
  ];

  // Example data for packages
  const packages = [
    {
      name: "Pack Supporter Bronze",
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
      name: "Pack Supporter Argent",
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
      name: "Pack Supporter Or",
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
      name: "Pack Supporter Platine",
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

  // Example data for services
  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Billets d'avion",
      description: "Vols directs et correspondances vers toutes les destinations avec les meilleures compagnies.",
    },
    {
      icon: <Hotel className="h-8 w-8" />,
      title: "Réservations hôtelières",
      description: "Hôtels de 3 à 5 étoiles (Fairmont, Barceló, Radisson, riads traditionnels).",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Location de véhicules",
      description: "De l'économique au luxe, avec ou sans chauffeur pour tous vos déplacements.",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Excursions & circuits",
      description: "Découvrez Essaouira, Chefchaouen, Merzouga, Saint-Louis et plus encore.",
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "CAN 2025",
      description: "Packs complets pour vivre la Coupe d'Afrique des Nations 2025 au Maroc.",
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Expériences locales",
      description: "Immersion culturelle, gastronomie, artisanat et rencontres authentiques.",
    },
  ];

  // Example data for partners
  const partners = [
    { name: "Royal Air Maroc", logo: "/lovable-uploads/a89fcb9d-cfaf-4079-9105-53594f9f0310.png" },
    { name: "Air Sénégal", logo: "/lovable-uploads/70452ae0-3719-42f5-b659-fcc9048ec921.png" },
    { name: "Turkish Airlines", logo: "/lovable-uploads/ab63324d-f67c-462a-9b92-16f736061c0a.png" },
    { name: "Qatar Airways", logo: "/lovable-uploads/64fef04f-2443-4df3-9dc2-df7a9691ddb9.png" },
    { name: "Fairmont", logo: "/lovable-uploads/3d3e0204-e9c0-4d89-8d27-f0d8e4bf4c5b.png" },
    { name: "Radisson", logo: "/lovable-uploads/3d1d0740-fce2-4c0e-8d2a-38464c306939.png" },
    { name: "Barceló", logo: "/lovable-uploads/54f2cb9e-5f0f-4f05-b859-3b24e4055428.png" },
    { name: "CAF", logo: "/lovable-uploads/ad2e6352-2bbd-43a0-ad6d-8760c3a39d60.png" },
  ];

  // Current offers
  const currentOffers = [
    {
      title: "CAN 2025",
      description: "Réservez votre pack supporter pour la CAN 2025 au Maroc et bénéficiez de -15%",
      image: "/lovable-uploads/8a682208-d168-4383-a0bb-619fb16939f9.png",
      buttonText: "En savoir plus",
      link: "/can2025"
    },
    {
      title: "Séjour à Marrakech",
      description: "Vol + hôtel 4★ + petit déjeuner pendant 5 jours à partir de 449€",
      image: "/lovable-uploads/e067fb96-d7e6-4ba5-890d-84d016ad9522.png",
      buttonText: "Réserver",
      link: "/hotels"
    },
    {
      title: "Escapade à Dakar",
      description: "Vol + hôtel 4★ + transferts pendant 7 jours à partir de 599€",
      image: "/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png",
      buttonText: "Réserver",
      link: "/hotels"
    }
  ];

  useEffect(() => {
    // Set a small delay before starting the stats animation
    setTimeout(() => {
      setAnimateStats(true);
    }, 500);
  }, []);

  return (
    <>
      {/* Hero Section with Search Widget */}
      <HeroSection />

      {/* Stats counters grid */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary mb-2">
                <Trophy className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {animateStats ? '24' : '0'}
              </div>
              <div className="text-gray-600 font-medium">
                Équipes
              </div>
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
              <div className="text-3xl font-bold text-primary mb-2">
                {animateStats ? '6' : '0'}
              </div>
              <div className="text-gray-600 font-medium">
                Stades
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-primary mb-2">
                <Trophy className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {animateStats ? '52' : '0'}
              </div>
              <div className="text-gray-600 font-medium">
                Matchs
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-white rounded-lg p-6 text-center relative shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Urgence badge */}
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-secondary text-primary shadow-md px-2 py-1 text-xs animate-pulse">
                  <Trophy className="h-3 w-3 mr-1" /> Urgent
                </Badge>
              </div>
              <div className="text-primary mb-2">
                <CalendarDays className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                {animateStats ? '14' : '0'}
              </div>
              <div className="text-gray-600 font-medium">
                Jours restants
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Offers Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
              Offres spéciales
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Nos meilleures offres</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos promotions exclusives pour des voyages inoubliables.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentOffers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">{offer.title}</h3>
                  <p className="mb-4 text-gray-600">{offer.description}</p>
                  <Button 
                    variant="default" 
                    className="w-full"
                    asChild
                  >
                    <Link to={offer.link}>
                      {offer.buttonText}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations with Tabs */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Destinations populaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos destinations phares au Maroc et au Sénégal.
            </p>
          </motion.div>
          
          <Tabs defaultValue="popular" className="w-full mb-8">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="popular" className="px-6">Populaires</TabsTrigger>
                <TabsTrigger value="morocco" className="px-6">Maroc</TabsTrigger>
                <TabsTrigger value="senegal" className="px-6">Sénégal</TabsTrigger>
                <TabsTrigger value="can2025" className="px-6">CAN 2025</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="popular" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {popularDestinations.map((destination, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{destination.country}</span>
                      <h3 className="text-lg font-bold text-primary">{destination.name}</h3>
                      <span className="text-secondary font-medium">{destination.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="morocco" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {popularDestinations.filter(d => d.country === "Maroc").map((destination, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{destination.country}</span>
                      <h3 className="text-lg font-bold text-primary">{destination.name}</h3>
                      <span className="text-secondary font-medium">{destination.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="senegal" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {popularDestinations.filter(d => d.country === "Sénégal").map((destination, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={destination.image} 
                        alt={destination.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-sm text-gray-500">{destination.country}</span>
                      <h3 className="text-lg font-bold text-primary">{destination.name}</h3>
                      <span className="text-secondary font-medium">{destination.price}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="can2025" className="mt-0">
              <div className="text-center mb-8">
                <Badge className="mb-4 px-4 py-2 text-base font-semibold bg-secondary text-primary">
                  Événement spécial
                </Badge>
                <h3 className="text-2xl font-bold mb-2">Coupe d'Afrique des Nations 2025</h3>
                <p className="max-w-2xl mx-auto text-gray-600">
                  Réservez dès maintenant votre pack complet pour assister à la CAN 2025 au Maroc.
                  Billets de match, hébergement, vols et transferts inclus.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" className="px-8 text-lg" asChild>
                  <Link to="/can2025">
                    Découvrir nos offres CAN 2025
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
              Nos prestations
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Services complets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ELTI VOYAGES vous accompagne dans tous vos projets de voyage avec une offre complète de services premium.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAN 2025 Special Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 px-3 py-1 bg-secondary text-primary">
                Événement spécial
              </Badge>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Coupe d'Afrique des Nations 2025
              </h2>
              <p className="text-gray-700 mb-6">
                Vivez l'aventure de la CAN 2025 au Maroc avec nos packs supporters complets.
                Vol, hébergement, billets de match et expériences exclusives pour un séjour inoubliable.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Billets pour les matchs garantis",
                  "Hébergement de qualité à proximité des stades",
                  "Vols directs depuis plusieurs villes",
                  "Transferts aéroport et stades inclus",
                  "Expériences culturelles et excursions"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <div className="bg-secondary/20 p-1 rounded-full mr-3">
                      <Trophy className="h-4 w-4 text-secondary" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="px-8 text-lg" asChild>
                  <Link to="/can2025">
                    Découvrir nos packs supporters
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/8a682208-d168-4383-a0bb-619fb16939f9.png" 
                  alt="CAN 2025" 
                  className="w-full h-auto"
                />
                <div className="absolute top-6 left-6 bg-secondary/90 text-primary font-bold py-2 px-4 rounded">
                  Été 2025
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec les meilleurs acteurs du tourisme et du voyage pour vous garantir qualité et fiabilité.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 h-32 border border-gray-100"
              >
                {partner.logo ? (
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-16 max-w-[80%] object-contain"
                  />
                ) : (
                  <span className="text-xl font-bold text-primary/80">{partner.name}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Voyageurs satisfaits</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">12</div>
              <div className="text-white/80">Destinations</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-white/80">Années d'expérience</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-white/80">Note moyenne</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="reservation" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-md mb-3">
              Contact
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Réservation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Remplissez notre formulaire pour recevoir une proposition personnalisée sous 24h.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BookingForm />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
