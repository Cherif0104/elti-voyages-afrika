
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Image, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Données des offres basées sur les images téléchargées
const canOffers = [
  {
    id: 1,
    title: "Yoonu Sénégal",
    dates: "Du 18 Décembre 2025 au 1 Janvier 2026",
    price: "960 000 FCFA",
    image: "/lovable-uploads/1d91b8b0-7adf-4a8e-8332-266483fd38fc.png",
    features: [
      "Vol éco",
      "Hotel ***",
      "Billets matchs",
      "Transport local",
      "Visites & Excursions",
      "Hammam",
      "Assurance voyage",
      "Carte Sim",
      "1 Maillot offert"
    ],
    specialNote: "SOIREE NOUVEL AN SUR RESERVATION"
  },
  {
    id: 2,
    title: "Délégation Lions",
    dates: "Du 03 Janvier 2026 au 10 Janvier 2026",
    price: "1 150 000 FCFA",
    image: "/lovable-uploads/f0d0ef98-a971-471a-ac89-41342001528f.png",
    features: [
      "Vol Flexible",
      "Hotel ****",
      "Billets matchs VIP",
      "Van chauffeur",
      "Visites & Excursions",
      "Hammam",
      "Assurance voyage",
      "Carte Sim",
      "1 Maillot offert"
    ],
    specialNote: "SOIREE NOUVEL AN SUR RESERVATION"
  },
  {
    id: 3,
    title: "Lion d'Or Prestige",
    dates: "Du 14 Janvier 2026 au 19 Janvier 2026",
    price: "2 300 000 FCFA",
    image: "/lovable-uploads/76ed6496-9401-4931-ba1b-9ff010529916.png",
    features: [
      "Vol business classe",
      "Hotel *****",
      "Billets matchs VIP",
      "Voiture privée",
      "Accueil personnalisé",
    ],
    specialNote: "SOIREE NOUVEL AN SUR RESERVATION"
  },
  {
    id: 4,
    title: "Services Additionnels",
    dates: "",
    price: "",
    image: "/lovable-uploads/1fdecd36-5b52-44ad-8c1a-f1c249c11b59.png",
    features: [
      "Billets d'avion toutes destinations",
      "Location de véhicules",
      "Réservations hôtelières",
      "Accompagnement VIP",
      "Excursions privées",
      "Traduction, guides"
    ],
    specialNote: "SOIREE NOUVEL AN SUR RESERVATION"
  },
  {
    id: 5,
    title: "Contactez-nous",
    dates: "",
    price: "",
    image: "/lovable-uploads/2688f532-b593-48d5-bc8a-b43a3ca4fe10.png",
    contact: {
      address: "17 Rue El Oraibi Jilali, 20250, Casablanca",
      website: "www.eltivoyages.com",
      email: "contact@eltivoyages.com",
      marocContact: "Whatsapp: +212 604 60 37 28",
      senegalContact: [
        "Papis Sagna Directeur Commercial",
        "+221 77 774 83 74",
        "+221 78 429 46 46"
      ]
    }
  }
];

const CanGallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
              <Image className="inline-block mr-2 h-4 w-4" />
              Offres exclusives
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
              Nos offres pour la CAN 2025
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos formules tout compris pour vivre pleinement la CAN 2025 au Maroc
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="relative w-full"
          >
            <CarouselContent className="-ml-4">
              {canOffers.map((offer) => (
                <CarouselItem key={offer.id} className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: offer.id * 0.1 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={offer.image} 
                        alt={`Offre ${offer.title}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                        <div>
                          <h3 className="text-2xl font-bold text-yellow-400">{offer.title}</h3>
                          {offer.dates && (
                            <p className="text-white/90 text-sm">{offer.dates}</p>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 flex-grow">
                      {offer.features && offer.features.length > 0 ? (
                        <ul className="space-y-2 mb-4">
                          {offer.features.map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-primary font-bold">•</span>
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      ) : offer.contact ? (
                        <div className="space-y-2 mb-4 text-gray-700">
                          <p><span className="font-medium text-primary">Adresse:</span> {offer.contact.address}</p>
                          <p><span className="font-medium text-primary">Site:</span> {offer.contact.website}</p>
                          <p><span className="font-medium text-primary">Email:</span> {offer.contact.email}</p>
                          <p><span className="font-medium text-primary">Maroc:</span> {offer.contact.marocContact}</p>
                          <p><span className="font-medium text-primary">Sénégal:</span></p>
                          {offer.contact.senegalContact.map((contact, idx) => (
                            <p key={idx} className="pl-4">{contact}</p>
                          ))}
                        </div>
                      ) : null}
                      
                      {offer.specialNote && (
                        <div className="mt-2 mb-3">
                          <p className="text-center text-sm font-medium text-primary">{offer.specialNote}</p>
                        </div>
                      )}
                    </div>
                    
                    {offer.price && (
                      <div className="mt-auto border-t border-gray-100 p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="block text-primary text-xs">À partir de</span>
                            <span className="font-bold text-xl text-primary">{offer.price}</span>
                          </div>
                          
                          <Button
                            variant="booking"
                            size="sm"
                            className="gap-1"
                            asChild
                          >
                            <a href="#reservation">
                              Réserver
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white border-none shadow-md" />
            <CarouselNext className="right-0 bg-white border-none shadow-md" />
          </Carousel>
        </div>
        
        <div className="flex justify-center mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="booking"
              className="text-lg font-medium"
              asChild
            >
              <a href="#reservation">
                Réserver votre pack CAN 2025
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CanGallery;
