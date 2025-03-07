// Scroll to the 'About' section when 'Read More' button is clicked
document.getElementById('readMoreBtn').addEventListener('click', function() {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' });
})

// Validate Login Form
function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    if (!email || !password) {
        alert("All fields are required.");
        return false;
    }
    // Additional login validations can go here
    alert("Login successful!");
    return true;
}

// Validate Signup Form
function validateSignupForm() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    if (!username || !email || !password) {
        alert("All fields are required.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return false;
    }
    // Additional signup validations can go here
    alert("Signup successful!");
    return true;

}

