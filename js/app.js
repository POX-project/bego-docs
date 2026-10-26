const initApp = async () => {
    const contentArea = document.getElementById('content-area');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const leftSidebar = document.getElementById('left-sidebar');
    const breadcrumbs = document.getElementById('breadcrumbs');
    
    const sidebarDynamicSections = document.getElementById('sidebar-dynamic-sections');

    let structure = null;

    // Visit Counter Logic
    const visitCountEl = document.getElementById('visit-count');
    if (visitCountEl) {
        let visits = parseInt(localStorage.getItem('bego_visits')) || 0;
        visits++;
        localStorage.setItem('bego_visits', visits);
        visitCountEl.textContent = visits;
    }

    // Fetch structure
    try {
        const res = await fetch('structure.json');
        structure = await res.json();

        // Fetch and cache markdown content for all pages
        const fetchPromises = [];
        structure.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const fetchPromise = fetch(`pages/${p.path}.md`)
                    .then(res => {
                        if (res.ok) {
                            return res.text();
                        }
                        return '';
                    })
                    .then(text => {
                        p.content = text;
                    })
                    .catch(err => {
                        console.error(`Failed to load content for ${p.path}`, err);
                        p.content = '';
                    });
                fetchPromises.push(fetchPromise);
            });
        });
        await Promise.all(fetchPromises);

    } catch (e) {
        console.error("Failed to load structure.json");
        contentArea.innerHTML = `<div class="alert"><div class="alert-title">Error</div><div class="alert-desc">Failed to load structure.json</div></div>`;
        return;
    }

    // Build Sidebar Sections
    if (sidebarDynamicSections) {
        sidebarDynamicSections.innerHTML = structure.categories.map(cat => `
            <div class="nav-section">
                <div class="nav-section-title" style="display: flex; align-items: center; gap: 8px;">
                    <i data-lucide="${cat.icon}" class="icon-sm"></i>
                    <span>${cat.title}</span>
                </div>
                <div class="tree-nav">
                    ${cat.pages.map(page => `
                        <a href="#${page.id}" class="sidebar-link">
                            <i data-lucide="${page.icon}" class="icon-sm"></i><span style="margin-left: 6px;">${page.title}</span>
                        </a>
                    `).join('')}
                </div>
            </div>
        `).join('');
    }

    // Re-bind tree toggle
    document.querySelectorAll('.tree-item').forEach(item => {
        item.addEventListener('click', (e) => {
            if (item.nextElementSibling && item.nextElementSibling.classList.contains('tree-children')) {
                item.classList.toggle('expanded');
            }
        });
    });

    if (window.lucide) lucide.createIcons();

    // Helper to find page metadata
    const findPageMeta = (id) => {
        if (id === 'intro') return { title: 'Introduction', icon: 'book-open', path: 'intro' };
        for (const cat of structure.categories) {
            for (const p of cat.pages) {
                if (p.id === id) return p;
            }
        }
        return null;
    };

    // Configure marked.js renderer
    if (window.marked) {
        try {
            const blockquoteRenderer = (tokenOrString) => {
                const text = typeof tokenOrString === 'string' ? tokenOrString : (tokenOrString.text || tokenOrString.raw || '');
                if (text.includes('[!NOTE]')) {
                    const desc = text.replace(/\[!NOTE\]/g, '').trim();
                    return `<div class="alert"><div class="alert-title"><i data-lucide="info" class="icon-md"></i> Note</div><div class="alert-desc">${desc}</div></div>`;
                }
                if (text.includes('[!WARNING]')) {
                    const desc = text.replace(/\[!WARNING\]/g, '').trim();
                    return `<div class="alert"><div class="alert-title"><i data-lucide="alert-triangle" class="icon-md"></i> Warning</div><div class="alert-desc">${desc}</div></div>`;
                }
                
                if (typeof tokenOrString === 'string') {
                    return `<blockquote>${tokenOrString}</blockquote>`;
                }
                return false; // Returns false to tell modern marked to use the default renderer
            };

            if (marked.use) {
                marked.use({ renderer: { blockquote: blockquoteRenderer } });
            } else {
                const renderer = new marked.Renderer();
                renderer.blockquote = blockquoteRenderer;
                marked.setOptions({ renderer });
            }
        } catch (e) {
            console.error("Failed to configure marked.js", e);
        }
    }

    // Routing
    const loadPage = async (hash) => {
        const pageId = hash.replace('#', '') || 'intro';
        
        // Update active nav state
        document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
            if (link.getAttribute('href') === `#${pageId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Cache the active page
        localStorage.setItem('bego_last_page', pageId);

        const meta = findPageMeta(pageId);
        if (!meta) {
            if (contentArea) contentArea.innerHTML = `
                <div class="prose fade-in">
                    <h1>Page not found</h1>
                    <p>The content you are looking for does not exist.</p>
                </div>
            `;
            return;
        }

        // Update Breadcrumbs
        if (breadcrumbs) breadcrumbs.innerHTML = `<i data-lucide="${meta.icon}" class="icon-sm"></i> <span style="margin-left: 6px;">${meta.title}</span>`;

        if (contentArea) contentArea.innerHTML = '<div class="loader">Loading...</div>';

        try {
            const response = await fetch(`pages/${meta.path}.md`);
            if (!response.ok) throw new Error('Page not found');
            const mdText = await response.text();
            
            let html = window.marked ? (marked.parse ? marked.parse(mdText) : marked(mdText)) : `<p>Markdown parser failed to load.</p><pre>${mdText}</pre>`;
            
            // Special handling for intro dynamic cards
            if (pageId === 'intro') {
                let cardsHtml = '';
                for (const cat of structure.categories) {
                    cardsHtml += `<h2>${cat.title}</h2><div class="cards-grid">`;
                    for (const p of cat.pages) {
                        cardsHtml += `
                            <a href="#${p.id}" class="card">
                                <div class="card-title"><i data-lucide="${p.icon}" class="icon-md"></i> ${p.title}</div>
                                <div class="card-desc">${p.desc}</div>
                            </a>
                        `;
                    }
                    cardsHtml += `</div>`;
                }
                html += cardsHtml;
            }

            if (contentArea) contentArea.innerHTML = `<div class="prose fade-in">${html}</div>`;
            if (window.lucide) lucide.createIcons();
        } catch (error) {
            if (contentArea) contentArea.innerHTML = `
                <div class="prose fade-in">
                    <h1>Error loading page</h1>
                    <p>${error.message}</p>
                </div>
            `;
        }
        
        if (window.innerWidth <= 768 && leftSidebar) leftSidebar.classList.remove('open');
    };

    window.addEventListener('hashchange', () => loadPage(window.location.hash));
    
    // Check for cached page if no hash is present
    let initialHash = window.location.hash;
    if (!initialHash) {
        const cachedPage = localStorage.getItem('bego_last_page');
        if (cachedPage) {
            initialHash = `#${cachedPage}`;
            window.location.hash = initialHash;
        }
    }
    
    loadPage(initialHash);

    // Sidebar toggle (desktop and mobile)
    if (sidebarToggleBtn && leftSidebar) {
        sidebarToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (window.innerWidth <= 768) {
                leftSidebar.classList.toggle('open');
                leftSidebar.classList.remove('hidden');
            } else {
                leftSidebar.classList.toggle('hidden');
            }
        });
    }

    // Close sidebar clicking outside on mobile
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && leftSidebar && leftSidebar.classList.contains('open') && sidebarToggleBtn && !leftSidebar.contains(e.target) && !sidebarToggleBtn.contains(e.target)) {
            leftSidebar.classList.remove('open');
        }
    });

    // Search Modal Logic
    const searchModal = document.getElementById('search-modal');
    const searchModalBackdrop = document.getElementById('search-modal-backdrop');
    const closeSearchModalBtn = document.getElementById('close-search-modal');
    const modalSearchInput = document.getElementById('modal-search-input');
    const searchResultsContainer = document.getElementById('search-results-container');
    const sidebarSearchInput = document.getElementById('sidebar-search-input');
    const mobileSearchInput = document.getElementById('mobile-search-input');

    const openSearchModal = () => {
        if (searchModal) {
            searchModal.classList.remove('hidden');
            modalSearchInput.focus();
            renderSearchResults('');
        }
    };

    const closeSearchModal = () => {
        if (searchModal) {
            searchModal.classList.add('hidden');
            modalSearchInput.value = '';
        }
    };

    if (sidebarSearchInput) sidebarSearchInput.addEventListener('click', openSearchModal);
    if (mobileSearchInput) mobileSearchInput.addEventListener('click', openSearchModal);
    if (searchModalBackdrop) searchModalBackdrop.addEventListener('click', closeSearchModal);
    if (closeSearchModalBtn) closeSearchModalBtn.addEventListener('click', closeSearchModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchModal && !searchModal.classList.contains('hidden')) {
            closeSearchModal();
        }
    });

    const renderSearchResults = (query) => {
        if (!structure) return;
        
        const q = query.toLowerCase().trim();
        let results = [];

        structure.categories.forEach(cat => {
            cat.pages.forEach(p => {
                const matchTitle = p.title.toLowerCase().includes(q);
                const matchDesc = p.desc && p.desc.toLowerCase().includes(q);
                const matchContent = p.content && p.content.toLowerCase().includes(q);

                if (q === '' || matchTitle || matchDesc || matchContent) {
                    results.push({ ...p, categoryTitle: cat.title });
                }
            });
        });

        if (results.length === 0) {
            searchResultsContainer.innerHTML = `<div class="search-no-results">No results found for "${query}"</div>`;
            return;
        }

        searchResultsContainer.innerHTML = results.map(res => `
            <a href="#${res.id}" class="search-result-item" onclick="document.getElementById('search-modal').classList.add('hidden')">
                <div class="search-result-title">
                    <i data-lucide="${res.icon || 'file-text'}" class="icon-sm"></i> 
                    ${res.title} 
                    <span style="font-size: 11px; font-weight: normal; color: hsl(var(--muted-foreground)); margin-left: auto;">${res.categoryTitle}</span>
                </div>
                ${res.desc ? `<div class="search-result-desc">${res.desc}</div>` : ''}
            </a>
        `).join('');

        if (window.lucide) lucide.createIcons();
    };

    if (modalSearchInput) {
        modalSearchInput.addEventListener('input', (e) => {
            renderSearchResults(e.target.value);
        });
    }

    // Theme toggle (Lucide)
    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement;

    const sunIcon = `<i data-lucide="sun" class="icon-md"></i>`;
    const moonIcon = `<i data-lucide="moon" class="icon-md"></i>`;

    const updateThemeIcon = () => {
        if (themeToggle) themeToggle.innerHTML = htmlEl.classList.contains('dark') ? sunIcon : moonIcon;
        if (window.lucide) lucide.createIcons();
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            htmlEl.classList.toggle('dark');
            updateThemeIcon();
        });
        updateThemeIcon();
    }
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
