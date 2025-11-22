document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('main-nav');
    const yearEl = document.getElementById('current-year');
    const lastModEl = document.getElementById('last-modified');
    const gallery = document.querySelector('.gallery');

    const now = new Date();
    yearEl.textContent = now.getFullYear();
    lastModEl.textContent = document.lastModified || 'Unknown';

    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },

        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 41000,
            imageUrl: "https://churchofjesuschrist.org/imgs/de2a4c6582ecb02ed4177b13f513dacba7d9fb15/full/500%2C/0/default"
        },
        {
            templeName: "Preston England",
            location: "Preston, England",
            dedicated: "1998, June, 7",
            area: 68890,
            imageUrl: "https://www.churchofjesuschrist.org/imgs/a68695910157ca975763cf0a7b321d5462b1d1d9/full/500%2C/0/default"
        },
        
        {
            templeName: "Tokyo Japan",
            location: "Tokyo, Japan",
            dedicated: "1980, October, 18",
            area: 52590,
            imageUrl: "https://churchofjesuschrist.org/imgs/4f1313d912b16ff535921025812d2332ca0f8e99/full/500%2C/0/default"
        }
    ];

    function renderTemples(list) {
        gallery.innerHTML = ""; 

        list.forEach(t => {
            const card = document.createElement('figure');

            card.innerHTML = `
                <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
                <figcaption>
                    <strong>${t.templeName}</strong><br>
                    ${t.location}<br>
                    Dedicated: ${t.dedicated}<br>
                    Area: ${t.area.toLocaleString()} sq ft
                </figcaption>
            `;

            gallery.appendChild(card);
        });
    }

    renderTemples(temples);

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const filter = link.textContent.trim();

            let filtered = temples;

            if (filter === "Old") {
                filtered = temples.filter(t => parseInt(t.dedicated) < 1900);
            } else if (filter === "New") {
                filtered = temples.filter(t => parseInt(t.dedicated) > 2000);
            } else if (filter === "Large") {
                filtered = temples.filter(t => t.area > 90000);
            } else if (filter === "Small") {
                filtered = temples.filter(t => t.area < 10000);
            }

            renderTemples(filtered);
        });
    });

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
