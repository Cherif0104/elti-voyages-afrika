
import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/can2025/HeroSection";
import OverviewSection from "@/components/can2025/OverviewSection";
import KeyDatesSection from "@/components/can2025/KeyDatesSection";
import NewsSection from "@/components/can2025/NewsSection";
import FaqSection from "@/components/can2025/FaqSection";
import ContactSection from "@/components/can2025/ContactSection";
import CtaSection from "@/components/can2025/CtaSection";
import CanPackCard from "@/components/can2025/CanPackCard";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { 
  staggerContainer, 
  fadeInUp, 
  hoverScale, 
  scrollReveal, 
  floatingAnimation, 
  limitedAvailabilityPulse,
  buttonTap 
} from "@/components/can2025/AnimationUtils";
import { Calendar, Users, Clock, MapPin, Flag, Star } from "lucide-react";

const Can2025 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState(14); // Changed to match mockup (14 days)
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: false, margin: "-100px" });
  const controls = useAnimation();
  
  // Parallax effect references
  const backgroundRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: backgroundRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  // CAN 2025 pack offers data
  const packOffers = [
    {
      title: "Yoonu Sénégal",
      price: "960000",
      features: [
        "Vol aller-retour économique",
        "Hébergement 3★",
        "1 match de groupe",
        "Transferts aéroport",
        "Guide local",
        "Hammam & Carte SIM",
        "Maillot offert",
        "Soirée Nouvel An (option)"
      ],
      isPremium: false,
    },
    {
      title: "Délégation Lions",
      price: "1150000",
      features: [
        "Vol aller-retour",
        "Hébergement 4★",
        "3 matchs garantis",
        "Van privé",
        "Guide francophone",
        "Hammam & Spa",
        "Maillot officiel offert",
        "Excursion culturelle"
      ],
      isPremium: false,
    },
    {
      title: "Lion d'Or Prestige",
      price: "2300000",
      features: [
        "Vol Business",
        "Hébergement 5★",
        "Tous les matchs du Sénégal",
        "Voiture privée",
        "Accueil VIP",
        "Hammam & Spa quotidien",
        "Tenue complète offerte",
        "Accès VIP aux stades"
      ],
      isPremium: true,
    },
    {
      title: "Sur mesure",
      price: "2490000",
      features: [
        "Dates flexibles",
        "Vol Business / First",
        "Hébergement de luxe",
        "Place finale garantie",
        "Chauffeur & concierge 24h/24",
        "Accès backstage équipes",
        "Rencontres privées",
        "Excursions personnalisées"
      ],
      isPremium: false,
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Set days remaining to 14 to match mockup
    setDaysRemaining(14);
    
    // Start animation when component mounts
    controls.start("animate");
  }, [controls]);

  // Counter animation variant
  const counterVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };
  
  // Stats
  const stats = [
    { value: 24, label: "Équipes", icon: <Users className="h-6 w-6 text-secondary" /> },
    { value: 6, label: "Stades", icon: <MapPin className="h-6 w-6 text-secondary" /> },
    { value: 52, label: "Matchs", icon: <Flag className="h-6 w-6 text-secondary" /> },
    { value: daysRemaining, label: "Jours restants", icon: <Clock className="h-6 w-6 text-secondary" /> }
  ];

  return (
    <>
      {/* Parallax background effect */}
      <motion.div 
        ref={backgroundRef}
        className="fixed inset-0 -z-10 opacity-20"
        style={{ y, opacity }}
      >
        <div className="absolute inset-0 bg-pattern-grid bg-[size:50px_50px] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white" />
      </motion.div>
      
      <HeroSection />
      
      {/* Title for Overview section */}
      <div className="py-16 pt-40 lg:pl-64 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Aperçu de la CAN 2025
        </h2>
      </div>
      
      <OverviewSection />
      
      {/* Countdown section with enhanced animations */}
      <section className="py-16 lg:pl-64 bg-gradient-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">La CAN 2025 approche</h2>
            <p className="text-lg opacity-90">Ne manquez pas l'événement footballistique de l'année</p>
          </motion.div>
          
          <div ref={counterRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={counterVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <motion.div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </motion.div>
                <div className="text-sm md:text-base mt-1 text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CAN 2025 Packs Section */}
      <section id="can2025" className="py-24 lg:pl-64 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Offre Spéciale
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Packs CAN 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des solutions clé en main pour vivre la compétition comme vous le souhaitez. Chaque pack est entièrement personnalisable selon vos besoins.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packOffers.map((pack, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -10, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
              >
                <CanPackCard
                  title={pack.title}
                  price={pack.price}
                  features={pack.features}
                  isPremium={pack.isPremium}
                />
              </motion.div>
            ))}
          </div>
          
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
              <Clock className="h-5 w-5" />
              <span className="font-medium">Places limitées — Réservez dès maintenant</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <KeyDatesSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </>
  );
};

export default Can2025;
