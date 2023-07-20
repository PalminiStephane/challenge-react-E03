import './Main.scss';

import Title from "../Title/Title";
import Ingredients from '../Ingredients/Ingredients';

function Main() {
  return (
    <div className="Main">
      <Title text="Titre du main" />
      <p>Liste de courses dans main</p>
      <Ingredients />
    </div>
  );
}

export default Main;
