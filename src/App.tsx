import Router from "./Router";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/GlobalStyle";
import { darkTheme, lightTheme } from "./theme";
import { ReactQueryDevtools } from "react-query/devtools";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
const App = () => {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
};

export default App;
