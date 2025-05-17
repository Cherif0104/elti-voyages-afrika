
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const BookingForm = () => {
  const [formType, setFormType] = useState<"flight" | "package">("flight");
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Votre demande a bien été envoyée. Nous vous contacterons rapidement.", {
        duration: 3000,
      });
      setIsSubmitting(false);
      
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-6" id="reservation">
      <h3 className="text-xl font-bold text-primary mb-6">Réservation rapide</h3>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="flex items-center space-x-2">
          <Switch 
            id="form-switch"
            checked={formType === "package"} 
            onCheckedChange={(checked) => setFormType(checked ? "package" : "flight")}
          />
          <Label htmlFor="form-switch">
            {formType === "package" ? "Pack CAN 2025" : "Vol"}
          </Label>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {formType === "flight" ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departure">Ville de départ</Label>
                <Input id="departure" placeholder="Ex: Paris" required />
              </div>
              <div>
                <Label htmlFor="arrival">Ville d'arrivée</Label>
                <Input id="arrival" placeholder="Ex: Casablanca" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="departure-date">Date de départ</Label>
                <Input id="departure-date" type="date" required />
              </div>
              <div>
                <Label htmlFor="return-date">Date de retour</Label>
                <Input id="return-date" type="date" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="adults">Adultes</Label>
                <Select defaultValue="1">
                  <SelectTrigger id="adults">
                    <SelectValue placeholder="Adultes" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="children">Enfants</Label>
                <Select defaultValue="0">
                  <SelectTrigger id="children">
                    <SelectValue placeholder="Enfants" />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="class">Classe</Label>
                <Select defaultValue="economy">
                  <SelectTrigger id="class">
                    <SelectValue placeholder="Classe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Économique</SelectItem>
                    <SelectItem value="premium">Premium Éco</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="first">Première</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Label htmlFor="package">Pack CAN 2025</Label>
              <Select defaultValue="">
                <SelectTrigger id="package">
                  <SelectValue placeholder="Sélectionnez votre pack" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yoonu">Yoonu Sénégal (890 €)</SelectItem>
                  <SelectItem value="delegation">Délégation Lions (1 590 €)</SelectItem>
                  <SelectItem value="or">Lion d'Or (1 990 €)</SelectItem>
                  <SelectItem value="custom">Sur mesure (2 490 €)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="arrival-date">Date d'arrivée souhaitée</Label>
                <Input id="arrival-date" type="date" required />
              </div>
              <div>
                <Label htmlFor="departure-date-pkg">Date de départ souhaitée</Label>
                <Input id="departure-date-pkg" type="date" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="travelers">Nombre de voyageurs</Label>
                <Select defaultValue="1">
                  <SelectTrigger id="travelers">
                    <SelectValue placeholder="Voyageurs" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <SelectItem key={num} value={num.toString()}>{num}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="matches">Matchs souhaités</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="matches">
                    <SelectValue placeholder="Matchs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les matchs</SelectItem>
                    <SelectItem value="group">Phase de groupes</SelectItem>
                    <SelectItem value="knockout">Phase éliminatoire</SelectItem>
                    <SelectItem value="final">Finale uniquement</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Nom complet</Label>
            <Input id="name" placeholder="Votre nom" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="votre@email.com" required />
          </div>
        </div>
        
        <div>
          <Label htmlFor="phone">Téléphone / WhatsApp</Label>
          <Input id="phone" placeholder="+212 XXX XXX XXX" required />
        </div>
        
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" required />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            J'accepte d'être contacté par ELTI VOYAGES
          </label>
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90" 
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
