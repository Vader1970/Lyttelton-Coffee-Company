// Hamburger Menu

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");
  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}

// Add to cart animation

const cartButtons = document.querySelectorAll(".cart-button");

cartButtons.forEach((button) => {
  button.addEventListener("click", cartClick);
});

function cartClick() {
  let button = this;
  button.classList.add("clicked");
}

// Star Ratings
const allStars = document.querySelectorAll(".star");

allStars.forEach((star, i) => {
  star.onclick = function () {
    let current_star_level = i + 1;

    allStars.forEach((star, j) => {
      if (current_star_level >= j + 1) {
        star.innerHTML = "&#9733";
      } else {
        star.innerHTML = "&#9734";
      }
    });
  };
});
