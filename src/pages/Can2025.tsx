
import { useEffect, useState, useRef } from "react";
import HeroSection from "@/components/can2025/HeroSection";
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
    <div className="bg-white">
      <HeroSection />
      
      {/* Countdown section with classic styling */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">La CAN 2025 approche</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">Ne manquez pas l'événement footballistique de l'année</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/10 rounded-lg p-6 text-center"
              >
                <div className="flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base mt-1 text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CAN 2025 Packs Section */}
      <section id="can2025" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Offre Spéciale
            </span>
            <h2 className="text-4xl font-bold text-primary mb-4">Nos Packs CAN 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Des solutions clé en main pour vivre la compétition comme vous le souhaitez. Chaque pack est entièrement personnalisable selon vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {packOffers.map((pack, index) => (
              <div key={index}>
                <CanPackCard
                  title={pack.title}
                  price={pack.price}
                  features={pack.features}
                  isPremium={pack.isPremium}
                />
              </div>
            ))}
          </div>
          
          {/* Places limitées indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full border border-red-100">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Places limitées — Réservez dès maintenant</span>
            </div>
          </div>
        </div>
      </section>
      
      <KeyDatesSection />
      <NewsSection />
      <FaqSection />
      <ContactSection />
      <CtaSection />
    </div>
  );
};

export default Can2025;
