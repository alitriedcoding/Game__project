import { useState } from "react";
import { Ganra } from "./component/useStateGanra";
import { Box, Grid, GridItem, Heading, HStack, Show } from "@chakra-ui/react";
import Navebare from "./component/Navebare";
import GenraList from "./component/GenraLIst";

import PlatformSelctor from "./component/PlatformSelctor";
import { platforms } from "./component/usePlatfroms";
import GameGrid from "./component/GageGrid";
import SordSlector from "./component/SordSlector";
import HeadingComponent from "./component/HeadingComponent";
export interface GameQuery {
  genre: Ganra | null;
  platform: platforms | null;
  SortOrder: string;
  SearchGame: string;
}

function App() {
  const [gamequery, setgamequery] = useState<GameQuery>({} as GameQuery);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navebare
          onSearch={(SearchGame) => setgamequery({ ...gamequery, SearchGame })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={"10px"}>
          <GenraList
            selectedGenra={gamequery.genre}
            onSelectedGenra={(genre) => setgamequery({ ...gamequery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <HeadingComponent ShowGames={gamequery} />
          <HStack spacing={5} marginBottom={2}>
            <PlatformSelctor
              selectedPlatform={gamequery.platform}
              onselectedPlatfom={(platform) =>
                setgamequery({ ...gamequery, platform })
              }
            />
            <SordSlector
              onSlectedSortOrder={(SortOrder) =>
                setgamequery({ ...gamequery, SortOrder })
              }
              SortOrders={gamequery.SortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gamequery={gamequery} />
      </GridItem>
    </Grid>
  );
}

export default App;
