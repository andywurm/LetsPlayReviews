import './ComponentStyles/ReviewContainerStyles.css'
import ReviewComment from './ReviewComment'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating'
import React from 'react';

interface IPropsReviewContainer {
    reviews?: any[]
}

const ReviewContainer = (props: IPropsReviewContainer) => {

    const [value, setValue] = React.useState<number | null>(1);

    return (
        <div className='rContainer'>

            <Accordion style={{ boxShadow: 'none' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ flexDirection: "row-reverse" }}
                >
                    <Typography><div className='startReview'>Leave a Review</div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className='userInputs'>

                            <div className='keepTog'>
                                Your Rating:
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    style={{color:'#5566e6'}}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </div>

                            <div className='usernameField'>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Username"
                                    placeholder="Your Username"
                                    className='insideUField'
                                />
                            </div>

                            <div className='commentField'>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Your Comment"
                                    multiline
                                    rows={4}
                                    placeholder="Enter Comment Here..."
                                    className='insideCField'
                                />
                            </div>

                            <div className='btnField'>
                                <button className='btn'>Submit</button>
                            </div>

                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <div className='comments'>
                <ReviewComment reviews={props.reviews} />
            </div>

        </div>
    )
}
export default ReviewContainer;