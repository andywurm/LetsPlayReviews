import { useState } from 'react'
import games from '../Data/GameData'
import './PageStyles/DisplayGameStyles.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DisplayRating from '../Components/DisplayRating';
import ReviewContainer from '../Components/ReviewContainer';

const DisplayGame = () => {

    const game = games[0]
    const [indexs, setIndexs] = useState(0)

    function increaseIndex() {
        if (indexs !== game.imgs.length - 1) {
            setIndexs(indexs + 1)
        }
    }

    function decreaseIndex() {
        console.log("click")
        if (indexs !== 0) {
            setIndexs(indexs - 1)
        }
    }

    console.log(indexs)

    return (
        <div className='DisplayGameContainer'>

            <div className='GameTitle'>{game.title}</div>

            <div className='GameContainer'>

                <div className='GamePromo'>

                    <div className='bigImgContainer'>
                        <img src={`../GameImg/${game.imgs[indexs]}`} className="bigGameImg" alt="" />
                    </div>

                    <div className='smlImgContainer'>

                        <div className='arrows' onClick={decreaseIndex} style={{ opacity: indexs === 0 ? '20%' : '1' }}><KeyboardArrowLeftIcon /></div>

                        {game.imgs.map((item, idx) => {
                            return (
                                <img src={`../GameImg/${item}`} className='smallGameImg' style={{ opacity: idx === indexs ? '1' : '50%' }} alt="" onClick={() => setIndexs(idx)} />
                            )
                        })}

                        <div className='arrows' onClick={increaseIndex} style={{ opacity: indexs === game.imgs.length - 1 ? '20%' : '1' }}><KeyboardArrowRightIcon /></div>

                    </div>

                </div>

                <div className='GameInfo'>

                    <div className='gameInfoContainer'>

                        <div className='keepTogether'>
                            <span className='ratingspace'>Rating:</span> <DisplayRating rating={game.rating} size={"medium"} />
                        </div>

                        <div className='ReleaseDate'>
                            Release Date: &nbsp; <span className='released'>{game.release}</span>
                        </div>

                        <div className='gameDesc'>
                            {game.description}
                        </div>

                        <div className='gameTags'>
                            <span className='tagSpan'>Tags: </span>
                            {game.tags.map(tag => {
                                return <div className='tags'>{tag}</div>
                            })}
                        </div>

                    </div>



                </div>

            </div>

            <div className='ReviewsContainer'>
                <ReviewContainer reviews={game.reviews}/>
            </div>


        </div>
    )
}
export default DisplayGame;