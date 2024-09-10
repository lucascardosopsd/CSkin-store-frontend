// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  shadows: {
    glow: "0 0 10px 5px rgba(255,162,0)",
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode("whiteAlpha.50", "gray.900")(props),
      },
      "*": {
        borderColor: mode("gray.200", "gray.800")(props),
      },
    }),
  },
  breakpoints: {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
