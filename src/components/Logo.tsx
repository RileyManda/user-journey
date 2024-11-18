import { Box } from "@mui/system";
import logo from "../assets/khula_logo.png";

const Logo = () => {
  return (
    <Box component="img" src={logo} alt="Khula Logo" sx={{ height: 40 }} />
  );
};
export default Logo;
