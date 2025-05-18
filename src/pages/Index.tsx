import { useEffect, useState, useRef } from "react";
import { Plane, Hotel, Car, Map, Crown, Star, MapPin, Calendar, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import PartnerLogo from "@/components/PartnerLogo";
import PromotionBanner from "@/components/PromotionBanner";
import PopularDestinations from "@/components/PopularDestinations";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
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

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchTravelers, setSearchTravelers] = useState("");
  const [animateStats, setAnimateStats] = useState(false);
  
  // Reference for parallax effect
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: false, margin: "-100px" });
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  useEffect(() => {
    setIsVisible(true);
    
    // Set a small delay before starting the stats animation
    setTimeout(() => {
      setAnimateStats(true);
    }, 500);
  }, []);

  // Example data for packages
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
      icon: <Crown className="h-8 w-8" />,
      title: "Services VIP",
      description: "Accueil aéroport, conciergerie et chauffeur privé pour un voyage sans souci.",
    },
  ];

  // Example data for partners
  const partners = [
    { name: "Royal Air Maroc" },
    { name: "Air Sénégal" },
    { name: "Turkish Airlines" },
    { name: "Qatar Airways" },
    { name: "Fairmont" },
    { name: "Radisson" },
    { name: "Barceló" },
    { name: "Sixt" },
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
  
  // Floating decoration elements
  const FloatingElement = ({ children, delay = 0, x = 0, y = 0, size = "lg" }) => {
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-12 w-12",
      lg: "h-16 w-16"
    };
    
    return (
      <motion.div
        className={`absolute text-primary/5 z-0 ${sizeClasses[size] || sizeClasses.lg}`}
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.7,
          y: [0, -15, 0],
          transition: { 
            y: { 
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              ease: "easeInOut", 
              delay 
            },
            opacity: { duration: 1, delay }
          }
        }}
      >
        {children}
      </motion.div>
    );
  };

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

      {/* Hero Section with Parallax Effect */}
      <section className="pt-20 lg:pl-64 relative overflow-hidden" ref={heroRef}>
        {/* Decorative floating elements */}
        <FloatingElement x={5} y={20} delay={0.2} size="lg">
          <Calendar className="h-full w-full" />
        </FloatingElement>
        <FloatingElement x={85} y={40} delay={0.5} size="md">
          <Star className="h-full w-full" />
        </FloatingElement>
        <FloatingElement x={70} y={15} delay={1.3} size="sm">
          <MapPin className="h-full w-full" />
        </FloatingElement>
        
        <motion.div 
          className="h-[600px] md:h-[700px] relative overflow-hidden"
          style={{ y, opacity }} 
        >
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
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
                  className="text-secondary font-semibold mb-2 inline-block"
                >
                  Votre partenaire de voyage de confiance
                </motion.span>
                <motion.h1 
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl md:text-6xl font-bold text-white mb-6"
                >
                  Explorez l'Afrique et le Monde
                </motion.h1>
                <motion.p 
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-white/90 text-xl md:text-2xl mb-8"
                >
                  Des voyages sur mesure, des services VIP et des expériences inoubliables entre l'Afrique et le monde entier.
                </motion.p>
                <motion.div 
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={buttonTap}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 relative overflow-hidden group"
                      asChild
                    >
                      <a href="#packages">
                        Découvrir nos offres
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={buttonTap}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                      asChild
                    >
                      <a href="#services">
                        Nos services
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
          
          {/* Search Bar with Enhanced Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 lg:px-0"
          >
            <div className="container mx-auto">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-5xl mx-auto"
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 44, 95, 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-5">
                    <label htmlFor="destination" className="text-sm font-medium text-gray-700 mb-1 block">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="destination"
                        placeholder="Où allez-vous ?"
                        className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                        value={searchDestination}
                        onChange={(e) => setSearchDestination(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="date" className="text-sm font-medium text-gray-700 mb-1 block">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        id="date"
                        placeholder="jj/mm/aaaa"
                        className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                        value={searchDate}
                        onChange={(e) => setSearchDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="travelers" className="text-sm font-medium text-gray-700 mb-1 block">Voyageurs</label>
                    <div className="relative">
                      <UsersRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="number"
                        min="1"
                        id="travelers"
                        placeholder="1"
                        className="pl-10 w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                        value={searchTravelers}
                        onChange={(e) => setSearchTravelers(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="invisible text-sm font-medium text-gray-700 mb-1 block">Rechercher</label>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={buttonTap}
                    >
                      <Button className="w-full h-12 text-lg relative overflow-hidden group" size="lg">
                        Rechercher
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
                
                {/* Popular destinations with animation */}
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-700">Populaire:</span>
                  {popularDestinations.map((dest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 44, 95, 0.1)" }}
                    >
                      <Link 
                        to={dest.link}
                        className="text-sm text-primary hover:text-primary/80 hover:underline px-3 py-1 bg-primary/5 rounded-full"
                      >
                        {dest.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Stats section with animated counters */}
        <div ref={statsRef} className="mt-24 lg:mt-32 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 44, 95, 0.1)" }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={5000} title="Voyageurs satisfaits" duration={2500} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 44, 95, 0.1)" }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={12} title="Destinations" duration={1800} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 44, 95, 0.1)" }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={8} title="Années d'expérience" duration={1500} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isStatsInView ? 1 : 0, y: isStatsInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 44, 95, 0.1)" }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={4.8} title="Note moyenne" duration={2000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement with enhanced animation */}
      <section className="py-24 lg:pl-64 bg-primary/5 relative overflow-hidden">
        <FloatingElement x={15} y={50} delay={0.2} size="lg">
          <Map className="h-full w-full" />
        </FloatingElement>
        <FloatingElement x={80} y={30} delay={0.5} size="md">
          <Crown className="h-full w-full" />
        </FloatingElement>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary mb-6"
            >
              🌍 Notre Vision
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, scale: 0.95 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-gray-700 italic"
            >
              "Devenir la référence panafricaine du voyage sur mesure, en offrant des expériences authentiques, accessibles et haut de gamme, alliant logistique maîtrisée, accompagnement humain et enracinement culturel."
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section with enhanced animations */}
      <section id="packages" className="py-24 lg:pl-64 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3"
            >
              Offres Exclusives
            </motion.span>
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Packs CAN 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des solutions clé en main pour vivre la compétition comme vous le souhaitez. Chaque pack est entièrement personnalisable selon vos besoins.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packages.map((pkg, index) => (
              <motion.div 
                key={index} 
                variants={item} 
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3, type: "spring", stiffness: 300 } 
                }}
                className="h-full transform-gpu will-change-transform relative"
              >
                {pkg.isPremium && (
                  <motion.div 
                    className="absolute -top-3 -right-3 z-10"
                    initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -3, 3, 0],
                      transition: { duration: 0.6, type: "spring" }
                    }}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-xs font-bold uppercase py-1 px-3 rounded-full shadow-lg">
                      Recommandé
                    </div>
                  </motion.div>
                )}
                <PackageCard
                  name={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                  isPremium={pkg.isPremium}
                />
                {pkg.isPremium && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none -z-10"
                    animate={{ 
                      boxShadow: ["0 0 20px 0px rgba(49, 168, 224, 0.1)", "0 0 30px 5px rgba(49, 168, 224, 0.2)", "0 0 20px 0px rgba(49, 168, 224, 0.1)"],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
          
          {/* Places limitées indicator with pulsing animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.div 
              animate={limitedAvailabilityPulse}
              className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-100"
            >
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Places limitées — Réservez dès maintenant</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <PopularDestinations />

      {/* Services Section with enhanced animations */}
      <section id="services" className="py-24 lg:pl-64 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ELTI VOYAGES vous accompagne dans tous vos projets de voyage avec une offre complète de services premium.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 44, 95, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section with enhanced animations */}
      <section className="py-24 lg:pl-64 bg-primary/5 relative overflow-hidden">
        <FloatingElement x={10} y={20} delay={0.2} size="md">
          <Star className="h-full w-full" />
        </FloatingElement>
        <FloatingElement x={90} y={70} delay={0.5} size="sm">
          <Star className="h-full w-full" />
        </FloatingElement>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Témoignages</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Ce que nos clients disent de leurs expériences avec ELTI VOYAGES.
            </p>
          </motion.div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div 
                    className="p-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 15px 30px -10px rgba(0, 44, 95, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="bg-white rounded-xl p-8 shadow-md h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CarouselPrevious className="-left-12 border-primary text-primary" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CarouselNext className="-right-12 border-primary text-primary" />
              </motion.div>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Partners Section with enhanced animations */}
      <section id="partners" className="py-24 lg:pl-64">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Nous collaborons avec les meilleurs acteurs du tourisme et du voyage pour vous garantir qualité et fiabilité.
            </p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          >
            {partners.map((partner, index) => (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 15px 30px -10px rgba(0, 44, 95, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <PartnerLogo
                  name={partner.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section with CTA animations */}
      <section id="reservation" className="py-24 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
            <h2 className="text-4xl font-bold text-primary mb-4">Réservation</h2>
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
