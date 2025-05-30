import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Trophy, Star, X } from "lucide-react";
import { useState } from "react";
const Can2025SpecialOffer = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const offerImages = [{
    id: 1,
    image: "/lovable-uploads/17a6cd1e-2c79-41bb-bb62-2d50bb1d696d.png",
    title: "Pack CAN 2025 Lions",
    description: "Vivez la CAN 2025 et vos voyages d'exception avec ELTI VOYAGES",
    price: "À partir de 1 200 000 FCFA"
  }, {
    id: 2,
    image: "/lovable-uploads/97aa8658-92b0-4018-81f6-f109050b0c93.png",
    title: "Yoonu Sénégal",
    description: "Du 18 Décembre 2025 au 1 Janvier 2026",
    price: "À partir de 960 000 FCFA"
  }, {
    id: 3,
    image: "/lovable-uploads/d6c7820f-cdcf-44bf-9877-5434de3fd9f2.png",
    title: "Délégation Lions",
    description: "Du 03 Janvier 2026 au 10 Janvier 2026",
    price: "À partir de 1 150 000 FCFA"
  }, {
    id: 4,
    image: "/lovable-uploads/02469978-bce5-46a9-b12c-2504faf2d0fe.png",
    title: "Lion d'Or Prestige",
    description: "Du 14 Janvier 2026 au 19 Janvier 2026",
    price: "À partir de 2 300 000 FCFA"
  }, {
    id: 5,
    image: "/lovable-uploads/36fcf6f0-086c-42e1-8fd4-79fc459386c9.png",
    title: "Services Additionnels",
    description: "Billets d'avion, Location véhicules, Réservations hôtelières",
    price: "Sur devis"
  }, {
    id: 6,
    image: "/lovable-uploads/1ba34718-c5c7-4df4-b51e-df3378ac42cf.png",
    title: "Contact & Informations",
    description: "Contactez-nous pour plus d'informations",
    price: "Gratuit"
  }];
  return <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }} className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offerImages.map((offer, index) => <motion.div key={offer.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group cursor-pointer">
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 border-0 shadow-lg">
                    <div className="relative h-80 overflow-hidden">
                      <motion.img src={offer.image} alt={offer.title} className="w-full h-full object-cover transition-transform duration-700 cursor-pointer" whileHover={{
                    scale: 1.1
                  }} transition={{
                    duration: 0.3
                  }} />
                      
                      <div className="absolute top-4 right-4">
                        <Star className="h-8 w-8 text-yellow-400 fill-current drop-shadow-lg" />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-bold mb-2 drop-shadow-lg">{offer.title}</h3>
                        <p className="text-sm text-white/90 mb-3 drop-shadow">{offer.description}</p>
                        
                      </div>
                      
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
                  <div className="relative">
                    <img src={offer.image} alt={offer.title} className="w-full h-auto max-h-[90vh] object-contain rounded-lg" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                      <h3 className="text-2xl font-bold text-white mb-2">{offer.title}</h3>
                      <p className="text-white/90 mb-3">{offer.description}</p>
                      <div className="text-xl font-bold text-green-400">{offer.price}</div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }} className="text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="px-10 py-4 text-lg bg-green-600 hover:bg-green-700 shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                En savoir plus
              </a>
            </Button>
            <Button size="lg" variant="outline" className="px-10 py-4 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                Réserver
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default Can2025SpecialOffer;