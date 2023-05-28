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

    const categories = ['Story', 'Puzzle', 'Action', 'Adventure', 'Comedy', 'Pixel', 'Horror', 'Psychological', 'Fantasy']
    categories.sort()
    const [title, setTitle] = useState("ALL GAMES")
    const [games, setGames] = useState(gameList)
    
    function catSearch(event: SelectChangeEvent){
        let str = event.target.value as string
        setTitle(str.toUpperCase() + " GAMES")
    }

    return (
        <div>
            <div className="homepageBreak br"></div>
            <div className="SearchArea">

                <div className="GamingOptions">
                    <div className="filterText">FILTERS</div>
                    <div className="homepageBreak"></div>
                    <DisplayConsoles />
                </div>

                <div className="DisplayResults">

                    <div className="Upper">

                        <div className="upperText">{title}</div>

                        <div className="selectTool">
                            <FormControl className="innerSelect">
                                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Categories"
                                    onChange={catSearch}
                                    style={{ height: '50px', textAlign: 'left' }}
                                >
                                    {categories.map(cat => {
                                        return (<MenuItem value={cat}>{cat}</MenuItem>)
                                    })
                                    }
                                </Select>
                            </FormControl>
                        </div>

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