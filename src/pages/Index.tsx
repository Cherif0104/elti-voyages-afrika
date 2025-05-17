
import { Plane, Hotel, Car, Map, Crown } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import PartnerLogo from "@/components/PartnerLogo";
import PromotionBanner from "@/components/PromotionBanner";
import { Button } from "@/components/ui/button";

const Index = () => {
  // Example data for packages
  const packages = [
    {
      name: "Yoonu Sénégal",
      price: "890 €",
      features: [
        "Vol aller-retour",
        "Hébergement 3★",
        "1 match de groupe",
        "Transferts aéroport",
        "Guide local",
      ],
      isPremium: false,
    },
    {
      name: "Délégation Lions",
      price: "1 590 €",
      features: [
        "Vol aller-retour",
        "Hébergement 4★",
        "3 matchs garantis",
        "Transferts privés",
        "Guide francophone",
        "Excursion culturelle",
      ],
      isPremium: false,
    },
    {
      name: "Lion d'Or",
      price: "1 990 €",
      features: [
        "Vol aller-retour Business",
        "Hébergement 5★",
        "Tous les matchs du Sénégal",
        "Chauffeur personnel",
        "Guide bilingue",
        "Excursions premium",
        "Accès VIP aux stades",
      ],
      isPremium: true,
    },
    {
      name: "Sur mesure",
      price: "2 490 €",
      features: [
        "Vol aller-retour Business",
        "Hébergement de luxe",
        "Place finale garantie",
        "Accès backstage équipes",
        "Chauffeur & concierge 24h/24",
        "Excursions personnalisées",
        "Rencontres privées",
      ],
      isPremium: false,
    },
  ];

  // Example data for services
  const services = [
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Billets d'avion",
      description: "Vols directs et correspondances vers toutes les destinations avec les meilleures compagnies.",
    },
    {
      icon: <Hotel className="h-8 w-8" />,
      title: "Réservations hôtelières",
      description: "Hôtels de 3 à 5 étoiles (Fairmont, Barceló, Radisson, riads traditionnels).",
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: "Location de véhicules",
      description: "De l'économique au luxe, avec ou sans chauffeur pour tous vos déplacements.",
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Excursions & circuits",
      description: "Découvrez Essaouira, Chefchaouen, Merzouga, Saint-Louis et plus encore.",
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Services VIP",
      description: "Accueil aéroport, conciergerie et chauffeur privé pour un voyage sans souci.",
    },
  ];

  // Example data for partners
  const partners = [
    { name: "Royal Air Maroc" },
    { name: "Air Sénégal" },
    { name: "Turkish Airlines" },
    { name: "Qatar Airways" },
    { name: "Fairmont" },
    { name: "Radisson" },
    { name: "Barceló" },
    { name: "Sixt" },
  ];

  return (
    <>
      <PromotionBanner
        title="CAN 2025"
        text="Réservez votre pack supporter avant le 31 décembre et bénéficiez de -15%"
        linkText="En savoir plus"
        linkUrl="#packages"
        active={true}
      />

      {/* Hero Section */}
      <section className="pt-20 lg:pl-64 relative">
        <div className="bg-placeholder h-[500px] md:h-[600px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 fade-in">
                  CAN 2025
                </h1>
                <p className="text-white/90 text-xl mb-8 fade-in">
                  Vivez la passion du football africain avec notre sélection de packages exclusifs pour la Coupe d'Afrique des Nations 2025.
                </p>
                <Button 
                  size="lg" 
                  className="bg-secondary text-primary hover:bg-secondary/90 fade-in"
                  asChild
                >
                  <a href="#packages">
                    Découvrir nos packs
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Packs CAN 2025</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des solutions clé en main pour vivre la compétition comme vous le souhaitez. Chaque pack est entièrement personnalisable selon vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                isPremium={pkg.isPremium}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:pl-64">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ELTI VOYAGES vous accompagne dans tous vos projets de voyage avec une offre complète de services premium.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 lg:pl-64 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nos Partenaires</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec les meilleurs acteurs du tourisme et du voyage pour vous garantir qualité et fiabilité.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <PartnerLogo
                key={index}
                name={partner.name}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="reservation" className="py-16 lg:pl-64">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Réservation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Remplissez notre formulaire pour recevoir une proposition personnalisée sous 24h.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
