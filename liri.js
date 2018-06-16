require("dotenv").config();

var keys = require("./keys.js");


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var command = process.argv[2];

switch (command)
{
    case 'my-tweets':
    //Display last 20 tweets
    client.get(path, params, callback);
    client.get('favorites/list', function(error, tweets, response) {
        if(error) throw error;
        console.log(tweets);  // The favorites.
        console.log(response);  // Raw response object.
      });
        break;
    case 'spotify-this-song':
    /*Get Song info of 
    Artist(s)
    The song Name
    A preview link of the song from Spotify
    The album that the song is from 
    Default value "The Sign" by Ace of Base*/
        break;
    case 'movie-this'://Song name id process.argv 3to infinit string 
/** Display 
 * Title of the movie.
   * Year the movie came out.
   * IMDB Rating of the movie.
   * Rotten Tomatoes Rating of the movie.
   * Country where the movie was produced.
   * Language of the movie.
   * Plot of the movie.
   * Actors in the movie.

   Default value Mr. Nobody
*/

        break;
    case 'do-what-it-says':
//Read random command from random.txt 
//txt default spotify-this-song,"I Want it That Way"


        break;
    default:

}








