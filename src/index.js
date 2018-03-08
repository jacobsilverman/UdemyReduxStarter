import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import SearchBar from './components/search_bar.js';

/* 
 * Create new component,
 * This component should produce some HTML.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
        videos: [],
        selectedVideo: null
      };
    console.log(process.env.API_KEY2);
    YTSearch({ key: process.env.API_KEY2, term: "surfboards" }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }
  

  render(){
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

/* 
 * Take this component's generated HTML and
 * put it on the page (in the DOM).
*/
ReactDOM.render(<App />, document.querySelector('.container'));

//up to date as at s2 lecture 29