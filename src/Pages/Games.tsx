import DisplayConsoles from "../Components/DisplayConsoles"
import GameCards from "../Components/GameCards"
import './PageStyles/GamesStyles.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from "react";
import gameList from '../Data/GameData'

const Games = () => {

    const [title, setTitle] = useState("ALL GAMES")
    const [games, setGames] = useState(gameList)

    return (
        <div>
            <div className="homepageBreak br"></div>
            <div className="SearchArea">

                <div className="GamingOptions">
                    
                    <div className="filterText">FILTERS</div>
                    <div className="homepageBreak"></div>

                    <div className="searchContainer">
                        <DisplayConsoles />
                    </div>
                    
                </div>

                <div className="DisplayResults">

                    <div className="Upper">
                        <div className="upperText">{title}</div>
                    </div>

                    <div>
                        <GameCards gameList={games}/>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Games