import { GameData } from "../Data/GameData"
import './ComponentStyles/DisplayReviewStyles.css'
import DisplayRating from "./DisplayRating"
import { GameContext } from '../Context/GameContext'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

interface IPropsDisplayReview {
    GameData: GameData[]
}

const DisplayReview = (props: IPropsDisplayReview) => {

    let gContext = useContext(GameContext)
    let navigate = useNavigate()

    function goToDisplay(game:GameData){
        gContext?.setter(game)
        window.scrollTo(0, 0)
        navigate('/displaygame')
    }

    return (
        <div>{props.GameData.map((game, idx) => {
            return (
                <div className="DisplayReviewContainer" onClick={() => goToDisplay(game)}>

                    <div className="DisplayReviewTitle">{idx + 1}. {game.title}</div>

                    <div className="contentContainer">

                        <img src={`../GameImg/${game.imgs[0]}`} alt={game.title} className="reviewImg" />

                        <div className="contents">
                            <div className="keepInlineDR">Rating: <DisplayRating rating={game.rating} size={"medium"} /></div>

                            <div className="description">
                                <p className="desc">{game.description}</p>
                            </div>

                            <div className="leaveReview">Leave a Review</div>
                        </div>

                    </div>

                </div>
            )
        }
        )}</div>
    )
}

export default DisplayReview