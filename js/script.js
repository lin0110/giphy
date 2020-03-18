// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    fetch("https://api.giphy.com/v1/gifs/search?q=${userInput}")
      .then(function(response) {
        return response.json();
        })
      .then(function(data) {
        console.log(data);
        var pic_url = data[0].show.image.medium;
        $('body').append('<img src=' + pic_url + '>');
        })

    let userInput = $("input").val();

});

