import './PageStyles/HomeStyles.css'
import games, { GameData } from '../Data/GameData'
import { useEffect, useState } from 'react'
import topArrow from '../LPRimg/up-arrow.png'
import DisplayReview from '../Components/DisplayReview'
import { useNavigate } from "react-router-dom";
import gbcolor from '../LPRimg/gbcolor.png'

const Home = () => {

    const [topGames, setTopGames] = useState<GameData[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        
        let sorted = games.sort((a, b) => b.rating - a.rating)
        setTopGames(sorted.slice(0, 10))

    }, [])


    return (
        <div>

            <div className='landing'>

                <div className='gameboy'>
                    <div className='gameboyContainer'>
                        <img src={gbcolor} alt='' className='gb' />
                    </div>
                </div>

                <div>
                    <div className='HomeText'>
                        <div className='centerText'>

                            <div className='Big'>
                                <div className='bigText'>RANK</div>
                                <div className='bigText'>REVIEW</div>
                                <div className='bigText'>DISCOVER</div>
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

                <div className='topTitle'>
                    <img src={topArrow} alt='Arrow' className='topArrow' />
                    Top Games
                </div>

                <div>
                    <DisplayReview GameData={topGames} />
                </div>

                <div className='more' onClick={() => navigate('/ranking')}>
                    Click Here for the Full List
                </div>

            </div>

        </div>

    )
}

export default Home