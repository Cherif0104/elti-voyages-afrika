import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Calendar, Flag, Medal, MapPin, UsersRound, Star } from "lucide-react";

const Can2025 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const overviewItems = [
    {
      icon: <Trophy className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Le Trophée",
      description: "La Coupe d'Afrique des Nations est le prix ultime du football africain.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Dates Clés",
      description: "La CAN 2025 se déroulera durant l'été 2025, avec les dates exactes à confirmer.",
    },
    {
      icon: <Flag className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Pays Hôte",
      description: "Le Maroc a été désigné pays hôte de la Coupe d'Afrique des Nations 2025.",
    },
    {
      icon: <Medal className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />,
      title: "Les Enjeux",
      description: "La CAN 2025 promet d'être une édition mémorable avec des enjeux sportifs et culturels importants.",
    },
  ];

  const faqData = [
    {
      question: "Quand aura lieu la CAN 2025 ?",
      answer: "La Coupe d'Afrique des Nations 2025 se déroulera durant l'été 2025. Les dates exactes seront communiquées ultérieurement.",
    },
    {
      question: "Où se déroulera la CAN 2025 ?",
      answer: "La CAN 2025 se déroulera au Maroc, pays hôte de cette édition.",
    },
    {
      question: "Quels sont les enjeux de la CAN 2025 ?",
      answer: "La CAN 2025 est un événement sportif et culturel majeur pour l'Afrique. Elle permettra de promouvoir le football africain et de renforcer les liens entre les pays du continent.",
    },
    {
      question: "Comment puis-je réserver un pack supporter pour la CAN 2025 ?",
      answer: "Vous pouvez réserver un pack supporter pour la CAN 2025 en remplissant le formulaire de réservation disponible sur notre site web. Nous vous contacterons dans les plus brefs délais pour vous proposer une offre personnalisée.",
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="pt-20 lg:pl-64 relative">
        <div className="bg-placeholder h-[600px] md:h-[700px] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.8 }}
                className="max-w-xl mx-auto md:mx-0 text-center md:text-left"
              >
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  CAN 2025 au Maroc
                </h1>
                <p className="text-white/90 text-xl md:text-2xl mb-8">
                  Vivez la passion du football africain avec nos offres exclusives pour la Coupe d'Afrique des Nations 2025 au Maroc.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Link
                    to="#reservation"
                    className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-4 rounded-lg transition-colors duration-300"
                  >
                    Réserver mon pack
                  </Link>
                  <Link
                    to="#news"
                    className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 rounded-lg transition-colors duration-300 border"
                  >
                    Dernières actualités
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview section */}
      <section className="py-16 lg:pl-64">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Aperçu de la CAN 2025</h2>
            <p className="text-gray-600 text-lg">
              Tout ce que vous devez savoir sur la Coupe d'Afrique des Nations 2025 au Maroc.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {overviewItems.map((item, index) => (
              <motion.div
                variants={fadeInUp}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                key={index}
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <h3 className="text-xl font-bold ml-4">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}

            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <MapPin className="h-10 w-10 text-primary p-2 bg-primary/5 rounded-full" />
                <h3 className="text-xl font-bold ml-4">Les équipes</h3>
              </div>
              <p className="text-gray-700">
                Les meilleures équipes africaines s'affronteront pour remporter le titre de champion d'Afrique.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Dates section */}
      <section className="py-24 lg:pl-64 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Dates Clés</h2>
            <p className="text-gray-600 text-lg">
              Les dates importantes à retenir pour la Coupe d'Afrique des Nations 2025.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Tirage au sort</h3>
              <p className="text-gray-700">
                Le tirage au sort des groupes de la CAN 2025 aura lieu prochainement. Restez connectés pour connaître la composition des groupes.
              </p>
              <p className="text-gray-500 mt-2">Date à confirmer</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Coup d'envoi</h3>
              <p className="text-gray-700">
                Le coup d'envoi de la CAN 2025 sera donné durant l'été 2025. Soyez prêts à vivre des moments de football inoubliables.
              </p>
              <p className="text-gray-500 mt-2">Date à confirmer</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">Finale</h3>
              <p className="text-gray-700">
                La grande finale de la CAN 2025 se jouera dans un stade mythique du Maroc. Ne manquez pas l'occasion de vivre cet événement exceptionnel.
              </p>
              <p className="text-gray-500 mt-2">Date à confirmer</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News section */}
      <section id="news" className="py-24 lg:pl-64">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Dernières Actualités</h2>
            <p className="text-gray-600 text-lg">
              Restez informés des dernières nouvelles concernant la Coupe d'Afrique des Nations 2025.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Préparatifs au Maroc</h3>
                  <p className="text-gray-700">
                    Le Maroc accélère les préparatifs pour accueillir la CAN 2025 dans les meilleures conditions.
                  </p>
                  <p className="text-gray-500 mt-4">15 mai 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, margin: "-50px" }}
              className="md:col-span-2 lg:col-span-1"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Qualifications</h3>
                  <p className="text-gray-700">
                    Les qualifications pour la CAN 2025 débuteront prochainement. Suivez les performances de votre équipe favorite.
                  </p>
                  <p className="text-gray-500 mt-4">10 mai 2024</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileInView="visible"
              initial="hidden"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-primary">Infrastructures</h3>
                  <p className="text-gray-700">
                    Le Maroc investit massivement dans les infrastructures pour garantir le succès de la CAN 2025.
                  </p>
                  <p className="text-gray-500 mt-4">5 mai 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 lg:pl-64 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">FAQ</h2>
            <p className="text-gray-600 text-lg">
              Réponses aux questions fréquemment posées sur la Coupe d'Afrique des Nations 2025.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 mt-12">
            {faqData.map((item, index) => (
              <motion.div
                variants={fadeInUp}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                key={index}
              >
                <h3 className="text-xl font-bold mb-2 text-primary">{item.question}</h3>
                <p className="text-gray-700">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact section */}
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
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-sm border border-gray-100"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 lg:pl-64">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">Prêt à vivre la CAN 2025 au Maroc ?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Réservez dès maintenant votre pack supporter et vivez des moments inoubliables au cœur du football africain.
            </p>
            <Link
              to="#reservation"
              className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-4 rounded-lg transition-colors duration-300"
            >
              Réserver mon pack
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Can2025;
