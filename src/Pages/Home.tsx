import './PageStyles/HomeStyles.css'
import homes from '../LPRimg/HomeImg.jpg'
import gbcolor from '../LPRimg/gbcolor.png'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()

    const goTo = (place: string) => {
        if(place === "Explore"){
            navigate('/game-list')
        }
        else{
            // navigate('/search')
        }
    }

    return (
        <div>
            <div className='outerH'>

                {/* <div className='homeImgContainer'>
                    <div className='welcomeText'>
                        <div className='bigTitle'>Rank. Review. Discover.</div>
                        <div className='littleTitle'>Keep up with the gaming community. Now all in one place.</div>
                    </div>
                    <img src={homes} className='homeImg' alt="" />
                </div> */}

                <div className='landing'>

                    <div className='welcomeSpace'>
                        <div className='welcomeTitles'>
                            <div className='insideWelcomeTitles'>
                                <div className='bigText'>RANK, REVIEW,</div>
                                <div className='bigText'>and DISCOVER.</div>
                                <div className='littleText'>
                                    <div className='littleText2'>Keep up with the gaming community.</div>
                                    <div className='littleText2 now'>Now all in one place.</div>
                                </div>
                                <div className='homeBtns'>
                                    <button className='homeBtnFilled' onClick={()=>goTo("Explore")}>Explore</button>
                                    <button className='homeBtnUnfilled' onClick={()=>goTo("Search")}>Search</button>
                                </div>
                            </div>
                        </div>
                        <div className='welcomeImg'>
                            <div className='insideImg'>
                                <img src={gbcolor} className='gb' alt='' />
                            </div>
                        </div>
                    </div>

                    <div className='hmBreak'>
                        <div className='homepageBreak'></div>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Home