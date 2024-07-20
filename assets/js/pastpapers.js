const items = [
    { heading: "Operating Systems (OS)", para: "This is a paragraph for item 1. This is a paragraph for item 1. This is a paragraph for item 1. This is a paragraph for item 1.", link: "page1.html", rating: 5.0, badge: 'easy' },
    { heading: "Design & Analysis of Algorithms (DAA)", para: "This is a paragraph for item 2. This is a paragraph for item 2. This is a paragraph for item 2. This is a paragraph for item 2.", link: "page2.html", rating: 4.2, badge: 'medium' },
    { heading: "Data Structures (DS)", para: "This is a paragraph for item 3. This is a paragraph for item 3. This is a paragraph for item 3. This is a paragraph for item 3.", link: "page3.html", rating: 3.9, badge: 'hard' },
    { heading: "Heading 4", para: "This is a paragraph for item 4.", link: "page4.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 5", para: "This is a paragraph for item 5.", link: "page5.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 6", para: "This is a paragraph for item 6.", link: "page6.html", rating: 4.5, badge: 'hard' },
    { heading: "Heading 7", para: "This is a paragraph for item 7.", link: "page7.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 8", para: "This is a paragraph for item 8.", link: "page8.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 9", para: "This is a paragraph for item 9.", link: "page9.html", rating: 4.5, badge: 'hard' },
    { heading: "Heading 10", para: "This is a paragraph for item 10.", link: "page10.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 11", para: "This is a paragraph for item 11.", link: "page11.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 12", para: "This is a paragraph for item 12.", link: "page12.html", rating: 4.5, badge: 'hard' },
    { heading: "Heading 13", para: "This is a paragraph for item 13.", link: "page13.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 14", para: "This is a paragraph for item 14.", link: "page14.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 15", para: "This is a paragraph for item 15.", link: "page15.html", rating: 4.5, badge: 'hard' },
    { heading: "Heading 16", para: "This is a paragraph for item 16.", link: "page16.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 17", para: "This is a paragraph for item 17.", link: "page17.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 18", para: "This is a paragraph for item 18.", link: "page18.html", rating: 4.5, badge: 'hard' },
    { heading: "Heading 19", para: "This is a paragraph for item 19.", link: "page19.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 20", para: "This is a paragraph for item 20.", link: "page20.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 21", para: "This is a paragraph for item 21.", link: "page21.html", rating: 4.5, badge: 'hard' },
    { heading: "Heading 22", para: "This is a paragraph for item 22.", link: "page22.html", rating: 4.5, badge: 'easy' },
    { heading: "Heading 23", para: "This is a paragraph for item 23.", link: "page23.html", rating: 4.5, badge: 'medium' },
    { heading: "Heading 24", para: "This is a paragraph for item 24.", link: "page24.html", rating: 4.5, badge: 'hard' }
];

let currentIndex = 0;

function createDivs(count) {
    const container = document.getElementById('container');
    for (let i = 0; i < count; i++) {
        if (currentIndex >= items.length) {
            document.getElementById('viewMoreBtn').disabled = true;
            return;
        }

        const div = document.createElement('div');
        div.className = 'item';

        const link = document.createElement('a');
        link.href = items[currentIndex].link;

        const heading = document.createElement('h2');
        heading.textContent = items[currentIndex].heading;
        link.appendChild(heading);

        const para = document.createElement('p');
        para.textContent = items[currentIndex].para;
        link.appendChild(para);

        div.appendChild(link);

        // Add badge
        const badge = document.createElement('div');
        badge.className = `badge ${items[currentIndex].badge}`;
        badge.textContent = items[currentIndex].badge.charAt(0).toUpperCase() + items[currentIndex].badge.slice(1);
        div.appendChild(badge);

        // Add button inside the div item
        const button = document.createElement('button');
        button.textContent = "See All";
        button.className = 'item-button';
        div.appendChild(button);

        // Add rating stars and text inside the div item
        if (items[currentIndex].rating !== undefined) {
            const ratingDiv = document.createElement('div');
            ratingDiv.className = 'rating';

            const stars = document.createElement('span');
            stars.className = 'stars';
            stars.innerHTML = `${'★'.repeat(Math.floor(items[currentIndex].rating))}${'☆'.repeat(5 - Math.floor(items[currentIndex].rating))}`;
            ratingDiv.appendChild(stars);

            const ratingText = document.createElement('span');
            ratingText.className = 'rating-value';
            ratingText.textContent = `${items[currentIndex].rating}/5`;
            ratingDiv.appendChild(ratingText);

            div.appendChild(ratingDiv);
        }

        container.appendChild(div);
        currentIndex++;
    }
}

function loadMoreDivs() {
    createDivs(12);
}

// Load initial 12 divs
createDivs(12);

// Function to filter items based on search input
function filterItems(searchText) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear existing items

    items.forEach(item => {
        // Convert heading and para to lowercase for case-insensitive search
        const headingText = item.heading.toLowerCase();
        const paraText = item.para.toLowerCase();
        const searchLower = searchText.toLowerCase();

        // Check if search text matches heading or paragraph
        if (headingText.includes(searchLower) || paraText.includes(searchLower)) {
            const div = document.createElement('div');
            div.className = 'item';

            const link = document.createElement('a');
            link.href = item.link;

            const heading = document.createElement('h2');
            heading.textContent = item.heading;
            link.appendChild(heading);

            const para = document.createElement('p');
            para.textContent = item.para;
            link.appendChild(para);

            div.appendChild(link);

            // Add badge
            const badge = document.createElement('div');
            badge.className = `badge ${item.badge}`;
            badge.textContent = item.badge.charAt(0).toUpperCase() + item.badge.slice(1);
            div.appendChild(badge);

            // Add button inside the div item
            const button = document.createElement('button');
            button.textContent = "See All";
            button.className = 'item-button';
            div.appendChild(button);

            // Add rating stars and text inside the div item
            if (item.rating !== undefined) {
                const ratingDiv = document.createElement('div');
                ratingDiv.className = 'rating';

                const stars = document.createElement('span');
                stars.className = 'stars';
                stars.innerHTML = `${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}`;
                ratingDiv.appendChild(stars);

                const ratingText = document.createElement('span');
                ratingText.className = 'rating-value';
                ratingText.textContent = `${item.rating}/5`;
                ratingDiv.appendChild(ratingText);

                div.appendChild(ratingDiv);
            }

            container.appendChild(div);
        }
    });
}

// Add event listener for search bar input
document.querySelector('.search-bar input').addEventListener('input', function () {
    const searchText = this.value;
    filterItems(searchText);
});
