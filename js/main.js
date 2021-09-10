const navbar = document.querySelector(".navbar");
const homebg = document.querySelector(".home__background");
const menu = document.querySelector(".navbar__menu");
const links = document.querySelector(".navbar__links");
const sections = document.querySelectorAll("section");
const config = {
  rootMargin: "0px",
  threshold: [0.6, 0.9],
};

function handleLlinks() {
  if (window.innerWidth <= 991) {
    links.classList.toggle("visible");
  }
}

menu.addEventListener("click", handleLlinks);
links.addEventListener("click", handleLlinks);

window.addEventListener("scroll", function () {
  window.scrollY > 100 && (navbar.style.background = `#282a35`);
  window.scrollY < 100 && (navbar.style.background = `transparent`);
});

let observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      intersectionHandler(entry);
    }
  });
}, config);

sections.forEach((section) => {
  observer.observe(section);
});

function intersectionHandler(entry) {
  const id = entry.target.id;
  const currentlyActive = document.querySelector(".navbar__links  .active");
  const shouldBeActive = document.querySelector(
    ".navbar__links [data-ref=" + id + "]"
  );

  if (currentlyActive) {
    currentlyActive.classList.remove("active");
  }
  if (shouldBeActive) {
    shouldBeActive.classList.add("active");
  }
}

// window.addEventListener("mousemove", parallax);

// function parallax(e) {
//   elements.forEach((item) => {
//     const speed = item.getAttribute("data-speed");
//     console.log(speed);
//     const x = (window.innerWidth - e.pageX * speed) / 100;
//     const y = (window.innerHeight - e.pageY * speed) / 100;
//     item.style.transform = `translateX(${x}px) translateY(${y}px)`;
//   });
// }

ScrollReveal().reveal(".navbar", { delay: 180});
ScrollReveal().reveal(".home__profile", { delay: 180});
ScrollReveal().reveal(".home__title--primary", { delay: 180});
ScrollReveal().reveal(".home__title", { delay: 180});
ScrollReveal().reveal(".home__title--secondary", { delay: 180});
ScrollReveal().reveal(".section__title", { delay: 180});
ScrollReveal().reveal(".section__subtitle", { delay: 180});
ScrollReveal().reveal(".about__description", { delay: 180});
ScrollReveal().reveal(".about__summary", { delay: 180});
ScrollReveal().reveal(".button--cta", { delay: 180});
ScrollReveal().reveal(".skill__title", { delay: 180});
ScrollReveal().reveal(".skill__item", { delay: 180});
ScrollReveal().reveal(".services__item", { delay: 180});
ScrollReveal().reveal(".portfolio__item", { delay: 180});
ScrollReveal().reveal(".contact__item", { delay: 180});
ScrollReveal().reveal(".footer", { delay: 180});