import { useState } from "react"
import CommentForm from "./CommentForm";
import "./Comment.css";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "manoj",
        remarks: "great Job!!",
        rating: 4,
    }]);
    let addNewComment = (comment) => {
        console.log(comment);
        setComments((currComments) => [...currComments, comment]);
    };
    return (
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
                <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;&nbsp;
                    <span>(rating={comment.rating})</span>
                    <p>-{comment.username}</p>
                </div>
            ))}
            <hr /><hr />
            <CommentForm addNewComment={addNewComment} />

        </div>
    )
}