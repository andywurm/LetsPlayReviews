import { useEffect, useState } from "react"
import games, { GameData } from "../Data/GameData"
import DisplayReview from "../Components/DisplayReview"
import './PageStyles/RankingStyles.css'
// import more from '../LPRimg/add.png'
// import trending from '../LPRimg/trending.png'
import leaderboard from '../LPRimg/Leaderboard.png'

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
        <div>

            <div className="rankingContainer">

                <div className="TitleSection">

                    <div className="rankingText">
                        <div className="rankingTitle"> Current Leaderboard</div>
                        <div className="rankingSmlText">Current game ranking according to user reviews.</div>
                    </div>
                    <div className="rankingImg">
                        <img className="rImg" src={leaderboard} alt="" />
                    </div>

                </div>

            </div>

            <div className="actualRanking">
                <div className='homepageBreak'></div>
                <DisplayReview GameData={topGames} />
            </div>



        </div>
    )
}

export default Ranking