import React from "react"
import Comment from "./Comment"


function CommentList({comments}) {
    const commentArr= comments.map((comment) => {
        <Comment 
            user={comment.user}
            comment={comment.comment}

        />
    })

    return (
        <div name="commentList">
            <h2>{comments.length} Comments</h2>
        </div>
    )

}




export default CommentList