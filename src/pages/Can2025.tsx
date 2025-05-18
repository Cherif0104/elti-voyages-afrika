
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
  const [daysRemaining, setDaysRemaining] = useState(0);
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
    
    // Calculer les jours restants jusqu'à la date de début estimée de la CAN 2025 
    // (en supposant juin 2025)
    const today = new Date();
    const canStartDate = new Date(2025, 5, 1); // 1er juin 2025
    const diffTime = Math.abs(canStartDate.getTime() - today.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    setDaysRemaining(diffDays);
    
    // Start animation when component mounts
    controls.start("animate");
  }, [controls]);

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
  
  // Number counter animation
  const Counter = ({ from = 0, to, duration = 2 }) => {
    const nodeRef = useRef(null);
    const [count, setCount] = useState(from);
    
    useEffect(() => {
      if (!isInView) return;
      
      let start = from;
      const step = (to - from) / (duration * 60); // 60fps
      let rafId: number;
      
      const updateCount = () => {
        start += step;
        if (start >= to) {
          setCount(to);
          cancelAnimationFrame(rafId);
        } else {
          setCount(Math.floor(start));
          rafId = requestAnimationFrame(updateCount);
        }
      };
      
      rafId = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(rafId);
    }, [from, to, duration, isInView]);
    
    return <span ref={nodeRef}>{count}</span>;
  };
  
  // Stats
  const stats = [
    { value: 24, label: "Équipes", icon: <Users className="h-6 w-6 text-secondary" /> },
    { value: 6, label: "Stades", icon: <MapPin className="h-6 w-6 text-secondary" /> },
    { value: 52, label: "Matchs", icon: <Flag className="h-6 w-6 text-secondary" /> },
    { value: daysRemaining, label: "Jours restants", icon: <Clock className="h-6 w-6 text-secondary" /> }
  ];

  // Floating decoration elements
  const FloatingElement = ({ children, delay = 0, x = 0, y = 0 }) => (
    <motion.div
      className="absolute text-primary/10 z-0"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 0.7,
        y: [0, -15, 0],
        transition: { 
          y: { 
            repeat: Infinity,
            duration: 3,
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
      <OverviewSection />
      
      {/* Countdown section with enhanced animations */}
      <section className="py-16 lg:pl-64 bg-gradient-primary text-white relative overflow-hidden">
        {/* Decorative floating elements */}
        <FloatingElement x={5} y={20} delay={0.2}>
          <Calendar className="h-16 w-16" />
        </FloatingElement>
        <FloatingElement x={85} y={70} delay={0.5}>
          <Star className="h-12 w-12" />
        </FloatingElement>
        <FloatingElement x={70} y={30} delay={1.3}>
          <Flag className="h-14 w-14" />
        </FloatingElement>
        
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
                  {isInView && (
                    <Counter 
                      from={0} 
                      to={stat.value} 
                      duration={1.5 + index * 0.3} 
                    />
                  )}
                </motion.div>
                <div className="text-sm md:text-base mt-1 text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CAN 2025 Packs Section with enhanced animations */}
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

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {packOffers.map((pack, index) => (
              <motion.div 
                key={index} 
                variants={item}
                whileHover={{ y: -10, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
                className="h-full transform-gpu will-change-transform"
              >
                <CanPackCard
                  title={pack.title}
                  price={pack.price}
                  features={pack.features}
                  isPremium={pack.isPremium}
                />
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
