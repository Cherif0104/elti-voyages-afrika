
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/90 text-white py-20">
        <div 
          className="absolute inset-0 bg-black/30 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1000&auto=format&fit=crop')" }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Notre équipe est là pour vous accompagner dans votre projet de voyage
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Nos coordonnées</h2>
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold">Téléphone</h3>
                    <p className="text-gray-600">+212 656 13 60 36</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@elti-voyages.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-gray-600">Casablanca, Maroc</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <h3 className="font-semibold">Horaires</h3>
                    <p className="text-gray-600">Lun-Ven: 9h-18h</p>
                    <p className="text-gray-600">Sam: 9h-13h</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-secondary/10 border-secondary">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageCircle className="h-5 w-5 text-secondary mr-3" />
                  <div>
                    <h3 className="font-semibold">WhatsApp</h3>
                    <p className="text-gray-600 mb-3">Contactez-nous directement</p>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <a href="https://wa.me/212656136036" target="_blank" rel="noopener noreferrer">
                        Ouvrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Envoyez-nous un message</CardTitle>
                <CardDescription>
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nom complet *</label>
                      <Input
                        placeholder="Votre nom"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Téléphone</label>
                      <Input
                        placeholder="+212 6XX XX XX XX"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Sujet *</label>
                      <Select value={formData.subject} onValueChange={(value) => handleChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flights">Billets d'avion</SelectItem>
                          <SelectItem value="hotels">Hébergements</SelectItem>
                          <SelectItem value="cars">Location de voitures</SelectItem>
                          <SelectItem value="excursions">Excursions</SelectItem>
                          <SelectItem value="can2025">CAN 2025</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Décrivez votre projet de voyage ou votre demande..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Combien de temps à l'avance dois-je réserver ?</h4>
                    <p className="text-gray-600 text-sm">Nous recommandons de réserver au moins 2-4 semaines à l'avance pour bénéficier des meilleurs tarifs.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Proposez-vous des paiements échelonnés ?</h4>
                    <p className="text-gray-600 text-sm">Oui, nous proposons des facilités de paiement pour les réservations supérieures à 500€.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Vos prix incluent-ils les assurances ?</h4>
                    <p className="text-gray-600 text-sm">Les assurances de base sont incluses. Nous proposons également des assurances complémentaires optionnelles.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
