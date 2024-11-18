import { Box, Checkbox, Typography } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ChecklistItemProps {
  item: string;
  isLastItem: boolean;
}

const ChecklistItem = ({ item, isLastItem }: ChecklistItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        marginBottom: !isLastItem ? 3 : 0, // Add margin only if not the last item
      }}
    >
      {/* Connecting Line */}
      {!isLastItem && (
        <Box
          sx={{
            position: "absolute",
            left: 14,
            top: 30, 
            bottom: -30, 
            width: "2px",
            backgroundColor: "#E0E0E0",
            zIndex: -1, 
          }}
        />
      )}

      {/* Checkbox */}
      <Checkbox
        icon={
          <RadioButtonUncheckedIcon
            sx={{
              width: 30,
              height: 30,
              color: "#4CAF50",
            }}
          />
        }
        checkedIcon={
          <CheckCircleIcon
            sx={{
              width: 30,
              height: 30,
              color: "#4CAF50",
            }}
          />
        }
        sx={{
          padding: 0,
          marginRight: 2,
        }}
      />

      {/* Item Text */}
      <Typography sx={{ color: "#123133" }}>{item}</Typography>
    </Box>
  );
};

export default ChecklistItem;