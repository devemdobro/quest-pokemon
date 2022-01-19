import { createContext, useState } from "react";
import { ThemeProvider } from 'styled-components';

export const themes = {
    light: {
        background: '#CCCCCC',
        card: '#FFFFFF'
    },
    dark: {
        background: '#000000',
        card: '#CCCCCC'
    }
}

export const ThemeContext = createContext({})

export const CustomThemeProvider = ({ children }) => {
    const [ theme, setTheme ] = useState(themes.light)

    return (
        // <ThemeContext.Provider value={{ theme, setTheme }}>
        //     {children}
        // </ThemeContext.Provider>

        <ThemeContext.Provider
        value={{ setTheme, theme }}
      >
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    )
}