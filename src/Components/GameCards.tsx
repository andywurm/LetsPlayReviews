import { GameData } from "../Data/GameData"
import './ComponentStyles/GameCardsStyle.css'
import DisplayRating from "./DisplayRating"

interface IPropsGameCards {
    gameList: GameData[]
}

const GameCards = (props: IPropsGameCards) => {
    return (
        <div className="gameContain">
            {props.gameList.map(game => {
                return (
                    <div className="outerGame">

                        <div>
                            <img src={`../GameImg/${game.imgs[0]}`} alt="" className="gameImg" />
                        </div>

                        <div className="gInfo">
                            <div className="gTitle">{game.title}</div>
                            <div className="gRating"><DisplayRating rating={game.rating} size={"small"}/></div>
                        </div>

                        <div className="gDesc">{game.description}</div>

                    </div>

                )
            })}

        </div>
    )
}

export default GameCards