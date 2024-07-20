document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const facultyGrid = document.getElementById('facultyGrid');
    const facultyCards = facultyGrid.getElementsByClassName('faculty-card');

    searchInput.addEventListener('keyup', function () {
        const query = searchInput.value.toLowerCase();

        for (let i = 0; i < facultyCards.length; i++) {
            const card = facultyCards[i];
            const name = card.getElementsByTagName('h3')[0].textContent.toLowerCase();

            if (name.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        }
    });
});
