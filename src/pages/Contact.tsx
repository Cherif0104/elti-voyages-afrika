
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Téléphone",
      content: "+212 614 082 524",
      description: "Disponible 7j/7 de 9h à 20h",
      link: "tel:+212614082524"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "WhatsApp",
      content: "+212 614 082 524",
      description: "Réponse rapide garantie",
      link: "https://wa.me/212614082524"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email",
      content: "contact@impulcia-afrique.com",
      description: "Réponse sous 24h",
      link: "mailto:contact@impulcia-afrique.com"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Adresse",
      content: "17 Rue El Oraibi Jilali, Casablanca",
      description: "Maroc, 20250",
      link: "#"
    }
  ];

  const officeHours = [
    { day: "Lundi - Vendredi", hours: "9h00 - 18h00" },
    { day: "Samedi", hours: "9h00 - 17h00" },
    { day: "Dimanche", hours: "10h00 - 16h00" },
    { day: "Urgences", hours: "24h/24" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{ backgroundColor: '#172554' }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 px-4 py-2 bg-secondary text-primary">
                <MessageCircle className="h-4 w-4 mr-2" />
                Nous contacter
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Contactez
                <span className="block text-secondary">Nos Experts</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
                Notre équipe dédiée est à votre disposition pour planifier votre voyage parfait
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white text-lg px-8" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    En savoir plus
                  </a>
                </Button>
                <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8" asChild>
                  <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                    Réserver
                  </a>
                </Button>
              </div>

              {/* Response Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">&lt;1h</div>
                  <div className="text-white/80">Temps de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-white/80">Support urgence</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-white/80">Satisfaction client</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">8</div>
                  <div className="text-white/80">Années d'expérience</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Moyens de contact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choisissez le moyen qui vous convient le mieux pour nous joindre
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <div className="text-primary mx-auto mb-4">
                      {method.icon}
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary mb-2">{method.content}</p>
                    <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                    {method.link !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={method.link} target={method.link.startsWith('http') ? '_blank' : undefined} rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}>
                          Contacter
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Hours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Envoyez-nous un message</CardTitle>
                  <p className="text-gray-600">Remplissez ce formulaire et nous vous recontacterons rapidement</p>
                </CardHeader>
                <CardContent>
                  <BookingForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Hours */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-fit">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Horaires d'ouverture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-700">{schedule.day}</span>
                        <span className="text-primary font-semibold">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>WhatsApp disponible 24h/24</strong> pour les urgences et réservations de dernière minute.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact rapide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <a href="https://wa.me/212614082524" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="tel:+212614082524">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler maintenant
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Notre localisation</h2>
            <p className="text-gray-600">Venez nous rendre visite à notre bureau de Casablanca</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.499299749476!2d-7.621799984741399!3d33.58428938074177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4a548073a1%3A0x595332652699790c!2s17%20Rue%20El%20Oraibi%20Jilali%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1621947144999!5m2!1sfr!2sma"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
