const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    nav.style.background = "rgba(5, 5, 5, 0.92)";
  } else {
    nav.style.background = "rgba(5, 5, 5, 0.45)";
  }
});
