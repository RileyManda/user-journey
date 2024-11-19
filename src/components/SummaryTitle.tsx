/**
 * SummaryPageTitle component renders a title, subtitle, completion status, and a button.
 *
 * @param {PageTitleInterface} props - The properties for the component.
 * @param {string} props.title - The main title text.
 * @param {string} props.subtitle - The subtitle text.
 * @param {string} props.buttonText - The text to display on the button.
 * @param {() => void} props.onButtonClick - The callback function to handle button click events.
 *
 * @returns {JSX.Element} The rendered SummaryPageTitle component.
 */
import { Box, Typography, Button } from "@mui/material";
import { PageTitleInterface } from "../types/types";

const SummaryPageTitle = ({
  title,
  subtitle,
  buttonText,
  onButtonClick,
}: PageTitleInterface) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 4,
        borderBottom: "1px solid #E0E0E0",
        gap: 2,
      }}
    >
      {/* Text and Button Inline */}
      <Box
        sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}
      >
        {/* Text Section */}
        <Box>
          <Typography
            variant="h1"
          >
            {title}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "#5F6F79",
              fontSize: "1rem",
              mb: 0.5,
            }}
          >
            {subtitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#123133",
              fontSize: "0.9rem",
              fontWeight: "bold",
            }}
          >
            You are 82% complete
          </Typography>
        </Box>

        {/* Button Section */}
        <Button
          variant="contained"
          onClick={onButtonClick}
          sx={{
            backgroundColor: "#3A7D3E",
            color: "#FFFFFF",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            padding: "12px 24px",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#2E6530",
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

export default SummaryPageTitle;
