// Load cart items from localStorage

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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

console.log("Loaded Cart:", cart); // Debugging - Show stored cart data

// DOM Elements
const cartItemsContainer = document.querySelector(".cart-items");
const subtotalElement = document.getElementById("subtotal");
const taxElement = document.getElementById("tax");
const shippingElement = document.getElementById("shipping");
const totalElement = document.getElementById("total");

// Render Cart Items
function renderCartItems() {
  cartItemsContainer.innerHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    if (!item || typeof item.price !== "number") {
      console.error(`Invalid cart item at index ${index}:`, item);
      return;
    }

    subtotal += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-details">
        <h3 class="cart-item-title">${item.name}</h3>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="quantity-controls">
          <button onclick="updateQuantity(${index}, -1)" ${item.quantity === 1 ? "disabled" : ""}>-</button>
          <span>${item.quantity}</span>
          <button onclick="updateQuantity(${index}, 1)">+</button>
        </div>
        <button class="remove-item" onclick="removeItem(${index})">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
  });

  console.log("Rendered Cart Items:", cart); // Debugging - Verify cart rendering

  // Calculate totals
  const tax = subtotal * 0.1;
  const shipping = subtotal > 0 ? 10 : 0;
  const total = subtotal + tax + shipping;

  // Update totals in the DOM
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  shippingElement.textContent = `$${shipping.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// Update Quantity
function updateQuantity(index, change) {
  if (!cart[index]) return;

  if (cart[index].quantity === 1 && change === -1) {
    return; // Prevent reducing below 1
  }

  cart[index].quantity += change;
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
}

// Remove Item
function removeItem(index) {
  if (!cart[index]) return;

  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCartItems();
}

// Initialize Cart Page
renderCartItems();



document.querySelector(".checkout-btn").addEventListener("click", function () {
  window.location.href = "payment.html"; // Redirects to payment page
});
