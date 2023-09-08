// const { google } = require('googleapis');
const axios = require('axios');

// Replace 'YOUR_API_KEY_HERE' with your actual YouTube Data API key
const API_KEY = 'AIzaSyBNtuRYnGkEdWN-FeyH_imjrBKtzwsKv7o';

let videos = []
async function Playlist(playlistId) {
  try {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`;

    let videoLinks = [];
    let videos = []


    let nextPageToken = '';
    while (true) {
      const response = await axios.get(playlistUrl + `&pageToken=${nextPageToken}`);
      const items = response.data.items;
      let temp = items[0].snippet.title;
      // let temp2 = items[0].snippet.title;
      let sea = temp.search("1");

      let num =temp.match(/\d+/g);
      

      // if (sea<1) {
        
      
      // if (num[0]>1) {
      //   console.log();
      //   console.log("last");
      // } }else {
      //   console.log("Start");
      // }
        for (const item of items) {
          // let name = item.snippet.title
      
          const videoId = item.snippet.resourceId.videoId;
          const videoLink = `https://www.youtube.com/watch?v=${videoId}`;
          
          let temp = items[0].snippet.title;
          // console.log(temp);
          let sea = temp.search("1");
          let la = temp.search("Last");

          let num =temp.match(/\d+/g);
;
          if (sea<0 || la > 0 ) {
            videoLinks.unshift(videoLink);

          } else {
            videoLinks.push(videoLink);

          }

          
        }
      

   

      nextPageToken = response.data.nextPageToken;
      if (!nextPageToken) {
        break;
      }
    }

    return videoLinks;
  } catch (error) {
    console.error('Error fetching playlist video links:', error.message);
    return [];
  }
}

var date = new Date()


console.log(date);



// Playlist('PLb2aaNHUy_gEjh8ZIk6L9yTWJMwzOvObb').then((videoTitles) => {
//   // Now you have an array of video titles from the playlist
//   // console.log(videoTitles);
//   for (let i = 0; i < videoTitles.length; i++) {
//     const element = videoTitles[i];
//     console.log(i+" "+element);

    
//   }
// })


module.exports = {
    down:Playlist
}

