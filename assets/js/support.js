document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const searchResults = document.createElement('div');
    searchResults.className = 'search-results';
    document.querySelector('.search-bar').appendChild(searchResults);

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('input', performSearch);

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const results = [];

        // Clear previous search results
        searchResults.innerHTML = '';

        if (query.trim() === '') {
            searchResults.style.display = 'none'; // Hide if input is empty
            return;
        }

        // Iterate through all div elements on the page
        const allDivs = document.querySelectorAll('div');
        allDivs.forEach(div => {
            if (div.textContent.toLowerCase().includes(query)) {
                results.push(div);
            }
        });

        if (results.length > 0) {
            searchResults.style.display = 'block'; // Show results
            results.forEach(result => {
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.textContent = result.textContent.trim().substring(0, 100) + '...'; // Trim and show preview
                searchResults.appendChild(resultItem);
                resultItem.addEventListener('click', () => {
                    result.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scroll to the result
                });
            });
        } else {
            searchResults.innerHTML = '<div class="no-results">No results found</div>';
            searchResults.style.display = 'block'; // Show "No results" message
        }
    }
});
