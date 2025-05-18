
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, Medal, Star, Clock, Shield, Plane } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import SearchWidget from "@/components/SearchWidget";
import VipStatsSection from "@/components/vip/VipStatsSection";
import { motion } from "framer-motion";

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
      {/* Hero Section with Search Widget */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Services VIP et Conciergerie de Luxe
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Une expérience de voyage inégalée avec des services sur mesure pour répondre à toutes vos exigences
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <SearchWidget />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Services VIP Grid */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
              Services exclusifs
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Nos services VIP</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ELTI VOYAGES offre des services exclusifs pour une expérience de voyage sans compromis. Notre équipe de conciergerie est à votre disposition pour répondre à toutes vos demandes, des plus simples aux plus exigeantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Stats Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-md mb-3">
              Notre excellence
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4">Notre engagement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous vous garantissons un service d'exception, une disponibilité permanente et une confidentialité absolue pour tous vos projets.
            </p>
          </div>
          <VipStatsSection />
        </div>
        
        {/* Religious Travel Section - 2 columns layout */}
        <motion.section 
          className="py-16 bg-white rounded-lg shadow-sm border border-gray-100 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
                Voyages spirituels
              </span>
              <h2 className="text-3xl font-bold text-primary mb-4">Voyages religieux</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Des expériences spirituelles uniques organisées avec le plus grand soin et respect des traditions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  Omra
                </h3>
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
                <Button variant="outline" className="w-full">Demander un devis</Button>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Star className="h-5 w-5 text-secondary mr-2" />
                  Ziyaras (visites spirituelles)
                </h3>
                <p className="text-gray-600 mb-6">
                  Découvrez les lieux saints et centres spirituels de l'Afrique de l'Ouest avec nos circuits confessionnels au Sénégal et au Maroc.
                </p>
                <ul className="space-y-2 mb-6">
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
                <Button variant="outline" className="w-full">Demander un devis</Button>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Custom Request Form with CTA */}
        <motion.section 
          className="py-16 bg-white rounded-lg shadow-sm border border-gray-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-medium rounded-md mb-3">
                  Sur mesure
                </span>
                <h2 className="text-3xl font-bold text-primary mb-4">Votre demande personnalisée</h2>
                <p className="text-gray-600 mb-6">
                  Faites-nous part de vos besoins spécifiques, et notre équipe vous contactera sous 24h avec une proposition personnalisée.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    "Service 100% personnalisé selon vos besoins",
                    "Devis détaillé sous 24h",
                    "Conciergerie disponible avant, pendant et après votre voyage",
                    "Confidentialité garantie pour toutes vos demandes"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="bg-secondary/20 p-1 rounded-full mr-3">
                        <Crown className="h-4 w-4 text-secondary" />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <h3 className="text-xl font-bold mb-4 text-center">Demande sur mesure</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet</Label>
                      <Input id="name" placeholder="Votre nom" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="votre@email.com" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </motion.section>
      </div>
    </div>
  );
};

export default Vip;
