
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Star, Camera, Compass, Plane, Palmtree, Heart, Mountain, Waves, Building2 } from "lucide-react";

const Excursions = () => {
  const excursionCategories = [
    {
      icon: <Palmtree className="h-8 w-8" />,
      title: "Vacances",
      description: "Séjours détente et loisirs",
      color: "bg-green-500"
    },
    {
      icon: <Compass className="h-8 w-8" />,
      title: "Excursions",
      description: "Découvertes et aventures",
      color: "bg-blue-500"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Religieuse",
      description: "Pèlerinages et voyages spirituels",
      color: "bg-purple-500"
    }
  ];

  const destinations = [
    {
      name: "Maroc",
      description: "Terre de contrastes et de traditions",
      image: "/lovable-uploads/e959261a-76fe-4475-8048-4cf15a7e9ed2.png",
      highlights: ["Désert du Sahara", "Chefchaouen", "Marrakech", "Casablanca"],
      icon: <Mountain className="h-6 w-6" />
    },
    {
      name: "Sénégal", 
      description: "Teranga et authenticité africaine",
      image: "/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png",
      highlights: ["Lac Rose", "Île de Gorée", "Dakar", "Saint-Louis"],
      icon: <Waves className="h-6 w-6" />
    },
    {
      name: "Dubaï",
      description: "Luxe et modernité du Moyen-Orient",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=400&auto=format&fit=crop",
      highlights: ["Burj Khalifa", "Dubai Mall", "Palm Jumeirah", "Desert Safari"],
      icon: <Building2 className="h-6 w-6" />
    },
    {
      name: "Bali",
      description: "Paradis tropical indonésien",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=400&auto=format&fit=crop",
      highlights: ["Temples sacrés", "Rizières en terrasses", "Plages paradisiaques", "Culture balinaise"],
      icon: <Palmtree className="h-6 w-6" />
    },
    {
      name: "Bahamas",
      description: "Archipel caribéen de rêve",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=400&auto=format&fit=crop",
      highlights: ["Eaux cristallines", "Plages de sable blanc", "Snorkeling", "Pirates Museum"],
      icon: <Waves className="h-6 w-6" />
    }
  ];

  const vacancePackages = [
    {
      title: "Séjour Détente Marrakech",
      duration: "5 jours / 4 nuits",
      price: "599€",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73c6e?q=80&w=400&auto=format&fit=crop",
      highlights: ["Riad de luxe", "Spa traditionnel", "Piscine privée"]
    },
    {
      title: "Plages de Saly",
      duration: "7 jours / 6 nuits",
      price: "799€", 
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
      highlights: ["Hôtel 4*", "All inclusive", "Sports nautiques"]
    }
  ];

  const excursionPackages = [
    {
      title: "Circuit Impérial Maroc",
      duration: "8 jours / 7 nuits",
      price: "899€",
      image: "/lovable-uploads/e067fb96-d7e6-4ba5-890d-84d016ad9522.png",
      highlights: ["4 villes impériales", "Guide expert", "Transport privé"]
    },
    {
      title: "Découverte du Sénégal",
      duration: "6 jours / 5 nuits", 
      price: "699€",
      image: "/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png",
      highlights: ["Lac Rose", "Île de Gorée", "Expérience culturelle"]
    }
  ];

  const religiousPackages = [
    {
      title: "Omra Premium",
      duration: "10 jours",
      price: "2299€",
      image: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=400&auto=format&fit=crop",
      highlights: ["Hôtel 5* face Haram", "Vols directs", "Guide spirituel"]
    },
    {
      title: "Hajj Complet",
      duration: "15 jours",
      price: "4999€",
      image: "https://images.unsplash.com/photo-1580418827493-f2b22c0a76cb?q=80&w=400&auto=format&fit=crop",
      highlights: ["Programme complet", "Accompagnement", "Hébergement premium"]
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
                Découvrez les merveilles du monde avec nos guides experts
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Nos services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez le type d'expérience qui vous correspond
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {excursionCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className={`${category.color} text-white mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations de référence */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Nos destinations de référence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explorez nos destinations phares avec nos experts locaux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {destinations.slice(0, 3).map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex items-center bg-white/90 px-3 py-1 rounded-full">
                      {destination.icon}
                      <span className="ml-2 font-semibold">{destination.name}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">À découvrir :</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                        Découvrir
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destinations.slice(3).map((destination, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={destination.image} 
                      alt={destination.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex items-center bg-white/90 px-3 py-1 rounded-full">
                      {destination.icon}
                      <span className="ml-2 font-semibold">{destination.name}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{destination.name}</h3>
                    <p className="text-gray-600 mb-4">{destination.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">À découvrir :</h4>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((highlight, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                        Découvrir
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vacances Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Séjours Vacances</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Détendez-vous dans nos destinations de rêve
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vacancePackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{pkg.title}</h3>
                      <span className="text-2xl font-bold text-secondary">{pkg.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Inclus :</h4>
                      <ul className="text-sm text-gray-600">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center mb-1">
                            <Star className="h-3 w-3 text-yellow-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                      <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                        Réserver
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Excursions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Circuits & Excursions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez nos circuits accompagnés avec guides experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {excursionPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{pkg.title}</h3>
                      <span className="text-2xl font-bold text-secondary">{pkg.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Inclus :</h4>
                      <ul className="text-sm text-gray-600">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center mb-1">
                            <Star className="h-3 w-3 text-yellow-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                        Réserver ce circuit
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Religious Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Voyages Religieux</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pèlerinages et voyages spirituels avec accompagnement personnalisé
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {religiousPackages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={pkg.image} 
                      alt={pkg.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-primary">{pkg.title}</h3>
                      <span className="text-2xl font-bold text-secondary">{pkg.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Services inclus :</h4>
                      <ul className="text-sm text-gray-600">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center mb-1">
                            <Heart className="h-3 w-3 text-purple-500 mr-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                      <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                        Réserver
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt pour l'aventure ?</h2>
            <p className="text-xl mb-8">
              Nos experts vous attendent pour créer votre voyage sur mesure
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
