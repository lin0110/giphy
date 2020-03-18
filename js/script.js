// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let userInput = $("#search-term").val();

    // https://api.giphy.com/v1/gifs/search?q=puppy&api_key=dc6zaTOxFJmzC -> put this in your browser in a new tab
    fetch("https://api.giphy.com/v1/gifs/search?q="+ userInput +"&api_key=dc6zaTOxFJmzC") 
      .then(function(response) {
        return response.json();
        })
      .then(function(response) {
        console.log(response);
        var pic_url = response.data[0].images.downsized_medium.url;
        console.log(pic_url);
        $('#pic').append('<img src=' + pic_url + '>');
        })

    

});

