
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import TravelGuideCard from "@/components/guides/TravelGuideCard";
import { Link } from "react-router-dom";

const TravelGuides = () => {
  const guides = [
    {
      title: "Guide complet pour visiter Marrakech",
      location: "Marrakech, Maroc",
      date: "15 Avril 2025",
      author: "Sofia Benali",
      excerpt: "Découvrez les incontournables de la ville ocre : des souks animés de la médina à la majesté des jardins Majorelle, en passant par la fameuse place Jemaa el-Fna.",
      imageSrc: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
      slug: "guide-marrakech"
    },
    {
      title: "Explorer Chefchaouen, la ville bleue",
      location: "Chefchaouen, Maroc",
      date: "2 Mai 2025",
      author: "Karim Idrissi",
      excerpt: "Promenez-vous dans le labyrinthe de ruelles aux murs bleus, découvrez l'artisanat local et imprégnez-vous de l'ambiance unique de cette ville nichée dans les montagnes du Rif.",
      imageSrc: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
      slug: "explorer-chefchaouen"
    },
    {
      title: "Les plages secrètes du Sénégal",
      location: "Sénégal",
      date: "10 Juin 2025",
      author: "Aminata Diop",
      excerpt: "Au-delà de Dakar et Saly, découvrez les criques isolées et les plages de sable fin méconnues qui bordent la côte atlantique du Sénégal.",
      imageSrc: "/lovable-uploads/8f78671e-52ba-451f-826b-7eefe225183e.png",
      slug: "plages-senegal"
    },
    {
      title: "Fès : voyage au cœur de la plus ancienne médina",
      location: "Fès, Maroc",
      date: "25 Mai 2025",
      author: "Hassan Alaoui",
      excerpt: "Explorez la médina de Fès, classée au patrimoine mondial de l'UNESCO, avec ses 9000 ruelles, ses tanneries traditionnelles et ses monuments historiques.",
      imageSrc: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      slug: "fes-medina"
    },
    {
      title: "Safari dans le parc national du Niokolo-Koba",
      location: "Sénégal",
      date: "8 Juillet 2025",
      author: "Ousmane Ndiaye",
      excerpt: "Partez à la découverte de la faune sauvage du Sénégal dans l'un des plus grands parcs d'Afrique de l'Ouest, habitat des lions, éléphants, hippopotames et antilopes.",
      imageSrc: "/lovable-uploads/f608db7e-7f02-4846-8e00-dd7719a0de18.png",
      slug: "safari-niokolo-koba"
    },
    {
      title: "Le désert de Merzouga : guide pratique",
      location: "Merzouga, Maroc",
      date: "30 Avril 2025",
      author: "Youssef Benjelloun",
      excerpt: "Tout ce que vous devez savoir pour préparer votre excursion dans les dunes de l'Erg Chebbi, depuis l'équipement nécessaire jusqu'aux meilleures périodes pour visiter.",
      imageSrc: "/lovable-uploads/00639225-b6c9-4ae6-bf80-d8c5154fb25f.png",
      slug: "desert-merzouga"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-secondary font-semibold mb-2 text-lg drop-shadow-md">
              Conseils et astuces de voyage
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              Guides de voyage
              <span className="block mt-2 text-secondary">Maroc & Sénégal</span>
            </h1>
            <p className="text-lg mb-8 font-medium drop-shadow-md">
              Découvrez nos guides détaillés pour préparer votre voyage et explorer les plus beaux sites d'Afrique du Nord et de l'Ouest.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Search and Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="relative">
              <Input 
                placeholder="Rechercher un guide..." 
                className="pl-10"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Destination" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les destinations</SelectItem>
                <SelectItem value="morocco">Maroc</SelectItem>
                <SelectItem value="senegal">Sénégal</SelectItem>
                <SelectItem value="marrakech">Marrakech</SelectItem>
                <SelectItem value="casablanca">Casablanca</SelectItem>
                <SelectItem value="dakar">Dakar</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les catégories</SelectItem>
                <SelectItem value="culture">Culture</SelectItem>
                <SelectItem value="nature">Nature & Paysages</SelectItem>
                <SelectItem value="adventure">Aventure</SelectItem>
                <SelectItem value="food">Gastronomie</SelectItem>
                <SelectItem value="tips">Conseils pratiques</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
            Explorer & s'inspirer
          </span>
          <h2 className="text-3xl font-bold text-primary mb-4">Nos guides de voyage</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Des informations pratiques, des itinéraires testés et des conseils d'experts pour vous aider à planifier le voyage parfait.
          </p>
        </motion.div>
        
        {/* Travel Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {guides.map((guide, index) => (
            <TravelGuideCard
              key={index}
              title={guide.title}
              location={guide.location}
              date={guide.date}
              author={guide.author}
              excerpt={guide.excerpt}
              imageSrc={guide.imageSrc}
              slug={guide.slug}
            />
          ))}
        </div>
        
        {/* Newsletter Section */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-3 px-3 py-1 bg-primary/10 text-primary">
              Restez informé
            </Badge>
            <h3 className="text-2xl font-bold mb-3 text-primary">
              Abonnez-vous à notre newsletter
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Recevez nos derniers guides de voyage, conseils et offres spéciales directement dans votre boîte mail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input placeholder="Votre adresse e-mail" className="flex-grow" />
              <Button className="whitespace-nowrap bg-primary">
                S'abonner
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Final CTA */}
        <div className="py-12 bg-primary text-white rounded-lg">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0">
                <Badge className="mb-4 px-3 py-1 bg-secondary text-primary">
                  Voyagez comme un local
                </Badge>
                <h2 className="text-3xl font-bold mb-2">
                  Besoin d'un itinéraire sur mesure ?
                </h2>
                <p className="text-white/80 max-w-lg">
                  Nos experts locaux sont là pour créer votre voyage personnalisé au Maroc et au Sénégal.
                </p>
              </div>
              
              <Button 
                asChild
                size="lg"
                className="text-lg px-8 py-6 font-semibold bg-secondary hover:bg-secondary/90 text-primary transition-all duration-300"
              >
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuides;
