const clickHere = document.getElementById("clickHere");
const modal = document.getElementById("modal");
const container = document.getElementById("container");

function closeModal() {
  modal.style.display = "none";
  container.style.background = "";
}

clickHere.addEventListener("click", function () {
  modal.style.display = "block";
  container.style.background = "rgba(0, 0, 0, 0.5)";
});

const closeElements = [
  modal,
  document.getElementById("downButton"),
  document.getElementById("cancel"),
  document.getElementById("icon"),
];

closeElements.forEach((element) => {
  element.addEventListener("click", function (event) {
    if (event.target === element || event.target === modal) {
      closeModal();
    }
  });
});
