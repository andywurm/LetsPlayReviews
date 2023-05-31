import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";


const DisplayConsoles = () => {

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

    return (
        <div>
            <div className="filterHeader">CONSOLES</div>
            <FormGroup>
                {criteria.map(console => {
                    return (
                        <FormControlLabel control={<Checkbox/>} label={console} value={console} />
                    )
                })}
            </FormGroup>

            <div className="aBreak"></div>
            
            <div className="filterHeader">GENRES</div>
            <FormGroup>
                {categories.map(cat => {
                    return (
                        <FormControlLabel control={<Checkbox/>} label={cat} value={cat} />
                    )
                })}
            </FormGroup>

        </div>
    );
}

export default DisplayConsoles;