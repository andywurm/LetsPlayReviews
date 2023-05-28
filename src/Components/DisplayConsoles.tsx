import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import Typography from '@mui/material/Typography';
import { AccordionDetails } from '@mui/material';


const DisplayConsoles = () => {

    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <div>
            <Accordion style={{ width: '100%' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> <div className="cat">Nintendo</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Hellowowowowow
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> <div className="cat">Playstation</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Hellowowowowow
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> <div className="cat">PC</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Hellowowowowow
                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default DisplayConsoles;