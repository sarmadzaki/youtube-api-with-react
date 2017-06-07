import React from 'react';

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div><h1>Loading....</h1></div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-6">
      <div className="embed-responsive embed-responsive-4by3">
        <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
      </div>
      <div className="details ">
        <h3>{video.snippet.title}</h3>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
export default VideoDetails;