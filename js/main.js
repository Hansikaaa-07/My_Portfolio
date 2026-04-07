// Initialize AOS Animations
AOS.init({
    duration: 1000,
    once: true
});

// THEME LOGIC
const themeBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlTag = document.documentElement;

// 1. Function to set the theme
function setTheme(theme) {
    htmlTag.setAttribute('data-bs-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update the icon
    if (theme === 'dark') {
        themeIcon.className = 'bi bi-sun-fill';
    } else {
        themeIcon.className = 'bi bi-moon-stars-fill';
    }
}

// 2. Initial check when ANY page loads
const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
setTheme(savedTheme);

// 3. Toggle Click Handler
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}