
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationUtils";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 lg:pl-64 bg-placeholder">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Nous joindre</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Contact</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Contactez-nous pour toute question ou demande d'information concernant la CAN 2025.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
        >
          <motion.div 
            variants={fadeInUp}
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary border-b border-gray-100 pb-4">Contactez-nous</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Téléphone</p>
                  <a href="tel:+212014082524" className="text-primary hover:text-secondary transition-colors">+212 014 082 524</a>
                  <p className="text-xs text-gray-400">WhatsApp: +212 614 082 524</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Email</p>
                  <a href="mailto:contact@eltivoyages.com" className="text-primary hover:text-secondary transition-colors">contact@eltivoyages.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Adresse</p>
                  <p>17 Rue El Oraibi Jilali,<br/>Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="md:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
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
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
