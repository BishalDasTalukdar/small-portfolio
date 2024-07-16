document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === 'user1@gmail.com' && password === 'Ab@12') {
                alert('Login successful!');
                window.location.href = 'portfolio.html';
            } else {
                alert('Invalid username or password.');
            }
        });
    }
});
