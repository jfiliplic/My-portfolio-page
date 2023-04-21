const navigationToggle = document.querySelector(".menu-btn");
const navigation = document.querySelector("nav");
const welcome = document.querySelector(".welcome");

navigationToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-is-open");
  welcome.classList.toggle("welcome-to-right");
  welcome.style.transition = "transform ease-out 250ms";
  if (welcome.classList.contains("welcome-to-right")) {
    const welcomeRight = document.querySelector(".welcome-to-right");
    setTimeout(
      () =>
        welcomeRight.addEventListener(
          "click",
          () => {
            document.body.classList.remove("nav-is-open");
            welcome.classList.remove("welcome-to-right");
            welcome.style.transition = "transform ease-out 250ms";
          },
          { once: true }
        ),
      500
    );
  }
});

// const welcomeRight = document.querySelector(".welcome-to-right");
// if (welcomeRight) {
//   setTimeout(
//     () =>
//       welcomeRight.addEventListener(
//         "click",
//         () => {
//           document.body.classList.remove("nav-is-open");
//           welcome.classList.remove("welcome-to-right");
//           welcome.style.transition = "transform ease-out 250ms";
//         },
//         { once: true }
//       ),
//     1000
//   );
// }

navigation.addEventListener("click", () => {
  document.body.classList.remove("nav-is-open");
  welcome.classList.remove("welcome-to-right");
  welcome.style.transition = "0ms";
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.body.classList.remove("nav-is-open");
    welcome.classList.remove("welcome-to-right");
  }
});
