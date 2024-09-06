import React from "react";

import { Badge, HStack } from "@chakra-ui/react";

interface props {
  scor: number;
}
const CritcicScore = ({ scor }: props) => {
  const colorScor = scor > 90 ? "blue" : scor > 70 ? "#000" : "gray";
  return (
    <>
      <Badge color={colorScor} marginX={1} paddingX={1} borderRadius={"4px"}>
        {scor}
      </Badge>
    </>
  );
};

export default CritcicScore;
