import { Badge, Typography } from "@mui/material";
import { Box } from "@mui/system";

const ActionMenu = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}
    >
      <Badge
        badgeContent={1}
        color="error"
        sx={{
          "& .MuiBadge-badge": {
            top: -5,
            right: -10,
          },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Cart
        </Typography>
      </Badge>

      {/* Logout Text */}
      <Typography
        variant="body2"
        sx={{
          cursor: "pointer",
          fontWeight: "500",
          color: "black",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        Logout
      </Typography>
    </Box>
  );
};
export default ActionMenu;
