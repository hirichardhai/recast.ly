var searchYouTube = (query, callback) => {
  // TODO

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search/',
    type: 'GET',
    data: {q: query, part: 'snippet', maxResults: 5, key: window.YOUTUBE_API_KEY},
    success: function(data) {
      callback(data);
    },
    error: function(err) {
      console.error(err);
    }
  });
};

window.searchYouTube = searchYouTube;
