import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../../../components/ui/card";
import { ArrowRight, Badge } from "lucide-react";
import { Button } from "../../../components/ui/button";

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const IconComponent = game.icon;

  return (
    <Card
      className="group hover:shadow-lg transition-all cursor-pointer hover:scale-[1.02]"
      onClick={() => navigate(game.path)}
    >
      <CardContent className="p-6">
        {/* Icon and main information */}
        <div className="mb-6">
          <IconComponent className="w-12 h-12 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">{game.title}</h3>
          <p className="text-muted-foreground">{game.description}</p>
        </div>

        {/* Badges and buttons */}
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
};

export default GameCard;
