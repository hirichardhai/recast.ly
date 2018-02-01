class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: exampleVideoData[0],
      videos: exampleVideoData
    }
  }

  searchForVideo (query) {

    let callBack = (data) => {
      this.setState({
        videos: data.items,
        selectedVideo: data.items[0]
        })
    }

    var options = {
      q: query,
      maxResults: 10,
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
    }
    
    setTimeout(function() {
      window.searchYouTube(options, callBack)
    }, 500)
  };

  updateVideoPlayer (video) {

    this.setState({
      selectedVideo: video
    });
   }


  render() {
    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><em><Search searchVideo={this.searchForVideo.bind(this)} /></em></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={this.state.selectedVideo}/></div>
        </div>
        <div className="col-md-5">
          <div><em><VideoList videos={this.state.videos} testClick={this.updateVideoPlayer.bind(this)} /></em></div>
        </div>
      </div>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"))
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
