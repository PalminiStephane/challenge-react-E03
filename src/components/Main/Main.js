import Box from '../Box/Box';
import './Main.scss';

import Title from "../Title/Title";
import Ingredients from '../Ingredients/Ingredients';

function Main() {
  return (
    <Box>
      <div className="Main">
        <Title text="Titre du main" />
        <p>Liste de courses dans main</p>
        <Ingredients />
      </div>
    </Box>
  );
}

export default Main;
