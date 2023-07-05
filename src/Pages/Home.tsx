import './PageStyles/HomeStyles.css'
import gbcolor from '../LPRimg/gbcolor.png'
import game from '../LPRimg/gaming.png'
import rated from '../LPRimg/rating.png'
import comment from '../LPRimg/bubble-chat.png'

const Home = () => {

    return (
        <div className='outerH'>

            <div className='landing'>

                <div className='gameboy'>
                    <div className='gameboyContainer'>
                        <img src={gbcolor} alt='' className='gb' />
                    </div>
                </div>

                <div className='gameboySml'>
                    <div className='gbSmlContainer'>
                        <img src={gbcolor} alt='' className='gbSml' />
                    </div>
                </div>

                <div>
                    <div className='HomeText'>
                        <div className='centerText'>

                            <div className='Big'>
                                <div className='bigText'>RANK, REVIEW,</div>
                                {/* <div className='bigText'></div> */}
                                <div className='bigText'>AND DISCOVER</div>
                            </div>

                            <div className='small'>
                                <div className='smallText'>Keep up with the gaming community.</div>
                                <div className='smallText'>Now all in one place.</div>
                            </div>

                            <div>
                                <button className='btn'>Explore</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="HomepageContainer">

                <div className='homepageBreak'></div>

                <div className='explain'>

                    <div className='play'>
                        <div className='keepOver'>
                            <img src={game} alt='' className='explainIcon' />
                        </div>
                        <div className='hText'>
                            The first step is to play a game of your choosing!
                        </div>
                    </div>

                    <div className='rate'>
                        <div className='keepOver'>
                            <img src={rated} alt='' className='explainIcon' />
                        </div>
                        <div className='hText'>
                            After completion, rate the game based on your experience.
                        </div>
                    </div>

                    <div className='comment'>
                        <div className='keepOver'>
                            <img src={comment} alt='' className='explainIcon' />
                        </div>
                        <div className='hText'>
                            Write a comment to further express your opinions!
                        </div>
                    </div>

                </div>

                <div className='hmBreak'>
                    <div className='homepageBreak'></div>
                </div>
                

            </div>

        </div>

    )
}

export default Home
