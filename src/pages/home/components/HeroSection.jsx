import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import { Section } from "../../../components/layout/Section";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <Section centered className="space-y-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent animate-fade-in">
        Redécouvrez le Plaisir du Jeu
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Des jeux classiques réinventés pour une nouvelle génération. Jouez
        gratuitement, sans inscription !
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button size="lg" className="gap-2" onClick={() => navigate("/games")}>
          Jouer maintenant <ArrowRight className="w-4 h-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={() => {
            // Soft scroll to the features section
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          En savoir plus
        </Button>
      </div>
    </Section>
  );
};

export default HeroSection;
