import { GameData } from "../Data/GameData"
import './ComponentStyles/DisplayReviewStyles.css'
import DisplayRating from "./DisplayRating"
import { GameContext } from '../Context/GameContext'
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import GameCards from "./GameCards"

interface IPropsDisplayReview {
    GameData: GameData[]
}

const DisplayReview = (props: IPropsDisplayReview) => {

    let gContext = useContext(GameContext)
    let navigate = useNavigate()

    function goToDisplay(game: GameData) {
        gContext?.setter(game)
        window.scrollTo(0, 0)
        navigate('/displaygame')
    }

    return (
        <div>

            <div className="DRbig">{props.GameData.map((game, idx) => {
                return (
                    <div className="DisplayReviewContainer" onClick={() => goToDisplay(game)}>

                        <div className="contentContainer">

                            <div className="DisplayReviewRank">{idx + 1}</div>
                            <img src={`static/GameImg/${game.imgs[0]}`} alt={game.title} className="reviewImg" />
                            <div className="DisplayReviewTitle">{game.title}</div>
                            <div className="DRrating"><DisplayRating rating={game.rating} size={"medium"} /></div>
                            <div className="numOfReviews"><b>{game.reviews.length}</b> Reviews</div>

                            <div className="leaveReview">Leave a Review</div>

                        </div>
                        <br />

                    </div>
                )
            }
            )}</div>

            <div className="DRsmall">
                {props.GameData.map((game, idx) => {
                    return (
                        <div className="DRouterGame" onClick={() => goToDisplay(game)}>

                            <div>
                                <img src={`static/GameImg/${game.imgs[0]}`} alt="" className="DRgameImg" />
                            </div>

                            <div className="DRgInfo">
                                <div className="DRgTitle">{idx + 1}. {game.title}</div>
                                <div className="DRgRating"><DisplayRating rating={game.rating} size={"small"} /></div>
                            </div>

                            <div className="DRgDesc">{game.description}</div>

                            <div className="leaveReview">Leave a Review</div>

                        </div>

                    )
                })}

            </div>

        </div>

    )
}

export default DisplayReview