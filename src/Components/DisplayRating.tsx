import * as React from 'react';
import Rating from '@mui/material/Rating';

interface IPropsDisplayRating{
    rating?: number
}
const DisplayRating = (props: IPropsDisplayRating) => {
    return(
            <Rating name="half-rating-read" value={props.rating ? props.rating : 0} precision={0.1} readOnly />
    )
}
export default DisplayRating