import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Radio Player',
    artist: 'Some info',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://streaming.comunicacioneschile.net:9326/;",
  }
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


