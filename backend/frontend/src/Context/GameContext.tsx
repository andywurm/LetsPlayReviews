import { ReactNode, createContext, useState } from "react";
import allGameData, { GameData } from "../Data/GameData";

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
    setter: () => { },
    getList: [],
    setList: () => []
})

interface GameContextType {
    data: GameData
    setter: React.Dispatch<React.SetStateAction<GameData>>
    getList: GameData[]
    setList: React.Dispatch<React.SetStateAction<GameData[]>>
}

interface IPropsGameProvider {
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

    let [gameList, setList] = useState(allGameData)

    return (
        <GameContext.Provider value={{ data: gameClicked, setter: setGameClicked, getList: gameList, setList: setList }}>
            {props.children}
        </GameContext.Provider>
    )
}


export { GameContext, GameProvider };