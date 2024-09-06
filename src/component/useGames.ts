import { GameQuery } from "./../App";
import { platforms } from "./usePlatfroms";
import { Game, platform } from "./GageGrid";
import { useData } from "./useData";

import { Ganra } from "./useStateGanra";

const useGame = (gamequery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gamequery.genre?.id,
        platforms: gamequery.platform?.id,
        ordering: gamequery.SortOrder,
        search: gamequery.SearchGame,
     
      },
    },
    [gamequery]
  );

export default useGame;
