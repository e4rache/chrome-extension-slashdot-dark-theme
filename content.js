const black = "#000";
const dark = "#252525";
const light = "#f0f0f0";
const red = "rgb(200,100,100)";

let d = document;

let divs = d.getElementsByTagName("div");
for (e of divs) {
  e.style["background-color"] = dark;
  e.style["color"] = light;
}

let sections = d.getElementsByTagName("section");
for (e of sections) {
  e.style["background-color"] = dark;
  e.style["color"] = light;
}

let body = d.getElementsByTagName("body")[0];
body.style["background-color"] = dark;
body.style["color"] = light;

let h2 = d.getElementsByTagName("h2");
for (e of h2) {
  e.style.backgroundColor = black;
}

let links = d.getElementsByTagName("a");
for (e of links) {
  e.style.color = red;
}

let announcement = d.getElementById("announcement");
announcement.parentNode.removeChild(announcement);
