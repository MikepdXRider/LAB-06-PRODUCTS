const adminAccess = document.querySelector('.password-div');

adminAccess.addEventListener('click', () => {
    const password = prompt('Password:');
    if (password === 'ducky'){
        adminAccess.style.zIndex = -1;
        window.location = './z_admin-page/index.html';
    } else {
        alert('Incorrect password');
    }
});