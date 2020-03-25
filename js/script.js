// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
    let userInput = $("#search-term").val();
    let random = Math.round(Math.random() * 24);
    
    console.log(random);
    
    fetch("https://api.giphy.com/v1/gifs/search?q="+ userInput +"&api_key=dc6zaTOxFJmzC") 
      .then(function(response) {
        return response.json();
        })
      .then(function(response) {
        console.log(response);
        var pic_url = response.data[random].images.downsized_medium.url;
        console.log(pic_url);
        $('#pic').html('<img src=' + pic_url + '>');
        })

    

});

