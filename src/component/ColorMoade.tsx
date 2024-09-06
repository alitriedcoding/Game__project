import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorMoade = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack marginRight={3}>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorMoade;
