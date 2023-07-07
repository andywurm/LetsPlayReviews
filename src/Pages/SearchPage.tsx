import { useContext, useEffect, useState } from "react";
import { GameContext } from "../Context/GameContext";
import "./PageStyles/SearchPageStyles.css";
import GameCards from "../Components/GameCards";
import { GameData } from "../Data/GameData";

const SearchPage = () => {
  let sContext = useContext(GameContext);
  const [gamesFound, setGamesFound] = useState<GameData[]>([]);

  useEffect(() => {
    setGamesFound(
      sContext.getList.filter((game) =>
        game.title.toLowerCase().includes(sContext.searched.toLowerCase())
      )
    );
  }, [sContext.searched, gamesFound, sContext.getList]);

  console.log(gamesFound);
  return (
    <div className="outerSearch">
      <div className="homepageBreak"></div>

      <div className="topSearch">
        <div className="searchHeader">
          Showing results for "{sContext.searched}"
        </div>
      </div>

      <div className="resultArea">
        {gamesFound.length === 0 ? (
          <div className="notFound">No Games Found</div>
        ) : (
          <GameCards gameList={gamesFound} />
        )}
      </div>
      
    </div>
  );
};
export default SearchPage;
