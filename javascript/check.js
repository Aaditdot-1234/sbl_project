import { supabase } from "./db"; 
 
console.log("cleint", supabase);

// Function to fetch user data from Supabase database
async function fetchUserData(email) {
    const { data, error } = await supabase
        .from('signin')
        .select('username, password')
        .eq('email', email)
        .single(); // Assuming email is unique

    if (error) {
        console.error('Error fetching user data:', error.message);
        return null;
    }

    return data;
}

// Function to handle form submission
async function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Fetch user data
    const userData = await fetchUserData(email);

    if (!userData) {
        console.error('User not found.');
        return;
    }

    // Check if the password matches
    if (userData.password === password) {
        // Passwords match, redirect to home.html
        window.location.href = 'home.html';
    } else {
        console.error('Invalid password.');
    }
}

// Add event listener to the form
document.getElementById('login_form').addEventListener('submit', handleFormSubmission);
