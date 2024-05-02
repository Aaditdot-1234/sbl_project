import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://vwocixgrlniasvjsyoea.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3b2NpeGdybG5pYXN2anN5b2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NDMzNzYsImV4cCI6MjAyOTExOTM3Nn0.HAOx-XhRdsvNF__NiBBxKxND35swUQzBJenCLEpe6F8'
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("cleint", supabase); 

export { supabase }; 

// async function fetchProducts() {
//     const { data, error } = await supabase
//         .from('product')
//         .select('product_name, product_category, product_price, product_image');

//     if (error) {
//         console.error('Error fetching products:', error.message);
//         return [];
//     }
 
//     console.log('Fetched Products:',data);
//     return data || [];
// }
 
async function fetchProducts(category) {
    let query = supabase.from('product').select('product_name, product_category, product_price, product_image');
    
    if (category) {
        query = query.eq('product_category', category);
    }

    const { data, error } = await query;

    if (error) {
        console.error('Error fetching products:', error.message);
        return [];
    }
 
    console.log('Fetched Products:', data);
    return data || [];
}
 
async function renderProducts(products) {
    const gridLayout = document.querySelector('.grid_layout');
    gridLayout.innerHTML = ""; // Clear previous products
    if (products.length > 0) {
        const containerHTML = products.map(product => `
            <div class="container">
                <div>
                    <img src="${product.product_image}" alt="${product.product_name}" class="product_img">
                </div> 
                <div class="product_info">
                    <div style="display:flex;gap">
                        <h3>
                            <a>
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                ${product.product_name}
                            </a>
                        </h3>
                        <p style="text-align:center">${product.product_category}</p>
                    </div>
                    <p style="padding: 0%; margin-top: 0px; margin-bottom:0px; text-align: center">₹${product.product_price}</p>
                </div>
            </div>
        `).join('');
        gridLayout.innerHTML += containerHTML;
    } else {
        gridLayout.innerHTML = "<p>No products found</p>";
    }
}

async function addContainerWithProducts() {
    // Find the last grid layout
    const lastGridLayout = document.querySelector('.grid_layout:last-of-type');

    // Check if the last grid layout exists
    if (lastGridLayout) {
        // Count the number of containers within the last grid layout
        const numContainers = lastGridLayout.querySelectorAll('.container').length;

        // If it has less than 5 containers, fetch products and populate it with containers
        if (numContainers < 5) {
            console.log('Adding containers to the last grid layout');
            await populateLastGridLayout(lastGridLayout);
        } else {
            // If the last grid layout has 5 containers, create a new grid layout
            console.log('Creating a new grid layout');
            createNewGridLayout();
        }
    } else {
        // If no grid layout exists, create a new one
        console.log('Creating the first grid layout');
        createNewGridLayout();
    }
    console.log('addContainerWithProducts function is being called!');
}

async function populateLastGridLayout(gridLayout) {
    const products = await fetchProducts();
    if (products.length > 0) {
        const containerHTML = products.map(product => `
            <div class="container">
                <div>
                    <img src="${product.product_image}" alt="${product.product_name}" class="product_img">
                </div> 
                <div class="product_info">
                    <div style="display:flex;gap">
                        <h3>
                            <a>
                                <span aria-hidden="true" class="absolute inset-0"></span>
                                ${product.product_name}
                            </a>
                        </h3>
                        <p style="text-align:center">${product.product_category}</p>
                    </div>
                    <p style="padding: 0%; margin-top: 0px; margin-bottom:0px; text-align: center">₹${product.product_price}</p>
                </div>
            </div>
        `).join('');
        gridLayout.innerHTML += containerHTML;
    }
}

function createNewGridLayout() {
    const newRowDiv = document.querySelector('.rows');
    newRowDiv.innerHTML += `
        <div class="grid_layout">
            <!-- Containers with products will be dynamically added here -->
        </div>
    `;
    addContainerWithProducts(); // Call the function recursively to add container to the newly created grid layout
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event triggered');
    addContainerWithProducts(); 
     
    document.addEventListener("categorySelected", async function(event) {
        const category = event.detail;
        const products = await fetchProducts(category);
        renderProducts(products);
    });
    // Function to add event listener to containers
    function addClickListenerToContainers() {
        const containers = document.querySelectorAll('.container');
        console.log('Containers:', containers);
        // Add click event listener to each container
        containers.forEach(container => {
            container.addEventListener('click', function() {
                // Get the index of the clicked container
                const index = Array.from(containers).indexOf(container);
                console.log('Clicked container index:', index); // Log the index
                // Store the clicked index in local storage
                localStorage.setItem('clickedIndex', index);
                // Redirect to product.html
                window.location.href = "product.html";
            });
        }); 
    }

    // Observe changes to the DOM using MutationObserver
    const observer = new MutationObserver(mutationsList => {
        mutationsList.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                // Check if containers are added to the DOM
                const containersAdded = Array.from(mutation.addedNodes).some(node => node.classList && node.classList.contains('container'));
                if (containersAdded) {
                    // If containers are added, remove the observer and add the click event listener
                    observer.disconnect();
                    addClickListenerToContainers();
                }
            }
        });
    });

    // Start observing changes to the DOM
    observer.observe(document.body, { childList: true, subtree: true }); 

    const showsidebar = document.querySelector('.show_sidebar');
    const sidebar = document.getElementById('sidebar');
    const hidesidebar = document.querySelector('.hide_sidebar') 

    showsidebar.addEventListener('click', function () {
        sidebar.classList.add('show');
    }); 
    hidesidebar.addEventListener('click', function () {
        sidebar.classList.remove('show');
    });  
});

  
// document.addEventListener('DOMContentLoaded', function () { 
//     console.log('DOMContentLoaded event triggered');
//     addContainerWithProducts();

//     const containers = document.querySelectorAll('.container');
//     console.log('Containers:', containers);
//     // Add click event listener to each container
//     containers.forEach(container => {
//         container.addEventListener('click', function() { 

//             // Get the index of the clicked container
//             const index = Array.from(containers).indexOf(container);
//             console.log('Clicked container index:', index); // Log the index
//             // Store the clicked index in local storage
//             localStorage.setItem('clickedIndex', index);
//             // Redirect to product.html
//             window.location.href = "product.html";
//         });
//     });
// });
 
 

// async function addProductPage() { 
//     const product = document.querySelector('.product-details');
//     const products = await fetchProducts(); 
//     console.log(products)
//     if (products.length > 0) {
//         const containerHTML = products.map(product => `
//             <div class="container1">
//                 <div class="product-image">
//                     <img src="${product.product_image}" alt="${product.product_name}" class="product_img">
//                 </div>
//                 <div class="product-info">
//                     <h3>${product.product_name}</h3>
//                     <p>${product.product_category}</p>
//                     <p>$${product.product_price}</p>
//                     <!-- Add more product details here if needed -->
//                     <button>BUY</button>
//                 </div>
//             </div>
//         `).join('');
//         product.innerHTML = containerHTML;
//     } 
    
// }   

// document.addEventListener('DOMContentLoaded', function () { 
//     console.log('DOMContentLoaded event triggered'); 
     
//     addContainerWithProducts();

//     // Add click event listener to the parent element (e.g., body)
//     document.body.addEventListener('click', function(event) {
//         console.log('Click event triggered');
//         if (event.target.classList.contains('container')) {
//             setTimeout(() => {
//                 window.location.href = "product.html";
//             }, 10000);
//             const index = Array.from(containers).indexOf(event.target);
//             console.log('Clicked container index:', index);
//             localStorage.setItem('clickedIndex', index);
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', function () { 
//     console.log('DOMContentLoaded event triggered');

//     // Add click event listener to the parent element (e.g., body)
//     document.body.addEventListener('click', function(event) {
//         // Check if the clicked element is a container
//         if (event.target.classList.contains('container')) {
//             // Get the index of the clicked container
//             const index = Array.from(containers).indexOf(event.target);
//             // Store the clicked index in local storage
//             localStorage.setItem('clickedIndex', index);
//             // Redirect to product.html
//             window.location.href = "product.html";
//         }
//     });

//     addContainerWithProducts();
// });
 
// document.addEventListener('DOMContentLoaded', function () { 
//     console.log('DOMContentLoaded event triggered');

//     // Add click event listener to the parent element (e.g., body)
//     document.body.addEventListener('click', async function(event) {
//         event.preventDefault();
//         // Check if the clicked element is a container
//         if (event.target.classList.contains('container')) {
//             console.log('Container clicked!');
//             // Find the clicked container's index
//             const containers = document.querySelectorAll('.container'); 
//             console.log(containers)
//             const clickedIndex = Array.from(containers).indexOf(event.target); 
//             console.log(clickedIndex);
//             // Fetch the products and pass the clicked product to addProductPage function
//             const products = await fetchProducts(); 
//             console.log(products);
//             if (products.length > clickedIndex) {
//                 const clickedProduct = products[clickedIndex]; 
//                 console.log(clickedProduct)
//                 addProductPage(clickedProduct); 
//                 console.log('productpage called:',addProductPage)
//                 // Redirect to product.html
//                 setTimeout(() => {
//                     window.location.href = "product.html";
//                 }, 1000);
//             }
//         }
//     }); 
//     addContainerWithProducts();
// });
