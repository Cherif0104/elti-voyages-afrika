
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, Camera, Compass } from "lucide-react";
import ExcursionsStatsSection from "@/components/excursions/ExcursionsStatsSection";

const Excursions = () => {
  const excursionTypes = [
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Circuits culturels",
      description: "Découvrez l'histoire et les traditions locales"
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Aventures nature",
      description: "Explorez les paysages époustouflants"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expériences locales",
      description: "Rencontrez les communautés authentiques"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Expériences premium",
      description: "Voyages de luxe avec service personnalisé"
    }
  ];

  const popularExcursions = [
    {
      title: "Désert du Sahara",
      location: "Merzouga, Maroc",
      duration: "3 jours / 2 nuits",
      price: "299€",
      image: "/lovable-uploads/e067fb96-d7e6-4ba5-890d-84d016ad9522.png",
      highlights: ["Nuit dans le désert", "Caravane de chameaux", "Coucher de soleil"]
    },
    {
      title: "Lac Rose",
      location: "Retba, Sénégal",
      duration: "1 jour",
      price: "89€",
      image: "/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png",
      highlights: ["Couleurs uniques", "Récolte de sel", "Culture locale"]
    },
    {
      title: "Chefchaouen",
      location: "Ville bleue, Maroc",
      duration: "2 jours / 1 nuit",
      price: "179€",
      image: "/lovable-uploads/e959261a-76fe-4475-8048-4cf15a7e9ed2.png",
      highlights: ["Architecture bleue", "Artisanat local", "Montagnes du Rif"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{ backgroundColor: '#172554' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 px-4 py-2 bg-secondary text-primary">
                <Compass className="h-4 w-4 mr-2" />
                Excursions & Circuits
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Excursions &
                <span className="block text-secondary">Circuits</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
                Découvrez les merveilles du Maroc et du Sénégal avec nos guides experts
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    En savoir plus
                  </a>
                </Button>
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    Réserver
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">25+</div>
                  <div className="text-white/80">Circuits disponibles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-white/80">Voyageurs satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15</div>
                  <div className="text-white/80">Guides experts</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">4.9/5</div>
                  <div className="text-white/80">Note moyenne</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types d'excursions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Types d'excursions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez le type d'aventure qui vous correspond le mieux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {excursionTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-4">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{type.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions populaires */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Excursions populaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nos circuits les plus appréciés par nos voyageurs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularExcursions.map((excursion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={excursion.image} 
                      alt={excursion.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{excursion.title}</h3>
                      <span className="text-2xl font-bold text-secondary">{excursion.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span className="text-sm">{excursion.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{excursion.duration}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Points forts :</h4>
                      <ul className="text-sm text-gray-600">
                        {excursion.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center mb-1">
                            <Star className="h-3 w-3 text-yellow-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                        Réserver cette excursion
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ExcursionsStatsSection />

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour l'aventure ?</h2>
            <p className="text-xl mb-8">
              Nos guides experts vous attendent pour vous faire découvrir les trésors cachés d'Afrique
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  En savoir plus
                </a>
              </Button>
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90" asChild>
                <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                  Réserver
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excursions;
