///place code here for ios

// Import a library to help create a Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import VideoPlayback from './src/components/VideoPlayback';
import { Header } from './src/components/common';

// Create a Component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Videos'} />
    <VideoPlayback />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('Video_collection', () => VideoPlayback);
