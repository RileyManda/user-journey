import { Box, Typography } from "@mui/material";

interface StepperProps {
  steps: { label: string; description: string }[];
  selectedItems: { [key: string]: string[] };
  currentStep: string;
}

const Stepper = ({ steps, selectedItems, currentStep }: StepperProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E0E0E0",
      }}
    >
      {steps.map((step, index) => {
        const isComplete = selectedItems[step.label]?.length > 0;
        const isInProgress = step.label === currentStep;
        const isUpNext =
          index === steps.length - 2 && !isComplete && !isInProgress;
        const isLastStep =
          index === steps.length - 1 && !isComplete && !isInProgress;

        return (
          <Box
            key={index}
            sx={{
              flex: 1,
              textAlign: "center",
              // padding: "16px",
              backgroundColor: isComplete ? "#F9F9F9" : "transparent",
              borderBottom: isInProgress
                ? "3px solid #000"
                : "1px solid transparent",
            }}
          >
            {/* Status Indicator */}
            <Box
              sx={{
                marginBottom: "8px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              {isInProgress ? (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  {[...Array(4)].map((_, dotIndex) => (
                    <Box
                      key={dotIndex}
                      sx={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: dotIndex === 0 ? "#3A7D3E" : "#D3D3D3", // Green for the first dot, grey for the rest
                      }}
                    />
                  ))}
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "#3A7D3E",
                    }}
                  >
                    In Progress
                  </Typography>
                </Box>
              ) : isComplete ? (
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: "#3A7D3E",
                    fontWeight: "bold",
                  }}
                >
                  Complete
                </Typography>
              ) : (
                <Typography
                  sx={{
                    fontSize: "0.8rem",
                    color: isUpNext || isLastStep ? "#000000" : "#9E9E9E",
                  }}
                >
                  {isUpNext ? "Up Next" : isLastStep ? "Last Step" : ""}
                </Typography>
              )}
            </Box>

            {/* Step Title */}
            <Typography
              sx={{
                color: isComplete || isInProgress ? "#3A7D3E" : "#9E9E9E",
                fontWeight: isComplete || isInProgress ? "bold" : "normal",
                fontSize: "0.9rem",
              }}
            >
              {step.label}
            </Typography>

            {/* Step Description */}
            <Typography
              sx={{
                fontSize: "0.8rem",
                color: isComplete || isInProgress ? "#3A7D3E" : "#9E9E9E",
              }}
            >
              {isInProgress || isComplete
                ? step.description
                : isUpNext
                ? "Check if you qualify"
                : isLastStep
                ? "Supporting Documents"
                : step.description}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Stepper;
