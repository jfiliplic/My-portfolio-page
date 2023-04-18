const navigationToggle = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");
const welcome = document.querySelector(".welcome");

navigationToggle.addEventListener("click", (_) => {
  document.body.classList.toggle("nav-is-open");
  welcome.style.transition = "transform ease-out 250ms";
});

navigation.addEventListener("click", (_) => {
  document.body.classList.remove("nav-is-open");
  welcome.style.transition = "0ms";
});
