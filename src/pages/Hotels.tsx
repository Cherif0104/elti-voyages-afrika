
import { useState } from "react";
import { Hotel } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const HotelCard = ({ name, location, stars, price, imageClass = "bg-placeholder" }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md border border-gray-100 transition-transform hover:scale-105 bg-white">
      <div className={`h-48 ${imageClass}`} />
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-primary">{name}</h3>
          <div className="text-secondary">
            {"★".repeat(stars)}
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{location}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold">{price}</span>
          <Button size="sm" asChild>
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Hotels = () => {
  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  
  const hotels = [
    { name: "Fairmont Royal Palm", location: "Marrakech", stars: 5, price: "280 € / nuit" },
    { name: "Radisson Blu", location: "Casablanca", stars: 4, price: "150 € / nuit" },
    { name: "Barceló Anfa", location: "Casablanca", stars: 5, price: "190 € / nuit" },
    { name: "Riad El Fenn", location: "Marrakech", stars: 4, price: "210 € / nuit" },
    { name: "Les Jardins de la Koutoubia", location: "Marrakech", stars: 5, price: "250 € / nuit" },
    { name: "Movenpick Hotel", location: "Casablanca", stars: 5, price: "170 € / nuit" },
    { name: "Hyatt Regency", location: "Casablanca", stars: 5, price: "200 € / nuit" },
    { name: "Four Seasons", location: "Casablanca", stars: 5, price: "320 € / nuit" },
  ];
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Hôtels</h1>
        <p className="text-gray-600 mb-8">
          Découvrez notre sélection d'hôtels 3 à 5 étoiles dans les plus belles villes du Maroc et du Sénégal. Faites votre choix parmi les établissements les plus prestigieux et bénéficiez de nos tarifs préférentiels.
        </p>
        
        {/* Search Filters */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <Label htmlFor="city">Destination</Label>
              <Input 
                id="city" 
                placeholder="Ville ou pays" 
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="checkIn">Arrivée</Label>
              <Input 
                id="checkIn" 
                type="date" 
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="checkOut">Départ</Label>
              <Input 
                id="checkOut" 
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="guests">Voyageurs</Label>
              <Select 
                value={guests}
                onValueChange={setGuests}
              >
                <SelectTrigger id="guests">
                  <SelectValue placeholder="Nombre de voyageurs" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "voyageur" : "voyageurs"}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <Button className="bg-primary hover:bg-primary/90">
              Rechercher
            </Button>
          </div>
        </div>
        
        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {hotels.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-10">
              <Hotel className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">Aucun hôtel ne correspond à votre recherche</p>
            </div>
          ) : (
            hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                name={hotel.name}
                location={hotel.location}
                stars={hotel.stars}
                price={hotel.price}
              />
            ))
          )}
        </div>
        
        {/* Custom Request Banner */}
        <div className="bg-primary/10 rounded-lg p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold text-primary mb-2">Vous ne trouvez pas votre bonheur ?</h3>
              <p className="text-gray-600">
                Nous pouvons vous proposer d'autres hébergements non listés ou négocier des tarifs de groupe.
                Contactez-nous pour une offre sur mesure.
              </p>
            </div>
            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 whitespace-nowrap"
            >
              <a href="#reservation">Demande personnalisée</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
