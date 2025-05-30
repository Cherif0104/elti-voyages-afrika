
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star } from "lucide-react";

const Can2025SpecialOffer = () => {
  const offerImages = [
    {
      id: 1,
      image: "/lovable-uploads/17a6cd1e-2c79-41bb-bb62-2d50bb1d696d.png",
      title: "Pack CAN 2025 Lions",
      description: "Vivez la CAN 2025 et vos voyages d'exception avec ELTI VOYAGES"
    },
    {
      id: 2,
      image: "/lovable-uploads/97aa8658-92b0-4018-81f6-f109050b0c93.png",
      title: "Yoonu Sénégal",
      description: "Du 18 Décembre 2025 au 1 Janvier 2026 - à partir de 960 000 FCFA"
    },
    {
      id: 3,
      image: "/lovable-uploads/d6c7820f-cdcf-44bf-9877-5434de3fd9f2.png",
      title: "Délégation Lions",
      description: "Du 03 Janvier 2026 au 10 Janvier 2026 - à partir de 1 150 000 FCFA"
    },
    {
      id: 4,
      image: "/lovable-uploads/02469978-bce5-46a9-b12c-2504faf2d0fe.png",
      title: "Lion d'Or Prestige",
      description: "Du 14 Janvier 2026 au 19 Janvier 2026 - à partir de 2 300 000 FCFA"
    },
    {
      id: 5,
      image: "/lovable-uploads/36fcf6f0-086c-42e1-8fd4-79fc459386c9.png",
      title: "Services Additionnels",
      description: "Billets d'avion, Location véhicules, Réservations hôtelières"
    },
    {
      id: 6,
      image: "/lovable-uploads/1ba34718-c5c7-4df4-b51e-df3378ac42cf.png",
      title: "Contact & Informations",
      description: "Contactez-nous pour plus d'informations"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 px-4 py-2 text-base font-semibold bg-secondary text-primary">
            <Trophy className="h-5 w-5 mr-2" />
            Offre Spéciale
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            OFFRE DU MOMENT CAN 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos packs exclusifs pour la Coupe d'Afrique des Nations 2025 au Maroc. 
            Supportons fièrement les Lions de la Teranga 🇸🇳
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {offerImages.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={offer.image} 
                    alt={offer.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{offer.title}</h3>
                    <p className="text-sm text-white/90">{offer.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="px-8 text-lg bg-green-600 hover:bg-green-700" 
              asChild
            >
              <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                En savoir plus
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 text-lg border-primary text-primary hover:bg-primary hover:text-white" 
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
