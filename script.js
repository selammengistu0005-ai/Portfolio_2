// 1. SELECT ELEMENTS
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const typingElement = document.getElementById('typing-text');

// 2. THEME TOGGLE LOGIC (Professional LocalStorage Sync)
const initializeTheme = () => {
    const savedTheme = localStorage.getItem('selam-portfolio-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
};

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('selam-portfolio-theme', isDark ? 'dark' : 'light');
});

// 3. TYPING EFFECT LOGIC
// Updated text to reflect your specialty in Customer Support AI
const introText = "Hello, I'm Selam Mengistu.\nI design AI Support Agents."; 
let index = 0;

function typeEffect() {
    if (index < introText.length) {
        if (introText.charAt(index) === "\n") {
            typingElement.innerHTML += "<br>"; 
        } else {
            typingElement.innerHTML += introText.charAt(index);
        }
        
        index++;
        // Random speed between 70ms and 120ms for a "human" feel
        const randomSpeed = Math.floor(Math.random() * 50) + 70;
        setTimeout(typeEffect, randomSpeed);
    }
}

// 4. CASE STUDY TOGGLE LOGIC (Accordion)
function initCaseStudies() {
    const caseButtons = document.querySelectorAll('.toggle-case-study');
    
    caseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const caseStudyContent = button.nextElementSibling;
            
            // Toggle the 'active' class
            caseStudyContent.classList.toggle('active');
            
            // Update button text and style
            if (caseStudyContent.classList.contains('active')) {
                button.textContent = "Close Analysis";
                button.style.background = "var(--accent)";
                button.style.color = "white";
            } else {
                button.textContent = "View Case Study";
                button.style.background = "var(--border)";
                button.style.color = "var(--text)";
            }
        });
    });
}

// 5. BOOTSTRAP THE PAGE
document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    initCaseStudies(); 
    
    // Slight delay before typing starts for a polished entrance
    setTimeout(typeEffect, 800);
});

// 6. SCROLL REVEAL (Bonus: Subtle fade-in for cards)
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.logic-card, .project-frame').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
});

// 7. BUTTON INTERACTION LOGIC

// Smooth Scroll to Projects
const viewProjectsBtn = document.getElementById('view-projects-btn');
viewProjectsBtn.addEventListener('click', () => {
    document.querySelector('.project-gallery').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

// Show Contact Info
const talkBtn = document.getElementById('talk-btn');
const contactInfo = document.getElementById('contact-info');

talkBtn.addEventListener('click', () => {
    contactInfo.classList.toggle('show');
    
    // Optional: Change button text when clicked
    if (contactInfo.classList.contains('show')) {
        talkBtn.textContent = "Close Contact";
    } else {
        talkBtn.textContent = "Let's Talk";
    }
});
