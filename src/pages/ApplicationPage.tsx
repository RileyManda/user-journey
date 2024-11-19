import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GlobalContainer from "../components/GlobalContainer";
import { useNavigate } from "react-router";
import { summaryStepsData } from "../api/summarySteps";

const ApplicationPage = () => {
  const [isFullTimeFarmer, setIsFullTimeFarmer] = useState<string | null>(null);
  const [farmOwnership, setFarmOwnership] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFullTimeFarmerChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setIsFullTimeFarmer(newValue);
  };

  const handleFarmOwnershipChange = (
    event: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    setFarmOwnership(newValue);
  };

  const handleNextClick = () => {
    navigate("/summary");
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
                    step.status === "In Progress"
                      ? "2px solid #4CAF50"
                      : "none",
                  backgroundColor:
                    step.status === "In Progress" ? "#F9F9F9" : "transparent",
                  minWidth: "140px",
                }}
              >
                <Typography
                  sx={{
                    color:
                      step.status === "In Progress"
                        ? "#4CAF50"
                        : step.status === "Complete"
                        ? "#123133"
                        : "#9E9E9E",
                    fontWeight:
                      step.status === "In Progress" ? "bold" : "normal",
                    fontSize: "0.9rem",
                  }}
                >
                  {step.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color:
                      step.status === "In Progress"
                        ? "#4CAF50"
                        : step.status === "Complete"
                        ? "#5F6F79"
                        : "#9E9E9E",
                  }}
                >
                  {step.status}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: "flex", height: "calc(100vh - 70px)" }}>
          {/* Left Sidebar */}
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
              3. Farm Profile
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "#5F6F79", marginBottom: 3 }}
            >
              Give us some basic farm details
            </Typography>

            {summaryStepsData.map((step, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: 2,
                  color: step.status === "Complete" ? "#4CAF50" : "#B0BEC5",
                }}
              >
                <CheckCircleIcon
                  sx={{
                    color: step.status === "Complete" ? "#4CAF50" : "#B0BEC5",
                    marginRight: 1,
                  }}
                />
                <Typography>{step.label}</Typography>
              </Box>
            ))}
          </Box>

          {/* Main Content */}
          <Box sx={{ flex: 1, padding: 4 }}>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#123133", marginBottom: 3 }}
            >
              Farm / Company Overview
            </Typography>

            <Box
              component="form"
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 3,
                marginBottom: 4,
              }}
            >
              <TextField label="Farm Name" variant="outlined" fullWidth />
              <TextField label="Farm Location" variant="outlined" fullWidth />
            </Box>

            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
              Are you a full-time farmer?
            </Typography>
            <ToggleButtonGroup
              value={isFullTimeFarmer}
              exclusive
              onChange={handleFullTimeFarmerChange}
              sx={{ marginBottom: 4 }}
            >
              <ToggleButton
                value="yes"
                sx={{
                  textTransform: "none",
                  flex: 1,
                  backgroundColor:
                    isFullTimeFarmer === "yes" ? "#4CAF50" : "#FFFFFF",
                  color: isFullTimeFarmer === "yes" ? "#FFFFFF" : "#123133",
                  border: "1px solid #E0E0E0",
                  "&:hover": { backgroundColor: "#4CAF50", color: "#FFFFFF" },
                }}
              >
                Yes
              </ToggleButton>
              <ToggleButton
                value="no"
                sx={{
                  textTransform: "none",
                  flex: 1,
                  backgroundColor:
                    isFullTimeFarmer === "no" ? "#4CAF50" : "#FFFFFF",
                  color: isFullTimeFarmer === "no" ? "#FFFFFF" : "#123133",
                  border: "1px solid #E0E0E0",
                  "&:hover": { backgroundColor: "#4CAF50", color: "#FFFFFF" },
                }}
              >
                No
              </ToggleButton>
            </ToggleButtonGroup>

            <TextField
              label="Describe your farm background"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={{ marginBottom: 4 }}
            />

            <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
              Is your farm owned or leased?
            </Typography>
            <ToggleButtonGroup
              value={farmOwnership}
              exclusive
              onChange={handleFarmOwnershipChange}
              sx={{ marginBottom: 4 }}
            >
              <ToggleButton
                value="leased"
                sx={{
                  textTransform: "none",
                  flex: 1,
                  backgroundColor:
                    farmOwnership === "leased" ? "#4CAF50" : "#FFFFFF",
                  color: farmOwnership === "leased" ? "#FFFFFF" : "#123133",
                  border: "1px solid #E0E0E0",
                  "&:hover": { backgroundColor: "#4CAF50", color: "#FFFFFF" },
                }}
              >
                Leased
              </ToggleButton>
              <ToggleButton
                value="owned"
                sx={{
                  textTransform: "none",
                  flex: 1,
                  backgroundColor:
                    farmOwnership === "owned" ? "#4CAF50" : "#FFFFFF",
                  color: farmOwnership === "owned" ? "#FFFFFF" : "#123133",
                  border: "1px solid #E0E0E0",
                  "&:hover": { backgroundColor: "#4CAF50", color: "#FFFFFF" },
                }}
              >
                Owned
              </ToggleButton>
              <ToggleButton
                value="both"
                sx={{
                  textTransform: "none",
                  flex: 1,
                  backgroundColor:
                    farmOwnership === "both" ? "#4CAF50" : "#FFFFFF",
                  color: farmOwnership === "both" ? "#FFFFFF" : "#123133",
                  border: "1px solid #E0E0E0",
                  "&:hover": { backgroundColor: "#4CAF50", color: "#FFFFFF" },
                }}
              >
                Both
              </ToggleButton>
            </ToggleButtonGroup>

            <Box
              sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}
            >
              <TextField label="Hectares Leased" variant="outlined" fullWidth />
              <TextField label="Length of Lease" variant="outlined" fullWidth />
              <TextField label="Hectares Owned" variant="outlined" fullWidth />
              <TextField
                label="Irrigated Hectares"
                variant="outlined"
                fullWidth
              />
              <TextField
                label="Dryland Hectares"
                variant="outlined"
                fullWidth
              />
            </Box>

            <Button
              variant="contained"
              sx={{
                marginTop: 4,
                textTransform: "none",
                backgroundColor: "#4CAF50",
                "&:hover": { backgroundColor: "#388E3C" },
              }}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </GlobalContainer>
  );
};

export default ApplicationPage;
