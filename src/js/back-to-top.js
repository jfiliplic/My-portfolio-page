const targets = document.querySelectorAll(".button-target");
const backToTopBtn = document.querySelector(".back-to-top-btn");

function observerCallback(targets) {
  targets.forEach((target) => {
    if (target.isIntersecting) {
      backToTopBtn.classList.add("show-btn");
    } else {
      backToTopBtn.classList.remove("show-btn");
    }
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

let options = {
  threshold: 0.1,
};

const observer = new IntersectionObserver(observerCallback, options);
targets.forEach((target) => {
  observer.observe(target);
});

backToTopBtn.addEventListener("click", scrollToTop);

