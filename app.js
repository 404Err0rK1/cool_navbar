const icons = document.querySelectorAll(".icon");
const indicator = document.getElementById("indicator");

icons.forEach((icon, index) =>
  icon.addEventListener("click", () => moveIndicator(index))
);

function moveIndicator(index) {
  icons.forEach((icon) => icon.classList.remove("active"));
  icons[index].classList.add("active");

  indicator.style.transform = `translate(${120 * index}px, -50%)`;
}
