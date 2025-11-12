// Select all "Add to Cart" buttons
let cartButtons = document.querySelectorAll(".add-to-cart");

// Loop through each button and add click event
cartButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        e.preventDefault(); // prevent default link behavior

        // Get product details from data attributes
        let productName = button.getAttribute("data-name");
        let productPrice = button.getAttribute("data-price");
        let productImage = button.getAttribute("data-image");

        // Create a product object
        let product = {
            name: productName,
            price: productPrice,
            image: productImage,
            quantity: 1
        };

        // Get existing cart from localStorage or empty array
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        // Check if product is already in cart
        let existingProduct = cart.find(item => item.name === product.name);
        if (existingProduct) {
            existingProduct.quantity += 1; // increment quantity
        } else {
            cart.push(product); // add new product
        }

        // Save back to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} has been added to your cart!`);

    });
});


updateCartCount();


