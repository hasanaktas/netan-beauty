import { createMuiTheme, colors, responsiveFontSizes } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

let theme = createMuiTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: "white",
    },
    primary: {
      main: "#990099",
    },
    alternative: "rgb(247, 249, 250)",
    secondary: {
      main: "#F7DCF2",
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  shadows,
  typography,
});

theme = responsiveFontSizes(theme);
export default theme;
