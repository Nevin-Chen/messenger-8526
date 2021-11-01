import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  root: {
    height: "100%",
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 12,
    button: {
      fontFamily: "Montserrat",
      textTransform: "none",
      fontSize: 20,
      padding: ".6rem 0 .6rem 0",
      width: "200px",
      display: "grid",
      justifyItems: "center",
      alignItems: "center",
    },
    h1: {
      fontSize: "2rem",
      color: "#FFFFFF",
      lineHeight: "1.6",
      "@media (max-width:959px)": {
        fontSize: "1rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 900,
      marginBottom: "5%",
      "@media (max-width:599px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontSize: "1rem",
      color: "#B0B0B0",
      display: "flex",
      alignItems: "center",
      margin: "24px",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold",
      },
    },
    MuiFormLabel: {
      root: {
        fontSize: 18,
      },
      asterisk: {
        display: "none",
      }
    },
  },
  palette: {
    primary: { main: "#3A8DFF" },
    secondary: { main: "#B0B0B0" },
  },
});
