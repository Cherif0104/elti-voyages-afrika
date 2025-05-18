
import { motion } from "framer-motion";
import PartnerLogo from "../PartnerLogo";
import { BadgeCheck } from "lucide-react";

interface AirlinePartner {
  name: string;
  logo: string;
}

const AirlinePartners: AirlinePartner[] = [
  {
    name: "Royal Air Maroc",
    logo: "/lovable-uploads/3b91d797-3527-4e65-bcb7-2ec01495bae2.png"
  },
  {
    name: "Air Sénégal",
    logo: "/lovable-uploads/70452ae0-3719-42f5-b659-fcc9048ec921.png"
  },
  {
    name: "Turkish Airlines",
    logo: "/lovable-uploads/a7836e1f-6df5-4b9e-a065-02fc1de85e34.png"
  },
  {
    name: "Qatar Airways",
    logo: "/lovable-uploads/3d3e0204-e9c0-4d89-8d27-f0d8e4bf4c5b.png"
  }
];

const FlightCompanySection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section className="py-10 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg px-6 my-8">
      <div className="flex items-center justify-between mb-6">
        <motion.h2 
          className="text-2xl font-bold text-primary relative"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nos compagnies partenaires
          <motion.div 
            className="absolute -bottom-2 left-0 h-1 bg-secondary rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.h2>
        <motion.div 
          className="bg-primary/10 px-3 py-1 rounded-full text-sm text-primary flex items-center gap-2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring" }}
        >
          <BadgeCheck className="w-4 h-4 text-secondary" />
          <span className="font-medium">Partenaires officiels</span>
        </motion.div>
      </div>
      
      <motion.p 
        className="text-gray-600 mb-8 max-w-3xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Nous collaborons avec les compagnies aériennes les plus fiables pour vous offrir des voyages de qualité aux meilleurs tarifs. Bénéficiez de promotions exclusives et d'un service premium.
      </motion.p>
      
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {AirlinePartners.map((airline, index) => (
          <motion.div key={index} variants={itemVariants} className="flex">
            <PartnerLogo 
              name={airline.name}
              logoSrc={airline.logo}
            />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="text-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-sm text-gray-500 italic">D'autres partenariats sont en cours de négociation pour vous offrir encore plus de destinations</span>
      </motion.div>
    </section>
  );
};

export default FlightCompanySection;
