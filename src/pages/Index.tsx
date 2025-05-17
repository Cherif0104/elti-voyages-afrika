import { useEffect, useState } from "react";
import { Plane, Hotel, Car, Map, Crown, Star, MapPin, Calendar, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import PartnerLogo from "@/components/PartnerLogo";
import PromotionBanner from "@/components/PromotionBanner";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchDestination, setSearchDestination] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [searchTravelers, setSearchTravelers] = useState("");
  const [animateStats, setAnimateStats] = useState(false);

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

  // Example data for popular destinations
  const popularDestinations = [
    { name: "CAN 2025", link: "/can2025" },
    { name: "Omra Ramadan", link: "#" },
    { name: "Circuit Sénégal", link: "#" },
    { name: "Marrakech", link: "#" },
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

  // Counter animation for stats
  const Counter = ({ end, duration = 2000, title }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!animateStats) return;
      
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
    }, [end, duration, animateStats]);
    
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

      {/* Hero Section */}
      <section className="pt-20 lg:pl-64 relative">
        <div 
          className="h-[600px] md:h-[700px] relative overflow-hidden" 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2834&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
              >
                <span className="text-secondary font-semibold mb-2 inline-block">Votre partenaire de voyage de confiance</span>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Explorez l'Afrique et le Monde
                </h1>
                <p className="text-white/90 text-xl md:text-2xl mb-8">
                  Des voyages sur mesure, des services VIP et des expériences inoubliables entre l'Afrique et le monde entier.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6"
                    asChild
                  >
                    <a href="#packages">
                      Découvrir nos offres
                    </a>
                  </Button>
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
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-0 left-0 right-0 translate-y-1/2 px-4 lg:px-0"
          >
            <div className="container mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 max-w-5xl mx-auto">
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
                    <Button className="w-full h-12 text-lg" size="lg">
                      Rechercher
                    </Button>
                  </div>
                </div>
                
                {/* Popular destinations */}
                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <span className="text-sm font-medium text-gray-700">Populaire:</span>
                  {popularDestinations.map((dest, index) => (
                    <Link 
                      key={index} 
                      to={dest.link}
                      className="text-sm text-primary hover:text-primary/80 hover:underline px-3 py-1 bg-primary/5 rounded-full"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <div className="mt-24 lg:mt-32 container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateStats ? 1 : 0, y: animateStats ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={5000} title="Voyageurs satisfaits" duration={2500} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateStats ? 1 : 0, y: animateStats ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={12} title="Destinations" duration={1800} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateStats ? 1 : 0, y: animateStats ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={8} title="Années d'expérience" duration={1500} />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: animateStats ? 1 : 0, y: animateStats ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Counter end={4.8} title="Note moyenne" duration={2000} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-24 lg:pl-64 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">🌍 Notre Vision</h2>
            <p className="text-xl md:text-2xl text-gray-700 italic">
              "Devenir la référence panafricaine du voyage sur mesure, en offrant des expériences authentiques, accessibles et haut de gamme, alliant logistique maîtrisée, accompagnement humain et enracinement culturel."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
              <motion.div key={index} variants={item} className="h-full">
                <PackageCard
                  name={pkg.name}
                  price={pkg.price}
                  features={pkg.features}
                  isPremium={pkg.isPremium}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:pl-64">
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
              <motion.div key={index} variants={item}>
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

      {/* Testimonials Section */}
      <section className="py-24 lg:pl-64 bg-primary/5">
        <div className="container mx-auto px-4">
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
                  <div className="p-6">
                    <div className="bg-white rounded-xl p-8 shadow-md h-full flex flex-col">
                      <div className="flex items-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.text}"</p>
                      <div>
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-gray-500 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="-left-12 border-primary text-primary" />
              <CarouselNext className="-right-12 border-primary text-primary" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Partners Section */}
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
              <motion.div key={index} variants={item}>
                <PartnerLogo
                  name={partner.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="reservation" className="py-24 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary mb-4">Réservation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Remplissez notre formulaire pour recevoir une proposition personnalisée sous 24h.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
