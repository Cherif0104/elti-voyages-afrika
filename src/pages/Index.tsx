import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Plane, Hotel, Car, Map, Crown, Star, MapPin, UsersRound, CalendarDays, Coffee, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import PartnerLogo from "@/components/PartnerLogo";
import PromotionBanner from "@/components/PromotionBanner";
import PopularDestinations from "@/components/PopularDestinations";
import SearchWidget from "@/components/SearchWidget";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  staggerContainer, 
  fadeInUp, 
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  hoverScale, 
  floatingAnimation,
  shineEffect,
  buttonTap,
  limitedAvailabilityPulse
} from "@/components/can2025/AnimationUtils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateStats, setAnimateStats] = useState(false);
  
  // Reference for parallax effect
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, margin: "-100px" });
  
  // For tabs
  const [activeTab, setActiveTab] = useState("popular");

  // Popular destinations
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

  // Example data for testimonials
  const testimonials = [
    {
      name: "Ahmed K.",
      location: "Casablanca",
      text: "Un service exceptionnel! Notre séjour pour la CAN était parfaitement organisé.",
      rating: 5,
    },
    {
      name: "Fatou M.",
      location: "Dakar",
      text: "Des prestations de qualité et un accompagnement personnalisé tout au long du voyage.",
      rating: 5,
    },
    {
      name: "Pierre L.",
      location: "Paris",
      text: "J'ai découvert le Maroc authentique grâce à leurs circuits sur mesure.",
      rating: 5,
    },
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
    setIsVisible(true);
    
    // Set a small delay before starting the stats animation
    setTimeout(() => {
      setAnimateStats(true);
    }, 500);
  }, []);

  // Counter animation for stats
  const Counter = ({ end, duration = 2000, title }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!isStatsInView) return;
      
      let start = 0;
      const step = end / (duration / 16); // Update roughly every 16ms for smooth animation
      
      const timer = setInterval(() => {
        start += step;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }, [end, duration, isStatsInView]);
    
    return (
      <div>
        <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
          {end.toString().includes('.') 
            ? count >= end 
              ? end 
              : count.toFixed(1)
            : count}{end.toString().endsWith('+') ? '+' : ''}
        </div>
        <div className="text-gray-600">{title}</div>
      </div>
    );
  };

  return (
    <>
      <PromotionBanner
        title="CAN 2025"
        text="Réservez votre pack supporter avant le 31 décembre et bénéficiez de -15%"
        linkText="En savoir plus"
        linkUrl="/can2025"
        active={true}
      />

      {/* Hero Section with Search Widget */}
      <section className="pt-0 lg:pt-0 relative overflow-hidden" ref={heroRef}>
        <div className="h-[650px] md:h-[700px] relative overflow-hidden">
          {/* Background image with overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2568&auto=format&fit=crop')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
          
          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center z-10">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
              >
                <motion.span 
                  variants={fadeInDown}
                  initial="hidden"
                  animate="visible"
                  className="text-secondary font-semibold mb-2 inline-block text-base md:text-lg drop-shadow-md"
                >
                  Votre partenaire de voyage officiel
                </motion.span>
                <motion.h1 
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                >
                  Voyagez au cœur de 
                  <span className="text-secondary block mt-2 text-shadow-md">l'Afrique</span>
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-white text-lg md:text-xl mb-8 max-w-lg font-medium drop-shadow-md"
                >
                  Billets d'avion, hôtels, voitures et packs pour la CAN 2025. Votre voyage sur mesure entre l'Afrique et le monde entier.
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <Button
                    size="lg"
                    className="text-lg px-8 py-7 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300 hover:shadow-lg shadow-secondary/20"
                    asChild
                  >
                    <Link to="#reservation">
                      Réserver mon pack
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-7 font-semibold transition-all duration-300"
                    asChild
                  >
                    <Link to="#news">
                      Dernières actualités
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Limited availability badge - positioned to match mockup */}
          <motion.div 
            className="absolute top-8 right-8 z-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Badge className="bg-secondary text-primary px-4 py-2 text-sm font-medium rounded-full flex items-center gap-2 shadow-lg animate-pulse">
              <Trophy className="h-5 w-5" />
              Places limitées !
            </Badge>
          </motion.div>
        </div>
        
        {/* Search Widget Position - Moved inside hero section for better visibility */}
        <div className="container mx-auto px-4 relative z-20 -mt-36 md:-mt-32">
          <SearchWidget />
        </div>
        
        {/* Stats counters grid */}
        <div className="container mx-auto px-4 mt-36 md:mt-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 bg-primary/40 backdrop-blur-sm p-6 rounded-lg shadow-lg">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-primary/60 rounded-md p-4 md:p-6 text-center hover:bg-primary/70 transition-all duration-300 cursor-pointer"
            >
              <div className="text-secondary mb-2">
                <Trophy className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {animateStats ? '24' : '0'}
              </div>
              <div className="text-base mt-1 text-white/90 font-medium">
                Équipes
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-primary/60 rounded-md p-4 md:p-6 text-center hover:bg-primary/70 transition-all duration-300 cursor-pointer"
            >
              <div className="text-secondary mb-2">
                <MapPin className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {animateStats ? '6' : '0'}
              </div>
              <div className="text-base mt-1 text-white/90 font-medium">
                Stades
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-primary/60 rounded-md p-4 md:p-6 text-center hover:bg-primary/70 transition-all duration-300 cursor-pointer"
            >
              <div className="text-secondary mb-2">
                <Trophy className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {animateStats ? '52' : '0'}
              </div>
              <div className="text-base mt-1 text-white/90 font-medium">
                Matchs
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-primary/60 rounded-md p-4 md:p-6 text-center relative hover:bg-primary/70 transition-all duration-300 cursor-pointer"
            >
              {/* Urgence badge */}
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-secondary text-primary shadow-md px-2 py-1 text-xs animate-pulse">
                  <Trophy className="h-3 w-3 mr-1" /> Urgence
                </Badge>
              </div>
              <div className="text-secondary mb-2">
                <CalendarDays className="h-8 w-8 mx-auto" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white">
                {animateStats ? '14' : '0'}
              </div>
              <div className="text-base mt-1 text-white/90 font-medium">
                Jours restants
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current Offers Section */}
      <section className="py-20 lg:pl-64 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3"
            >
              Offres spéciales
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos meilleures offres</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                whileHover={{ y: -10 }}
                className="group rounded-xl overflow-hidden shadow-lg relative h-[350px]"
              >
                <div className="absolute inset-0">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="mb-4 text-white/90">{offer.description}</p>
                  <Button 
                    variant="secondary" 
                    className="font-medium"
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
      <section className="py-20 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Destinations populaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Découvrez nos destinations phares au Maroc et au Sénégal.
            </p>
          </motion.div>
          
          <Tabs defaultValue="popular" className="w-full mb-8">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger value="popular" className="px-8">Populaires</TabsTrigger>
                <TabsTrigger value="morocco" className="px-8">Maroc</TabsTrigger>
                <TabsTrigger value="senegal" className="px-8">Sénégal</TabsTrigger>
                <TabsTrigger value="can2025" className="px-8">CAN 2025</TabsTrigger>
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
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative rounded-xl overflow-hidden shadow-lg h-64"
                  >
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="text-sm">{destination.country}</span>
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
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
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative rounded-xl overflow-hidden shadow-lg h-64"
                  >
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="text-sm">{destination.country}</span>
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
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
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="group relative rounded-xl overflow-hidden shadow-lg h-64"
                  >
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="text-sm">{destination.country}</span>
                      <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
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
      <section id="services" className="py-20 lg:pl-64">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3"
            >
              Nos prestations
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services complets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
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
                whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0, 44, 95, 0.15)" }}
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
      <section className="py-24 lg:pl-64 relative overflow-hidden bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 px-3 py-1 bg-secondary text-primary">
                Événement spécial
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Coupe d'Afrique des Nations 2025
              </h2>
              <p className="text-lg text-gray-700 mb-6">
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
                <Button size="lg" className="px-8 text-lg" asChild>
                  <Link to="/can2025">
                    Découvrir nos packs supporters
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/8a682208-d168-4383-a0bb-619fb16939f9.png" 
                  alt="CAN 2025" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 right-6"
                >
                  <img 
                    src="/lovable-uploads/ad2e6352-2bbd-43a0-ad6d-8760c3a39d60.png" 
                    alt="CAF Logo" 
                    className="w-24 h-24 object-contain rounded-full bg-white p-2 shadow-lg"
                  />
                </motion.div>
                <div className="absolute top-6 left-6 bg-secondary/90 text-primary font-bold py-2 px-4 rounded-lg">
                  Été 2025
                </div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white p-5 rounded-lg shadow-lg max-w-[220px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Star className="h-5 w-5 text-secondary fill-secondary" />
                  <Star className="h-5 w-5 text-secondary fill-secondary" />
                  <Star className="h-5 w-5 text-secondary fill-secondary" />
                  <Star className="h-5 w-5 text-secondary fill-secondary" />
                  <Star className="h-5 w-5 text-secondary fill-secondary" />
                </div>
                <p className="text-sm font-medium">"Une organisation parfaite pour notre voyage à la CAN 2023."</p>
                <p className="text-xs text-gray-500 mt-1">Mamadou S., Dakar</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 lg:pl-64">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nous collaborons avec les meilleurs acteurs du tourisme et du voyage pour vous garantir qualité et fiabilité.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 h-32"
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
      <section ref={statsRef} className="py-20 lg:pl-64 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">5000+</div>
              <div className="text-white/80">Voyageurs satisfaits</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">12</div>
              <div className="text-white/80">Destinations</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">8</div>
              <div className="text-white/80">Années d'expérience</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8</div>
              <div className="text-white/80">Note moyenne</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="reservation" className="py-20 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-full mb-3"
            >
              Contact
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Réservation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Remplissez notre formulaire pour recevoir une proposition personnalisée sous 24h.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-2xl mx-auto"
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
