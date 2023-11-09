import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
const App = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark((current) => !current);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
};

export default App;
