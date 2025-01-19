function func() {
  console.log("heyyyyyyy");
  alert("hey");
}

let ASound = new Howl({ src: ["../audio/alphabets/A.mp3"] });
let BSound = new Howl({ src: ["../audio/alphabets/B.mp3"] });
let CSound = new Howl({ src: ["../audio/alphabets/C.mp3"] });
let DSound = new Howl({ src: ["../audio/alphabets/D.mp3"] });

const audioMap = {
  "A-Marker": ASound,
  "B-Marker": BSound,
  "C-Marker": CSound,
  "D-Marker": DSound,
};

window.onload = function () {
  let markers = document.getElementsByClassName("alphabetMarker");
  console.log(markers);
  Array.from(markers).forEach(function (marker) {
    const name = marker.getAttribute("name");

    marker.addEventListener("markerFound", function () {
      audioMap[name].play();
    });

    marker.addEventListener("markerLost", function () {
      audioMap[name].stop();
    });
  });

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
};
