import { GameData } from "../Data/GameData"
import './ComponentStyles/DisplayReviewStyles.css'
import DisplayRating from "./DisplayRating"

interface IPropsDisplayReview {
    GameData: GameData[]
}
const DisplayReview = (props: IPropsDisplayReview) => {

    return (
        <div>{props.GameData.map((game, idx) => {
            return (
                <div className="DisplayReviewContainer">

                    <div className="DisplayReviewTitle">{idx + 1}. {game.title}</div>

                    <div className="contentContainer">

                        <img src={`../GameImg/${game.imgs[0]}`} alt={game.title} className="reviewImg" />

                        <div className="contents">
                            <div className="keepInlineDR">Rating: <DisplayRating rating={game.rating} /></div>

                            <div className="description">{game.description}</div>

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