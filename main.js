let slider = document.querySelector(".slider");

let isPressed = false;
let startX;
let scrollX;

slider.addEventListener("mousedown", e => {
  isPressed = true;
  slider.classList.add("active");
  startX = e.pageX;
  scrollX = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isPressed = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isPressed = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", e => {
  if (!isPressed) {
    return;
  }
  e.preventDefault();
  let x = e.pageX;
  let walk = (x - startX) * 3;
  slider.scrollLeft = scrollX - walk;
});
