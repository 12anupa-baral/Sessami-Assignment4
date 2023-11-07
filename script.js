// Get references to elements
const clickHere = document.getElementById("clickHere");
const modal = document.getElementById("modal");
const downButton = document.getElementById("downButton");
const icon = document.getElementById("icon");
// const main = document.getElementsByTagName("main");

clickHere.addEventListener("click", function () {
  modal.style.display = "block";
});

downButton.addEventListener("click", function () {
  modal.style.display = "none";
});

icon.addEventListener("click", function () {
  modal.style.display = "none";
});

// main.addEventListener("click", function (event) {
//   if (event.target === "main") {
//     modal.style.display = "block";
//   }
// });

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

clickHere.addEventListener("click", function () {
  if (display === "block") {
    clickHere.style.display = "none";
  }
});
