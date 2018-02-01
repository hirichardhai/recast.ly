var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" id='searchMe' onChange={(e) => props.searchVideo($('#searchMe').val())}/>
    <button className="btn hidden-sm-down" onClick={(e) => props.searchVideo($('#searchMe').val())} >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// class Search extends React.Component {

//   constructor(props) {
//     super(props);

//     this.state = { searchTerm: '' }
//   }

//   handleChange() {
//     console.log('hello');
//   }

//   render() {
//     return (
//       <div className="search-bar form-inline" >
//       {console.log(this.state.searchTerm)}
//       <input className="form-control" type="text" id='searchMe' onChange={(event) => props.searchVideo($('#searchMe').val())} />
//       {/* <button className="btn hidden-sm-down" onClick={(e) => props.searchVideo($('#searchMe').val())} > */}
      
//         <span className="glyphicon glyphicon-search" ></span>
//       {/* </button> */}
//     </div> 
//     );
//   }
// }


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
