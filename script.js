function validateForm() {
    // .trim removes all the extra whitespaces at the end of the string
    const form = document.getElementById('registrationForm');
    const password = form.password.value.trim();
    const confirmPassword = form.confirmPassword.value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Passwords match check
    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return false;
    }

    return true;
}