
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    const yearEl = document.getElementById('current-year');
    const lastModEl = document.getElementById('last-modified');

    const now = new Date();
    yearEl.textContent = now.getFullYear();

    lastModEl.textContent = document.lastModified || 'Unknown';

    function toggleNav() {
        const isOpen = nav.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', String(isOpen));
        hamburger.textContent = isOpen ? '✕' : '☰';
    }

    hamburger.addEventListener('click', toggleNav);

    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && !hamburger.contains(e.target) && nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            nav.classList.remove('open');
            hamburger.textContent = '☰';
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.focus();
        }
    });
});
