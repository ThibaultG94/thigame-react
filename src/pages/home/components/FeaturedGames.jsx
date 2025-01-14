import { useNavigate } from "react-router-dom";
import { Section } from "../../../components/layout/Section";
import { Card, CardContent } from "../../../components/ui/card";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedGames = ({ games }) => {
  const navigate = useNavigate();

  return (
    <Section>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Jeux à l'Affiche</h2>
        <p className="text-muted-foreground">
          Découvrez notre sélection de jeux du moment
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => {
          const IconComponent = game.icon;
          return (
            <Card
              key={game.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => navigate(game.path)}
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <IconComponent className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-muted-foreground">{game.description}</p>
                </div>
                <div className="space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="secondary">{game.players}</Badge>
                    <Badge variant="secondary">{game.time}</Badge>
                    <Badge variant="secondary">{game.difficulty}</Badge>
                  </div>
                  <Button className="w-full gap-2">
                    Jouer maintenant <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default FeaturedGames;
