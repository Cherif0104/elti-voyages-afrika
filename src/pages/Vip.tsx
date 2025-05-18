
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, Medal, Star, Clock, Shield, Plane, Check } from "lucide-react";
import { toast } from "sonner";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  fadeInUp, 
  fadeInDown, 
  staggerContainer, 
  buttonTap,
  hoverScale,
  floatingAnimation 
} from "@/components/can2025/AnimationUtils";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 44, 95, 0.1)" }}
      transition={{ duration: 0.2 }}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-all hover:shadow-md"
    >
      <div className="flex flex-col items-center text-center">
        <motion.div 
          className="text-primary mb-4 w-12 h-12 flex items-center justify-center"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

const Vip = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });

  // Floating decoration elements
  const FloatingElement = ({ children, delay = 0, x = 0, y = 0, size = "md" }) => {
    const sizeClasses = {
      sm: "h-8 w-8",
      md: "h-12 w-12",
      lg: "h-16 w-16"
    };
    
    return (
      <motion.div
        className={`absolute text-primary/5 z-0 ${sizeClasses[size] || sizeClasses.md}`}
        style={{ left: `${x}%`, top: `${y}%` }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.5,
          y: [0, -15, 0],
          transition: { 
            y: { 
              repeat: Infinity,
              duration: 3 + Math.random() * 2,
              ease: "easeInOut", 
              delay 
            },
            opacity: { duration: 1, delay }
          }
        }}
      >
        {children}
      </motion.div>
    );
  };

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
      <div className="container mx-auto px-4 py-10 relative">
        {/* Decorative floating elements */}
        <FloatingElement x={5} y={20} delay={0.2} size="lg">
          <Crown className="h-full w-full" />
        </FloatingElement>
        <FloatingElement x={90} y={40} delay={0.5} size="md">
          <Star className="h-full w-full" />
        </FloatingElement>
        <FloatingElement x={80} y={70} delay={1.3} size="sm">
          <Medal className="h-full w-full" />
        </FloatingElement>
        
        <motion.h1 
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          className="text-3xl font-bold text-primary mb-6"
        >
          VIP / Conciergerie
        </motion.h1>
        
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-gray-600 mb-8"
        >
          ELTI VOYAGES offre des services exclusifs pour une expérience de voyage sans compromis. Notre équipe de conciergerie est à votre disposition pour répondre à toutes vos demandes, des plus simples aux plus exigeantes.
        </motion.p>
        
        {/* Hero VIP Section with enhanced animations */}
        <motion.div 
          className="relative h-80 rounded-xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-placeholder"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container px-4">
              <div className="max-w-2xl">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  Des services sur mesure pour des clients exigeants
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-white/80 mb-6"
                >
                  Que vous voyagiez pour affaires ou pour le loisir, nous vous offrons un service premium pour que votre expérience soit inoubliable.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={buttonTap}
                >
                  <Button 
                    className="bg-secondary text-primary hover:bg-secondary/90 relative overflow-hidden group"
                    size="lg"
                    asChild
                  >
                    <a href="#custom-request">
                      Demande personnalisée
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* VIP Services Grid with enhanced animations */}
        <motion.div ref={servicesRef}>
          <motion.h2 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-6"
          >
            Nos services VIP
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate={isServicesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Religious Travel Section with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-primary mb-6">Voyages religieux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Omra</h3>
              <p className="text-gray-600 mb-6">
                Nous organisons votre pèlerinage à la Mecque avec des forfaits tout compris : vols, hébergement à proximité des lieux saints, transferts et accompagnement spirituel.
              </p>
              <motion.ul 
                className="space-y-2 mb-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Visa Omra facilité", "Hôtels 4★ et 5★ à Médine et La Mecque", "Guide francophone"].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div 
                      whileHover={hoverScale}
                      className="flex items-center justify-center h-5 w-5 bg-accent/20 rounded-full text-accent"
                    >
                      <Check className="h-3 w-3" />
                    </motion.div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-3">Ziyaras (visites spirituelles)</h3>
              <p className="text-gray-600 mb-6">
                Découvrez les lieux saints et centres spirituels de l'Afrique de l'Ouest avec nos circuits confessionnels au Sénégal et au Maroc.
              </p>
              <motion.ul 
                className="space-y-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {["Touba et Tivaouane (Sénégal)", "Fès et ses zaouïas (Maroc)", "Hébergement et restauration halal"].map((item, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div 
                      whileHover={hoverScale}
                      className="flex items-center justify-center h-5 w-5 bg-accent/20 rounded-full text-accent"
                    >
                      <Check className="h-3 w-3" />
                    </motion.div>
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
          <motion.div 
            className="mt-6 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={buttonTap}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild className="relative overflow-hidden group">
                <a href="#custom-request">
                  Demander un devis
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Custom Request Form with enhanced animations */}
        <motion.div 
          id="custom-request" 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white shadow-lg rounded-lg p-8 border border-gray-100 max-w-3xl mx-auto"
        >
          <motion.h2 
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-2xl font-bold text-primary mb-6 text-center"
          >
            Demande sur mesure
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 mb-8 text-center"
          >
            Faites-nous part de vos besoins spécifiques, et notre équipe vous contactera sous 24h avec une proposition personnalisée.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} transition={{ delay: 0.1 }}>
                <Label htmlFor="name">Nom complet</Label>
                <Input id="name" placeholder="Votre nom" required />
              </motion.div>
              <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" required />
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
                <Label htmlFor="phone">Téléphone / WhatsApp</Label>
                <Input id="phone" placeholder="+212 XXX XXX XXX" required />
              </motion.div>
              <motion.div variants={fadeInUp} transition={{ delay: 0.4 }}>
                <Label htmlFor="service">Type de service</Label>
                <Input id="service" placeholder="Ex: Conciergerie, Omra, etc." required />
              </motion.div>
            </div>
            
            <motion.div variants={fadeInUp} transition={{ delay: 0.5 }}>
              <Label htmlFor="message">Votre demande en détail</Label>
              <Textarea 
                id="message" 
                placeholder="Décrivez votre projet, vos besoins, dates souhaitées..."
                className="min-h-32"
                required
              />
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              whileTap={buttonTap}
            >
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 relative overflow-hidden group" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] group-hover:animate-shine" />
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </div>
  );
};

export default Vip;
