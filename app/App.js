import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'Stressed Out',
    artist: 'Twenty One Pilots',
    albumArtUrl: "http://36.media.tumblr.com/14e9a12cd4dca7a3c3c4fe178b607d27/tumblr_nlott6SmIh1ta3rfmo1_1280.jpg",
    audioUrl: "http://dl.fazmusics.in/Ali/music/aban/hot%20100%20.7%20nov%202015(128)/Twenty%20One%20Pilots%20-%20Stressed%20Out.mp3",
  }
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}


