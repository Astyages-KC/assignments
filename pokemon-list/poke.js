// const xhr = require("xhr")
const xhr = new XMLHttpRequest();
console.log("test");
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    const pokemonCritters = data.objects[0].pokemon;
    console.log(pokemonCritters);
    listOutDataToDOM(pokemonCritters);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr);
  }
};
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

function listOutDataToDOM(objects) {
  for (let i = 0; i < objects.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent =
      "Name: " + objects[i].name + "\n Resource: " + objects[i].resource_uri;
    document.body.appendChild(h1);
  }
}
