document.addEventListener('DOMContentLoaded', function() {
    const joinUsBtn = document.getElementById('joinUsBtn');
    const emailInput = document.getElementById('loginEmail');
    const passwordInput = document.getElementById('loginPassword');
    const loginBtn = document.getElementById('loginBtn');
    const showSignup = document.getElementById('showSignup');
    const showLogin = document.getElementById('showLogin');
    const signupForm = document.getElementById('signupForm');
    const signupEmail = document.getElementById('signupEmail');
    const signupPassword = document.getElementById('signupPassword');
    const signupConfirmPassword = document.getElementById('signupConfirmPassword');
    const signupBtn = document.getElementById('signupBtn');

    let users = [];

    joinUsBtn.addEventListener('click', () => {
        alert('Thank you for showing interest! Please sign up to join us!');
    });

    showSignup.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'none';
        signupForm.style.display = 'block';
    });

    showLogin.addEventListener('click', () => {
        signupForm.style.display = 'none';
        document.querySelector('.form').style.display = 'block';
    });

    signupBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const email = signupEmail.value.trim();
        const password = signupPassword.value.trim();
        const confirmPassword = signupConfirmPassword.value.trim();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);

        if (!isValidEmail) {
            alert('Invalid email format. Please enter a valid email address.');
            return;
        }

        // Password matching validation
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Password length validation
        if (password.length < 6) {
            alert('Password should be at least 6 characters long.');
            return;
        }

        users.push({ email, password });
        alert('Thank you for signing up!');
        signupEmail.value = '';
        signupPassword.value = '';
        signupConfirmPassword.value = '';
        signupForm.style.display = 'none';
        document.querySelector('.form').style.display = 'block';
    });

    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const enteredEmail = emailInput.value.trim();
        const enteredPassword = passwordInput.value.trim();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enteredEmail);

        if (!isValidEmail) {
            alert('Invalid email format. Please enter a valid email address.');
            return;
        }

        const isValidCredentials = users.some(user => user.email === enteredEmail && user.password === enteredPassword);

        if (isValidCredentials) {
            alert('Login successful!');
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
