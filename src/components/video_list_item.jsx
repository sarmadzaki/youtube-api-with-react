import React from 'react';
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item list-group-item-action flex-column align-items-start">
      <div className="d-flex w-100 justify-content-between">
        <div className="media-left">
          <img src={imageUrl} alt="" className="media-object" />
        </div>
        <div className="media-body">
          <div className="mb-1">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;