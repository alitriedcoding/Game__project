import React from "react";
import { Game } from "./GageGrid";
import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Platformiconlist from "./platformiconlist";
import CritcicScore from "./CritcicScore";
import imageCrop from "./image-url";
import Emoje from "./Emoje";
// import Imagecrop from "./image-url";
interface props {
  game: Game;
}
const GageCard = ({ game }: props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={imageCrop(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={2}>
          {" "}
          <Platformiconlist
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CritcicScore scor={game.metacritic} />
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name} <Emoje rating={game.rating_top} />{" "}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GageCard;
