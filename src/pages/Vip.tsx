
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, Medal, Star, Clock, Shield, Plane } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="text-primary mb-4 w-12 h-12 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const Vip = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Votre demande personnalisée a été envoyée. Notre équipe vous contactera sous 24h.", {
        duration: 3000,
      });
      setIsSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  const services = [
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Accueil VIP aéroport",
      description: "Service d'accueil personnalisé et passage accéléré aux formalités d'immigration et douanières."
    },
    {
      icon: <Medal className="h-8 w-8" />,
      title: "Conciergerie privée",
      description: "Un concierge dédié pour organiser l'ensemble de votre séjour selon vos envies."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Évènements sur mesure",
      description: "Organisation de soirées privées, dîners gastronomiques ou activités exclusives."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Service 24h/24",
      description: "Une assistance téléphonique permanente pour répondre à toutes vos demandes."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Sécurité privée",
      description: "Gardes du corps et chauffeurs de sécurité pour vos déplacements sensibles."
    },
    {
      icon: <Plane className="h-8 w-8" />,
      title: "Jets privés",
      description: "Location d'avions privés pour vos déplacements exclusifs et confortables."
    },
  ];
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">VIP / Conciergerie</h1>
        <p className="text-gray-600 mb-8">
          ELTI VOYAGES offre des services exclusifs pour une expérience de voyage sans compromis. Notre équipe de conciergerie est à votre disposition pour répondre à toutes vos demandes, des plus simples aux plus exigeantes.
        </p>
        
        {/* Hero VIP Section */}
        <div className="relative h-80 rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-placeholder"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container px-4">
              <div className="max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-4">Des services sur mesure pour des clients exigeants</h2>
                <p className="text-white/80 mb-6">
                  Que vous voyagiez pour affaires ou pour le loisir, nous vous offrons un service premium pour que votre expérience soit inoubliable.
                </p>
                <Button 
                  className="bg-secondary text-primary hover:bg-secondary/90"
                  size="lg"
                  asChild
                >
                  <a href="#custom-request">Demande personnalisée</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* VIP Services Grid */}
        <h2 className="text-2xl font-bold text-primary mb-6">Nos services VIP</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        {/* Religious Travel Section */}
        <div className="bg-primary/5 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Voyages religieux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-3">Omra</h3>
              <p className="text-gray-600 mb-6">
                Nous organisons votre pèlerinage à la Mecque avec des forfaits tout compris : vols, hébergement à proximité des lieux saints, transferts et accompagnement spirituel.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Visa Omra facilité</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Hôtels 4★ et 5★ à Médine et La Mecque</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Guide religieux francophone</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Ziyaras (visites spirituelles)</h3>
              <p className="text-gray-600 mb-6">
                Découvrez les lieux saints et centres spirituels de l'Afrique de l'Ouest avec nos circuits confessionnels au Sénégal et au Maroc.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Touba et Tivaouane (Sénégal)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Fès et ses zaouïas (Maroc)</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-sm">Hébergement et restauration halal</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <a href="#custom-request">Demander un devis</a>
            </Button>
          </div>
        </div>
        
        {/* Custom Request Form */}
        <div id="custom-request" className="bg-white shadow-lg rounded-lg p-8 border border-gray-100 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Demande sur mesure</h2>
          <p className="text-gray-600 mb-8 text-center">
            Faites-nous part de vos besoins spécifiques, et notre équipe vous contactera sous 24h avec une proposition personnalisée.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Votre nom" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Téléphone / WhatsApp</Label>
                <Input id="phone" placeholder="+212 XXX XXX XXX" required />
              </div>
              <div>
                <Label htmlFor="service">Type de service</Label>
                <Input id="service" placeholder="Ex: Conciergerie, Omra, etc." required />
              </div>
            </div>
            
            <div>
              <Label htmlFor="message">Votre demande en détail</Label>
              <Textarea 
                id="message" 
                placeholder="Décrivez votre projet, vos besoins, dates souhaitées..."
                className="min-h-32"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Vip;
