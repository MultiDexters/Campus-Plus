/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            toggle.classList.toggle('show-icon');
        });
    }
}

showMenu('nav-toggle', 'nav-menu');

/*=============== SHOW DROPDOWN MENU ===============*/
const dropdownItems = document.querySelectorAll('.dropdown__item');

dropdownItems.forEach((item) => {
    const dropdownButton = item.querySelector('.dropdown__button');

    if (dropdownButton) {
        dropdownButton.addEventListener('click', () => {
            toggleItem(item);
        });
    }
});

// Function to toggle dropdown visibility
const toggleItem = (item) => {
    const dropdownContainer = item.querySelector('.dropdown__container');

    if (dropdownContainer) {
        if (item.classList.contains('show-dropdown')) {
            dropdownContainer.style.height = '0';
            item.classList.remove('show-dropdown');
        } else {
            dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px';
            item.classList.add('show-dropdown');
        }
    }
}

/*=============== DELETE DROPDOWN STYLES ===============*/
const mediaQuery = window.matchMedia('(min-width: 1118px)');
const dropdownContainers = document.querySelectorAll('.dropdown__container');

// Function to remove dropdown styles on resize
const removeDropdownStyles = () => {
    if (mediaQuery.matches) {
        dropdownContainers.forEach((container) => {
            container.removeAttribute('style');
        });

        dropdownItems.forEach((item) => {
            item.classList.remove('show-dropdown');
        });
    }
}

// Initial call to remove dropdown styles based on initial window width
removeDropdownStyles();

// Event listener for window resize
window.addEventListener('resize', removeDropdownStyles);
