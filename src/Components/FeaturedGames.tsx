import {GameData} from "../Data/GameData"
import DisplayRating from '../Components/DisplayRating'

interface IPropsFeaturedGames {
    GameData: GameData
}

const FeaturedGames = (props: IPropsFeaturedGames) => {
  
    return (
        <div className="feat dr">

            <div className='featuredImgContainer'>
                <img src={`../GameImg/${props.GameData?.featuredImg}`} alt='Featured Game' className='featuredImg' />
            </div>

            <div className='featuredText'>
                <div className='featuredInfo'>
                   <span className="sml">Leave a review for </span> {props.GameData?.title}  <span className="sml">here</span> 
                </div>
                <div className='featuredRating'>
                    <div className='keepInline'>Rating: <DisplayRating rating={props.GameData?.rating} /></div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedGames