import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building, MapPin, Star, Wifi, Car, Coffee, Search } from "lucide-react";

const Hotels = () => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  const accommodations = [
    {
      type: "Hôtel",
      name: "Hôtel Atlas Casablanca",
      location: "Casablanca, Maroc",
      price: "89€",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=400&auto=format&fit=crop",
      amenities: ["Wifi", "Parking", "Restaurant"]
    },
    {
      type: "Riad",
      name: "Riad Marrakech Luxury",
      location: "Marrakech, Maroc",
      price: "156€",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=400&auto=format&fit=crop",
      amenities: ["Wifi", "Piscine", "Spa"]
    },
    {
      type: "Appartement",
      name: "Appartement Vue Océan",
      location: "Dakar, Sénégal",
      price: "67€",
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=400&auto=format&fit=crop",
      amenities: ["Wifi", "Cuisine", "Balcon"]
    },
    {
      type: "Villa",
      name: "Villa Prestige Rabat",
      location: "Rabat, Maroc",
      price: "234€",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=400&auto=format&fit=crop",
      amenities: ["Wifi", "Piscine", "Jardin"]
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop')"
        }} className="absolute inset-0 bg-cover bg-center bg-blue-950" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hébergements de qualité
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Hôtels, riads, appartements et villas au Maroc et au Sénégal
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Building className="mr-2 h-6 w-6" />
              Rechercher un hébergement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div>
                <Input placeholder="Destination" value={destination} onChange={(e) => setDestination(e.target.value)} />
              </div>
              <div>
                <Input type="date" placeholder="Arrivée" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              </div>
              <div>
                <Input type="date" placeholder="Départ" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </div>
              <div>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger>
                    <SelectValue placeholder="Voyageurs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 personne</SelectItem>
                    <SelectItem value="2">2 personnes</SelectItem>
                    <SelectItem value="3">3 personnes</SelectItem>
                    <SelectItem value="4">4 personnes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Rechercher
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {accommodations.map((item, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded text-sm">
                  {item.type}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm">{item.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{item.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.amenities.map((amenity, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {amenity}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{item.price}</span>
                    <span className="text-sm text-gray-600">/nuit</span>
                  </div>
                  <Button size="sm" asChild>
                    <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">Réserver</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Types of Accommodations */}
        <section className="py-16 bg-white rounded-lg mb-10">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">
              Tous types d'hébergements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Hôtels</h3>
                <p className="text-gray-600">Du 3* au 5*, confort garanti</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Riads</h3>
                <p className="text-gray-600">Authenticité marocaine</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Appartements</h3>
                <p className="text-gray-600">Comme à la maison</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Car className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Villas</h3>
                <p className="text-gray-600">Luxe et intimité</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hotels;
