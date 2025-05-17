
import { useState } from "react";
import { Hotel, Calendar, MapPin, Users, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Amadeus API client types
interface AmadeusAccessToken {
  type: string;
  access_token: string;
  expires_in: number;
  state: string;
}

interface HotelOffer {
  type: string;
  hotel: {
    type: string;
    hotelId: string;
    name: string;
    rating: string;
    cityCode: string;
    address: {
      lines: string[];
      postalCode: string;
      cityName: string;
      countryCode: string;
    };
    media?: {
      uri: string;
      category: string;
    }[];
    amenities?: string[];
  };
  available: boolean;
  offers: Array<{
    id: string;
    checkInDate: string;
    checkOutDate: string;
    rateCode: string;
    room: {
      type: string;
      typeEstimated: {
        category: string;
        beds: number;
        bedType: string;
      };
      description: {
        text: string;
      };
    };
    guests: {
      adults: number;
    };
    price: {
      currency: string;
      total: string;
      base: string;
      taxes: Array<{
        code: string;
        amount: string;
        currency: string;
      }>;
    };
    policies: {
      guarantee: {
        acceptedPayments: {
          creditCards: string[];
          methods: string[];
        };
      };
      paymentType: string;
      cancellation: {
        deadline: string;
      };
    };
    self: string;
  }>;
  self: string;
}

const HotelCard = ({ 
  name, 
  location, 
  stars, 
  price, 
  imageClass = "bg-placeholder",
  onClick
}: { 
  name: string;
  location: string;
  stars: number;
  price: string;
  imageClass?: string;
  onClick?: () => void;
}) => {
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
          <Button size="sm" onClick={onClick}>
            Réserver
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
  const [isSearching, setIsSearching] = useState(false);
  const [hotelOffers, setHotelOffers] = useState<HotelOffer[]>([]);
  
  const staticHotels = [
    { name: "Fairmont Royal Palm", location: "Marrakech", stars: 5, price: "280 € / nuit" },
    { name: "Radisson Blu", location: "Casablanca", stars: 4, price: "150 € / nuit" },
    { name: "Barceló Anfa", location: "Casablanca", stars: 5, price: "190 € / nuit" },
    { name: "Riad El Fenn", location: "Marrakech", stars: 4, price: "210 € / nuit" },
    { name: "Les Jardins de la Koutoubia", location: "Marrakech", stars: 5, price: "250 € / nuit" },
    { name: "Movenpick Hotel", location: "Casablanca", stars: 5, price: "170 € / nuit" },
    { name: "Hyatt Regency", location: "Casablanca", stars: 5, price: "200 € / nuit" },
    { name: "Four Seasons", location: "Casablanca", stars: 5, price: "320 € / nuit" },
  ];
  
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!city || !checkIn || !checkOut) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    setIsSearching(true);
    setHotelOffers([]);
    
    try {
      // Get access token first
      const tokenResponse = await fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: "HKbJFhP2AVEHNHqIMt9qKRa1D1ZNDP50",
          client_secret: "rLoU5lwyj1Dw8BWY",
        }),
      });

      if (!tokenResponse.ok) {
        throw new Error("Failed to get access token");
      }

      const tokenData: AmadeusAccessToken = await tokenResponse.json();
      
      // With the token, we can now search for hotels
      const searchUrl = `https://test.api.amadeus.com/v3/shopping/hotel-offers?cityCode=${city}&checkInDate=${checkIn}&checkOutDate=${checkOut}&adults=${guests}&radius=50&radiusUnit=KM&paymentPolicy=NONE&includeClosed=false&bestRateOnly=true&view=FULL&sort=PRICE`;
      
      const hotelResponse = await fetch(searchUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
        },
      });
      
      if (!hotelResponse.ok) {
        // For test environment, sometimes real data is not available
        // Fallback to static data if the API fails
        toast.info("Simulation des résultats avec des données fictives");
        setTimeout(() => {
          setIsSearching(false);
          // We'll simulate the API response with our static hotels
        }, 1500);
        return;
      }

      const hotelData = await hotelResponse.json();
      setHotelOffers(hotelData.data || []);
      
      if (hotelData.data?.length === 0) {
        toast.info("Aucun hôtel disponible pour cette recherche. Affichage des hôtels recommandés.");
      } else {
        toast.success(`${hotelData.data?.length} hôtels trouvés`);
      }
    } catch (error) {
      console.error("Error searching hotels:", error);
      toast.error("Une erreur est survenue lors de la recherche des hôtels");
    } finally {
      setIsSearching(false);
    }
  };

  const handleHotelSelect = (hotel: any) => {
    toast.success(`Demande de réservation pour ${hotel.name || hotel.hotel?.name} envoyée`);
  };
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Hôtels</h1>
        <p className="text-gray-600 mb-8">
          Découvrez notre sélection d'hôtels 3 à 5 étoiles dans les plus belles villes du Maroc et du Sénégal. Faites votre choix parmi les établissements les plus prestigieux et bénéficiez de nos tarifs préférentiels.
        </p>
        
        {/* Hotel Search Form */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Rechercher un hébergement</CardTitle>
            <CardDescription>Trouvez votre hôtel idéal avec Amadeus</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-5">
              <div>
                <Label htmlFor="city">Destination</Label>
                <div className="flex items-center mt-1.5">
                  <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                  <Input 
                    id="city" 
                    placeholder="Code ville (ex: CMN, RAK)" 
                    className="pl-10"
                    value={city}
                    onChange={(e) => setCity(e.target.value.toUpperCase())}
                    maxLength={3}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="checkIn">Arrivée</Label>
                  <div className="flex items-center mt-1.5">
                    <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="checkIn" 
                      type="date"
                      className="pl-10"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="checkOut">Départ</Label>
                  <div className="flex items-center mt-1.5">
                    <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="checkOut" 
                      type="date"
                      className="pl-10"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests">Voyageurs</Label>
                  <div className="flex items-center mt-1.5">
                    <Users className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Select
                      value={guests}
                      onValueChange={setGuests}
                    >
                      <SelectTrigger id="guests" className="pl-10">
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
                <div className="flex items-end">
                  <Button 
                    type="submit"
                    className="w-full mt-1.5 bg-primary hover:bg-primary/90" 
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Recherche en cours...
                      </>
                    ) : (
                      <>
                        <Hotel className="mr-2 h-4 w-4" />
                        Rechercher
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Hotel Results */}
        {hotelOffers.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">Résultats ({hotelOffers.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {hotelOffers.map((offer) => (
                <HotelCard
                  key={offer.hotel.hotelId}
                  name={offer.hotel.name}
                  location={`${offer.hotel.address.cityName}, ${offer.hotel.address.countryCode}`}
                  stars={parseInt(offer.hotel.rating) || 3}
                  price={`${offer.offers[0]?.price.total || "N/A"} ${offer.offers[0]?.price.currency || "EUR"}`}
                  onClick={() => handleHotelSelect(offer)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Hotel Grid - Show static hotels when no search has been performed or when API returns no results */}
        {(isSearching === false && hotelOffers.length === 0) && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {staticHotels.map((hotel, index) => (
              <HotelCard
                key={index}
                name={hotel.name}
                location={hotel.location}
                stars={hotel.stars}
                price={hotel.price}
                onClick={() => handleHotelSelect(hotel)}
              />
            ))}
          </div>
        )}
        
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
