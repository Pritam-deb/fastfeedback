import { extendTheme } from "@chakra-ui/react";
import { LightMode } from "@chakra-ui/color-mode";
import { mode } from "@chakra-ui/theme-tools";

const fonts = {
  body: `Nunito,Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};
const fontWeights = {
  normal: 400,
  medium: 600,
  heavy: 700,
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

// const styles = {
//   global: (props) => ({
//     body: {
//       color: mode("gray.800", "whiteAlpha.900")(props),
//       bg: mode("gray.100", "#141214")(props),
//     },
//   }),
// };

const theme = extendTheme({ fonts, fontWeights, config });

export default theme;
