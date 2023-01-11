import "./App.css";
import "normalize.css";
import { GlobalStyle } from "./style/GlobalStyle";
import Layout from "./components/Layout";
import Router from "./routers/Rounter";
import { ThemeProvider } from "styled-components";
import { darkTheme, light, lightTheme } from "./style/Theme";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
