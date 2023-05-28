import DisplayRating from "./DisplayRating";
import './ComponentStyles/ReviewCommentStyles.css'

interface IPropsReviewComment {
    reviews?: any[]
}

const ReviewComment = (props: IPropsReviewComment) => {
    return (
        <div>
            {props.reviews?.map(person => {
                return (
                    <div className="wholeComment">

                        <div className="comm">

                        <div className="userInfo">
                            <div className="userName">@{person.username}</div>
                            <div className="userDate">{person.date}</div>
                        </div>

                        <div className="userRating keepTog">
                            <DisplayRating rating={person.userRating} size={"medium"} />
                        </div>

                        <div className="userComment">"{person.comment}"</div>

                        </div>

                    </div>
                )
            })}
        </div>
    )
}
export default ReviewComment;