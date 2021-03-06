import React from 'react';
import './css/startpage.css';

import SpotifyPlayer from 'react-spotify-player';
// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: '100',
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'


const ScrollPageMusic = () => 
  (
    <div className="scrollpagemusic">

        {/* ADD A NAVBAR */}
        <div className="anomaly-logo">
          <div className="Header" >
            ALBUMS // SINGLES
          </div>
          <div className="albums">
            <a href="https://spectralights.bandcamp.com/album/orbit" >
              <img className="orbit" src={require('./images/orbit.jpg')} alt={''} />
            </a>
            <a href="https://soundcloud.com/spectralofficialband/the-watcher" >
              <img className="orbit" src={require('./images/watcher.PNG')} alt={''}  />
            </a>
            <a href="https://spectralights.bandcamp.com/album/anomaly" >
              <img className="orbit" src={require('./images/anomaly.jpg')} alt={''}  />
            </a>
            <a href="https://spectralights.bandcamp.com/track/swift" >
              <img className="orbit" src={require('./images/swift.jpg')} alt={''}  />
            </a>
          </div>
            <SpotifyPlayer
              uri="spotify:album:6nc39PYmv29MKBAcvTVIgc"
              size={size}
              view={view}
              theme={theme}
            />

            <SpotifyPlayer
              uri="spotify:album:4cf8L6jVtiUxWZCk7zVePe"
              size={size}
              view={view}
              theme={theme}
            />
        </div>
    </div>
);

  export default ScrollPageMusic;
