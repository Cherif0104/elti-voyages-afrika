import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
const Can2025SpecialOffer = () => {
  return <section className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-yellow-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true
        }} className="text-center lg:text-left">
            <Badge className="mb-6 px-6 py-3 text-lg font-semibold bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Trophy className="h-6 w-6 mr-3" />
              Offre Spéciale CAN 2025
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              CAN 2025
              <span className="block text-yellow-300">AU MAROC</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Vivez la CAN 2025 et vos voyages d'exception avec ELTI VOYAGES
            </p>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              Découvrez nos packs exclusifs pour la Coupe d'Afrique des Nations 2025 au Maroc. 
              Supportons fièrement les Lions de la Teranga 🇸🇳
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Button size="lg" className="px-10 py-4 text-lg bg-yellow-500 hover:bg-yellow-600 text-green-800 font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-yellow-400" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-green-700 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Image de l'équipe du Sénégal */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img src="/lovable-uploads/4dc6af3a-645d-417a-b469-e71da1ffef36.png" alt="Équipe nationale du Sénégal - Lions de la Teranga CAN 2025" className="w-full h-auto object-cover" />
              {/* Overlay gradient */}
              
              
              {/* Badge flottant */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-600/90 text-white px-4 py-2 text-base font-bold backdrop-blur-sm">
                  🦁 Lions de la Teranga
                </Badge>
              </div>
              
              {/* Badge CAN 2025 */}
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-yellow-500/90 text-green-800 px-4 py-2 text-base font-bold backdrop-blur-sm">
                  🏆 CAN 2025
                </Badge>
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400/20 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Can2025SpecialOffer;