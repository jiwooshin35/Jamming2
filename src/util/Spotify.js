/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */
 import {Buffer} from 'buffer';
 var client_id = ''; // Your client id
 var client_secret = ''; // Your secret
 
 // your application requests authorization
 var authOptions = {
   url: 'https://accounts.spotify.com/api/token',
   headers: {
     method:'post',
          'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
   },
   form: {
     grant_type: 'client_credentials'
   },
   json: true
 };
 

 
 export const spotifySearch = async (keyword)=>{ 
   try{      console.log('hi')

    await fetch(authOptions, async function(error, response, body) {
      console.log('hi')

      if (true) {
        console.log('searching')

        // use the access token to access the Spotify Web API
        var token = body.access_token;
        var options = {
          url: `https://api.spotify.com/v1/search?q=name:Taylor&type=album,track,artist&include_external=audio`,
          headers: {
            'Authorization': 'Bearer ' + token
          },
          json: true
        };
        const response=await fetch(options, function(error, response, body) {
          console.log(body);
        })
        if(response.ok){
         const jsonResponse= await response.json()
         const musics=jsonResponse.tracks.items.map( (music)=>({
           id:music.id,
           artist:music.artists[0].name
         }) )
   
         return musics
       }
      }
    })
    console.log('hei')
    ;
   }catch(err){
     console.log(err)
   }
 }
   

//  fetch(url, {
//   method: 'POST',
//   headers: {
//     'Content-type': 'application/json',
//     'apikey': apiKey
//   },
//   body: data
// }).then(response => {
//   if (response.ok) {
//     return response.json();
//   }
//   throw new Error('Request failed!');
// }, networkError => {
//   console.log(networkError.message)
// })
// }


// export const spotifySearch = async (keyword)=>{
//   try{
//     const response= 
//   await fetch(`https://api.spotify.com/v1/search?q=name:${keyword}&type=album,track,artist&include_external=audio`,
//     {method:POST,headers:{Authorization: 'Bearer '+token }})
//     if(response.ok){
//       const jsonResponse= await response.json()
//       const musics=jsonResponse.tracks.items.map( (music)=>({
//         id:music.id,
//         artist:music.artists[0].name
//       }) )

//       return musics
//     }
//     throw new Error('Request failed')
// }catch(err){
//   console.log(err)
// }


// }
