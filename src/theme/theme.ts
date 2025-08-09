import { createTheme } from "@mui/material/styles";

/**
 * Generates a custom MUI theme based on the selected color mode
 * @param mode "light" or "dark" mode
 * @returns MUI theme object with predefined palette, typography, and breakpoints
 */
export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 600,
        lg: 1200,
        xl: 1536,
      },
    },
  });
