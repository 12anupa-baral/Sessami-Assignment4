const clickHere = document.getElementById("clickHere");
const modal = document.getElementById("modal");
const downButton = document.getElementById("downButton");
const cancel = document.getElementById("cancel");
const icon = document.getElementById("icon");
const container = document.getElementById("container");

clickHere.addEventListener("click", function () {
  modal.style.display = "block";
  container.style.background = "rgba(0, 0, 0, 0.5)";
});

downButton.addEventListener("click", function () {
  modal.style.display = "none";
  container.style.background = "rgba(0, 0, 0, 0)";
});

cancel.addEventListener("click", function () {
  modal.style.display = "none";
  container.style.background = "rgba(0, 0, 0, 0)";
});

icon.addEventListener("click", function () {
  modal.style.display = "none";
  container.style.background = "rgba(0, 0, 0, 0)";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
    container.style.background = "rgba(0, 0, 0, 0)";
  }
});

clickHere.addEventListener("click", function () {
  if (display === "block") {
    clickHere.style.display = "none";
    container.style.background = "rgba(0, 0, 0, 0)";
  }
});
