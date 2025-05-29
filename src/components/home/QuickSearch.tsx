
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Calendar } from 'lucide-react';

const QuickSearch = () => {
  const [searchType, setSearchType] = useState('flights');

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            Recherchez votre voyage
          </h2>
          
          <Card className="p-6">
            <Tabs value={searchType} onValueChange={setSearchType}>
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="flights">Vols</TabsTrigger>
                <TabsTrigger value="hotels">Hébergements</TabsTrigger>
                <TabsTrigger value="cars">Voitures</TabsTrigger>
              </TabsList>

              <TabsContent value="flights">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Départ" className="pl-10" />
                  </div>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Destination" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="date" className="pl-10" />
                  </div>
                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="hotels">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Destination" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="date" placeholder="Arrivée" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="date" placeholder="Départ" className="pl-10" />
                  </div>
                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="cars">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input placeholder="Lieu de prise" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="date" placeholder="Début" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input type="date" placeholder="Fin" className="pl-10" />
                  </div>
                  <Button className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Rechercher
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickSearch;
