let factMap = {
    "sun-marker": "The Sun is the star at the center of the Solar System, providing energy essential for life on Earth. It is about 4.6 billion years old, accounts for 99.86% of the Solar System's mass, and has a core temperature of around 15 million degrees Celsius.",
    "mercury-marker": "Mercury, the closest planet to the Sun and the smallest in the Solar System, has no atmosphere, leading to extreme temperature fluctuations. A day on Mercury is longer than its year, and its large iron core makes up about 85% of its radius.",
    "venus-marker": "Venus, the second planet from the Sun, has a thick atmosphere causing a runaway greenhouse effect, making it the hottest planet with surface temperatures exceeding 450°C. A day on Venus is longer than its year, and it rotates in the opposite direction to most planets, so the Sun rises in the west.",
    "earth-marker": "Earth, the third planet from the Sun, is the only known planet to support life. It has a diverse climate, abundant water, and a protective atmosphere that shields it from harmful solar radiation and debris.",
    "mars-marker": "Mars, the fourth planet from the Sun, is known as the 'Red Planet' due to its iron oxide-rich surface. It has the largest volcano in the Solar System (Olympus Mons) and features ancient riverbeds, suggesting it once had liquid water.",
    "jupiter-marker": "Jupiter, the fifth planet from the Sun, is the largest planet in the Solar System. It has a Great Red Spot, a massive storm persisting for centuries, and over 90 known moons, including the volcanic Io and icy Europa.",
    "saturn-marker": "Saturn, the sixth planet from the Sun, is famous for its stunning ring system composed of ice and rock. It is a gas giant with a low density, meaning it could float in water if a large enough body existed.",
    "uranus-marker": "Uranus, the seventh planet from the Sun, has a unique tilt, rotating on its side. It has a pale blue color due to methane in its atmosphere and is the coldest planet in the Solar System.",
    "neptune-marker": "Neptune, the eighth planet from the Sun, is a blue gas giant known for its intense storms, including the fastest winds recorded in the Solar System. It has 14 known moons and a faint ring system."
};
  

window.onload = function () {
  let markers = document.getElementsByClassName("solar-system-markers");
  Array.from(markers).forEach((marker) => {
    console.log(marker);
    let name = marker.getAttribute("name");
    let textBox = document.getElementById("text-box");
    let text = document.getElementById("text");

    marker.addEventListener("markerFound", function () {
      text.innerHTML = factMap[name];
      textBox.style.display = "block";
    });

    marker.addEventListener("markerLost", function () {
      text.innerHTML = "";
      textBox.style.display = "none";
    });
  });
};
