
var sports = [  "Soccer", "Hockey", "Football", "Basketball", "Rugby", "Cricket", "Baseball", "College Football",
                "College Basketball", "Tennis", "Golf", "Boxing", "MMA", "Horse Racing", "ESports", "X Games"];
var key = "&api_key=QfwMKTc5QdOIzKJplx2oelwvFRp2jnEQ";
// console.log(key);
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

    $("#sports").empty();

    var sport = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + sport + limit + key;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        // $("#sports").empty();
        console.log('response data ',response.data);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);

            var gifimg = $("<img>");
            var rating = "Rating: " + results[i].rating;
            var orig = results[i].images.original_still.url;

            gifimg.attr('src', orig);
            gifimg.attr('data-state', 'still');
            gifimg.attr('data-still', results[i].images.original_still.url);
            console.log(results[i].images);
            gifimg.attr('data-animate', results[i].images.original.url);

            gifimg.addClass("gifimg");

            $("#sports").append("<p>" + rating + "</p>");
            $("#sports").append(gifimg);
            // $(gifimg).append(rating);
        }
        myButtons();
    })
}

$(document).on("click",".gifimg" ,function() {
    var state = $(this).attr("data-state");

    if (state === 'still') {
        $(this).attr('src', $(this).attr('data-animate'));
        $(this).attr('data-state', 'animate');
    } else {
        $(this).attr('src', $(this).attr('data-still'));
        $(this).attr('data-state', 'still');
    }
});

$(document).on("click", ".button", gifsOngifsOngifs);

myButtons();
// gifsOngifsOngifs();

