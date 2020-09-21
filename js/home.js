function myFunction() {
var x = document.getElementById("nav_mobile");
if (x.style.left === "33%") {
  // x.style.width = "100vw";
  x.style.left = "100%";
  x.style.width = "0%";
} else {
  // x.style.width = "0vw";
  x.style.left = "33%";
  x.style.width = "67%";
}
}
