import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GlobalContainer from "../components/GlobalContainer";
import { useNavigate, useLocation } from "react-router";
import { sections } from "../api/checklistSectionData"; // Import sections
import { summaryStepsData } from "../api/summarySteps";
import FarmForm from "../components/FarmForm";

const ApplicationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFullTimeFarmer, setIsFullTimeFarmer] = useState<string | null>(null);
  // Retrieve selected items from the previous page
  const selectedItems = location.state?.selectedItems || {};
  const selectedColumn = Object.keys(selectedItems).find(
    (key) => selectedItems[key]?.length
  );
  // Find the corresponding section to fetch its items
  const selectedSection = sections.find(
    (section) => section.title === selectedColumn
  );

  const handleNextClick = () => {
    navigate("/summary", { state: { selectedItems } });
  };

  return (
    <GlobalContainer>
      <Box sx={{ backgroundColor: "#FFFFFF", height: "100vh" }}>
        {/* Top Navigation */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 2,
            borderBottom: "1px solid #E0E0E0",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#123133",
                fontSize: "1rem",
                fontWeight: "bold",
              }}
            >
              X
            </Button>
            <Typography
              sx={{
                display: "inline",
                color: "#123133",
                fontSize: "0.9rem",
                marginLeft: "8px",
              }}
            >
              Save and close
            </Typography>
          </Box>

          {/* Stepper */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flex: 4,
              gap: 2,
            }}
          >
            {summaryStepsData.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 1,
                  borderBottom:
                    step.label === "1. Credit Check" ||
                    selectedItems[step.label]?.length
                      ? "2px solid #4CAF50"
                      : "none",
                  backgroundColor:
                    step.label === "1. Credit Check" ||
                    selectedItems[step.label]?.length
                      ? "#F9F9F9"
                      : "transparent",
                  minWidth: "140px",
                }}
              >
                <Typography
                  sx={{
                    color:
                      step.label === "1. Credit Check" ||
                      selectedItems[step.label]?.length
                        ? "#4CAF50"
                        : "#9E9E9E",
                    fontWeight:
                      step.label === "1. Credit Check" ||
                      selectedItems[step.label]?.length
                        ? "bold"
                        : "normal",
                    fontSize: "0.9rem",
                  }}
                >
                  {step.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color:
                      step.label === "1. Credit Check" ||
                      selectedItems[step.label]?.length
                        ? "#4CAF50"
                        : "#9E9E9E",
                  }}
                >
                  {step.label === "1. Credit Check" ||
                  selectedItems[step.label]?.length
                    ? "Complete"
                    : "Incomplete"}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", height: "calc(100vh - 70px)" }}>
          {/* Left Sidebar:Farm Profile */}
          <Box
            sx={{
              width: "20%",
              backgroundColor: "#F9F9F9",
              padding: 3,
              borderRight: "1px solid #E0E0E0",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ marginBottom: 2, color: "#123133" }}
            >
              {selectedColumn || "Farm Profile"}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#5F6F79", marginBottom: 3 }}
            >
              Checklist for the selected section
            </Typography>
            {/* Profile Checklist */}
            {selectedSection?.items.map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                  color:
                    selectedColumn &&
                    selectedItems[selectedColumn]?.includes(item)
                      ? "#4CAF50"
                      : "#B0BEC5",
                }}
              >
                <CheckCircleIcon
                  sx={{
                    marginRight: 1,
                    fontSize: 20,
                    color:
                      selectedColumn &&
                      selectedItems[selectedColumn]?.includes(item)
                        ? "#4CAF50"
                        : "#B0BEC5",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight:
                      selectedColumn &&
                      selectedItems[selectedColumn]?.includes(item)
                        ? "bold"
                        : "normal",
                    color:
                      selectedColumn &&
                      selectedItems[selectedColumn]?.includes(item)
                        ? "#123133"
                        : "#9E9E9E",
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Main Content:Form */}
          <FarmForm
            isFullTimeFarmer={isFullTimeFarmer}
            setIsFullTimeFarmer={setIsFullTimeFarmer}
            handleNextClick={handleNextClick}
          />
        </Box>
      </Box>
    </GlobalContainer>
  );
};

export default ApplicationPage;
