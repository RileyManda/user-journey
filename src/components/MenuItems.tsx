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
