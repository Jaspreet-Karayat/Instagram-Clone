function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function isValidPassword(password) {
    return password.length >= 6;
}

function Validation() {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    document.getElementById('emailError').textContent = '';
    document.getElementById('nameError').textContent = '';
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';


    let isValid = true;

    if (!isValidEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Full Name is required.';
        isValid = false;
    }

    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Username is required.';
        isValid = false;
    }

    if (!isValidPassword(password)) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }

    return isValid;
}