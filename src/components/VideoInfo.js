import React, {useState} from "react";


function VideoInfo({title, views, createdAt, upvotes, downvotes}){
    const [voteUp, setVoteUp] = useState(upvotes)
    const [voteDown, setVoteDown] = useState(downvotes)


    function handleUpvote(){
        setVoteUp(voteUp + 1)
    }

    function handleDownvote(){
        setVoteDown(voteDown - 1)
    }


    
    return (
        <div>   
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {createdAt}</p>
            <button name="+" onClick={handleUpvote}>{voteUp}👍</button>
            <button name="-" onClick={handleDownvote}>{voteDown}👎</button>
        </div>
    )

}

export default VideoInfo