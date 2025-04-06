function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('theme-button').innerText = isDark ? '☀️' : '🌙';
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-button').innerText = '☀️';
    }
});  