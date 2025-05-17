
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const ContactItem = ({ icon, title, content, link = null }) => {
  const ContentElement = link ? 'a' : 'p';
  const contentProps = link ? { href: link, target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <ContentElement 
          {...contentProps} 
          className={`text-gray-600 ${link ? 'hover:text-primary transition-colors' : ''}`}
        >
          {content}
        </ContentElement>
      </div>
    </div>
  );
};

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.", {
        duration: 3000,
      });
      setIsSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <div className="lg:pl-64 pt-20">
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary mb-6">Contacts & Support</h1>
        <p className="text-gray-600 mb-8">
          Notre équipe est à votre disposition pour répondre à toutes vos questions et vous accompagner dans la préparation de votre voyage.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Nos coordonnées</h2>
            
            <div className="space-y-8 mb-10">
              <ContactItem
                icon={<MapPin className="h-5 w-5 text-primary" />}
                title="Adresse"
                content="17 Rue El Oraibi Jilali, Casablanca, Maroc"
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
            </div>
            
            {/* Map Placeholder */}
            <div className="h-64 bg-placeholder rounded-lg shadow-sm overflow-hidden">
              {/* Google Maps embed would go here */}
              <div className="h-full flex items-center justify-center text-gray-500">
                Carte Google Maps
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-6">Contactez-nous</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" placeholder="Votre prénom" required />
                </div>
                <div>
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" placeholder="Votre nom" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
                <div>
                  <Label htmlFor="phone">Téléphone / WhatsApp</Label>
                  <Input id="phone" placeholder="+212 XXX XXX XXX" required />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Sujet</Label>
                <Input id="subject" placeholder="Objet de votre message" required />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Détaillez votre demande..."
                  className="min-h-32"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}
              </Button>
            </form>
            
            <div className="mt-8 bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Besoin d'une réponse urgente ?</strong><br />
                Contactez-nous directement sur WhatsApp pour une assistance immédiate.
              </p>
              <div className="mt-4">
                <Button 
                  asChild 
                  variant="outline" 
                  className="w-full bg-white text-primary hover:bg-primary hover:text-white border-primary"
                >
                  <a
                    href="https://wa.me/212656136036"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nous contacter sur WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
