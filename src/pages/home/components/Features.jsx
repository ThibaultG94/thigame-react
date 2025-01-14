import { Gamepad2, Sparkles, Trophy, Users } from "lucide-react";
import { Section } from "../../../components/layout/Section";
import { Card, CardContent } from "../../../components/ui/card";

const features = [
  {
    icon: Gamepad2,
    title: "Jeux Classiques Revisités",
    description:
      "Redécouvrez vos jeux préférés avec une touche moderne et des mécaniques innovantes",
  },
  {
    icon: Trophy,
    title: "Défis Quotidiens",
    description:
      "De nouveaux challenges chaque jour pour tester vos compétences",
  },
  {
    icon: Users,
    title: "Mode Solo ou Multi",
    description: "Jouez seul pour vous améliorer ou défiez vos amis en local",
  },
  {
    icon: Sparkles,
    title: "100% Gratuit",
    description: "Tous nos jeux sont gratuits et accessibles sans inscription",
  },
];

const Features = () => {
  return (
    <Section id="features" centered>
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Pourquoi ThiGame ?</h2>
        <p className="text-muted-foreground">
          Une expérience de jeu unique et moderne
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} className="bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
};

export default Features;
