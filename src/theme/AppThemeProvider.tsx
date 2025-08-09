'use client'

import React, { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { getTheme } from "./theme";
import { ColorModeContext } from "./colorModeContext";

/**
 * App-level provider for theming and color mode context
 * @component
 * @prop {React.ReactNode} children - Components wrapped by the provider
 * @effect
 *   - Stores current color mode ("light" or "dark")
 *   - Toggles between modes on demand
 *   - Provides theme to MUI ThemeProvider
 *   - Provides color mode state and toggle function via ColorModeContext
 */
export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // State for storing the current color mode ("light" or "dark")
  const [mode, setMode] = useState<"light" | "dark">("light");

  // Memoized object providing the current mode and a function to toggle it
  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  // Memoized MUI theme based on the current mode
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
