import {
  Box,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Button,
} from "@mui/material";

interface FarmFormProps {
  isFullTimeFarmer: string | null;
  setIsFullTimeFarmer: (value: string | null) => void;
  handleNextClick: () => void;
}

const FarmForm = ({
  isFullTimeFarmer,
  setIsFullTimeFarmer,
  handleNextClick,
}: FarmFormProps) => {
  const handleFullTimeFarmerChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    setIsFullTimeFarmer(value);
  };

  return (
    <Box sx={{ flex: 1, padding: 4 }}>
      {/* Form Fields */}
      <Typography variant="h2" fontWeight="bold" sx={{ marginBottom: 3 }}>
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
        <TextField
          label="Farm Name"
          variant="outlined"
          fullWidth
          style={{
            color: "#3e3e3e",
            fontSize: "16px",
          }}
        />
        <TextField label="Farm Location" variant="outlined" fullWidth />
        <TextField label="Farm Size (hectares)" variant="outlined" fullWidth />
        <TextField label="Number of Employees" variant="outlined" fullWidth />
      </Box>

      <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
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
            backgroundColor: isFullTimeFarmer === "yes" ? "#4CAF50" : "#FFFFFF",
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
            backgroundColor: isFullTimeFarmer === "no" ? "#4CAF50" : "#FFFFFF",
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
      <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
        Is your farm owned or leased?
      </Typography>
      <ToggleButtonGroup
        value={isFullTimeFarmer}
        exclusive
        onChange={handleFullTimeFarmerChange}
        sx={{ marginBottom: 4 }}
      >
        <ToggleButton
          value="leased"
          sx={{
            textTransform: "none",
            flex: 1,
            backgroundColor: isFullTimeFarmer === "yes" ? "#4CAF50" : "#FFFFFF",
            color: isFullTimeFarmer === "yes" ? "#FFFFFF" : "#123133",
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
            backgroundColor: isFullTimeFarmer === "no" ? "#4CAF50" : "#FFFFFF",
            color: isFullTimeFarmer === "no" ? "#FFFFFF" : "#123133",
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
            backgroundColor: isFullTimeFarmer === "no" ? "#4CAF50" : "#FFFFFF",
            color: isFullTimeFarmer === "no" ? "#FFFFFF" : "#4CAF50",
            border: "1px solid #E0E0E0",
            "&:hover": { backgroundColor: "#4CAF50", color: "#FFFFFF" },
          }}
        >
          Both
        </ToggleButton>
      </ToggleButtonGroup>
      <Typography variant="subtitle1" sx={{ marginBottom: 2 }}>
        Leasing Information
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
        <TextField label="Hectares Leased" variant="outlined" fullWidth />
        <TextField label="Length of Lease" variant="outlined" fullWidth />
      </Box>
      <Typography variant="subtitle1" sx={{ marginBottom: 2, marginTop: 4 }}>
        Owned land Information
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
        <TextField label="Hectares Owned" variant="outlined" fullWidth />
      </Box>

      <Typography variant="subtitle1" sx={{ marginBottom: 2, marginTop: 4 }}>
        Irrigation details
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
        <TextField label="Irrigated Hectares" variant="outlined" fullWidth />
        <TextField label="Dryland Hectares" variant="outlined" fullWidth />
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
  );
};

export default FarmForm;
