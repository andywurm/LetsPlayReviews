import './PageStyles/HomeStyles.css'
import games, { GameData } from '../Data/GameData'
import { useEffect, useState } from 'react'
import topArrow from '../LPRimg/up-arrow.png'
import DisplayReview from '../Components/DisplayReview'
import { useNavigate } from "react-router-dom";
import FeaturedGames from '../Components/FeaturedGames'

const Home = () => {

    const [topGames, setTopGames] = useState<GameData[]>([])
    const [featured, setFeatured] = useState<GameData[]>([]) 
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

    useEffect(() => {

        setFeatured(games.filter(game => game.featured))

        let sorted = games.sort((a, b) => b.rating - a.rating)
        setTopGames(sorted.slice(0, 10))

    }, [featured])

    function changeFeature(){
        if(index === featured.length-1){
            setIndex(0)
        }
        else{
            setIndex(index+1)
        }
    }

    setTimeout(changeFeature, 10000)

    return (

        <div className="HomepageContainer">

            <FeaturedGames GameData={featured[index]}/>

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