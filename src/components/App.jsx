class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: 'idTag',
      videos: exampleVideoData,
      onClick: this.updateVideoPlayer()
    }
  }

  updateVideoPlayer () {
    console.log("im being clicked")
   }


  render() {
    return (
      <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><h5><em><Search /></em> view goes here</h5></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><h5><em><VideoPlayer video={exampleVideoData[0]}/></em> view goes here</h5></div>
        </div>
        <div className="col-md-5">
          <div><h5><em><VideoList videos={exampleVideoData} testClick={this.updateVideoPlayer.bind(this)} /></em> view goes here</h5></div>
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
