import { createTheme } from "@mui/material/styles";

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
      primary: "#3E3E3E",
      secondary: "#707070",
    },
    background: {
      default: "#F7F7F7",
      paper: "#FFFFFF",
    },
    divider: "#D0D0D0",
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "30px",
      fontWeight: "bold",
      color: "#C42727",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#3E3E3E",
    },
    h3: {
      fontSize: "16px",
      fontWeight: "bold",
      color: "#3E3E3E",
    },
    body1: {
      fontSize: "14px",
      fontWeight: "regular",
      color: "#3A7D3E",
    },
    body2: {
      fontSize: "14px",
      fontWeight: "light",
      color: "#3E3E3E",
    },
    button: {
      fontSize: "16px",
      fontWeight: "bold",
      textTransform: "none",
    },
  },
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
  },
});

export default theme;
