import video from "../data/video.js";
import Video from "./Video"
import VideoInfo from "./VideoInfo"
import CommentsList from "./CommentsList"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl}/>
      <VideoInfo 
          title={video.title} 
          views={video.views}
          createdAt={video.createdAt}
          upvotes={video.upvotes}
          downvotes={video.downvotes}
      />
      <CommentsList comments={video.comments}/>
    </div>

  );
}

export default App;
