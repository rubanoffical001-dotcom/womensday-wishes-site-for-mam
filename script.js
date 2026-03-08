document.addEventListener('DOMContentLoaded', () => {
    // 1. Floating Flowers Animation
    const flowerContainer = document.getElementById('flower-container');
    const flowerTypes = ['🌸', '🌺', '🌷', '✨', '💖'];
    
    function createFlower() {
        const flower = document.createElement('div');
        flower.classList.add('flower');
        flower.innerText = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        
        // Randomize starting position, size, and duration
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (Math.random() * 5 + 8) + 's';
        flower.style.fontSize = (Math.random() * 1 + 1) + 'rem';
        
        flowerContainer.appendChild(flower);
        
        // Remove after animation to prevent DOM buildup
        setTimeout(() => {
            flower.remove();
        }, 13000);
    }
    
    // Create new flowers periodically
    setInterval(createFlower, 800);
    
    // Initial flowers
    for(let i=0; i<15; i++) {
        setTimeout(createFlower, Math.random() * 3000);
    }

    // 2. Rotating Quotes
    const quotes = [
        { text: "There is no limit to what we, as women, can accomplish.", author: "Michelle Obama" },
        { text: "A strong woman looks a challenge dead in the eye and gives it a wink.", author: "Gina Carey" },
        { text: "Women are the real architects of society.", author: "Cher" },
        { text: "Here's to strong women: May we know them. May we be them. May we raise them.", author: "Unknown" },
        { text: "The most beautiful thing a woman can wear is confidence.", author: "Blake Lively" }
    ];
    
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteCard = document.getElementById('quote-card');
    
    let currentQuote = 0;
    
    setInterval(() => {
        // Fade out
        quoteCard.style.opacity = 0;
        
        setTimeout(() => {
            currentQuote = (currentQuote + 1) % quotes.length;
            quoteText.innerText = `"${quotes[currentQuote].text}"`;
            quoteAuthor.innerText = `- ${quotes[currentQuote].author}`;
            // Fade in
            quoteCard.style.opacity = 1;
        }, 500); // Wait for fade out
    }, 6000);

    // 3. Popup Reveal and Confetti
    const revealBtn = document.getElementById('reveal-btn');
    const popup = document.getElementById('greeting-popup');
    const closeBtn = document.getElementById('close-btn');
    
    function fireConfetti() {
        var duration = 3000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#8A2BE2', '#FF69B4', '#FFD700']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#8A2BE2', '#FF69B4', '#FFD700']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    revealBtn.addEventListener('click', () => {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        fireConfetti();
    });

    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close on clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
});
