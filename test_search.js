const fs = require('fs');

// Mock structure
const structure = {
    categories: [
        {
            title: "Cat1",
            pages: [
                {
                    id: "p1",
                    title: "Page One",
                    desc: "This is the first page",
                    content: "This page contains some deep markdown text like testing123 that is not in the title or desc."
                },
                {
                    id: "p2",
                    title: "Page Two",
                    desc: "Second page description",
                    content: "Another page content."
                }
            ]
        }
    ]
};

const renderSearchResults = (query) => {
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

    return results;
};

const result1 = renderSearchResults('testing123');
console.log('Search for "testing123":', result1.length === 1 && result1[0].id === 'p1' ? 'PASS' : 'FAIL');

const result2 = renderSearchResults('Second');
console.log('Search for "Second":', result2.length === 1 && result2[0].id === 'p2' ? 'PASS' : 'FAIL');

const result3 = renderSearchResults('Page');
console.log('Search for "Page":', result3.length === 2 ? 'PASS' : 'FAIL');
