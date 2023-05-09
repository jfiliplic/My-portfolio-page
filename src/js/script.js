import { initBackToTop } from "./back-to-top";
import { initNav } from "./navigation";
import { initModal } from "./modal";
import { initForm } from "./form";

const navBtn = document.querySelector(".menu-btn");
// const modalLinks = document.querySelectorAll(".portfolio-link");
// console.log(modalLinks);
const portfolios = document.querySelector(".portfolio-items");
const form = document.querySelector("form");

navBtn.addEventListener("click", initNav);

// modalLinks.forEach((modalLink) => {
//   modalLink.addEventListener("click", initModal);
// });
portfolios.addEventListener("mouseenter", initModal);

form.addEventListener("input", initForm);

initBackToTop();
