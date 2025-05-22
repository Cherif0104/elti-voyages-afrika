
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Calendar, User, ChevronRight, Globe, Book } from "lucide-react";
import TravelGuideCard from "@/components/guides/TravelGuideCard";
import { Link } from "react-router-dom";
import { useState } from "react";

const TravelGuides = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Sample travel guides data
  const guides = [
    {
      title: "Les incontournables de Marrakech",
      location: "Marrakech, Maroc",
      date: "Mis à jour le 15 Mai 2025",
      author: "Sarah Dubois",
      excerpt: "Découvrez les lieux emblématiques de la ville ocre : médina, jardins, palais et souks. Un guide complet pour ne rien manquer.",
      imageSrc: "/lovable-uploads/d0e93051-21a2-40fb-8b25-5f07c3413af5.png",
      slug: "incontournables-marrakech",
      categories: ["Maroc", "Ville", "Culture"]
    },
    {
      title: "Randonnées dans les montagnes de l'Atlas",
      location: "Atlas, Maroc",
      date: "Mis à jour le 2 Avril 2025",
      author: "Michel Laurent",
      excerpt: "Des sommets majestueux aux vallées verdoyantes, découvrez les plus beaux sentiers de randonnée de l'Atlas marocain.",
      imageSrc: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      slug: "randonnees-atlas",
      categories: ["Maroc", "Nature", "Aventure"]
    },
    {
      title: "Gastronomie sénégalaise : saveurs et traditions",
      location: "Dakar, Sénégal",
      date: "Mis à jour le 10 Mars 2025",
      author: "Aminata Diop",
      excerpt: "Plongez dans les saveurs authentiques de la cuisine sénégalaise, entre thieboudienne, mafé et yassa poulet.",
      imageSrc: "/lovable-uploads/28d985f6-366d-45b3-89a2-e799b677f0dd.png",
      slug: "gastronomie-senegalaise",
      categories: ["Sénégal", "Gastronomie", "Culture"]
    },
    {
      title: "Le désert de Merzouga : guide pratique",
      location: "Merzouga, Maroc",
      date: "Mis à jour le 20 Février 2025",
      author: "Rachid Benali",
      excerpt: "Comment préparer votre séjour dans le désert, quand partir, que prendre et comment profiter pleinement des dunes de l'Erg Chebbi.",
      imageSrc: "/lovable-uploads/00639225-b6c9-4ae6-bf80-d8c5154fb25f.png",
      slug: "desert-merzouga-guide",
      categories: ["Maroc", "Désert", "Aventure"]
    },
    {
      title: "Les plages de la Petite Côte au Sénégal",
      location: "Saly, Sénégal",
      date: "Mis à jour le 5 Janvier 2025",
      author: "Jean Dupont",
      excerpt: "De Saly à Somone, découvrez les plus belles plages de la Petite Côte sénégalaise et les activités incontournables.",
      imageSrc: "/lovable-uploads/8f78671e-52ba-451f-826b-7eefe225183e.png",
      slug: "plages-petite-cote",
      categories: ["Sénégal", "Plage", "Détente"]
    },
    {
      title: "Chefchaouen : la perle bleue du Maroc",
      location: "Chefchaouen, Maroc",
      date: "Mis à jour le 12 Décembre 2024",
      author: "Emma Moreau",
      excerpt: "Perdez-vous dans les ruelles bleues de Chefchaouen et découvrez l'artisanat local, les panoramas et la sérénité de la ville bleue.",
      imageSrc: "/lovable-uploads/c99e7d53-c8ff-4e7a-95e8-87fd146eef92.png",
      slug: "chefchaouen-perle-bleue",
      categories: ["Maroc", "Ville", "Culture"]
    }
  ];

  const filteredGuides = searchTerm 
    ? guides.filter(guide => 
        guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guide.categories.some(cat => cat.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : guides;
  
  // Categories for filtering
  const categories = [
    { name: "Tous", value: "all" },
    { name: "Maroc", value: "morocco" },
    { name: "Sénégal", value: "senegal" },
    { name: "Culture", value: "culture" },
    { name: "Nature", value: "nature" },
    { name: "Aventure", value: "adventure" },
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
              Inspirations & conseils de voyage
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-lg">
              Guides de voyage
              <span className="block mt-2 text-secondary">Experts locaux & expériences authentiques</span>
            </h1>
            <p className="text-lg mb-8 font-medium drop-shadow-md">
              Des conseils de voyage par nos experts locaux pour vous aider à découvrir l'authenticité du Maroc et du Sénégal.
            </p>
            
            {/* Search bar */}
            <div className="max-w-2xl mx-auto mt-8 relative">
              <div className="flex">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input 
                    type="text"
                    placeholder="Rechercher par destination, thème ou intérêt..."
                    className="pl-10 pr-4 py-6 text-gray-800 rounded-l-md w-full border-r-0 focus-visible:ring-primary"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button 
                  className="rounded-l-none bg-secondary hover:bg-secondary/80 text-primary px-6"
                >
                  Rechercher
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Tabs for Categories */}
        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mb-8 w-full max-w-3xl mx-auto overflow-x-auto flex justify-start p-1 space-x-1">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.value} 
                value={category.value}
                className="px-4 py-2 whitespace-nowrap"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides.map((guide, index) => (
                <TravelGuideCard
                  key={index}
                  {...guide}
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="morocco">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides
                .filter(guide => guide.location.includes("Maroc"))
                .map((guide, index) => (
                  <TravelGuideCard
                    key={index}
                    {...guide}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="senegal">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides
                .filter(guide => guide.location.includes("Sénégal"))
                .map((guide, index) => (
                  <TravelGuideCard
                    key={index}
                    {...guide}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="culture">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides
                .filter(guide => guide.categories.includes("Culture"))
                .map((guide, index) => (
                  <TravelGuideCard
                    key={index}
                    {...guide}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="nature">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides
                .filter(guide => guide.categories.includes("Nature"))
                .map((guide, index) => (
                  <TravelGuideCard
                    key={index}
                    {...guide}
                  />
                ))}
            </div>
          </TabsContent>
          
          <TabsContent value="adventure">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGuides
                .filter(guide => guide.categories.includes("Aventure"))
                .map((guide, index) => (
                  <TravelGuideCard
                    key={index}
                    {...guide}
                  />
                ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Featured Expert Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="my-16 bg-gray-50 p-8 rounded-lg"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/3">
              <div className="relative rounded-full overflow-hidden w-48 h-48 border-4 border-white shadow-lg mx-auto">
                <img 
                  src="/lovable-uploads/8a02378a-4b7f-4134-874a-8647c54e9c7d.png" 
                  alt="Expert local" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <Badge className="mb-2 bg-secondary text-primary">Expert local</Badge>
              <h2 className="text-2xl font-bold mb-3">Rachid Alaoui</h2>
              <p className="text-gray-600 mb-4">
                Guide certifié avec plus de 15 ans d'expérience dans l'organisation de voyages au Maroc, Rachid est passionné par l'histoire, la culture et les traditions de son pays. Il vous fera découvrir les joyaux cachés du Maroc que seuls les locaux connaissent.
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-4">
                <Badge variant="outline" className="bg-white">Marrakech</Badge>
                <Badge variant="outline" className="bg-white">Désert</Badge>
                <Badge variant="outline" className="bg-white">Histoire & Culture</Badge>
              </div>
              <Button asChild variant="outline" className="gap-2">
                <Link to="/contact">
                  Contacter Rachid
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
        
        {/* Travel Planning Section */}
        <div className="my-16">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md mb-3">
              Voyagez en toute confiance
            </span>
            <h2 className="text-3xl font-bold text-primary mb-3">Planifiez votre voyage avec nos experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts locaux vous accompagne dans la création d'un voyage sur mesure qui correspond parfaitement à vos attentes et à votre budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expertise locale</h3>
              <p className="text-gray-600 mb-4">
                Nos conseillers sont tous des experts des destinations qu'ils proposent et connaissent chaque recoin du pays.
              </p>
            </Card>
            
            <Card className="bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Book className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Voyages personnalisés</h3>
              <p className="text-gray-600 mb-4">
                Chaque voyage est conçu selon vos envies, votre rythme et vos centres d'intérêt pour une expérience unique.
              </p>
            </Card>
            
            <Card className="bg-white p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tourisme responsable</h3>
              <p className="text-gray-600 mb-4">
                Nous privilégions un tourisme éthique qui respecte les communautés locales et préserve l'environnement.
              </p>
            </Card>
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-secondary text-primary hover:bg-secondary/90">
              <Link to="/contact">
                Contactez un expert
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelGuides;
