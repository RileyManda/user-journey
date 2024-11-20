/**
 * SummaryDetails component displays a summary of user details including status, score, risk status, and issues list.
 *
 * @component
 * return (
 *   <SummaryDetails />
 * )
 *
 * @returns {JSX.Element} A component that renders the summary details.
 *
 * @remarks
 * This component uses Material-UI for styling and layout.
 *
 */
import { Box, Typography } from "@mui/material";

const SummaryDetails = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: 2,
      }}
    >
      {/* Status */}
      <Typography
        variant="subtitle1"
        fontWeight="bold"
        sx={{ color: "#4CAF50", marginBottom: 1 }}
      >
        Complete
      </Typography>
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{ color: "#123133", marginBottom: 0.5 }}
      >
        1. Credit Check
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#5F6F79",
          fontSize: "0.9rem",
          marginBottom: 3,
        }}
      >
        Check if you qualify
      </Typography>

      {/* Score Section */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          marginBottom: 0.5,
        }}
      >
        Score
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          marginBottom: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "#D32F2F",
            fontWeight: "bold",
            marginRight: 1,
          }}
        >
          642
        </Typography>
        <Typography variant="body2">Low Score</Typography>
      </Box>

      {/* Risk Status */}
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bold",
          marginBottom: 0.5,
        }}
      >
        Status
      </Typography>
      <Typography
        variant="h2"
        sx={{
          color: "#D32F2F",
          fontWeight: "bold",
          marginBottom: 3,
        }}
      >
        High Risk
      </Typography>

      {/* Issues List */}
      {["Too many enquiries", "Overdrawn Accounts", "2 Judgements"].map(
        (issue, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginBottom: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#123133",
                fontWeight: "bold",
                marginBottom: 0.5,
              }}
            >
              Issue {index + 1}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#123133",
              }}
            >
              {issue}
            </Typography>
          </Box>
        )
      )}
    </Box>
  );
};

export default SummaryDetails;
