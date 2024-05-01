import { supabase } from "./db";

console.log("client",supabase);

async function fetchProducts() {
    const { data, error } = await supabase
        .from('product')
        .select('product_name, product_category, product_price, product_image');

    if (error) {
        console.error('Error fetching products:', error.message);
        return [];
    }

    console.log('Fetched Products:',data);
    return data || [];
}

async function addProductPage(clickedProduct) { 
    const productDetails = document.querySelector('.product-details');
    if (productDetails) { // Ensure the element exists before updating its content
        const containerHTML = `
            <div class="container1">
                <div class="product-image">
                    <img src="${clickedProduct.product_image}" alt="${clickedProduct.product_name}" class="product_img">
                </div>
                <div class="product-info">  
                    <div>
                        <h3>${clickedProduct.product_name}</h3>
                        <p>Price: ₹${clickedProduct.product_price}</p>
                    </div>
                    <p>Category: ${clickedProduct.product_category}</p>
                    <!-- Add more product details here if needed -->
                    <button style="display: flex; gap: 10px;" id="addtocart">
                        Add to Cart 
                        <img src="/images/cart.png" alt="">
                    </button> 
                    <button>BUY</button>    
                    <div style="display:block;">
                        <h4>Description:</h4> 
                        <p style="font-weight:100;color:rgba(150, 150, 150);">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur hic, commodi, tempore rerum ut illo quam nemo sed
                            minima dolores iure! Error nam odio, facilis sunt molestias quam officia consectetur. 
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt quidem non porro quisquam officia consequuntur
                            maxime, est repellat quos numquam hic quo qui sequi distinctio ipsum? Atque minima inventore sapiente!
                        </p> 
                    </div>  
                    <hr>  
                    <div style="display:block;"> 
                        <h4>Qualities:</h4> 
                        <ul style="list-style-type: disc;">
                            <li>Only the best materials</li>
                            <li>Ethically and locally made</li>
                            <li>Pre-washed and pre-shrunk</li>
                            <li>Machine wash cold with similar colors</li>
                        </ul>
                    </div> 
                    <div style="display:flex; gap:40px;">
                        <div style="height:100px;width:300px;display:block;background-color: rgba(240,240,240);border: 2px solid rgba(150,150,150);border-radius: 30px;"> 
                            <img src="/images/cart.png" alt="not found"> 
                            <h4>Deliveries and services at home</h4>                    
                        </div>
                        <div style="height:100px;width:300px;display:block;background-color: rgba(240,240,240);border: 2px solid rgba(150,150,150);border-radius: 30px;"> 
                            <h2>₹</h2> 
                            <h4>Loyalty Rewards</h4>                    
                        </div>
                    </div>
                </div>
            </div>
        `;
        productDetails.innerHTML = containerHTML;
    } else {
        console.error("Element with class 'product-details' not found.");
    }
} 
 
// function addToCart(product) {
//     const cartContainer = document.getElementById('cart-container');
//     cartContainer.innerHTML += ` 
//         <div class="cart_info">
//             <img src="${product.product_image}" alt="${product.product_name}"> 
//             <div>
//                 <p style="margin:10px 0px">${product.product_name}</p>
//                 <p style="margin:10px 0px">Price: ₹${product.product_price}</p>
//             </div> 
//             <button class="remove-from-cart">Remove</button>
//         </div>
//     `;

//     // Append the product div to the cart container 
//     const removeButtons = document.querySelectorAll('.remove-from-cart');
//     removeButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             button.closest('.cart-info').remove();
//         });
//     });
// }
 
function addToCart(product) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); 
    console.log(cartItems);
} 

function generateCartContent() { 
    console.log('contents are being fetched.')
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartContainer = document.getElementById('cart-container'); 
    const sumContainer = document.querySelector('.Sum');
    let totalPrice = 0; 

    cartContainer.innerHTML = '';
    cartItems.forEach(product => {
        cartContainer.innerHTML += `
            <div class="cart_info">
                <img src="${product.product_image}" alt="${product.product_name}"> 
                <div>
                    <p>${product.product_name}</p>
                    <p>Price: ₹${product.product_price}</p>
                </div> 
                <button class="remove-from-cart">Remove</button>
            </div>
        `; 
        totalPrice += parseFloat(product.product_price);
    });  
    sumContainer.textContent = `Total: ₹${totalPrice.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', async function () {
    console.log('DOMContentLoaded event triggered');
    const clickedIndex = localStorage.getItem('clickedIndex');
    if (clickedIndex !== null) {
        const products = await fetchProducts();
        if (products.length > clickedIndex) {
            const clickedProduct = products[clickedIndex];
            addProductPage(clickedProduct); 
             
            const addToCartButton = document.getElementById('addtocart');
            addToCartButton.addEventListener('click', function() {
                addToCart(clickedProduct);
            }); 
        } else {
            console.log("Product not found for the stored index.");
        }
    } else {
        console.log("No clicked index found in local storage.");
    }  
}); 
 
document.addEventListener('DOMContentLoaded',async function() {
    generateCartContent(); 
    console.log('is it working!');
});

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-from-cart')) {
        const index = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode);
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        generateCartContent();
    }
}); 