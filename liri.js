var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];
var len = process.argv.length;
var param = "";
var args = process.argv;
for (var i = 3; i < len; i++)
{
    if (i == len - 1)
    {
        param = param + args[i];
    } else
    {
        param = param + args[i] + " ";
    }
}
param = param.trim();
console.log(command);
console.log(param)

switch (command)
{
    case 'my-tweets':
        client.get('statuses/user_timeline', function (error, tweets, response)
        {
            if (error) throw error;

            var myTweets = eval(tweets)
            var len = tweets.length;

            console.log("Your last 20 Tweets are:")
            for (var i = 0; i < len; i++)
            {
                console.log("\n------------------------------------------------");
                console.log("Tweet: " + myTweets[i].text);
                console.log("Date Posted: " + myTweets[i].created_at)
                console.log("------------------------------------------------");
            }
        });
        break;

    case 'spotify-this-song':

        if (param == "")
        {
            param = "The Sign"// THe Sign by Ace of Base
        }
        spotify.search({ type: 'track', query: 'The Sign' })
            .then(function (response)
            {
                var songName = "";
                var artist = "";
                var link;
                var album;

                console.log(response.tracks.items);

                console.log("------------------------------------------------");
                console.log("Artist(s): " + artist);
                console.log("Song Name: " + songName);
                console.log("Preview: " + link);
                console.log("Album: " + album);
                console.log("------------------------------------------------");


            })
            .catch(function (err)
            {
                console.log(err);
            });
        break;

    case 'movie-this'://Song name id process.argv 3to infinit string 

        if (param == "")
        {
            param = "Mr. Nobody";
        }
        var queryUrl = "http://www.omdbapi.com/?t=" + param + "&y=&plot=short&apikey=trilogy";

        console.log(queryUrl);

        request(queryUrl, function (error, response, body)
        {
            if (!error && response.statusCode === 200)
            {
                console.log("------------------------------------------------");
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year Released: " + JSON.parse(body).Year);
                console.log("IMDB Rating: " + JSON.parse(body).imdbRating);

                var len = JSON.parse(body).Ratings.length;
                var rating = JSON.parse(body).Ratings
                var tomatoRating;
                for (var i = 0; i < len; i++)
                {
                    if (rating[i].Source == "Rotten Tomatoes")
                    {
                        tomatoRating = rating[i].Value;
                    }
                }
                if (!tomatoRating)
                {
                    tomatoRating = "No Rating Available";
                }

                console.log("Rotten Tomatos Rating: " + tomatoRating);
                console.log("Country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Actors and/or Actresses: " + JSON.parse(body).Actors);
                console.log("------------------------------------------------");
                console.log("The Release Year is: " + JSON.stringify(JSON.parse(body), null, 2));
            }
        });
        break;

    case 'do-what-it-says':
        //Read random command from random.txt 
        //txt default spotify-this-song,"I Want it That Way"


        break;
    default:

}








