/**
 * ChecklistItem component renders a checklist item with a checkbox and text.
 * It also optionally renders a connecting line if the item is not the last one.
 *
 * @param {ChecklistItemInterface} props - The props for the ChecklistItem component.
 * @param {string} props.item - The text of the checklist item.
 * @param {boolean} props.isLastItem - Flag indicating if this is the last item in the checklist.
 * @param {boolean} props.isChecked - Flag indicating if the checkbox is checked.
 * @param {function} props.onChange - Callback function to handle checkbox state change.
 *
 * @returns {JSX.Element} The rendered ChecklistItem component.
 */
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
              border: "2px solid #123133",
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
