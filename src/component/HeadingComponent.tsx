import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
interface props {
  ShowGames: GameQuery;
}

const HeadingComponent = ({ ShowGames }: props) => {
  const showtext = `${ShowGames.platform?.name || ""} ${
    ShowGames.genre?.name || ""
  } Games`;
  return (
    <>
      <Heading marginY={5} fontSize={"5xl"} as={"h1"}>
        {showtext}
      </Heading>
    </>
  );
};

export default HeadingComponent;
