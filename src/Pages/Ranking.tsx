import { useEffect, useState } from "react"
import games, { GameData } from "../Data/GameData"
import DisplayReview from "../Components/DisplayReview"
import './PageStyles/RankingStyles.css'
import more from '../LPRimg/add.png'
import trending from '../LPRimg/trending.png'

const Ranking = () => {

    const [topGames, setTopGames] = useState<GameData[]>([])
    const [window, setWindow] = useState(10)

    useEffect(() => {

        let sorted = games.sort((a, b) => b.rating - a.rating)
        setTopGames(sorted.slice(0, window))

    }, [window])

    function increaseWindow() {
        if (window !== 100) {
            setWindow(window + 10)
        }
    }

    return (
        <div className="rankingContainer">

            <div className="rankingTitle">
                <img className="trend" src={trending} alt="" />
                Top 100 Games
            </div>

            <DisplayReview GameData={topGames} />

            <div className="expand" onClick={increaseWindow}>
                <img className="expandImg" src={more} alt="View More" />
            </div>

        </div>
    )
}

export default Ranking