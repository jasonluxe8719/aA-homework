export const fetchSearchGiphys = searchTerm => (
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=yFo0w8aWJS7toFFtyZjnHQHheKDTs9ML&limit=2'
  })
);