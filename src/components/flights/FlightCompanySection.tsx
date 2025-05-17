
import { motion } from "framer-motion";

interface AirlinePartner {
  name: string;
  logo: string;
}

const AirlinePartners: AirlinePartner[] = [
  {
    name: "Royal Air Maroc",
    logo: "https://images.unsplash.com/photo-1524280313371-49c8234b80ea?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Air Sénégal",
    logo: "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Turkish Airlines",
    logo: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Qatar Airways",
    logo: "https://images.unsplash.com/photo-1556388158-158ea5ccacbd?q=80&w=200&auto=format&fit=crop"
  }
];

const FlightCompanySection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary mb-4">Nos compagnies partenaires</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {AirlinePartners.map((airline, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="flex items-center justify-center bg-white p-6 rounded-md shadow-sm border border-gray-100 aspect-[3/2] overflow-hidden"
          >
            <div className="text-center">
              <div className="h-16 w-16 rounded-full mx-auto mb-2 overflow-hidden">
                <img 
                  src={airline.logo} 
                  alt={airline.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="font-medium text-primary">{airline.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FlightCompanySection;
