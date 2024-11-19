/**
 * Component for displaying the title, subtitle, and a button on the landing page.
 *
 * @component
 * @param {PageTitleInterface} props - The properties for the LandingPageTitle component.
 * @param {string} props.title - The main title text to display.
 * @param {string} props.subtitle - The subtitle text to display.
 * @param {string} props.buttonText - The text to display on the button.
 * @param {() => void} props.onButtonClick - The function to call when the button is clicked.
 * @returns {JSX.Element} The rendered LandingPageTitle component.
 */
import { Box, Typography, Button } from "@mui/material";
import { PageTitleInterface } from "../types/types";


const LandingPageTitle = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: PageTitleInterface) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 4,
        flexWrap: "wrap",
        gap: 2,
      }}
    >
      {/* Text Section */}
      <Box>
        <Typography variant="h1">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
        >
          {subtitle}
        </Typography>
      </Box>

      {/* Button Section */}
      <Button
        variant="contained"
        onClick={onButtonClick}
        sx={{
          width: "300px",
          height: "58px",
          backgroundColor: "#3A7D3E",
          border: "1px solid #707070",
          borderRadius: "5px",
          color: "#FFF",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#2E6530",
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default LandingPageTitle;
