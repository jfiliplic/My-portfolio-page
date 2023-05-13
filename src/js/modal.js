import { backToTopBtn, portfolioContainer } from "./elements";

export function initModal() {
  portfolioContainer.addEventListener("click", (event) => {
    event.preventDefault();

    const modalLinkClick = event.target.closest(".portfolio-link");

    if (!modalLinkClick) {
      return;
    } else {
      const modal = modalLinkClick.parentNode.nextElementSibling;
      const closeButton = modal.querySelector(".modal-close");

      let modalOpen = () => {
        modal.classList.add("is-open");
        modal.style.animation = "modalFadeIn 1s forwards";
        document.body.style.overflowY = "hidden";
        backToTopBtn.classList.remove("show-btn");
      };

      modalOpen();

      let modalClose = () => {
        modal.classList.remove("is-open");
        modal.removeEventListener("animationend", modalClose);
        document.body.style.overflowY = "scroll";
        backToTopBtn.classList.add("show-btn");
      };

      closeButton.addEventListener("click", () => {
        modal.style.animation = "modalFadeOut 1s forwards";
        modal.addEventListener("animationend", modalClose);
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          modal.style.animation = "modalFadeOut 1s forwards";
          modal.addEventListener("animationend", modalClose);
        }
      });
    }
  });
}
