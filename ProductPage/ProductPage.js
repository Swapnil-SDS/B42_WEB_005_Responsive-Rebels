// 1. General Slider
const generalSliderWrapper = document.querySelector(".slider-wrapper");
const generalPrevBtn = document.querySelector(".prev-btn");
const generalNextBtn = document.querySelector(".next-btn");

const scrollStep = 150;

generalNextBtn.addEventListener("click", () => {
  generalSliderWrapper.scrollBy({ left: scrollStep, behavior: "smooth" });
});

generalPrevBtn.addEventListener("click", () => {
  generalSliderWrapper.scrollBy({ left: -scrollStep, behavior: "smooth" });
});

// 2. Product Slider 1 Navigation
const productSliderWrapper = document.querySelector(".product-slider-1-wrapper");
const productPrevBtn = document.querySelector(".product-slider-1-prev");
const productNextBtn = document.querySelector(".product-slider-1-next");
const productCards = document.querySelectorAll(".product-slider-1-card");

if (productCards.length > 0) {
  const productCardWidth = productCards[0].offsetWidth + 25; // Card width + gap

  // Hide prev button initially
  productPrevBtn.style.display = "none";

  // Scroll next set of 4 cards
  productNextBtn.addEventListener("click", () => {
    productSliderWrapper.scrollBy({ left: productCardWidth * 4, behavior: "smooth" });
  });

  // Scroll previous set of 4 cards
  productPrevBtn.addEventListener("click", () => {
    productSliderWrapper.scrollBy({ left: -productCardWidth * 4, behavior: "smooth" });
  });

  // Hide/Show navigation buttons on scroll
  productSliderWrapper.addEventListener("scroll", () => {
    productPrevBtn.style.display = productSliderWrapper.scrollLeft > 0 ? "block" : "none";
    productNextBtn.style.display =
      productSliderWrapper.scrollLeft + productSliderWrapper.clientWidth >= productSliderWrapper.scrollWidth
        ? "none"
        : "block";
  });
}

// 3. Favorite Icons
const favoriteButtons = document.querySelectorAll(".product-slider-1-favorite");
const favoritePopup = document.getElementById("product-slider-1-fav-popup");

favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const icon = button.querySelector("i");

    // Toggle classes and colors
    icon.classList.toggle("fas");
    icon.classList.toggle("far");
    icon.style.color = icon.classList.contains("fas") ? "red" : "black";

    favoritePopup.textContent = icon.classList.contains("fas") 
      ? "Added to Favorites!" 
      : "Removed from Favorites!";

    // Show popup
    favoritePopup.style.display = "block";
    setTimeout(() => {
      favoritePopup.style.display = "none";
    }, 1500);
  });
});

// 4. Cart Functionality
const cartButtons = document.querySelectorAll(".product-slider-1-cart-btn");
const cartPopup = document.getElementById("product-slider-1-cart-popup");

cartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartPopup.style.display = "block";
    setTimeout(() => {
      cartPopup.style.display = "none";
    }, 1500);
  });
});

// 5. Product Slider 2 Navigation (Fixed Issues)
const productSliderWrapper2 = document.querySelector(".product-slider-2-wrapper");
const productPrevBtn2 = document.querySelector(".product-slider-2-prev");
const productNextBtn2 = document.querySelector(".product-slider-2-next");
const productCards2 = document.querySelectorAll(".product-slider-2-card");

if (productCards2.length > 0) {
  const productCardWidth2 = productCards2[0].offsetWidth + 25; // Card width + gap

  // Hide prev button initially
  productPrevBtn2.style.display = "none";  // FIXED

  // Scroll next set of 4 cards
  productNextBtn2.addEventListener("click", () => {  // FIXED
    productSliderWrapper2.scrollBy({ left: productCardWidth2 * 4, behavior: "smooth" });  // FIXED
  });

  // Scroll previous set of 4 cards
  productPrevBtn2.addEventListener("click", () => {  // FIXED
    productSliderWrapper2.scrollBy({ left: -productCardWidth2 * 4, behavior: "smooth" });  // FIXED
  });

  // Hide/Show navigation buttons on scroll
  productSliderWrapper2.addEventListener("scroll", () => {  // FIXED
    productPrevBtn2.style.display = productSliderWrapper2.scrollLeft > 0 ? "block" : "none";  // FIXED
    productNextBtn2.style.display =
      productSliderWrapper2.scrollLeft + productSliderWrapper2.clientWidth >= productSliderWrapper2.scrollWidth
        ? "none"
        : "block";
  });
}
