import { Box, Checkbox, Typography } from "@mui/material";
import { ChecklistItemInterface } from "../types/types";

const ChecklistItem = ({
  item,
  isLastItem,
  isChecked,
  onChange,
}: ChecklistItemInterface) => {
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
            left: 10,
            top: 23,
            bottom: -24,
            width: "2px",
            backgroundColor: "#E0E0E0",
            zIndex: -1,
          }}
        />
      )}

      {/* Checkbox */}
      <Checkbox
        checked={isChecked}
        onChange={onChange}
        icon={
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              border: "2px solid #4CAF50",
            }}
          />
        }
        checkedIcon={
          <Box
            sx={{
              width: 24,
              height: 24,
              borderRadius: "50%",
              backgroundColor: "#4CAF50",
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
