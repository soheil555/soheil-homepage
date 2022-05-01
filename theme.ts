import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Ubuntu",
    body: "Ubuntu",
  },
});

export default theme;
