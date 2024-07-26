// Sample course data
const courses = [
    {name: 'Course 1', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 2', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 3', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 4', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 5', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 6', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 7', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 8', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 9', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 10', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 11', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 12', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 13', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 14', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 15', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 16', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 17', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 18', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 19', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 20', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 21', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 22', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 23', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 24', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 25', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 26', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 27', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 28', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 29', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 30', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 31', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 32', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 33', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 34', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 35', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 36', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 37', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 38', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 39', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 40', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 41', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 42', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 43', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 44', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 45', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 46', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 47', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 48', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 49', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 50', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 51', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 52', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 53', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 54', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 55', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 56', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 57', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 58', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 59', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 60', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 61', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 62', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 63', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 64', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 65', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 66', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 67', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 68', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 69', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 70', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 71', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 72', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 73', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 74', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 75', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 76', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 77', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 78', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 79', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 80', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 81', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 82', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 83', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 84', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 85', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 86', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 87', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 88', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 89', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 90', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 91', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 92', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 93', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'},
 {name: 'Course 94', watchtime: 'Duration: 20 Hours', rating: 4.8, students: '20 Students', playlistLink: 'https://www.youtube.com/playlist?list=PL3' ,duration:'130 Videos',VideoId:'WQoB2z67hvY'}];

let filteredCourses = [...courses]; // Initialize with all courses
const itemsPerPage = 12; // Number of items to show per page
let totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
let currentPage = 1;

// Function to create course cards
function createCourseCards(startIndex, endIndex) {
    const container = document.getElementById('course-container');
    container.innerHTML = '';

    // Slice the filteredCourses array based on the current page
    const paginatedCourses = filteredCourses.slice(startIndex, endIndex);

    paginatedCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';

        card.innerHTML = `
            <a href="${course.playlistLink}" class="course-card-link" target="_blank">
                <img src="https://i.ytimg.com/vi/${course.VideoId}/hqdefault.jpg" alt="${course.name}">
                <div class="course-info">
                    <h3 class="course-name">${course.name}</h3>
                    <span class="rating">
                        ${generateStars(course.rating)}
                        <span>(${course.rating}/5 Rating)</span>
                    </span>
                    <div class="card-foot">
                        <span class="watch-time"><i class="fas fa-clock"></i> ${course.watchtime}</span>
                        <span class="students"><i class="fas fa-user"></i> ${course.students}</span>
                    </div>
                    <span class="duration">${course.duration}</span>
                </div>
            </a>
        `;

        container.appendChild(card);
    });
}

// Function to generate star ratings
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
    `;
}

// Function to setup pagination buttons
function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = ''; // Clear existing buttons

    const prevButton = document.createElement('button');
    prevButton.textContent = '<';
    prevButton.disabled = currentPage === 1;
    prevButton.addEventListener('click', () => changePage(currentPage - 1));
    pagination.appendChild(prevButton);

    const nextButton = document.createElement('button');
    nextButton.textContent = '>';
    nextButton.disabled = currentPage === totalPages;
    nextButton.addEventListener('click', () => changePage(currentPage + 1));
    pagination.appendChild(nextButton);
}

// Function to change page
function changePage(page) {
    if (page < 1 || page > totalPages) return;

    currentPage = page;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    createCourseCards(startIndex, endIndex);
    setupPagination();
}

// Search function
function searchCourses() {
    const query = document.querySelector('.search-input').value.toLowerCase();
    filteredCourses = courses.filter(course => 
        course.name.toLowerCase().includes(query)
    );

    // Update total pages and reset to the first page
    totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
    currentPage = 1;

    // Reinitialize the page with filtered results
    changePage(currentPage);
}

// Initialize the page with the first set of course cards and pagination
function initPage() {
    createCourseCards(0, itemsPerPage);
    setupPagination();
}

// Wait for the DOM to load before initializing the page
document.addEventListener('DOMContentLoaded', initPage);
