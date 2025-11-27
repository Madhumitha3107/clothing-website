// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add to cart function
function addToCart(name, price) {
    cart.push({ name, price });

    alert(name + " added to cart!");

    localStorage.setItem("cart", JSON.stringify(cart));
}

// Display cart items on cart page
if (window.location.pathname.includes("cart.html")) {
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    let total = 0;

    cart.forEach(item => {
        total += item.price;

        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <p>${item.name} - ₹${item.price}</p>
        `;
        container.appendChild(div);
    });

    totalElement.textContent = "Total: ₹" + total;
}
