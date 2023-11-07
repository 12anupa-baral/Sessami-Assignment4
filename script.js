const clickHere = document.getElementById("clickHere");
const modal = document.getElementById("modal");
const downButton = document.getElementById("downButton");
const cancel = document.getElementById("cancel");
const icon = document.getElementById("icon");

clickHere.addEventListener("click", function () {
  modal.style.display = "block";
});

downButton.addEventListener("click", function () {
  modal.style.display = "none";
});

cancel.addEventListener("click", function () {
  modal.style.display = "none";
});

icon.addEventListener("click", function () {
  modal.style.display = "none";
});

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
