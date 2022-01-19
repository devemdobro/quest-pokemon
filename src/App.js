import { AppRoutes } from "./routes";
import { createGlobalStyle } from "styled-components";
import { CustomThemeProvider } from "./contexts/theme-context";

function App() {
  return (
    <div className="App">
      <CustomThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </CustomThemeProvider>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  body {
    background-color: ${props => props.theme.background};
  }
  ol, ul {
    list-style: none;
  }
`;

export default App;
