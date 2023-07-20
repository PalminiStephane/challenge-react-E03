import Box from "../Box/Box";
import Title from "../Title/Title";
import "./Footer.scss";

function Footer() {
  return (
    <Box className="Footer">
      <Title text="Titre du footer" />
      <p>Texte du footer</p>
    </Box>
  );
}

export default Footer;
