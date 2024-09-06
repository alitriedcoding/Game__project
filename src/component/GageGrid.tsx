// import React, { useEffect, useState } from "react";
// import apiClient from "./api--client";
// import { CanceledError } from "axios";
// import { SimpleGrid } from "@chakra-ui/react";

// import GageCard from "./GageCard";
// import GameScaloting from "./GameScaloting";
// import useGenra, { Ganra } from "./useStateGanra";
// import useGame from "./useGames";

export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
  rating_top: number;
}

// interface FetchApi {
//   count: number;
//   results: Game[];
// }
// interface props {
//   selected: Ganra | null;
// }
// const GameGrid = ({ selected }: props) => {
//   const {data}=useGame(selected);

//   //this line i copy

//   const [games, setGames] = useState<Game[]>([]);
//   const [error, setError] = useState("");
//   const [isLoadding, setLoadding] = useState(false);
//   const skeletions = [1, 2, 3, 4, 5, 6];

//   useEffect(() => {
//     setLoadding(true);
//     const controller = new AbortController();
//     apiClient
//       .get<FetchApi>("/games", { signal: controller.signal })
//       .then((res) => {
//         setGames(res.data.results);
//         setLoadding(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoadding(false);
//       });
//     return () => controller.abort();
//   }, []);

//   return (
//     <div>
//       {error && <p>{error}</p>} {/* Changed from <text> to <p> */}
//       <SimpleGrid
//         columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
//         padding={"10px"}
//         spacing={5}
//       >
//         {isLoadding &&
//           skeletions.map((skelet) => <GameScaloting key={skelet} />)}
//         {games.map((item) => (
//           <GageCard key={item.id} game={item} />
//         ))}
//       </SimpleGrid>
//     </div>
//   );
// };

// export default GameGrid;
import React from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GageCard from "./GageCard";
import GameScaloting from "./GameScaloting";
import useGame from "./useGames";
import { Ganra } from "./useStateGanra";
import { platforms } from "./usePlatfroms";
import { GameQuery } from "../App";

interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const { data: games, isLoading, error } = useGame(gamequery);

  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding={"10px"}
      spacing={5}
    >
      {isLoading &&
        skeletons.map((skeleton) => <GameScaloting key={skeleton} />)}
      {games.map((item) => (
        <GageCard key={item.id} game={item} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
