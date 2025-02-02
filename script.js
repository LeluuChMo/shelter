window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var currentSlide = 0;
  var slides = document.querySelectorAll(".slider img");
  slides[currentSlide].style.display = "block";
  function showNextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = "block";
  }
  setInterval(showNextSlide, 5000);
});
