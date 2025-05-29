import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, Users, Fuel, Settings, Search, Shield } from "lucide-react";
const Cars = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const carCategories = [{
    category: "Économique",
    example: "Dacia Logan ou similaire",
    passengers: 5,
    luggage: 2,
    transmission: "Manuelle",
    fuel: "Essence",
    price: "25€",
    image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=400&auto=format&fit=crop"
  }, {
    category: "Compacte",
    example: "Peugeot 208 ou similaire",
    passengers: 5,
    luggage: 3,
    transmission: "Manuelle",
    fuel: "Essence",
    price: "35€",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=400&auto=format&fit=crop"
  }, {
    category: "SUV",
    example: "Dacia Duster ou similaire",
    passengers: 5,
    luggage: 4,
    transmission: "Automatique",
    fuel: "Diesel",
    price: "55€",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop"
  }, {
    category: "Luxe",
    example: "BMW Série 3 ou similaire",
    passengers: 5,
    luggage: 4,
    transmission: "Automatique",
    fuel: "Essence",
    price: "89€",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=400&auto=format&fit=crop"
  }];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop')"
      }} className="absolute inset-0 bg-cover bg-center bg-blue-950" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Location de voitures
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Explorez le Maroc et le Sénégal en toute liberté
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <Card className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Car className="mr-2 h-6 w-6" />
              Réserver votre véhicule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <Input placeholder="Lieu de prise en charge" value={pickupLocation} onChange={e => setPickupLocation(e.target.value)} />
              </div>
              <div>
                <Input type="date" placeholder="Date de prise en charge" value={pickupDate} onChange={e => setPickupDate(e.target.value)} />
              </div>
              <div>
                <Input type="date" placeholder="Date de retour" value={returnDate} onChange={e => setReturnDate(e.target.value)} />
              </div>
              <Button type="submit" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Rechercher
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Car Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {carCategories.map((car, index) => <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img src={car.image} alt={car.category} className="w-full h-48 object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{car.category}</h3>
                <p className="text-sm text-gray-600 mb-4">{car.example}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{car.passengers} passagers</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Settings className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Fuel className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{car.fuel}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-primary">{car.price}</span>
                    <span className="text-sm text-gray-600">/jour</span>
                  </div>
                  <Button size="sm">Réserver</Button>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Features */}
        <section className="py-16 bg-white rounded-lg mb-10">
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
    </div>;
};
export default Cars;