"use client";
import { useState } from "react";
import { StyledComponentsRegistry } from "@/lib/registry";
import { ThemeContext } from "@/theme/context";
import { lightTheme, darkTheme } from "@/theme/colors";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/theme/globalStyles";
import { ConfigProvider } from "antd";

export function Providers({ children }) {
    const [theme, setTheme] = useState("light");
    const themeStyle = theme === "light" ? lightTheme : darkTheme;

    return (
        <StyledComponentsRegistry>
            <ThemeContext.Provider value={{ setTheme, theme }}>
                <ThemeProvider theme={themeStyle}>
                    <GlobalStyle />
                    <ConfigProvider theme={{}}>{children}</ConfigProvider>
                </ThemeProvider>
            </ThemeContext.Provider>
        </StyledComponentsRegistry>
    );
}
