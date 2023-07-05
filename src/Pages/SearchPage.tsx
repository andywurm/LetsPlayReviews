import { useContext } from "react";
import {GameContext} from '../Context/GameContext'

const SearchPage = () => {

    let sContext = useContext(GameContext)
    return (<div>{sContext.searched}</div>)
}
export default SearchPage;