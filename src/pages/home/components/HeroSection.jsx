import { Button } from "../../../components/ui/button";

const HeroSection = () => {
  return (
    <div>
      {/* Section Hero */}
      <section>
        <h1>Redécouvrez le Plaisir du Jeu</h1>
        <p>Des jeux classiques réinventés...</p>
        <div>
          <Button>...</Button>
          <Button>...</Button>
        </div>
      </section>

      {/* Games Section */}
      <section>
        <div>
          <h2>Jeux à l'affiche</h2>
          <p>Découvrez notre sélection</p>
        </div>
        <div>{/* {featuredGames} */}</div>
      </section>
    </div>
  );
};

export default HeroSection;
