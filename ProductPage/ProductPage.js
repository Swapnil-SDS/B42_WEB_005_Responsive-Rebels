// 1 Slider
const sliderWrapper = document.querySelector(".slider-wrapper");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let step = 150;

nextBtn.addEventListener("click", () => {
  sliderWrapper.scrollBy({ left: step, behavior: "smooth" });
});
prevBtn.addEventListener("click", () => {
  sliderWrapper.scrollBy({ left: -step, behavior: "smooth" });
});

// favoriteIcons 
const favoriteIcons = document.querySelectorAll(".product-favorite-icon-1");
  const popup = document.getElementById("favorites-popup");

  favoriteIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      popup.style.display = "block";
      setTimeout(() => {
        popup.style.display = "none";
      }, 2000); // Hide popup after 2 seconds
    });
  });