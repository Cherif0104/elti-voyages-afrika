
import { motion } from "framer-motion";

const ContactSection = () => {
  const fadeInUp = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-16 lg:pl-64 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Contact</h2>
          <p className="text-gray-600 text-lg">
            Contactez-nous pour toute question ou demande d'information concernant la CAN 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold mb-4 text-primary">Contactez-nous</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <a href="tel:+212656136036" className="hover:text-primary">+212 656 13 60 36</a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:contact@eltivoyages.com" className="hover:text-primary">contact@eltivoyages.com</a>
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z"></path>
                  <path d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                  <path d="M22 12h-2.5"></path>
                  <path d="M2 12h2.5"></path>
                  <path d="M12 2v2.5"></path>
                  <path d="M12 22v-2.5"></path>
                </svg>
                17 Rue El Oraibi Jilali, Casablanca
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3325.499299749476!2d-7.621799984741399!3d33.58428938074177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4a548073a1%3A0x595332652699790c!2s17%20Rue%20El%20Oraibi%20Jilali%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1621947144999!5m2!1sfr!2sma"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              className="rounded-xl shadow-sm border border-gray-100"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
