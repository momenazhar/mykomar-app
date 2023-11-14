"use client";
import { useState } from "react";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeContext } from "@/theme/context";
import { lightTheme, darkTheme } from "@/theme/colors";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/theme/globalStyles";

export function Providers({ children }) {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <StyledComponentsRegistry>
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <GlobalStyle />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </StyledComponentsRegistry>
    );
}
