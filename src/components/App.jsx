class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: exampleVideoData[0],
      videos: exampleVideoData
    }
    
  }

  searchForVideo (query) {
    console.log('our query is -->', query);

    let callBack = (data) => {
      console.log("this is the callbacks data", data.items);
      this.setState({
        videos: data.items
        })
      console.log(this.state.videos, "THE STATE IS ")
  }

    var ourVideos = window.searchYouTube(query, callBack)


    
  }

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
          <div><h5><em><Search searchVideo={this.searchForVideo.bind(this)} /></em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={this.state.selectedVideo}/></em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos={this.state.videos} testClick={this.updateVideoPlayer.bind(this)} /></em> view goes here</h5></div>
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
