import { useContext, useState } from 'react'
// import games from '../Data/GameData'
import './PageStyles/DisplayGameStyles.css'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import DisplayRating from '../Components/DisplayRating';
import ReviewContainer from '../Components/ReviewContainer';
import { GameContext } from '../Context/GameContext';

const DisplayGame = () => {

    const [index, setIndex] = useState(0)
    let gContext = useContext(GameContext)
    const gData = gContext.data

    function increaseIndex() {
        if (index !== gData.imgs.length - 1) {
            setIndex(index + 1)
        }
    }

    function decreaseIndex() {
        console.log("click")
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    return (
        <div className='DisplayGameContainer'>

            <div className='GameTitle'>{gData.title}</div>

            <div className='GameContainer'>

                <div className='GamePromo'>

                    <div className='bigImgContainer'>
                        <img src={`/static/GameImg/${gData.imgs[index]}`} className="bigGameImg" alt="" />
                    </div>

                    <div className='smlImgContainer'>

                        <div className='arrows' onClick={decreaseIndex} style={{ opacity: index === 0 ? '20%' : '1' }}><KeyboardArrowLeftIcon /></div>

                        {gData.imgs.map((item, idx) => {
                            return (
                                <img src={`/static/GameImg/${item}`} className='smallGameImg' style={{ opacity: idx === index ? '1' : '50%' }} alt="" onClick={() => setIndex(idx)} />
                            )
                        })}

                        <div className='arrows' onClick={increaseIndex} style={{ opacity: index === gData.imgs.length - 1 ? '20%' : '1' }}><KeyboardArrowRightIcon /></div>

                    </div>

                </div>

                <div className='GameInfo'>

                    <div className='gameInfoContainer'>

                        <div className='keepTogether'>
                            <span className='ratingspace'>Rating:</span> <DisplayRating rating={gData.rating} size={"medium"} />
                        </div>

                        <div className='ReleaseDate'>
                            Release Date: &nbsp; <span className='released'>{gData.release}</span>
                        </div>

                        <div className='gameDesc'>
                            {gData.description}
                        </div>

                        <div className='gameTags'>
                            <span className='tagSpan'>Tags: </span>
                            {gData.tags.map(tag => {
                                return <div className='tags'>{tag}</div>
                            })}
                        </div>

                    </div>

                </div>

            </div>

            <div className='ReviewsContainer'>
                <ReviewContainer reviews={gData.reviews}/>
            </div>

        </div>
    )
}
export default DisplayGame;