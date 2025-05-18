
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactItem = ({ icon, title, content, link = null }) => {
  const ContentElement = link ? 'a' : 'p';
  const contentProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1 text-primary">{title}</h3>
        <ContentElement 
          {...contentProps} 
          className={`text-gray-600 ${link ? 'hover:text-primary transition-colors' : ''}`}
        >
          {content}
        </ContentElement>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.", {
        duration: 3000,
      });
      setIsSubmitting(false);
      setFormSubmitted(true);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
              Demande d'information
            </span>
            <h1 className="text-4xl font-bold text-primary mb-4">Contacts & Support</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la préparation de votre voyage.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <ContactItem
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Adresse"
                content="17 Rue El Oraibi Jilali, Casablanca, Maroc"
                link="https://maps.google.com/?q=17+Rue+El+Oraibi+Jilali+Casablanca+Maroc"
              />
              
              <ContactItem
                icon={<Phone className="h-5 w-5 text-primary" />}
                title="Téléphone & WhatsApp"
                content="+212 656 13 60 36"
                link="https://wa.me/212656136036"
              />
              
              <ContactItem
                icon={<Mail className="h-5 w-5 text-primary" />}
                title="Email"
                content="contact@eltivoyages.com"
                link="mailto:contact@eltivoyages.com"
              />
              
              <ContactItem
                icon={<Clock className="h-5 w-5 text-primary" />}
                title="Horaires d'ouverture"
                content="Lun - Sam: 9h00 - 19h00 | Support d'urgence 24h/24"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-100 relative overflow-hidden"
            >
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">Message envoyé avec succès !</h3>
                  <p className="text-gray-600 mb-6">
                    Merci de nous avoir contacté. Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                  <Button 
                    onClick={() => setFormSubmitted(false)}
                    variant="outline"
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-primary mb-6">Contactez-nous</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="first-name">Prénom</Label>
                        <Input id="first-name" placeholder="Votre prénom" required className="transition-shadow duration-300 focus:shadow-md" />
                      </div>
                      <div>
                        <Label htmlFor="last-name">Nom</Label>
                        <Input id="last-name" placeholder="Votre nom" required className="transition-shadow duration-300 focus:shadow-md" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" required className="transition-shadow duration-300 focus:shadow-md" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone / WhatsApp</Label>
                        <Input id="phone" placeholder="+212 XXX XXX XXX" required className="transition-shadow duration-300 focus:shadow-md" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Sujet</Label>
                      <Input id="subject" placeholder="Objet de votre message" required className="transition-shadow duration-300 focus:shadow-md" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Détaillez votre demande..."
                        className="min-h-32 transition-shadow duration-300 focus:shadow-md"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-md" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
                    </Button>
                  </form>
                  
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-shimmer"></div>
                </>
              )}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-lg overflow-hidden shadow-md"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.499299749476!2d-7.621799984741399!3d33.58428938074177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4a548073a1%3A0x595332652699790c!2s17%20Rue%20El%20Oraibi%20Jilali%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1621947144999!5m2!1sfr!2sma"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>
          
          {/* WhatsApp Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 bg-green-50 rounded-lg p-6 md:p-8 border border-green-100 flex flex-col md:flex-row md:items-center justify-between"
          >
            <div className="mb-4 md:mb-0 md:mr-6">
              <h3 className="font-bold text-xl text-green-800 mb-2">Besoin d'une réponse urgente?</h3>
              <p className="text-green-700">
                Contactez-nous directement sur WhatsApp pour une assistance immédiate.
              </p>
            </div>
            <Button 
              asChild 
              className="bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <a
                href="https://wa.me/212656136036"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.32 16.335c-.927 1.564-4.15 3.415-5.75 3.67-1.604.255-3.063.119-4.053-.299-1-.424-2.536-1.004-3.747-2.046-1.21-1.041-2.46-2.573-2.916-4.223-.456-1.65-.202-3.004.254-4.468.456-1.463 1.55-2.474 2.73-3.201 1.183-.729 1.745-.607 2.217-.359.472.248 1.003.847 1.003 1.743 0 .895-.153 1.291-.358 1.819-.204.527-.51.786-.51.786s.545.263 1.835 1.446c1.29 1.182 1.835 2.309 1.835 2.309s.26-.306.787-.51c.528-.204.924-.356 1.82-.356.894 0 1.493.53 1.742 1.002.248.472.368 1.037-.359 2.218z"></path>
                </svg>
                Nous contacter sur WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
