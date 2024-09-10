// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
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
});

export default theme;
