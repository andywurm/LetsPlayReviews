import { ReactNode, createContext, useState} from "react";
import { GameData } from "../Data/GameData";


const GameContext = createContext<GameContextType>({
    data: {
        title: "string",
            imgs: [],
            release: "string",
            rating: 0,
            description: "string",
            system: "string",
            tags: [],
            reviews: [] 
    },
    setter: () => {}
})

interface GameContextType {
    data: GameData
    setter: React.Dispatch<React.SetStateAction<GameData>>
}

interface IPropsGameProvider{
    children: ReactNode
}

const GameProvider = (props: IPropsGameProvider) => {

    const [gameClicked, setGameClicked] = useState<GameData>(
        {
            title: "string",
            imgs: [],
            release: "string",
            rating: 0,
            description: "string",
            system: "string",
            tags: [],
            reviews: [] 
        }
    );

    return(
        <GameContext.Provider value={{ data: gameClicked, setter: setGameClicked }}>
         {props.children}
        </GameContext.Provider>
    )
}


export {GameContext, GameProvider};