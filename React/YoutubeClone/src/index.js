import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = "AIzaSyAMjv_QipzmmiOfIJCTRcd4PYx9-yVNcI0";

//Creat a component. This component will produce some HTML.

class App extends Component {
  constructor(props) {
    super(props);

    //initialize list of videos to a empty array
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("surfboards");

  }

  videoSearch(term) {
    YTSearch({key:API_KEY, term:term}, (videos) => {
      //console.log(data);
      this.setState(
        {
          videos:videos,
          selectedVideo: videos[0]
        }
      );
    });
  }

  render() {
      return (
        <div>
          <SearchBar onInputTextChange = {(term) => {this.videoSearch(term)}}/>
          <VideoDetail video = {this.state.selectedVideo}/>
          <VideoList
            onVideoSelect = {(Video)=> {this.setState({selectedVideo:Video})}}
            videos = {this.state.videos}/>
        </div>
      );
    }
}

//Render
ReactDOM.render(<App /> , document.querySelector('.container'));
