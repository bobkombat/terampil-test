import React from 'react';
import PropTypes from 'prop-types';
import { Container, VideoPlayer } from './styled';

const videoPlayer = {
  src:
    'https://cdn.videvo.net/videvo_files/video/premium/2019-08/small_watermarked/170216B_147_BoyPlayingPiano_1080p_preview.webm',
  thumbnail:
    'https://images.unsplash.com/photo-1474314881477-04c4aac40a0e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
};
function VideoAdds(props) {
  return (
    <Container>
      <div className="video-adds">
        <VideoPlayer controls loop muted src={videoPlayer.src} poster={videoPlayer.thumbnail} />
      </div>
    </Container>
  );
}

VideoAdds.propTypes = {};

export default VideoAdds;
