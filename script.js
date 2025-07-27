// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get navigation cards - Projects is now first, About is second
    const projectsCard = document.querySelector('.nav-card:first-child');
    const aboutCard = document.querySelector('.nav-card:last-child');
    
    // Add click handlers
    if (projectsCard) {
        projectsCard.addEventListener('click', function() {
            scrollToSection('projects-section');
        });
        projectsCard.style.cursor = 'pointer';
    }
    
    if (aboutCard) {
        aboutCard.addEventListener('click', function() {
            scrollToSection('about-section');
        });
        aboutCard.style.cursor = 'pointer';
    }
});