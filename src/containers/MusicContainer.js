import React, {Component} from 'react';
import MusicList from '../components/MusicList';

class MusicContainer extends Component {

  constructor(props){
    super(props);
    this.state = {songs: []};
  }

componentDidMount(){
  const url ='https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
  const request = new XMLHttpRequest();
  request.open('GET', url);

request.addEventListener("load", ()=> {
  if (request.status !== 200) return;
  const jsonString = request.responseText;
  const data = JSON.parse(jsonString);
  console.log("incoming data", data)
  this.setState({songs: data.feed.entry})
    console.log("set state", data)
});
  request.send();
}

  render(){
    return (
      <div>
        <h2>iTunes Top 20 - UK</h2>
        <MusicList data={this.state.songs}/>
      </div>
    );
  }
}

export default MusicContainer;
