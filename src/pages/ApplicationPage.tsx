import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import GlobalContainer from "../components/GlobalContainer";
import { useNavigate, useLocation } from "react-router";
import { sections } from "../api/checklistSectionData"; // Import sections
import { summaryStepsData } from "../api/summarySteps";
import FarmForm from "../components/FarmForm";
import Stepper from "../components/Stepper";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchUser } from "../redux/userSlice";

const ApplicationPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFullTimeFarmer, setIsFullTimeFarmer] = useState<string | null>(null);
  const [leaseType, setLeaseType] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const { data: userData, loading, error } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const selectedItems = location.state?.selectedItems || {};
  const selectedColumn = Object.keys(selectedItems).find(
    (key) => selectedItems[key]?.length
  );
  const selectedSection = sections.find(
    (section) => section.title === selectedColumn
  );

  const handleNextClick = () => {
    navigate("/summary", { state: { selectedItems } });
  };

  const handleSaveExit = () => {
    navigate("/summary", { state: { selectedItems } });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

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
          <Box sx={{ flex: 1, display: "flex", alignItems: "center" }}>
            <Button
              variant="text"
              sx={{
                textTransform: "none",
                color: "#123133",
                fontSize: "1rem",
                fontWeight: "bold",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 0,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
              onClick={handleSaveExit}
            >
              <CloseIcon />
              <Typography
                sx={{
                  color: "#123133",
                  fontSize: "0.9rem",
                  marginTop: "4px",
                }}
              >
                Save and close
              </Typography>
            </Button>
          </Box>

          {/* Stepper */}
          <Stepper
            steps={summaryStepsData}
            selectedItems={selectedItems}
            currentStep={selectedColumn || ""}
          />
        </Box>

        <Box sx={{ display: "flex", height: "100%" }}>
          {/* Left Sidebar:Farm Profile */}
          <Box
            sx={{
              width: "20%",
              backgroundColor: "#F9F9F9",
              padding: 3,
              borderRight: "1px solid #E0E0E0",
              position: "relative",
              height: "100%",
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
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "25px",
                  bottom: "30px",
                  left: "14px",
                  width: "2px",
                  backgroundColor: "#E0E0E0",
                },
              }}
            >
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
                      width: "30px",
                      height: "30px",
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
          </Box>

          {/* Main Content:Form */}
          <Box
            sx={{
              width: "80%",
              padding: 3,
              height: "100%",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <FarmForm
              isFullTimeFarmer={isFullTimeFarmer}
              setIsFullTimeFarmer={setIsFullTimeFarmer}
              handleNextClick={handleNextClick}
              setLeaseType={setLeaseType}
              lease={leaseType}
              farmName={userData?.farmer?.farm?.name || ""}
            />
          </Box>
        </Box>
      </Box>
    </GlobalContainer>
  );
};

export default ApplicationPage;