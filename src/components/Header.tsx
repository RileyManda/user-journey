/**
 * Header component that renders the application's top navigation bar.
 * 
 * This component uses Material-UI's AppBar and Toolbar components to create a fixed
 * header with a white background, a bottom border, and a subtle shadow. The header
 * includes the following sections:
 * 
 * - Left Section: Contains the Khula logo, a search bar, and a set of menu items.
 * - Right Section: Contains an action menu.
 * 
 * The left section is further divided into:
 * - Logo: Displays the Khula logo.
 * - Search Bar: Renders the SearchComponent.
 * - Menu Items: A list of clickable menu items ("Home", "Quotes", "Orders", "Support", "Account").
 * 
 * The right section renders the ActionMenu component.
 * 
 * @component
 * return (
 *   <Header />
 * )
 */
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import logo from "../assets/khula_logo.png";
import SearchComponent from "./Search";
import ActionMenu from "./ActionMenu";

const Header = () => {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={2}
      sx={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #D0D0D0",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: 2,
        }}
      >
        {/* Left Section: Logo and Search */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          {/* Logo */}
          <Box
            component="img"
            src={logo}
            alt="Khula Logo"
            sx={{
              height: 40,
              marginRight: 2,
            }}
          />

          {/* Search Bar */}
          <SearchComponent />

          {/* Menu Items */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginLeft: 2,
              gap: 2,
            }}
          >
            {["Home", "Quotes", "Orders", "Support", "Account"].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  fontWeight: "500",
                  cursor: "pointer",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Box>
        <ActionMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
