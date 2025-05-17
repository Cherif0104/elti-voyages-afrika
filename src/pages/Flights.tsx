
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plane, Calendar, MapPin, Users, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

interface FlightOffer {
  id: string;
  itineraries: Array<{
    duration: string;
    segments: Array<{
      departure: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      arrival: {
        iataCode: string;
        terminal?: string;
        at: string;
      };
      carrierCode: string;
      number: string;
      aircraft: {
        code: string;
      };
      operating?: {
        carrierCode: string;
      };
      duration: string;
      id: string;
    }>;
  }>;
  price: {
    currency: string;
    total: string;
    base: string;
    fees: Array<{
      amount: string;
      type: string;
    }>;
    grandTotal: string;
  };
  travelerPricings: Array<{
    travelerId: string;
    fareOption: string;
    travelerType: string;
    price: {
      currency: string;
      total: string;
      base: string;
    };
  }>;
}

const Flights = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState("1");
  const [isSearching, setIsSearching] = useState(false);
  const [flightOffers, setFlightOffers] = useState<FlightOffer[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!origin || !destination || !departureDate) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }
    
    setIsSearching(true);
    setFlightOffers([]);
    
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
      
      // With the token, we can now search for flights
      let searchUrl = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${origin}&destinationLocationCode=${destination}&departureDate=${departureDate}&adults=${adults}&currencyCode=EUR&max=10`;
      
      if (returnDate) {
        searchUrl += `&returnDate=${returnDate}`;
      }
      
      const flightResponse = await fetch(searchUrl, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${tokenData.access_token}`,
        },
      });

      if (!flightResponse.ok) {
        throw new Error("Failed to search flights");
      }

      const flightData = await flightResponse.json();
      setFlightOffers(flightData.data || []);
      
      if (flightData.data?.length === 0) {
        toast.info("Aucun vol disponible pour cette recherche");
      } else {
        toast.success(`${flightData.data?.length} vols trouvés`);
      }
    } catch (error) {
      console.error("Error searching flights:", error);
      toast.error("Une erreur est survenue lors de la recherche des vols");
    } finally {
      setIsSearching(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDuration = (duration: string) => {
    // PT2H30M -> 2h 30m
    return duration
      .replace('PT', '')
      .replace('H', 'h ')
      .replace('M', 'm');
  };

  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Billets d'avion</h1>
        <p className="text-gray-600 mb-8">
          Réservez vos vols vers les destinations de votre choix avec nos partenaires premium. Nous proposons des tarifs compétitifs et un service personnalisé pour tous vos voyages.
        </p>
        
        {/* Flight Search Form */}
        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Rechercher des vols</CardTitle>
            <CardDescription>Trouvez les meilleures offres de vols avec Amadeus</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSearch} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="origin">Départ</Label>
                  <div className="flex items-center mt-1.5">
                    <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="origin" 
                      placeholder="Code aéroport (ex: CDG)" 
                      className="pl-10"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value.toUpperCase())}
                      maxLength={3}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="destination">Destination</Label>
                  <div className="flex items-center mt-1.5">
                    <MapPin className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="destination" 
                      placeholder="Code aéroport (ex: CMN)" 
                      className="pl-10"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value.toUpperCase())}
                      maxLength={3}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="departureDate">Date de départ</Label>
                  <div className="flex items-center mt-1.5">
                    <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="departureDate" 
                      type="date" 
                      className="pl-10"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="returnDate">Date de retour (optionnel)</Label>
                  <div className="flex items-center mt-1.5">
                    <Calendar className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Input 
                      id="returnDate" 
                      type="date" 
                      className="pl-10"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="adults">Voyageurs</Label>
                  <div className="flex items-center mt-1.5">
                    <Users className="w-4 h-4 absolute ml-3 text-gray-500" />
                    <Select
                      value={adults}
                      onValueChange={setAdults}
                    >
                      <SelectTrigger id="adults" className="pl-10">
                        <SelectValue placeholder="Nombre de passagers" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? "adulte" : "adultes"}</SelectItem>
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
                        <Plane className="mr-2 h-4 w-4" />
                        Rechercher
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Flight Results */}
        {flightOffers.length > 0 && (
          <div className="space-y-4 mb-10">
            <h2 className="text-2xl font-bold text-primary">Résultats ({flightOffers.length})</h2>
            {flightOffers.map((offer) => (
              <Card key={offer.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {offer.itineraries.map((itinerary, index) => (
                      <div key={index} className="border-b pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between items-center mb-2">
                          <div className="font-semibold text-primary">
                            {index === 0 ? "Aller" : "Retour"}
                          </div>
                          <div className="text-sm text-gray-500">
                            Durée: {formatDuration(itinerary.duration)}
                          </div>
                        </div>
                        
                        {itinerary.segments.map((segment, segIndex) => (
                          <div key={segIndex} className="flex justify-between items-center py-2">
                            <div className="flex-1">
                              <div className="font-bold">{formatDate(segment.departure.at)}</div>
                              <div className="text-sm">{segment.departure.iataCode} {segment.departure.terminal && `Terminal ${segment.departure.terminal}`}</div>
                            </div>
                            <div className="flex-1 text-center">
                              <div className="text-xs text-gray-500 mb-1">{formatDuration(segment.duration)}</div>
                              <div className="border-t border-dashed relative">
                                <Plane className="w-4 h-4 absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary" />
                              </div>
                              <div className="text-xs mt-1">{segment.carrierCode} {segment.number}</div>
                            </div>
                            <div className="flex-1 text-right">
                              <div className="font-bold">{formatDate(segment.arrival.at)}</div>
                              <div className="text-sm">{segment.arrival.iataCode} {segment.arrival.terminal && `Terminal ${segment.arrival.terminal}`}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                    
                    <div className="flex justify-between items-center pt-4">
                      <div className="text-2xl font-bold text-primary">
                        {offer.price.total} {offer.price.currency}
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        Sélectionner
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {isSearching === false && flightOffers.length === 0 && (
          <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-10">
            <Plane className="h-16 w-16 text-gray-300 mb-4" />
            <p className="text-gray-500 text-center">
              Utilisez le formulaire ci-dessus pour rechercher des vols disponibles
            </p>
          </div>
        )}
        
        {/* Airline Partners */}
        <h2 className="text-2xl font-bold text-primary mb-4">Nos compagnies partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {["Royal Air Maroc", "Air Sénégal", "Turkish Airlines", "Qatar Airways"].map((airline, index) => (
            <div key={index} className="flex items-center justify-center bg-white p-6 rounded-md shadow-sm border border-gray-100 aspect-[3/2]">
              <div className="text-center">
                <div className="h-16 w-16 bg-placeholder rounded-full mx-auto mb-2"></div>
                <p className="font-medium text-primary">{airline}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Support Call to Action */}
        <div className="bg-primary rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-xl font-bold mb-2">Besoin d'aide pour réserver votre vol?</h3>
              <p className="text-white/80">
                Notre équipe est disponible 24h/24 pour vous assister dans votre recherche et réservation de vol.
                Bénéficiez d'un service personnalisé et de tarifs négociés.
              </p>
            </div>
            <Button 
              asChild
              className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
              size="lg"
            >
              <a href="https://wa.me/212656136036" target="_blank" rel="noopener noreferrer">
                Contacter sur WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
