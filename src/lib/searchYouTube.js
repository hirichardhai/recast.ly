var searchYouTube = (options, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    //data: {q: options, part: 'snippet', maxResults: 5, key: window.YOUTUBE_API_KEY},
    data: options,
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.error(err);
    }
  });
};

window.searchYouTube = searchYouTube;
