import {
  Box,
  Typography,
  TextField,
  ToggleButtonGroup,
  Button,
} from "@mui/material";

interface FarmFormProps {
  isFullTimeFarmer: string | null;
  lease: string | null;
  setIsFullTimeFarmer: (value: string | null) => void;
  setLeaseType: (lease: string | null) => void;
  handleNextClick: () => void;
}

const FarmForm = ({
  isFullTimeFarmer,
  setIsFullTimeFarmer,
  setLeaseType,
  lease,
  handleNextClick,
}: FarmFormProps) => {
  const handleFullTimeFarmerChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string | null
  ) => {
    setIsFullTimeFarmer(value);
  };
  const handleLeaseChange = (
    event: React.MouseEvent<HTMLElement>,
    lease: string | null
  ) => {
    setLeaseType(lease);
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

      <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
        Are you a full-time farmer?
      </Typography>
      <ToggleButtonGroup
        value={isFullTimeFarmer}
        exclusive
        onChange={handleFullTimeFarmerChange}
        sx={{ marginBottom: 4 }}
      >
        <Button
          value="yes"
          onClick={() => setIsFullTimeFarmer("yes")}
          sx={{
            textTransform: "none",
            flex: 1,
            marginRight: 1,
            backgroundColor: isFullTimeFarmer === "yes" ? "#3A7D3E" : "#FFFFFF",
            color: isFullTimeFarmer === "yes" ? "#FFFFFF" : "#123133",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#3A7D3E", color: "#FFFFFF" },
            fontWeight: "light",
          }}
        >
          Yes
        </Button>
        <Button
          value="no"
          onClick={() => setIsFullTimeFarmer("no")}
          sx={{
            textTransform: "none",
            flex: 1,
            marginLeft: 1,
            backgroundColor: isFullTimeFarmer === "no" ? "#3A7D3E" : "#FFFFFF",
            color: isFullTimeFarmer === "no" ? "#FFFFFF" : "#123133",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#3A7D3E", color: "#FFFFFF" },
            fontWeight: "light",
          }}
        >
          No
        </Button>
      </ToggleButtonGroup>

      <TextField
        label="Describe your farm background"
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ marginBottom: 4 }}
      />
      <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
        Is your farm owned or leased?
      </Typography>
      <ToggleButtonGroup
        value={lease}
        exclusive
        onChange={handleLeaseChange}
        sx={{ marginBottom: 4 }}
      >
        <Button
          value="leased"
          onClick={() => setLeaseType("leased")}
          sx={{
            textTransform: "none",
            flex: 1,
            marginRight: 1,
            backgroundColor: lease === "leased" ? "#3A7D3E" : "#FFFFFF",
            color: lease === "leased" ? "#FFFFFF" : "#123133",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#3A7D3E", color: "#FFFFFF" },
            fontWeight: "light",
          }}
        >
          Leased
        </Button>
        <Button
          value="owned"
          onClick={() => setLeaseType("owned")}
          sx={{
            textTransform: "none",
            flex: 1,
            marginLeft: 1,
            marginRight: 1,
            backgroundColor: lease === "owned" ? "#3A7D3E" : "#FFFFFF",
            color: lease === "owned" ? "#FFFFFF" : "#123133",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#3A7D3E", color: "#FFFFFF" },
            fontWeight: "light",
          }}
        >
          Owned
        </Button>
        <Button
          value="both"
          onClick={() => setLeaseType("both")}
          sx={{
            textTransform: "none",
            flex: 1,
            marginLeft: 1,
            backgroundColor: lease === "both" ? "#3A7D3E" : "#FFFFFF",
            color: lease === "both" ? "#FFFFFF" : "#123133",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "#3A7D3E", color: "#FFFFFF" },
            fontWeight: "light",
          }}
        >
          Both
        </Button>
      </ToggleButtonGroup>
      <Typography variant="subtitle2" sx={{ marginBottom: 2 }}>
        Leasing Information
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
        <TextField label="Hectares Leased" variant="outlined" fullWidth />
        <TextField label="Length of Lease" variant="outlined" fullWidth />
      </Box>
      <Typography variant="subtitle2" sx={{ marginBottom: 2, marginTop: 4 }}>
        Owned land Information
      </Typography>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
        <TextField label="Hectares Owned" variant="outlined" fullWidth />
      </Box>

      <Typography variant="subtitle2" sx={{ marginBottom: 2, marginTop: 4 }}>
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
          backgroundColor: "#3A7D3E",
          "&:hover": { backgroundColor: "#2E6732" },
          
        }}
        onClick={handleNextClick}
      >
        Next
      </Button>
    </Box>
  );
};

export default FarmForm;
