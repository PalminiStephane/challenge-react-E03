import './Ingredients.scss';

function Ingredients() {
  const ingredients = ["farine", "lait", "oeufs", "yaourt"];

  return (
    <ul className="Ingredients">
      {ingredients.map((ingredient) => (
        <li>{ingredient}</li>
      ))}
    </ul>
  );
}

export default Ingredients;
