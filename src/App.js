import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import Search from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail';
import Footer from './components/footer'
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
const API_KEY = 'AIzaSyAxTpJOj5D23e4uEAcn5hkC6pOV2tQUv9c';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('alan walker faded');
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      console.log(videos);
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <MuiThemeProvider>
      <div>
        <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
        <Search onSearchTermChange={videoSearch} />
  </AppBar>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
      </div>
      </MuiThemeProvider>
    );
  }
}
export default App;