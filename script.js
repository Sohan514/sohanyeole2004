window.onload = function() {
    // Reference to all screens
    const welcomeScreen = document.getElementById('welcome-screen');
    const signInScreen = document.getElementById('sign-in-screen');
    const accountScreen = document.getElementById('account-screen');

    // Show welcome screen for 3 seconds, then sign-in screen for 3 seconds, and finally account screen
    setTimeout(function() {
        welcomeScreen.classList.remove('active');
        signInScreen.classList.add('active');
    }, 3000);  // Adjust the delay time for welcome screen

    setTimeout(function() {
        signInScreen.classList.remove('active');
        accountScreen.classList.add('active');
    }, 6000);  // Adjust the delay time for sign-in screen
};

// Toggle password visibility
const togglePassword = document.querySelector('.toggle-password');
const passwordField = document.getElementById('password');

togglePassword.addEventListener('click', function() {
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    // Optionally change the icon
    this.textContent = type === 'password' ? '👁️' : '🙈';
});
