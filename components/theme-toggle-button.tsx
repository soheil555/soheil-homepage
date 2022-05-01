import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="toggle theme"
      onClick={toggleColorMode}
      colorScheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
    ></IconButton>
  );
}
