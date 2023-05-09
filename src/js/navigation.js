import { navigationToggle } from "./elements";

export async function initNav() {
  const navigation = document.querySelector("nav");
  const welcome = document.querySelector(".welcome");

  navigationToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    document.body.classList.toggle("nav-is-open");
  });

  welcome.addEventListener("click", () => {
    if (document.body.classList.contains("nav-is-open")) {
      document.body.classList.remove("nav-is-open");
    }
  });

  navigation.addEventListener("click", (e) => {
    document.body.classList.remove("nav-is-open");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      document.body.classList.remove("nav-is-open");
    }
  });
}
