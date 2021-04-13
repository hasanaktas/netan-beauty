import React from "react";
import Pages from "pages";
import { ThemeProvider, CssBaseline } from "@material-ui/core";
import { DragDropContext } from "react-beautiful-dnd";
import { GlobalStyle } from "components";
import { LocaleProvider } from "contexts";
import theme from "theme";
import { init } from "emailjs-com";
init("user_NWVZydpRlX8zHZuCH2zKk");

const App = () => {
  return (
    <DragDropContext>
      <LocaleProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Pages />
        </ThemeProvider>
      </LocaleProvider>
    </DragDropContext>
  );
};
export default App;
