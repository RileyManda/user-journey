/**
 * MenuComponent is a functional React component that renders a horizontal menu
 * with a list of menu items. Each menu item is displayed as a button.
 *
 * @component
 * return (
 *   <MenuComponent />
 * )
 *
 * @returns {JSX.Element} A Box component containing a list of Buttons representing menu items.
 */
import { Box, Button } from "@mui/material";

const MenuComponent = () => {
  const menuItems = ["Home", "Quotes", "Orders", "Support", "Account"];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 3, 
      }}
    >
      {menuItems.map((item) => (
        <Button
          key={item}
          sx={{
            textTransform: "none", 
            color: "text.primary", 
            fontWeight: "bold",
          }}
        >
          {item}
        </Button>
      ))}
    </Box>
  );
};

export default MenuComponent;
