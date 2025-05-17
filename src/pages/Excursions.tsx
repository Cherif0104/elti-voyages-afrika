
import { Button } from "@/components/ui/button";

type Excursion = {
  title: string;
  location: string;
  duration: string;
  price: string;
  description: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
};

const ExcursionCard = ({ excursion }: { excursion: Excursion }) => {
  const { title, location, duration, price, description, featured, size } = excursion;
  
  const sizeClasses = {
    small: "col-span-1 row-span-1",
    medium: "col-span-1 md:col-span-1 row-span-1 md:row-span-2",
    large: "col-span-1 md:col-span-2 row-span-1"
  };
  
  const sizeClass = sizeClasses[size || 'small'];
  
  return (
    <div className={`${sizeClass} relative group overflow-hidden rounded-lg shadow-md transition-all`}>
      <div className="absolute inset-0 bg-placeholder transition-transform group-hover:scale-110 duration-500 ease-in-out"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        {featured && (
          <span className="absolute top-4 right-4 bg-secondary text-primary text-xs font-bold py-1 px-2 rounded">
            Populaire
          </span>
        )}
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/80 text-sm">{location}</span>
          <span className="text-white/80 text-sm">{duration}</span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">{price}</span>
          <Button size="sm" className="bg-white text-primary hover:bg-white/90" asChild>
            <a href="#reservation">Réserver</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Excursions = () => {
  const excursions: Excursion[] = [
    {
      title: "Essaouira, la ville bleue",
      location: "Au départ de Marrakech",
      duration: "1 jour",
      price: "À partir de 65 €",
      description: "Découvrez la cité fortifiée d'Essaouira, son port de pêche pittoresque et ses remparts face à l'océan.",
      featured: true,
      size: 'medium'
    },
    {
      title: "Désert de Merzouga",
      location: "Maroc",
      duration: "3 jours",
      price: "À partir de 290 €",
      description: "Une aventure inoubliable dans le désert du Sahara, avec nuit en bivouac sous les étoiles et balade à dos de dromadaire.",
      featured: true,
      size: 'large'
    },
    {
      title: "Chefchaouen",
      location: "Nord du Maroc",
      duration: "2 jours",
      price: "À partir de 180 €",
      description: "Explorez la célèbre ville bleue nichée dans les montagnes du Rif.",
      size: 'small'
    },
    {
      title: "Saint-Louis du Sénégal",
      location: "Sénégal",
      duration: "2 jours",
      price: "À partir de 220 €",
      description: "Visite de l'ancienne capitale coloniale inscrite au patrimoine mondial de l'UNESCO.",
      size: 'small'
    },
    {
      title: "Vallée de l'Ourika",
      location: "Haut Atlas, Maroc",
      duration: "1 jour",
      price: "À partir de 75 €",
      description: "Explorez les magnifiques paysages de la vallée de l'Ourika et découvrez le mode de vie berbère.",
      size: 'medium'
    },
    {
      title: "Île de Gorée",
      location: "Dakar, Sénégal",
      duration: "1 jour",
      price: "À partir de 85 €",
      description: "Visite guidée de ce lieu chargé d'histoire, symbole de la traite négrière.",
      size: 'small'
    },
    {
      title: "Cascades d'Ouzoud",
      location: "Moyen Atlas, Maroc",
      duration: "1 jour",
      price: "À partir de 70 €",
      description: "Les plus belles chutes d'eau du Maroc, dans un cadre naturel préservé.",
      size: 'small'
    },
  ];
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Excursions & Circuits</h1>
        <p className="text-gray-600 mb-8">
          Explorez les plus beaux sites du Maroc et du Sénégal avec nos excursions guidées et nos circuits sur mesure. Des expériences authentiques pour découvrir les trésors cachés de l'Afrique.
        </p>
        
        {/* Excursions Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 auto-rows-auto">
          {excursions.map((excursion, index) => (
            <ExcursionCard key={index} excursion={excursion} />
          ))}
        </div>
        
        {/* Custom Excursion Banner */}
        <div className="bg-primary rounded-lg p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-6">
              <h3 className="text-2xl font-bold mb-2">Créez votre circuit sur mesure</h3>
              <p className="text-white/80">
                Une destination particulière vous intéresse ? Vous souhaitez un itinéraire personnalisé ?
                Notre équipe d'experts locaux peut concevoir un voyage unique qui correspond parfaitement à vos envies.
              </p>
            </div>
            <Button 
              asChild
              className="bg-white text-primary hover:bg-white/90 whitespace-nowrap"
              size="lg"
            >
              <a href="#reservation">Demander un devis</a>
            </Button>
          </div>
        </div>
        
        {/* What's Included Section */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Ce qui est inclus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Transport confortable</h3>
              <p className="text-gray-600 text-sm">
                Véhicules climatisés et confortables adaptés à la taille du groupe, avec chauffeur professionnel.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Guide expert</h3>
              <p className="text-gray-600 text-sm">
                Accompagnement par un guide local francophone ou anglophone passionné et connaisseur de la région.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Expériences authentiques</h3>
              <p className="text-gray-600 text-sm">
                Rencontres avec les locaux, découvertes culturelles et culinaires, activités typiques de la région.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Excursions;
