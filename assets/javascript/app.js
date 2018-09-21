var topics = ["Swan","Peacock","Puffin","Owl","Parrot","Penguin","Eagle","Duck","Dove","Crane"];

for (i=0; i<topics.length; i++){
    var buttonVar = $('<button class="btn btn-info" type="button">');
    buttonVar.attr("id", topics[i]);
  
    buttonVar.text(buttonVar[0].id);
    $(".buttonsgohere").append(buttonVar);


};

$("button").on("click", function() {

    $("#images").empty();

    var chosen = $(this)[0].id;
   
    var API = "7juelg4N3eSKgPFoBc4gCR8TOMJsuxrA";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="+API+"&q="+chosen+"&limit=10&offset=0&rating=G&lang=en";
   
    // Storing our giphy API URL for a random cat image
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
      url: queryURL,
      method: "GET"
    })

    // After the data from the AJAX request comes back
      .then(function(response) {
        console.log(response);
        var results = response.data;
        console.log(results);
      // Saving the image_original_url property
      for (var i = 0; i < results.length; i++) {
        // var steadyImageUrl = results[i].images.fixed_height_small_still
        // .url;

        // var activeImageUrl = results[i].images.fixed_height_small.url;
      
        // Creating and storing an image tag
        var birdsDiv = $('<div class="birdbird">');
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        
        // Creating and storing an image tag
        var birdsImage = $('<img class="gif playing">');

        // Setting the birdsImage src attribute to imageUrl
        // birdsImage.attr("name", "steady");
    
       
        birdsImage.attr("src", results[i].images.fixed_height_still.url);
        birdsImage.attr("data-still", results[i].images.fixed_height_still.url);
        //console.log("stillworks?");
        birdsImage.attr("data-play", results[i].images.fixed_height.url);

        birdsImage.attr("alt", buttonVar[0].id + "image");

        // Appending the paragraph and image tag to the animalDiv
        birdsDiv.append(p);
        birdsDiv.append(birdsImage);
        console.log(birdsImage);

        // Prepending the birdsImage to the images div
        $("#images").append(birdsDiv); 

    

      };

      $(".gif").on("click", function() {
        // console.log("haha");
        //   var state = $(this).attr("data-state");
        //   if (state === "still") {
        //       console.log("haha");
        //     $(this).attr("src", $(this).attr("data-play"));
        //     $(this).attr("data-state", "animate");
        //   } else {
        //     $(this).attr("src", $(this).attr("data-still"));
        //     $(this).attr("data-state", "still");
        //   } 

        if($(this).hasClass("playing")){
          console.log(this);
          $(this).attr("src", $(this).attr("data-play"));
          $(this).removeClass("playing");
        
        } else {
          console.log(this);
          $(this).addClass("playing");
          $(this).attr("src", $(this).attr("data-still"));
        }
          // console.log(stateName);
          // stateName = $(this).attr("name");
          // if (stateName === "steady") {
          //   console.log(stateName);
          //   $(this).attr("src", $(this).attr("data-play"));
          //   stateName = "still";
          //   console.log(stateName);
          //   goHead = true;
          //   return;
          //   console.log("wow");

          // } if (stateName = "still" && goHead === "true") {
          //   console.log("haha");
          //   $(this).attr("src", $(this).attr("data-still"));
          //   $(stateName).push("steady");
          //   console.log(stateName);
         
          // } 


          // if((this.name) === "steady"){
          //     console.log(birdsImage);
          //     console.log(this);
          //     $(this).attr("name", "active");
           
          //     $(this).attr("src", activeImageUrl);
          //     console.log(activeImageUrl);
              
              
          // } else if ((this).name === "active")
          // {
          //     console.log("haha3"+this);
          //     $(this).attr("src", steadyImageUrl);
          //     $(this).attr("name", "steady");
          // }
         
      });

      
      });
  });
  var newBirdsList = [];
  $(".searchButton").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    
    var newBird = $(".birdName").val().trim();
    newBirdsList.push(newBird);
  
   
// for (i=0; i<newBirdsList.length; i++){
//     var buttonVar = $('<button class="btn btn-info" type="button">');
//     buttonVar.attr("id", topics[i]);
  
//     buttonVar.text(buttonVar[0].id);
//     $(".buttonsgohere").append(buttonVar);


// };
    
    var buttonVar = $('<button class="btn btn-info" type="button">');
    buttonVar.attr("id", newBird);
  
    buttonVar.text(newBird);
    $(".buttonsgohere").append(buttonVar);
    // Here we construct our URL

    // if (newBirdsList.includes(newBird)){
    //   return;
    // }


    $("button").on("click", function() {

      $("#images").empty();
  
    var API = "7juelg4N3eSKgPFoBc4gCR8TOMJsuxrA";
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key="+API+"&q="+newBird+"&limit=10&offset=0&rating=G&lang=en";

    // Write code between the dashes below to hit the queryURL with $ajax, then take the response data
    // and display it in the div with an id of movie-view

    // ------YOUR CODE GOES IN THESE DASHES. DO NOT MANUALLY EDIT THE HTML ABOVE.

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;
      
    // Saving the image_original_url property
    for (var i = 0; i < results.length; i++) {
     
        var birdsDiv = $('<div class="birdbird">');
      
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        
        // Creating and storing an image tag
        var birdsImage = $('<img class="gif playing">');

        // Setting the birdsImage src attribute to imageUrl
        // birdsImage.attr("name", "steady");
    
       
        birdsImage.attr("src", results[i].images.fixed_height_still.url);
        birdsImage.attr("data-still", results[i].images.fixed_height_still.url);
        //console.log("stillworks?");
        birdsImage.attr("data-play", results[i].images.fixed_height.url);

        birdsImage.attr("alt", buttonVar[0].id + "image");

        // Appending the paragraph and image tag to the animalDiv
        birdsDiv.append(p);
        birdsDiv.append(birdsImage);
        console.log(birdsImage);

        // Prepending the birdsImage to the images div
        $("#images").append(birdsDiv); 
    };

    $(".gif").on("click", function() {
 
      if($(this).hasClass("playing")){
        console.log(this);
        $(this).attr("src", $(this).attr("data-play"));
        $(this).removeClass("playing");
      
      } else {
        console.log(this);
        $(this).addClass("playing");
        $(this).attr("src", $(this).attr("data-still"));
      }
       
       
    });

      
    });

    // -----------------------------------------------------------------------

  });

});
      // Perfoming an AJAX GET request to our queryURL
     

    //   $(".gif").on("click", function() {
    //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    //     var state = $(this).attr("data-state");
    //     if (state === "still") {
    //       $(this).attr("src", $(this).attr("data-animate"));
    //       $(this).attr("data-state", "animate");
    //     } else {
    //       $(this).attr("src", $(this).attr("data-still"));
    //       $(this).attr("data-state", "still");
    //     }
    //   });
     

    //   // Setting the src attribute of the image to a property pulled off the result item
    //   animalImage.attr("src", results[i].images.fixed_height_still.url);
    //   animalImage.attr("data-still", results[i].images.fixed_height_still.url);
    //   //console.log("stillworks?");
    //   animalImage.attr("data-play", results[i].images.fixed_height.url);