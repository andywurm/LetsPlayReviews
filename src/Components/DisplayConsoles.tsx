import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

interface IPropsDisplayConsoles {
    filters: string[]
    setFilters: (filter: any) => void;
}

const DisplayConsoles = (props: IPropsDisplayConsoles) => {

    const criteria = [
        'PC',
        'Nintendo 64',
        'Nintendo DS',
        'Nintendo GameCube',
        'Nintendo Wii',
        'Nintendo Switch',
        'Playstation',
        'Playstation 2',
        'Playstation 3',
        'Playstation 4',
    ]

    const categories = [
        'Story',
        'Puzzle',
        'Action',
        'Adventure',
        'Comedy',
        'Pixel',
        'Horror',
        'Psychological',
        'Fantasy'
    ]
    categories.sort()

    const [set, setSet] = useState<string[]>([])

    function updateSearch(selected: string) {
        if(set.includes(selected)){
            setSet(set.filter(i => i !== selected))
        }
        else{
             props.setFilters([...props.filters, selected ])
             setSet([...set, selected])
        }
        props.setFilters(set)
    }

    return (
        <div>
            <div className="filterHeader">CONSOLES</div>
            <FormGroup>
                {criteria.map(console => {
                    return (
                        <FormControlLabel control={<Checkbox />} label={console} value={console} onChange={() => updateSearch(console)} />
                    )
                })}
            </FormGroup>

            <div className="aBreak"></div>

            <div className="filterHeader">GENRES</div>
            <FormGroup>
                {categories.map(cat => {
                    return (
                        <FormControlLabel control={<Checkbox />} label={cat} value={cat} onChange={() => updateSearch(cat)} />
                    )
                })}
            </FormGroup>

        </div>
    );
}

export default DisplayConsoles;