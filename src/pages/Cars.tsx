
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Car, Users, Fuel, Settings, Search, Shield, Star } from "lucide-react";
import CarsHeroSection from "@/components/cars/CarsHeroSection";

const Cars = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const carCategories = [
    {
      category: "Économique",
      example: "Dacia Logan ou similaire",
      passengers: 5,
      luggage: 2,
      transmission: "Manuelle",
      fuel: "Essence",
      price: "25€",
      image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=400&auto=format&fit=crop",
      features: ["Climatisation", "Radio", "Direction assistée"]
    },
    {
      category: "Compacte",
      example: "Peugeot 208 ou similaire", 
      passengers: 5,
      luggage: 3,
      transmission: "Manuelle",
      fuel: "Essence",
      price: "35€",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&auto=format&fit=crop",
      features: ["Climatisation", "GPS", "Bluetooth", "ABS"]
    },
    {
      category: "Berline",
      example: "Volkswagen Passat ou similaire",
      passengers: 5,
      luggage: 4,
      transmission: "Automatique", 
      fuel: "Diesel",
      price: "45€",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=400&auto=format&fit=crop",
      features: ["Cuir", "GPS", "Climatisation auto", "Régulateur"]
    },
    {
      category: "SUV Compact",
      example: "Dacia Duster ou similaire",
      passengers: 5,
      luggage: 4,
      transmission: "Automatique",
      fuel: "Diesel", 
      price: "55€",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop",
      features: ["4x4", "GPS", "Climatisation", "Caméra recul"]
    },
    {
      category: "SUV Premium",
      example: "Toyota RAV4 ou similaire",
      passengers: 5,
      luggage: 5,
      transmission: "Automatique",
      fuel: "Hybride",
      price: "75€",
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?q=80&w=400&auto=format&fit=crop",
      features: ["Hybride", "Cuir", "Toit panoramique", "Assistant parking"]
    },
    {
      category: "Luxe",
      example: "BMW Série 3 ou similaire",
      passengers: 5,
      luggage: 4,
      transmission: "Automatique",
      fuel: "Essence",
      price: "89€",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=400&auto=format&fit=crop",
      features: ["Cuir premium", "Navigation", "Sièges chauffants", "Keyless"]
    },
    {
      category: "Monospace",
      example: "Renault Espace ou similaire",
      passengers: 7,
      luggage: 6,
      transmission: "Automatique",
      fuel: "Diesel",
      price: "65€",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?q=80&w=400&auto=format&fit=crop",
      features: ["7 places", "Climatisation tri-zone", "GPS", "Coffre XXL"]
    },
    {
      category: "Prestige",
      example: "Mercedes Classe E ou similaire",
      passengers: 5,
      luggage: 4,
      transmission: "Automatique",
      fuel: "Essence",
      price: "120€",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=400&auto=format&fit=crop",
      features: ["Cuir Nappa", "Massage", "Chauffeur disponible", "WiFi"]
    },
    {
      category: "Cabriolet",
      example: "BMW Série 2 Cabriolet",
      passengers: 4,
      luggage: 2,
      transmission: "Automatique",
      fuel: "Essence",
      price: "95€",
      image: "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=400&auto=format&fit=crop",
      features: ["Toit ouvrant électrique", "Cuir", "GPS", "Bluetooth"]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CarsHeroSection />

      {/* Search Form */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <Card className="mb-10 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white">
            <CardTitle className="flex items-center text-xl">
              <Car className="mr-3 h-6 w-6" />
              Réserver votre véhicule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input placeholder="Lieu de prise en charge" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
              </div>
              <div>
                <Input type="date" placeholder="Date de prise en charge" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
              </div>
              <div>
                <Input type="date" placeholder="Date de retour" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} />
              </div>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                <Search className="mr-2 h-4 w-4" />
                Rechercher
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Car Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Notre flotte de véhicules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {carCategories.map((car, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
                  <div className="relative">
                    <img src={car.image} alt={car.category} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 right-4">
                      <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-bold text-xl text-primary">{car.category}</h3>
                        <p className="text-sm text-gray-600">{car.example}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-secondary">{car.price}</span>
                        <span className="text-sm text-gray-600 block">/jour</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-4 text-sm">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{car.passengers} passagers</span>
                      </div>
                      <div className="flex items-center">
                        <Settings className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel className="h-4 w-4 mr-2 text-gray-500" />
                        <span>{car.fuel}</span>
                      </div>
                      <div className="flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-gray-500" />
                        <span>Assurance</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Équipements :</h4>
                      <div className="flex flex-wrap gap-1">
                        {car.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
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
        </motion.div>

        {/* Features */}
        <section className="py-16 bg-white rounded-lg mb-10 shadow-lg">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Pourquoi choisir notre service ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Assurance incluse</h3>
                <p className="text-gray-600">Protection complète pour votre tranquillité</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Car className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Flotte récente</h3>
                <p className="text-gray-600">Véhicules récents et bien entretenus</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Support 24/7</h3>
                <p className="text-gray-600">Assistance disponible à tout moment</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cars;
