import { GameData } from "../Data/GameData"
import './ComponentStyles/GameCardsStyle.css'
import DisplayRating from "./DisplayRating"
import { GameContext } from "../Context/GameContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

interface IPropsGameCards {
    gameList: GameData[]
}

const GameCards = (props: IPropsGameCards) => {

    const gContext = useContext(GameContext)
    let navigate = useNavigate()

    function goToDisplay(game: GameData){
        gContext.setter(game)
        navigate('/displaygame')
        window.scroll(0,0)
    }

    return (
        <div className="gameContain">
            {props.gameList.map(game => {
                return (
                    <div className="outerGame" onClick={() => goToDisplay(game)}>

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