
// ==================== PROJECT DATA ==================== 

const projects = [
    {
        id: 1,
        title: "Anmategra Web",
        role: "Frontend Developer",
        description: "A web application for organizational purposes at college — used to track and store the activity database of student organizations. Makes it easy to view the organizational track record of any particular student. Built with modern component architecture for maintainability.",
        images: ["../images/portfolio-1.png"],
        tags: ["TypeScript", "React JS"],
        github: "#",
        demo: null,
        featured: true,
        category: "web"
    },
    {
        id: 2,
        title: "O.W.C.A Logistics",
        role: "Backend Developer",
        description: "A sophisticated, enterprise-grade JavaFX application for comprehensive courier and logistics management. Features advanced plugin architecture, real-time shipment tracking, and a full order management pipeline. Designed with scalability and extensibility in mind.",
        images: ["../images/portfolio-2.png"],
        tags: ["Java", "JavaFX"],
        github: "#",
        demo: null,
        featured: true,
        category: "desktop"
    },
    {
        id: 3,
        title: "Little Alchemy 2 Finder",
        role: "Full Stack Developer",
        description: "A website that helps users find element combinations in Little Alchemy 2 using graph search algorithms. Users can enter a target element and select BFS or DFS to find single or multiple recipe paths. The Go backend handles the heavy graph traversal while the Node.js layer serves the frontend.",
        images: ["../images/portfolio-3.png"],
        tags: ["Go", "Node.js"],
        github: "#",
        demo: null,
        featured: true,
        category: "web"
    },
    {
        id: 4,
        title: "Image & Music Retrieval System",
        role: "Backend Developer",
        description: "A program that performs image and audio recognition of songs and their album covers using PCA (Principal Component Analysis) and Query by Humming methods. The Python backend processes audio and image similarity while React handles the search interface.",
        images: ["../images/portfolio-4.png"],
        tags: ["React JS", "Python"],
        github: "#",
        demo: null,
        featured: false,
        category: "ai"
    },
    {
        id: 5,
        title: "Purry Leveling (RPG Game)",
        role: "Software Developer",
        description: "A C++-based application simulating a turn-based RPG with a dungeon system. Implements OOP principles from IF2010. Players choose from 5 character classes (Fighter, Mage, Assassin, Necromancer, Berserker), explore dungeons, fight monsters, collect items, and level up through a skill system.",
        images: ["../images/portfolio-5.png"],
        tags: ["C++", "OOP"],
        github: "#",
        demo: null,
        featured: false,
        category: "desktop"
    },
    {
        id: 6,
        title: "Jabodetabek Transit Routing",
        role: "Research · Algorithm Engineer",
        description: "Research on finding the fastest route through public transportation networks in the Jakarta Metropolitan Area (Jabodetabek), covering KRL, MRT, TransJakarta, and LRT. Implemented and compared Uniform Cost Search (UCS) and A* Search for shortest travel time between stations.",
        images: ["../images/portfolio-6.png"],
        tags: ["Python", "Graph Algorithms", "AI"],
        github: "#",
        demo: null,
        featured: false,
        category: "ai"
    },
    {
        id: 7,
        title: "US Stock Market Dashboard",
        role: "Fullstack Engineer",
        description: "A full-stack web application for tracking and analyzing stock market data with real-time synchronization capabilities using Financial Modeling Prep (FMP) as a public api. Built with React, Node.js, Express, and PostgreSQL. Featured:\n- Dashboard Analytics\n- Data Management (CRUD)\n- Data Syncronization\n",
        images: [
            "../images/US-Stock-Market/Landing.png",
            "../images/US-Stock-Market/Create.png",
            "../images/US-Stock-Market/Dashboard.png",
            "../images/US-Stock-Market/Data-Management.png",
            "../images/US-Stock-Market/Delete.png",
            "../images/US-Stock-Market/Edit.png",
        ],
        tags: ["Node.js", "React.js", "PostgreSQL", "Docker"],
        github: "#https://github.com/hnfadtya/US-Stock-Market-Analytics-Website",
        demo: null,
        featured: true,
        category: "web"
    },
    {
        id: 8,
        title: "Nimonspedia · Tokopedia's Cloning Website",
        role: "Fullstack Engineer",
        description: "Nimonspedia provides the main features for simulating transactions between buyers and sellers in the marketplace system, as well as several additional modern features, including:\nUser authentication (login, logout, registration)\n- Product management (product CRUD for sellers)\n- Shopping cart and checkout\n- Buyer order history\n- Seller order management\n- Automatic top-up and payments\n- Real-time chat between buyers and sellers (React + Node.js)\n- Product auctions (modern auction features)\n- Admin page (user management, monitoring, etc.)",
        images: [
            "../images/Nimonspedia/home.png",
            "../images/Nimonspedia/dashboard.png",
            "../images/Nimonspedia/admin-dashboard.png",
            "../images/Nimonspedia/login.png",
            "../images/Nimonspedia/cart.png",
            "../images/Nimonspedia/checkout.png",
            "../images/Nimonspedia/chat.png",
            "../images/Nimonspedia/modif-buyer.png",
            "../images/Nimonspedia/order-history.png",
            "../images/Nimonspedia/order-management.png",
            "../images/Nimonspedia/product-management.png",
        ],
        tags: ["PHP Native + Apache", "Node + Express", "React + Vite", "Nginx", "PostgreSQL", "Docker"],
        github: "#https://github.com/hnfadtya/Nimonspedia",
        demo: null,
        featured: true,
        category: "web"
    },
    {
        id: 9,
        title: "Enhancement of KNN, Decision Tree, and Logistic Regression Algorithms",
        role: "ML Engineer",
        description: "This repository contains implementations of machine learning algorithms built from scratch, without relying entirely on the library's internal implementation for its core logic. The project aims to compare the performance of a home-built model based on course material with a standard library model.",
        images: [
            "../images/Tubes2-AI/svm_training_process.gif",
            "../images/Tubes2-AI/loss_per_epoch.gif",
            "../images/Tubes2-AI/logreg_confusion_matrices.png",
            "../images/Tubes2-AI/id3_vs_sklearn_comparison.png",
            "../images/Tubes2-AI/id3_vs_sklearn_comparison.png",
        ],
        tags: ["Python", "Scikit-Learn", "Matplotlib", "Seaborn"],
        github: "#https://github.com/hnfadtya/Enchancement-of-SVM-DTL-and-Logistic-Regression",
        demo: null,
        featured: false,
        category: "ai"
    }
];

const skills = ["Java", "Python", "C++", "Go", "TypeScript", "React JS", "Node.js", "PostgreSQL", "Docker", "Git"];


// ==================== RENDER FEATURED ==================== 

function renderFeatured() {
    const container = document.getElementById('featuredGrid');
    const featured = projects.filter(p => p.featured);
    container.innerHTML = featured.map((p, i) => `
        <div class="featured-card fade-up fade-up-d${i+1}" onclick="openModal(${p.id})">
        <div class="card-img">
            <img src="${p.images[0]}" alt="${p.title}" onerror="this.parentElement.style.background='var(--bg-3)'">
            <div class="card-overlay">
            <div class="overlay-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                View details
            </div>
            </div>
        </div>
        <div class="card-body">
            <div class="card-featured-label">★ Featured</div>
            <div class="card-title">${p.title}</div>
            <div class="card-role">${p.role}</div>
            <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        </div>
    `).join('');
}


// ==================== RENDER PROJECTS + FILTER ==================== 

const categories = ['all', 'web', 'desktop', 'ai'];
let activeFilter = 'all';

function renderFilter() {
    const bar = document.getElementById('filterBar');
    bar.innerHTML = categories.map(c => `
        <button class="filter-btn ${c === activeFilter ? 'active' : ''}" onclick="setFilter('${c}')">
        ${c === 'all' ? 'All Projects' : c.charAt(0).toUpperCase() + c.slice(1)}
        </button>
    `).join('');
}

function setFilter(cat) {
    activeFilter = cat;
    renderFilter();
    renderProjects();
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter);
    grid.innerHTML = filtered.map(p => `
        <div class="project-card" onclick="openModal(${p.id})">
        <div class="card-img">
            <img src="${p.images[0]}" alt="${p.title}" onerror="this.parentElement.style.background='var(--bg-3)'">
            <div class="card-overlay">
            <div class="overlay-btn">View details →</div>
            </div>
        </div>
        <div class="card-body">
            <div class="card-title-row">
            <h3 class="card-title">${p.title}</h3>
            <span class="card-arrow">↗</span>
            </div>
            <div class="card-role">${p.role}</div>
            <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
        </div>
    `).join('');
}


// ==================== RENDER SKILLS ==================== 

function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map(s => `<div class="skill-item">${s}</div>`).join('');
}


// ==================== MODAL ==================== 

let currentSlide = 0;
let currentImages = [];

function openModal(id) {
    const p = projects.find(pr => pr.id === id);
    if (!p) return;
    currentImages = p.images;
    currentSlide = 0;

    // ==================== Slides ====================

    const container = document.getElementById('slidesContainer');
    container.innerHTML = p.images.map((img, i) => `
        <div class="slide ${i === 0 ? 'active' : ''}">
        <img src="${img}" alt="${p.title} screenshot ${i+1}">
        </div>
    `).join('');

    // ==================== Dots ====================
    const nav = document.getElementById('slideNav');
    nav.innerHTML = p.images.length > 1
        ? p.images.map((_, i) => `<div class="slide-dot ${i === 0 ? 'active' : ''}" onclick="goToSlide(${i})"></div>`).join('')
        : '';

    // ==================== Show/hide nav buttons ====================
    const showNav = p.images.length > 1;
    document.querySelector('.slide-btn.prev').style.display = showNav ? 'flex' : 'none';
    document.querySelector('.slide-btn.next').style.display = showNav ? 'flex' : 'none';

    // ==================== Meta & content ====================
    document.getElementById('modalMeta').innerHTML = `<span class="modal-role-badge">${p.role}</span>`;
    document.getElementById('modalTitle').textContent = p.title;
    document.getElementById('modalDesc').textContent = p.description;
    document.getElementById('modalTags').innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('modalActions').innerHTML = `
        ${p.github ? `<a href="${p.github}" target="_blank" class="modal-link github">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
        </a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" class="modal-link demo">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
        Live Demo
        </a>` : ''}
    `;

    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

function closeModalOnOverlay(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function goToSlide(i) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slide-dot');
    slides[currentSlide]?.classList.remove('active');
    dots[currentSlide]?.classList.remove('active');
    currentSlide = i;
    slides[currentSlide]?.classList.add('active');
    dots[currentSlide]?.classList.add('active');
}

function nextSlide() { goToSlide((currentSlide + 1) % currentImages.length); }
function prevSlide() { goToSlide((currentSlide - 1 + currentImages.length) % currentImages.length); }

// ==================== Keyboard: Escape to close, arrow keys for slideshow ====================

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
    if (document.getElementById('modalOverlay').classList.contains('open')) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    }
});


// ==================== TYPEWRITER ==================== 

const roles = [
    'cs.student @ ITB',
    'web developer',
    'backend engineer',
    'algorithm enthusiast',
];
let roleIdx = 0, charIdx = 0, deleting = false;

function typeRole() {
    const el = document.getElementById('typedRole');
    const current = roles[roleIdx];
    if (!deleting) {
        el.textContent = current.slice(0, ++charIdx);
        if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeRole, 1800);
        return;
        }
    } else {
        el.textContent = current.slice(0, --charIdx);
        if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        }
    }
    setTimeout(typeRole, deleting ? 60 : 100);
}


// ==================== SCROLL ANIMATIONS ==================== 

const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

function observeFadeElements() {
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}


// ==================== HEADER SCROLL ==================== 

window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 20);
});


// ==================== BURGER MENU ==================== 

document.getElementById('burger').addEventListener('click', () => {
    document.getElementById('burger').classList.toggle('open');
    document.getElementById('mobileMenu').classList.toggle('open');
});

function closeMobileMenu() {
    document.getElementById('burger').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
}


// ==================== INIT ==================== 

renderFeatured();
renderFilter();
renderProjects();
renderSkills();
typeRole();
setTimeout(observeFadeElements, 100);