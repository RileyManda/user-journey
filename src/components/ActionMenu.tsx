/**
 * `ActionMenu` is a functional React component that renders a menu with two items:
 * a cart with a badge indicating the number of items and a logout option.
 *
 * The cart item is displayed with a badge showing the number of items (default is 1).
 * The badge is styled to position it slightly above and to the right of the cart text.
 * The cart text is styled to have a pointer cursor and a font weight of 500.
 *
 * The logout item is displayed as a text with a pointer cursor, a font weight of 500,
 * and a black color. On hover, the text is underlined.
 *
 * The menu items are contained within a Box component that uses flexbox to align
 * the items center and space them with a gap of 3.
 *
 * @returns {JSX.Element} The rendered ActionMenu component.
 */
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
