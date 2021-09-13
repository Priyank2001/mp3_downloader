
import './App.css';
import React ,{ useState } from 'react';
import {Input}from '@material-ui/core';
import {BrowserRouter } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player';
const page = "/api"
// var song_element = document.createElement("AUDIO");
// song_element.setAttribute("controls", "controls");
// song_element.setAttribute("autoplay","true");
// document.body.appendChild(song_element);
// function playAudio() { 
//   song_element.play(); 
//   } 

// function pauseAudio() { 
//     song_element.pause(); 
//   } 
   
function song(){
                              //song_element.setAttribute("src",`http://192.168.0.104:8080/audio.mp3`);
                              
                              //song_element.setAttribute("style","display:none")
                              //song_element.load();
                              
}



//song_element.setAttribute("style","display:none")

function App() {
  const [link,setLink] = useState('');
  // const sendReq = (e) => {
  //   e.preventDefault();
  //   //console.log(link)
  // }
  const handleReq = (e) => {
    e.preventDefault();
    fetch(`${page}?videoUrl=${link}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      
      let detailNodes = {
        thumbnail: data.videoDetails.thumbnails[data.videoDetails.thumbnails.length - 1].url,
        title:data.videoDetails.media.song,
        artist:data.videoDetails.media.artist,
      }
      console.log(data)
      let html = ""
     
      
    })
    .catch((error) => console.log(error.message))
    
  }

  return (
    <div className="App">
      <BrowserRouter>
      
      <h1>Hello World</h1>
      <Input 
      className="app__input"
      placeholder="Paste your link here"
      onChange={(e) => setLink(e.target.value)}
      />
      <button
        //href={`${page}?url=${link}`}
        //href="https://www.google.com"
        onClick={(e) => handleReq(e)}
        
      >
        Submit
      </button>
      <ReactAudioPlayer 
      src="http://192.168.0.104:8080/audio.mp3" 
      autoPlay
      controls
      />
      </BrowserRouter>
    </div>
  );
}

export default App;
