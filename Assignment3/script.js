document.addEventListener('DOMContentLoaded', (event) => {
    checkLoginStatus();
});

function login() {
    // Simulate a login process
    sessionStorage.setItem('username', 'vert');
    sessionStorage.setItem('password', '1510');
    checkLoginStatus();
}

function logout() {
    // Simulate a logout process
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('password');
    checkLoginStatus();
}

function checkLoginStatus() {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');

    const usernameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')


    if(username === usernameInput.value && password === passwordInput.value) {
        window.location.href = "product.html";
    }
}
