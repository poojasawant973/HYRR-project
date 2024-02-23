const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = form.username.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    const confirmPassword = form['confirm-password'].value.trim();
    const termsChecked = form.terms.checked;

    if (!username || !email || !password || !confirmPassword || !termsChecked) {
        errorMessage.textContent = "All fields are required";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match";
        return;
    }

    successMessage.textContent = "Signup successful! Redirecting to post list...";
    setTimeout(function() {
        window.location.href = "post-list.html";
    }, 2000);
});
