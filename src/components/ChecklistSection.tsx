import { Box, Typography } from "@mui/material";
import { sections } from "../api/checklistSectionData";
import ChecklistItem from "./ChecklistItem";
import SummaryDetails from "./SummaryDetails"; // Import the new summary component
import { ChecklistSectionInterface } from "../types/types";

const ChecklistSection = ({ isSummary }: ChecklistSectionInterface) => {
  return (
    <Box
      sx={{
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        height: "600px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "0",
        position: "relative",
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={index}
          sx={{
            borderLeft: index !== 0 ? "1px solid #E0E0E0" : "none",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Conditionally render SummaryDetails for the first section */}
          {isSummary && index === 0 ? (
            <SummaryDetails />
          ) : (
            <>
              {/* Section Title and Subtitle */}
              <Box sx={{ marginBottom: 2 }}>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ color: "#123133", marginBottom: 1 }}
                >
                  {section.title}
                </Typography>
                <Typography
                  color="textSecondary"
                  sx={{ fontSize: "0.9rem", marginBottom: 2 }}
                >
                  {section.subtitle}
                </Typography>
              </Box>

              {/* Checklist Items */}
              <Box sx={{ position: "relative", flexGrow: 1 }}>
                {section.items.map((item, itemIndex) => (
                  <ChecklistItem
                    key={itemIndex}
                    item={item}
                    isLastItem={itemIndex === section.items.length - 1}
                  />
                ))}
              </Box>
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ChecklistSection;
