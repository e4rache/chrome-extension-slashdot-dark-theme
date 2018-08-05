const black = "#000";
const dark = "#252525";
const light = "#f0f0f0";
const red = "rgb(200,100,100)";

let d = document;

let divs = d.querySelectorAll("div");
for (e of divs) {
  e.style["background-color"] = dark;
  e.style["color"] = light;
}

let sections = d.querySelectorAll("section");
for (e of sections) {
  e.style["background-color"] = dark;
  e.style["color"] = light;
}

let body = d.querySelectorAll("body")[0];
body.style["background-color"] = dark;
body.style["color"] = light;

let h2 = d.querySelectorAll("h2");
for (e of h2) {
  e.style.backgroundColor = black;
}

let h4 = d.querySelectorAll("h4");
for (e of h4) {
  e.style.background = black;
  e.style["background-image"] =
    "-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgb(0,0,0)), to(rgb(0,0,0)));";
}

let titles = d.querySelectorAll(".title");
for (t of titles) {
  t.style.backgroundColor = black;
}

let links = d.querySelectorAll("a");
for (e of links) {
  e.style.color = red;
}

let announcement = d.querySelector("#announcement");
announcement.parentNode.removeChild(announcement);
