import React from 'react';
import MusicDetail from './MusicDetail.js';

const MusicList = ({data}) => {
  const songs = data.map((song, index) => {
    return <MusicDetail
      key={song.id.label}
      artist={song["im:artist"].label}
      title={song.title.label}
      position={index + 1}
      image={song["im:image"][0]["label"]}
      link={song.link[0].attributes.href}
      release={song["im:releaseDate"].attributes.label}
/>
   });

  return (
    <div className="music-list">
      {songs}
    </div>
  );

}
export default MusicList;
