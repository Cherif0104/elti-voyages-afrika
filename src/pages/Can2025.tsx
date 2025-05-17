
import { useEffect, useState } from "react";
import HeroSection from "@/components/can2025/HeroSection";
import OverviewSection from "@/components/can2025/OverviewSection";
import KeyDatesSection from "@/components/can2025/KeyDatesSection";
import NewsSection from "@/components/can2025/NewsSection";
import FaqSection from "@/components/can2025/FaqSection";
import ContactSection from "@/components/can2025/ContactSection";
import CtaSection from "@/components/can2025/CtaSection";
import CanPackCard from "@/components/can2025/CanPackCard";
import { motion } from "framer-motion";

const Can2025 = () => {
  const [isVisible, setIsVisible] = useState(false);

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
  }, []);

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

  return (
    <>
      <HeroSection />
      <OverviewSection />
      
      {/* CAN 2025 Packs Section */}
      <section id="can2025" className="py-24 lg:pl-64 bg-white">
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
            {packOffers.map((pack, index) => (
              <motion.div key={index} variants={item}>
                <CanPackCard
                  title={pack.title}
                  price={pack.price}
                  features={pack.features}
                  isPremium={pack.isPremium}
                />
              </motion.div>
            ))}
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
