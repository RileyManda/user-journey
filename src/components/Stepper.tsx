import { Box, Typography } from "@mui/material";

interface StepperProps {
  steps: { label: string }[];
  selectedItems: { [key: string]: string[] };
}

const Stepper = ({ steps, selectedItems }: StepperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flex: 4,
        gap: 2,
      }}
    >
      {steps.map((step, index) => (
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
  );
};

export default Stepper;
