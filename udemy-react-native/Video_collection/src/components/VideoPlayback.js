import React, { Component }  from 'react';
import VideoPlayer from 'react-native-video-controls';
import { Card, CardSection } from './common';

class VideoPlayback extends Component {

render() {
  return (
    <Card>
      //<CardSection>
        //<VideoPlayer
            source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
            navigator={ this.props.navigator }
        />
      //</CardSection>
    //</Card>
  );
}
}
export default VideoPlayback;
