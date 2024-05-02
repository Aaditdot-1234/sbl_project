import { supabase } from "./db";

async function fetchProductCategories() {
    try {
        const { data, error } = await supabase
            .from('product')
            .select('product_category');
        if (error) {
            console.error('Error fetching product categories:', error.message);
            return [];
        }
        console.log('Fetched Product Categories:', data);
        // Extract categories from the fetched data
        const categories = data.map(product => product.product_category);
        // Remove duplicate categories and return
        return [...new Set(categories)] || [];
    } catch (error) {
        console.error('Error fetching product categories:', error.message);
        return [];
    }
}

// Get the autocompleteResults element
const autocompleteResults = document.getElementById("autocompleteResults");

// Function to update autocomplete results
async function updateAutocompleteResults() {
    const inputValue = searchInput.value.trim();
    if (inputValue === "") {
        autocompleteResults.innerHTML = "";
        return;
    }
    const productCategories = await fetchProductCategories();
    const filteredCategories = productCategories.filter(category =>
        category.toLowerCase().startsWith(inputValue.toLowerCase())
    );
    autocompleteResults.innerHTML = "";
    filteredCategories.forEach(category => {
        const suggestion = document.createElement("div");
        suggestion.textContent = category;
        suggestion.classList.add("autocomplete-item");
        suggestion.addEventListener("click", () => {
            searchInput.value = category;
            autocompleteResults.style.display = "none";
            const event = new CustomEvent("categorySelected", { detail: category });
            document.dispatchEvent(event); // Dispatch custom event
        });
        autocompleteResults.appendChild(suggestion);
    });
    autocompleteResults.style.display = filteredCategories.length > 0 ? "block" : "none";
}

// Event listener for input change
searchInput.addEventListener("input", updateAutocompleteResults);

// Event listener for clicking on autocomplete suggestion
autocompleteResults.addEventListener("click", function(event) {
    if (event.target.classList.contains("autocomplete-item")) {
        searchInput.value = event.target.textContent;
        autocompleteResults.style.display = "none";
    }
});

// Event listener for hovering over search icon to show autocomplete results
document.querySelector(".search-icon").addEventListener("mouseover", updateAutocompleteResults);

// Event listener for hovering out of search icon to hide autocomplete results
document.querySelector(".search-icon").addEventListener("mouseout", function(event) {
    if (!event.relatedTarget.classList.contains("autocomplete-item")) {
        autocompleteResults.style.display = "none";
    }
});