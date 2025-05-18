
import { motion } from "framer-motion";
import PartnerLogo from "../PartnerLogo";

interface AirlinePartner {
  name: string;
  logo: string;
}

const AirlinePartners: AirlinePartner[] = [
  {
    name: "Royal Air Maroc",
    logo: "/lovable-uploads/3b91d797-3527-4e65-bcb7-2ec01495bae2.png"
  },
  {
    name: "Air Sénégal",
    logo: "/lovable-uploads/70452ae0-3719-42f5-b659-fcc9048ec921.png"
  },
  {
    name: "Turkish Airlines",
    logo: "/lovable-uploads/a7836e1f-6df5-4b9e-a065-02fc1de85e34.png"
  },
  {
    name: "Qatar Airways",
    logo: "/lovable-uploads/3d3e0204-e9c0-4d89-8d27-f0d8e4bf4c5b.png"
  }
];

const FlightCompanySection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-primary mb-4">Nos compagnies partenaires</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {AirlinePartners.map((airline, index) => (
          <PartnerLogo 
            key={index}
            name={airline.name}
            logoSrc={airline.logo}
          />
        ))}
      </div>
    </>
  );
};

export default FlightCompanySection;
