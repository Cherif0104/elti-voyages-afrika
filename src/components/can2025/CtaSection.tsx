
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeInUp, hoverScale } from "./AnimationUtils";

const CtaSection = () => {
  return (
    <section className="py-24 lg:pl-64 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={fadeInUp}
          whileInView="visible"
          initial="hidden"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Prêt à vivre la CAN 2025 au Maroc ?
          </h2>
          <p className="text-gray-600 text-lg mb-10">
            Réservez dès maintenant votre pack supporter et vivez des moments inoubliables 
            au cœur du football africain.
          </p>
          <motion.div whileHover={hoverScale}>
            <Link
              to="#reservation"
              className="bg-secondary text-white hover:bg-secondary/90 text-lg px-10 py-5 rounded-lg transition-colors duration-300 inline-block shadow-lg shadow-secondary/20"
            >
              Réserver mon pack
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
