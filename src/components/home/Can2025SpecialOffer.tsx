
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";

const Can2025SpecialOffer = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-6 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-green-600 to-green-700 text-white">
            <Trophy className="h-6 w-6 mr-3" />
            Offre Spéciale CAN 2025
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            OFFRE DU MOMENT CAN 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez nos packs exclusifs pour la Coupe d'Afrique des Nations 2025 au Maroc. 
            Supportons fièrement les Lions de la Teranga 🇸🇳
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="px-10 py-4 text-lg bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                En savoir plus
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-10 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300" 
              asChild
            >
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                Réserver
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Can2025SpecialOffer;
