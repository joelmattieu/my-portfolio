const $navBtn = document.getElementById("nav-btn");
const $nav = document.getElementById("nav");

export default function hamburger() {
  document.addEventListener("click", (e) => {
    if (e.target.matches(".hamburger") || e.target.matches(".hamburger *")) {
      $nav.classList.toggle("visible");
      $navBtn.classList.toggle("is-active");
    }

    if (e.target.matches(".nav a")) {
      $nav.classList.toggle("visible");
      $navBtn.classList.toggle("is-active");
    }
  });
}
