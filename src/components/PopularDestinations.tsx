
import { motion } from "framer-motion";
import { fadeInUp } from "@/components/can2025/AnimationUtils";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Monument de la Renaissance (Dakar)",
    image: "/lovable-uploads/c6c802b2-f2e0-41cb-80f9-0b3db899bbcb.png",
    link: "#",
    country: "Sénégal"
  },
  {
    name: "Hassan II Mosque (Casablanca)",
    image: "/lovable-uploads/e959261a-76fe-4475-8048-4cf15a7e9ed2.png",
    link: "#",
    country: "Maroc"
  },
  {
    name: "Koutoubia Mosque (Marrakech)",
    image: "/lovable-uploads/e067fb96-d7e6-4ba5-890d-84d016ad9522.png",
    link: "#",
    country: "Maroc"
  },
  {
    name: "Centre culturel IFAN (Dakar)",
    image: "/lovable-uploads/2843ecc8-3b91-4dc6-89a7-609be2cde30d.png",
    link: "#",
    country: "Sénégal"
  }
];

const PopularDestinations = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 lg:pl-64 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3"
          >
            Explorez
          </motion.span>
          <h2 className="text-4xl font-bold text-primary mb-4">Destinations populaires</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Découvrez nos destinations phares entre le Maroc et le Sénégal, avec des expériences culturelles et authentiques.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3, type: "spring", stiffness: 300 } 
              }}
              className="group relative overflow-hidden rounded-xl shadow-lg h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 group-hover:to-primary/80 transition-all duration-300 z-10"></div>
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transition-transform duration-300">
                <span className="text-white/80 text-sm font-medium mb-1 block">{destination.country}</span>
                <h3 className="text-white text-xl font-bold mb-2">{destination.name}</h3>
                <Link 
                  to={destination.link}
                  className="inline-flex items-center text-white/90 hover:text-white text-sm font-medium transition-all duration-300 group-hover:underline"
                >
                  Découvrir
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopularDestinations;
