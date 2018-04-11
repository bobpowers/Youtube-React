import React from 'react';

// This way is ok to do, but we can save ourselves time and space by declaring
// incoming content as we did below
// const VideoListItem = (props) => {
//     const video = props.video;
//     return <li>...video stuff here...</li>
// };

const VideoListItem = ({video, onVideoSelect}) => {
    const imageURL = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>         
        </li>
    );
};

export default VideoListItem;