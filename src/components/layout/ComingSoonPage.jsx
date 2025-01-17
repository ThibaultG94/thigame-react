import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { ArrowLeft, Construction, Trophy } from "lucide-react";
import { Button } from "../ui/button";

const ComingSoonPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-lg">
        <CardContent className="p-6 text-center space-y-6">
          <div className="grid place-items-center">
            <div className="relative inline-block">
              <Trophy className="w-16 h-16 text-primary animate-pulse" />
              <Construction className="w-8 h-8 text-primary absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Classement en construction</h1>
            <p className="text-muted-foreground text-lg">
              Nous travaillons actuellement sur une fonctionnalité de classement
              ! Revenez bientôt pour défier les meilleurs joueurs.
            </p>
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" /> Retour
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComingSoonPage;
