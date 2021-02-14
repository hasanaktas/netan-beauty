import React from "react";
import Pages from "pages";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { GlobalStyle } from "components";
import { LocaleProvider } from "contexts";
import theme from "theme";
import { init } from "emailjs-com";
init("user_NWVZydpRlX8zHZuCH2zKk");
const App = () => {
  return (
    <LocaleProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CssBaseline />
        <Pages />
      </ThemeProvider>
    </LocaleProvider>
  );
};
export default App;
