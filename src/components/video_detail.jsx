import React from 'react';
// import {ProgressBar} from 'react-bootstrap'
const VideoDetails = ({ video }) => {
  if (!video) {
    return <div className="loader"></div>
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-6">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} frameBorder="0" title="video" className="embed-responsive-item"></iframe>
      </div>
      <div className="details ">
        <h3>{video.snippet.title}</h3>
        <div>
          <p> <b>published on: </b> {video.snippet.publishedAt}</p>
        </div>
      </div>
    </div>
  );
}
export default VideoDetails;