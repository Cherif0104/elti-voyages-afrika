
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FlightOffer } from "../../pages/Flights";

interface FlightCardProps {
  offer: FlightOffer;
  onSelect: () => void;
}

const FlightCard = ({ offer, onSelect }: FlightCardProps) => {
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
  
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  // Get first segment for quick display
  const departure = offer.itineraries[0].segments[0].departure;
  const lastSegment = offer.itineraries[0].segments[offer.itineraries[0].segments.length - 1];
  const arrival = lastSegment.arrival;
  
  const isNonStop = offer.itineraries[0].segments.length === 1;
  const stopsCount = offer.itineraries[0].segments.length - 1;

  // Get airline logo based on carrier code
  const getAirlineLogo = (carrierCode: string) => {
    const airlineLogos: Record<string, string> = {
      "AT": "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?q=80&w=50&auto=format&fit=crop",
      "AF": "https://images.unsplash.com/photo-1554123168-b400f9c806ca?q=80&w=50&auto=format&fit=crop",
      "IB": "https://images.unsplash.com/photo-1599202889720-d071bd694799?q=80&w=50&auto=format&fit=crop",
    };
    
    return airlineLogos[carrierCode] || "https://images.unsplash.com/photo-1541005520294-1d2dbf2ef448?q=80&w=50&auto=format&fit=crop";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition-shadow border border-gray-200">
        <CardContent className="p-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full overflow-hidden mr-3">
                  <img 
                    src={getAirlineLogo(offer.itineraries[0].segments[0].carrierCode)}
                    alt={`${offer.itineraries[0].segments[0].carrierCode} logo`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {offer.itineraries[0].segments[0].carrierCode} {offer.itineraries[0].segments[0].number}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between md:pr-4">
                <div className="text-center">
                  <div className="text-xl font-bold">{formatTime(departure.at)}</div>
                  <div className="text-sm font-medium">{departure.iataCode}</div>
                </div>
                
                <div className="flex-1 px-3 py-2">
                  <div className="flex items-center justify-center">
                    <div className="h-[2px] bg-gray-300 flex-grow relative">
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-xs text-gray-500">
                        {formatDuration(offer.itineraries[0].duration)}
                      </div>
                      {!isNonStop && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-gray-500"></div>
                      )}
                    </div>
                  </div>
                  <div className="text-center text-xs text-gray-500 mt-1">
                    {isNonStop ? 'Direct' : `${stopsCount} escale${stopsCount > 1 ? 's' : ''}`}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl font-bold">{formatTime(arrival.at)}</div>
                  <div className="text-sm font-medium">{arrival.iataCode}</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:items-end gap-2 border-t pt-4 lg:pt-0 lg:border-t-0">
              <div className="text-2xl font-bold text-primary">
                {parseFloat(offer.price.total).toFixed(0)} {offer.price.currency}
              </div>
              <Button 
                variant="booking"
                onClick={onSelect}
                className="w-full md:w-auto"
              >
                Sélectionner
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FlightCard;
