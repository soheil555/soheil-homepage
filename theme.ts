import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

export const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
};

const fonts = {
  heading: "Ubuntu",
  body: "Ubuntu",
};

const theme = extendTheme({
  components,
  config,
  fonts,
});

export default theme;
