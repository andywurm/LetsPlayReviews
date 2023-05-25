import './PageStyles/HomeStyles.css'
import flame from '../LPRimg/flame.png'
import games, { GameData } from '../Data/GameData'
import { useEffect, useState } from 'react'
import DisplayRating from '../Components/DisplayRating'
import topArrow from '../LPRimg/up-arrow.png'
import DisplayReview from '../Components/DisplayReview'
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [topGames, setTopGames] = useState<GameData[]>([])
    const [featured, setFeatured] = useState<GameData>()
    const navigate = useNavigate();

    useEffect(() => {

        games.map((game) => {
            if (game.featured) {
                setFeatured(game)
            }
        })

        let sorted = games.sort((a, b) => b.rating - a.rating)
        setTopGames(sorted.slice(0, 10))

    }, [])

    console.log(topGames)

    return (

        <div className="HomepageContainer">

            <div className='featuredTitle'>
                <img src={flame} alt="fire" className='fire' />
                Featured
            </div>

            <div className='featuredImgContainer'>
                <img src={`../GameImg/${featured?.featuredImg}`} alt='Featured Game' className='featuredImg' />
            </div>

            <div className='featuredText'>
                <div className='featuredInfo'>
                    Leave a review for {featured?.title} here
                </div>
                <div className='featuredRating'>
                    <div className='keepInline'>Rating: <DisplayRating rating={featured?.rating} /></div>
                </div>
            </div>

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

    )
}

export default Home