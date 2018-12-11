import React from 'react';

const MusicDetail = (props) => (
      <div className="music">
      <h1>{props.position}</h1>
      <h2 className="title"><a href={props.link}>{props.title}</a></h2>
      <h3>Release: {props.release}</h3>
      <img alt="album cover" src={props.image}/>
      </div>


)
export default MusicDetail;
