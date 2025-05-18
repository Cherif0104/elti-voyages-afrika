
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./AnimationUtils";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqSection = () => {
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
    {
      question: "Les billets d'avion sont-ils inclus dans les packs ?",
      answer: "Oui, nos packs supporter incluent les billets d'avion aller-retour depuis votre pays d'origine vers le Maroc, ainsi que les transferts aéroport/hôtel.",
    },
    {
      question: "Puis-je personnaliser mon pack supporter ?",
      answer: "Absolument ! Tous nos packs peuvent être personnalisés selon vos préférences et votre budget. Contactez-nous pour une offre sur mesure.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-placeholder">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider bg-secondary/10 px-4 py-1 rounded-full">Questions fréquentes</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">FAQ</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Réponses aux questions fréquemment posées sur la Coupe d'Afrique des Nations 2025.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"
        >
          {faqData.map((item, index) => (
            <motion.div
              variants={fadeInUp}
              className={`bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 ${openIndex === index ? 'shadow-md' : 'hover:shadow-md'}`}
              key={index}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-lg font-bold text-primary pr-4">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 px-6 pb-6">{item.answer}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4">Vous avez d'autres questions ?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a 
              href="/contact" 
              className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
            >
              Contactez-nous
              <ChevronDown className="h-4 w-4 ml-1 transform rotate-[-90deg]" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
