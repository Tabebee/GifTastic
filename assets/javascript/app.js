
var sports = [  "Soccer", "Hockey", "Football", "Basketball", "Rugby", "Cricket", "Baseball", "College Football",
                "College Basketball", "Tennis", "Golf", "Boxing", "MMA", "Horse Racing", "ESports", "X Games"];
var key = "&api_key=p61cW0ySxTXCRmZWsUKICmpiMZqEKYjc";
var limit = "&limit=10";
// var but;
function myButtons() {
    // To prevent duplicate buttons
    $("#sportButtons").empty();

//    For loop to create inital and future buttons from variable sports
    for (var i = 0; i < sports.length; i++) {
        var but = $("<button>");
        but.addClass("button");
        but.text(sports[i]);
        but.attr("data-name", sports[i]);
//    Append buttons to ID
        $("#sportButtons").append(but);
    }
}
//  Create function to allow users to add buttons
$("#add").on("click", function(event) {

    event.preventDefault();

    var newInput = $("#sport-input").val().trim();
    sports.push(newInput);
//  runs function again with inital buttons and new user button
    myButtons();
});


function gifsOngifsOngifs() {

    var sport = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + limit + key;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // $("#sports").empty();
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);

            var gifimg = $("<img>");
            var rating = "Rating: " + results[i].rating;

            gifimg.attr('src', results[i].original_still);

            $("#sports").append(gifimg);
            $("#sports").prepend(rating);
        }
        myButtons();
    })
}

// $("#sportButtons").on("click", function() {
//     var sport = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + sport + "&api_key=p61cW0ySxTXCRmZWsUKICmpiMZqEKYjc";
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).done(function (response) {
//         var url = response.data.url;
//         var image = $("<img>");
//         image.attr("src", url);
//         // image.attr("alt", button.val());
//         console.log(but);
//         $("#sports").append(image);
//     })
// });
//
// $(".button").on("click", function() {
//     console.log("here")
// });


myButtons();
gifsOngifsOngifs();