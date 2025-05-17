
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

const Flights = () => {
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Billets d'avion</h1>
        <p className="text-gray-600 mb-8">
          Réservez vos vols vers les destinations de votre choix avec nos partenaires premium. Nous proposons des tarifs compétitifs et un service personnalisé pour tous vos voyages.
        </p>
        
        {/* Flight Widget Placeholder */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-10">
          <div className="flex items-center justify-center h-48 bg-gray-100 rounded mb-4">
            <p className="text-gray-500 text-center">
              <Plane className="h-10 w-10 mx-auto mb-2 text-primary" />
              Widget de réservation de vols
              <br />
              <span className="text-sm">(Intégration TravelPayouts / Skyscanner)</span>
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Utilisez notre moteur de recherche pour trouver les meilleurs tarifs pour vos vols. Comparez les prix et les horaires de nos compagnies partenaires.
          </p>
        </div>
        
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
