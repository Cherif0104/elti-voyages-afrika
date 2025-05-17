
import { Car } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CarCard = ({ category, model, price, features, imageClass = "bg-placeholder" }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className={`w-full h-48 ${imageClass}`} />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-bold text-primary">{category}</h3>
            <p className="text-sm text-gray-500">{model}</p>
          </div>
          <div className="text-xl font-bold">{price}</div>
        </div>
        
        <Separator className="my-4" />
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-accent mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-end">
          <Button asChild>
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const Cars = () => {
  const carCategories = [
    {
      category: "Économique",
      model: "Dacia Logan ou similaire",
      price: "30 € / jour",
      features: ["5 places", "Climatisation", "Kilométrage illimité", "Assurance de base incluse"]
    },
    {
      category: "SUV Compact",
      model: "Dacia Duster ou similaire",
      price: "45 € / jour",
      features: ["5 places", "Climatisation", "Kilométrage illimité", "Assurance de base incluse"]
    },
    {
      category: "Premium",
      model: "Mercedes Classe C ou similaire",
      price: "80 € / jour",
      features: ["5 places", "Climatisation", "Kilométrage illimité", "Assurance tous risques"]
    },
    {
      category: "Minivan",
      model: "Renault Trafic ou similaire",
      price: "75 € / jour",
      features: ["9 places", "Climatisation", "Kilométrage illimité", "Assurance de base incluse"]
    }
  ];
  
  const rentalCompanies = ["Sixt", "Hertz", "Avis", "Europcar"];
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Location de véhicules</h1>
        <p className="text-gray-600 mb-8">
          De l'économique au luxe, avec ou sans chauffeur, nous proposons une large gamme de véhicules pour tous vos déplacements à travers le Maroc et le Sénégal.
        </p>
        
        {/* Rental Companies */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-primary mb-4">Nos partenaires location</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {rentalCompanies.map((company, index) => (
              <div key={index} className="bg-white rounded-md p-6 shadow-sm border border-gray-100 flex items-center justify-center">
                <span className="text-lg font-medium text-primary">{company}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Car Categories */}
        <h2 className="text-xl font-bold text-primary mb-6">Nos catégories de véhicules</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carCategories.map((car, index) => (
            <CarCard
              key={index}
              category={car.category}
              model={car.model}
              price={car.price}
              features={car.features}
            />
          ))}
        </div>
        
        {/* VIP Service Banner */}
        <div className="bg-primary my-12 rounded-lg overflow-hidden">
          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Service Chauffeur Privé</h2>
            <p className="mb-6 opacity-90">
              Optez pour le confort et la sécurité avec notre service de chauffeur privé disponible 24h/24.
              Nos chauffeurs professionnels connaissent parfaitement les routes et vous accompagnent tout au long de votre séjour.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Transfert Aéroport</h3>
                <p className="text-sm opacity-80">À partir de 50€</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Journée complète</h3>
                <p className="text-sm opacity-80">À partir de 150€</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-4 rounded-md">
                <h3 className="text-lg font-bold mb-2">Circuit personnalisé</h3>
                <p className="text-sm opacity-80">Sur demande</p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center md:justify-end">
              <Button 
                asChild 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <a href="#reservation">Réserver un chauffeur</a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-bold text-primary mb-4">Informations complémentaires</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-sm mb-2">Conditions de location</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Âge minimum: 21 ans</li>
                <li>• Permis de conduire valide depuis plus d'un an</li>
                <li>• Carte de crédit au nom du conducteur</li>
                <li>• Caution requise (montant selon véhicule)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-sm mb-2">Services inclus</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Assistance routière 24h/24</li>
                <li>• Prise en charge aéroport/hôtel</li>
                <li>• Conseils itinéraires personnalisés</li>
                <li>• Support téléphonique multilingue</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
