let markers = document.getElementsByClassName("shapes-marker");
let circle = document.getElementById("circle");
let triangle = document.getElementById("triangle");
let square = document.getElementById("square");
let heart = document.getElementById("heart");

let videoMap = {
  "circle": circle,
  "triangle": triangle,
  "square": square,
  "heart": heart,
};

Array.from(markers).forEach((marker) => {
  let markerName = marker.getAttribute("name");
  marker.addEventListener("markerFound", () => {
    videoMap[markerName].play().catch((error) => {
      console.log("video error");
    });
  });

  marker.addEventListener("markerLost", () => {
    videoMap[markerName].pause().catch((error) => {
      console.log("video error");
    });
  });
});
