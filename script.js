const bar = document.getElementById('bar');
const close = document.getElementById('close');
const Navbar = document.getElementById('Navbar');

if (bar) {bar.addEventListener('click', () => {
    Navbar.classList.add('active');
})
} 

if (close) {close.addEventListener('click', () => {
    Navbar.classList.remove('active');
})
} 