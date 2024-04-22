import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://vwocixgrlniasvjsyoea.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3b2NpeGdybG5pYXN2anN5b2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NDMzNzYsImV4cCI6MjAyOTExOTM3Nn0.HAOx-XhRdsvNF__NiBBxKxND35swUQzBJenCLEpe6F8'
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("cleint", supabase); 

export { supabase }; 
  
function submitFormData(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log('Form submission event listener triggered.');
    // Get form values
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;
    const productPrice = parseInt(document.getElementById('productPrice').value); 
    
    console.log('Product Name:', productName);  
    console.log('Product Category:', productCategory);
    console.log('Product Price:', productPrice);

    // Insert new product into the database
    supabase.from('product').insert([
        { product_name: productName, product_category: productCategory, product_price: productPrice }
    ]).then(({ data, error }) => {
        if (error) {
            console.error('Error adding product:', error.message);
            return;
        }
        
        console.log('Product added successfully:', data);
        // You can perform any other actions here, like displaying a success message or redirecting the user
    });
}

document.getElementById('productForm').addEventListener('submit', submitFormData);