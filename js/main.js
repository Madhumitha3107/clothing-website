// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to Cart Function
function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to cart!");
}

// Display Cart Items
function displayCart() {
    const cartContainer = document.getElementById("cart-container");
    const totalAmountElement = document.getElementById("totalAmount");

    if (!cartContainer) return;

    cartContainer.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartContainer.innerHTML += `
            <div class="cart-item">
                <p><strong>${item.name}</strong></p>
                <p>₹${item.price}</p>
                <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
            </div>
        `;
    });

    totalAmountElement.innerText = total;
}

// Remove Item from Cart
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Display cart when on cart page
displayCart();
