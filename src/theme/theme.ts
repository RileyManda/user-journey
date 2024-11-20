import { createTheme } from "@mui/material/styles";
// Custom theme component utilizing mui createTheme function
const theme = createTheme({
  palette: {
    primary: {
      main: "#3A7D3E",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#C2D7C4",
    },
    error: {
      main: "#C42727",
    },
    text: {
      primary: "#3e3e3e",
      secondary: "#707070",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    divider: "#D0D0D0",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    fontWeightBold: 700,
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#3e3e3e",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "regular",
      color: "#3e3e3e",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#3e3e3e",
    },
    h4: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#3e3e3e",
    },
    h6: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#3e3e3e",
    },
    body1: {
      fontSize: "16px",
      fontWeight: "regular",
      color: "#3a7d3e",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "light",
      color: "#3e3e3e",
    },
    button: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "16px",
      fontWeight: "regular",
      textTransform: "none",
      color: "#3e3e3e",
    },
    subtitle2: {
      fontSize: "16px",
      color: "#3e3e3e",
    },
  },
  shape: { borderRadius: 8 },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "16px",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#3e3e3e",
          fontSize: "16px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& fieldset": {
            borderColor: "#707070", // Border color
          },
          "&:hover fieldset": {
            borderColor: "#3A7D3E", // Hover border color
          },
          "&.Mui-focused fieldset": {
            borderColor: "#3A7D3E", // Focus border color
          },
        },
        input: {
          color: "#3e3e3e", // Text color
          fontSize: "16px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          color: "#3e3e3e",
        },
      },
    },
  },
});

export default theme;
