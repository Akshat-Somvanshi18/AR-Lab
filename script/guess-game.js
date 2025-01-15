let sound1 = new Howl({ src: ["../audio/guess-game/sound2.mp3"] });
let sound2 = new Howl({ src: ["../audio/guess-game/sound2.mp3"] });
let sound3 = new Howl({ src: ["../audio/guess-game/sound3.mp3"] });
let sound4 = new Howl({ src: ["../audio/guess-game/sound4.mp3"] });
let sound5 = new Howl({ src: ["../audio/guess-game/sound5.mp3"] });
let timer = new Howl({ src: ["../audio/guess-game/timer.mp3"] });

const audioMap = {
  sound1: sound1,
  sound2: sound2,
  sound3: sound3,
  sound4: sound4,
  sound5: sound5,
};

const flagMap = {
  sound1: true,
  sound2: true,
  sound3: true,
  sound4: true,
  sound5: true,
};

window.onload = function () {
  let markers = document.getElementsByClassName("game-markers");
  Array.from(markers).forEach(function (marker) {
    let name = marker.getAttribute("name");
    marker.addEventListener("markerFound", function () {
      if (flagMap[name] == true) {
        flagMap[name] = false;
        timer.play();
        audioMap[name].play();
      }
    });

    marker.addEventListener("markerLost", function () {
      timer.stop();
      audioMap[name].stop();
    });
  });
};

//   const audioMap = {
//     'A-Marker': ASound,
//     'B-Marker': BSound,
//     'C-Marker': CSound,
//     'D-Marker': DSound
//   };

//   window.onload = function(){

//     let markers = document.getElementsByClassName("alphabetMarker");
//     console.log(markers);
//     Array.from(markers).forEach(function(marker){
//       const name = marker.getAttribute("name");

//       marker.addEventListener("markerFound",function(){
//         audioMap[name].play();
//       })

//       marker.addEventListener("markerLost",function(){
//         audioMap[name].stop();
//       })

//     })

// let AMarker = document.getElementById("A-Marker");
// let BMarker = document.getElementById("B-Marker");
// let CMarker = document.getElementById("C-Marker");
// let DMarker = document.getElementById("D-Marker");

// AMarker.addEventListener("markerFound",function(){
//   ASound.play();
// });
// AMarker.addEventListener("markerLost",function(){
//   ASound.stop();
// });

// BMarker.addEventListener("markerFound",function(){
//   BSound.play();
// });
// BMarker.addEventListener("markerLost",function(){
//   BSound.stop();
// });

// CMarker.addEventListener("markerFound",function(){
//   CSound.play();
// });
// CMarker.addEventListener("markerLost",function(){
//   CSound.stop();
// });

// DMarker.addEventListener("markerFound",function(){
//   DSound.play();
// });
// DMarker.addEventListener("markerLost",function(){
//   DSound.stop();
// });

//   }
