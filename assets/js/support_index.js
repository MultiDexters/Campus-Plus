document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    const searchInput = document.querySelector('.search-bar input');
    const faqItems = Array.from(document.querySelectorAll('.faq-item'));

    // Collect FAQ questions and answers
    const faqData = faqItems.map(item => {
        return {
            element: item,
            question: item.querySelector('.faq-question').textContent,
            answer: item.querySelector('.faq-answer').textContent
        };
    });

    // Initialize Fuse.js
    const fuse = new Fuse(faqData, {
        keys: ['question', 'answer'],
        threshold: 0.3, // Adjust this for fuzziness; lower means more strict
    });


    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const arrow = button.querySelector('.arrow');

            // Check if the answer is already expanded
            if (answer.style.maxHeight && answer.style.maxHeight !== '0px') {
                answer.style.maxHeight = '0';
                arrow.textContent = '+';
            } else {
                // First, reset all answers to ensure only one is expanded at a time
                document.querySelectorAll('.faq-answer').forEach(item => {
                    item.style.maxHeight = '0';
                    item.previousElementSibling.querySelector('.arrow').textContent = '+';
                });

                // Set the maxHeight to the scrollHeight of the answer to expand it
                answer.style.maxHeight = answer.scrollHeight + 'px';
                arrow.textContent = '-';
            }
        });
    });
});
