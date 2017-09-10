import React, { Component } from 'react';
import _ from 'lodash'
import './App.css';
import Search from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list'
import VideoDetails from './components/video_detail';
import Footer from './components/footer'
import AppBar from 'material-ui/AppBar';
import './App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
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
          className="appbar"
          title="Sam Youtube Player"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
  >
        <Search onSearchTermChange={videoSearch} />
  </AppBar>
  <div>
<br />
  </div>
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />

<AppBar   
      className="appbar"

showMenuIconButton={false}>
       <FlatButton
      href="https://github.com/sarmadzaki/youtube-api-with-react"
      target="_blank"
      label="GitHub Link"
      className="button"
      secondary={true}
      icon={<FontIcon ClassName="muidocs-icon-custom-github" />}
    />       <FlatButton
      href="https://facebook.com/sir.mad"
      target="_blank"
      label="Facebook"
      className="button"
      secondary={true}
    />
</AppBar>
      </div>
      </MuiThemeProvider>
    );
  }
}
export default App;