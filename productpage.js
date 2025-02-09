  // Get necessary elements
const menuBtn = document.querySelector('.menu-btn');
const menuPopup = document.getElementById('menuPopup');
const overlay = document.getElementById('overlay');

// Toggle menu function
function toggleMenu() {
    menuPopup.classList.toggle('active');
    overlay.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Add click event to menu button
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking overlay
overlay.addEventListener('click', toggleMenu);

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuPopup.classList.contains('active')) {
        toggleMenu();
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuPopup.contains(e.target) && !menuBtn.contains(e.target) && menuPopup.classList.contains('active')) {
        toggleMenu();
    }
});



// Add this JavaScript for the location popup functionality
const locationBtn = document.querySelector('.location-btn');
const locationPopup = document.getElementById('locationPopup');
const closeLocation = document.getElementById('closeLocation');

locationBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    locationPopup.classList.toggle('active');

    // Close menu popup if it's open
    if (menuPopup.classList.contains('active')) {
        menuPopup.classList.remove('active');
        overlay.classList.remove('active');
    }
});

closeLocation.addEventListener('click', (e) => {
    e.stopPropagation();
    locationPopup.classList.remove('active');
});

// Close location popup when clicking outside
document.addEventListener('click', (e) => {
    if (!locationPopup.contains(e.target) && !locationBtn.contains(e.target)) {
        locationPopup.classList.remove('active');
    }
});

// Close location popup on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && locationPopup.classList.contains('active')) {
        locationPopup.classList.remove('active');
    }
});

// navbar

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






















// Select all Add to Cart buttons
const addToCartButtons = document.querySelectorAll(
    ".product-add-to-cart, .product-slider-1-cart-btn"
  );
  
  // Function to add product to localStorage cart
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productCard = event.target.closest(".product-card-1, .product-slider-1-card");
  
      // Identify selectors based on card type
      const nameSelector = productCard.classList.contains("product-card-1")
        ? ".product-title"
        : ".product-slider-1-title";
      const priceSelector = productCard.classList.contains("product-card-1")
        ? ".discounted-price"
        : ".product-slider-1-discounted";
      const imageSelector = productCard.classList.contains("product-card-1")
        ? ".product-img"
        : ".product-slider-1-img";
  
      // Extract product details
      const product = {
        name: productCard.querySelector(nameSelector).innerText,
        price: parseFloat(productCard.querySelector(priceSelector).innerText.replace("$", "")),
        image: productCard.querySelector(imageSelector).src,
        quantity: 1,
      };
  
      console.log("Adding product:", product);
  
      // Retrieve existing cart data from localStorage
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
      // Check if product already exists in cart
      const existingProduct = cart.find((item) => item.name === product.name);
      if (existingProduct) {
        existingProduct.quantity += 1;
        console.log("Updated quantity:", existingProduct.quantity);
      } else {
        cart.push(product);
        console.log("Product added:", product);
      }
  
      // Save updated cart back to localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log("Updated cart:", cart);
  
      alert("Product added to cart!");
    });
  });
  
  // Redirect to Cart Page
  document.getElementById("go-to-cart").addEventListener("click", () => {
    window.location.href = "cart.html";
  });
  