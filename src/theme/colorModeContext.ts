import { createContext } from "react";

/**
 * React context for managing light/dark color mode
 * @default
 *   - mode: "light"
 *   - toggleColorMode: no-op function (to be overridden by provider)
 */
export const ColorModeContext = createContext({
  mode: "light" as "light" | "dark",
  toggleColorMode: () => {},
});
