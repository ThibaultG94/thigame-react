import { Brain, Code, Gamepad2, Rocket, Sparkles } from "lucide-react";
import { Section } from "../components/layout/Section";
import GridContainer from "../components/ui/layout/GridContainer";
import { Card, CardContent } from "../components/ui/card";

const AboutPage = () => {
  const features = [
    {
      icon: Brain,
      title: "Entraînement Cognitif",
      description:
        "Des jeux conçus pour stimuler la mémoire, la concentration et la réflexion rapide.",
    },
    {
      icon: Sparkles,
      title: "Expérience Moderne",
      description:
        "Interface élégante et réactive pour une expérience de jeu fluide sur tous les appareils",
    },
    {
      icon: Code,
      title: "Technologie de Pointe",
      description:
        "Développé avec React et des technologies modernes pour des performances optimales",
    },
    {
      icon: Gamepad2,
      title: "Variété de Jeux",
      description:
        "Une collection croissante de jeux cognitifs adaptés à tous les niveaux",
    },
  ];

  const roadmap = [
    "Nouveaux jeux de logique et de mémoire",
    "Mode multijoueur en temps réél",
    "Système de progression personnalisé",
    "Statistiques détaillées et analyses",
    "Défis quotidiens et hebdomadaires",
  ];

  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <Section centered>
        <h1 className="text-4xl font-bold mb-4">À propos de ThiGame</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Une plateforme moderne dédiée aux jeux en lignes et aux tournois.
        </p>
      </Section>

      {/* Features Section */}
      <Section>
        <h2 className="text-3xl font-bold text-center mb-8">
          Nos Caractéristiques
        </h2>
        <GridContainer columns={{ xs: 1, md: 2 }} gap="lg">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </GridContainer>
      </Section>

      {/* Roadmap Section */}
      <Section centered className="bg-primary/5 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center justify-center gap-2">
            <Rocket className="w-8 h-8" />
            Notre Vision
          </h2>
          <div className="space-y-4">
            {roadmap.map((item, index) => (
              <Card key={index} className="bg-background/50">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;
