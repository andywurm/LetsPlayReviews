import DisplayConsoles from "../Components/DisplayConsoles"
import GameCards from "../Components/GameCards"
import './PageStyles/GamesStyles.css'
import { useContext, useEffect, useState } from "react";
import { GameContext } from "../Context/GameContext";
import { GameData } from "../Data/GameData";

const Games = () => {

    let gContext = useContext(GameContext)

    const [title, setTitle] = useState("ALL GAMES")
    const [games, setGames] = useState(gContext.getList)
    const [displayList, setDisplayList] = useState<GameData[]>([])
    const [filters, setFilters] = useState<string[]>([])

    console.log(filters)

    return (
        <div>
            <div className="homepageBreak br"></div>
            <div className="SearchArea">

                <div className="GamingOptions">

                    <div className="filterText">FILTERS</div>
                    <div className="homepageBreak"></div>

                    <div className="searchContainer">
                        <DisplayConsoles filters={filters} setFilters={setFilters} />
                    </div>

                </div>

                <div className="DisplayResults">

                    <div className="Upper">
                        <div className="upperText">{title}</div>
                    </div>

                    <div>
                        <GameCards gameList={games} />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Games