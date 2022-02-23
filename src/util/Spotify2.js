/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

 var request = require('request'); // "Request" library

 var client_id = 'fea91aa6c92a4ddca58823be9386d4a6'; // Your client id
 var client_secret = '73b453d73588440e8d79d0d3072b24e7'; // Your secret
 
 // your application requests authorization
 var authOptions = {
   url: 'https://api.spotify.com/v1/search?q=name:Taylor&type=album,track,artist&include_external=audio',
   headers: {
     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
   },
   form: {
     grant_type: 'client_credentials'
   },
   json: true
 };
 const func=(keyword)=>{

 request2.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
  
      // use the access token to access the Spotify Web API
      var token = body.access_token;
      var options = {
        url: 'https://api.spotify.com/v1/users/jmperezperez',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request2.get(options, function(error, response, body) {
        console.log(body);
      });
    }
  });
 }

 console.log('hi')
 export{func} 