import { supabase } from "../javascript/db";

console.log("cleint", supabase);

function submitFormData(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log('Form submission event listener triggered.');
    // Get form values
    const UserName = document.getElementById('username').value;
    const Password = document.getElementById('password').value;
    const Email = document.getElementById('email').value;
    const Mobile = parseInt(document.getElementById('mobile').value); 
    
    console.log('UserName:', UserName);  
    console.log('Password:', Password);
    console.log('Email:', Email);
    console.log('Mobile:', Mobile); 
     
    if (!UserName || !Password || !Email || !Mobile) {
        alert('Please fill all the details.'); 
        return;
    }

    // Insert new product into the database
    supabase.from('signin').insert([
        { username: UserName, password: Password, email: Email, mobile: Mobile }
    ]).then(({ data, error }) => {
        if (error) {
            console.error('Error adding product:', error.message);
            return;
        }
        
        console.log('Product added successfully:', data);
        // You can perform any other actions here, like displaying a success message or redirecting the user 
        window.location.href = 'index.html';
    });
}

document.getElementById('signin_form').addEventListener('submit', submitFormData); 
