/**
 * Logo component that displays the Khula logo.
 *
 * This component uses the MUI `Box` component to render an image.
 * The image source is imported from the assets folder.
 *
 * @component
 * return (
 *   <Logo />
 * )
 *
 * @returns {JSX.Element} A Box component containing the Khula logo image.
 */
import { Box } from "@mui/system";
import logo from "../assets/khula_logo.png";

const Logo = () => {
  return (
    <Box component="img" src={logo} alt="Khula Logo" sx={{ height: 40 }} />
  );
};
export default Logo;
