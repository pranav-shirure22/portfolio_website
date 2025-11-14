// === AMAZON SYSTEM TAB SYSTEM + SMOOTH SCROLL ===

// Tab System
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabId = btn.dataset.tab;

        // Update active tab button
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Show correct tab content
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
            if (pane.id === tabId) {
                pane.classList.add('active');
                // Auto-scroll to tab content
                pane.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});

// Top Bar Navigation Links (Education, Projects, etc.)
document.querySelectorAll('.top-links a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove '#'
        const targetTab = document.querySelector(`.tab-btn[data-tab="${targetId}"]`);
        const targetPane = document.getElementById(targetId);

        if (targetTab && targetPane) {
            // Activate tab
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            targetTab.classList.add('active');

            document.querySelectorAll('.tab-pane').forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === targetId) {
                    pane.classList.add('active');
                    // Scroll to tab section
                    document.querySelector('.product-tabs').scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
});

// Animate Progress Bars on Scroll
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fill').forEach(fill => {
                const width = fill.style.width || '90%';
                setTimeout(() => fill.style.width = width, 300);
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.card').forEach(card => {
    if (card.querySelector('.progress')) {
        progressObserver.observe(card);
    }
});
