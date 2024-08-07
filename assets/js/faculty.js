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

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                slowScrollTo(targetElement.offsetTop, 1000); // 1000ms = 1 second
            }
        });
    });
});

function slowScrollTo(to, duration) {
    const start = window.scrollY;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        window.scrollTo(0, val);
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

function easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
}

document.addEventListener("DOMContentLoaded", function() {
    var myBtn = document.getElementById("myBtn");
    var progressCircle = document.querySelector('.progress-ring__circle');
    var radius = progressCircle.r.baseVal.value;
    var circumference = 2 * Math.PI * radius;

    progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
    progressCircle.style.strokeDashoffset = circumference;

    function setProgress(percent) {
        const offset = circumference - (percent / 100 * circumference);
        progressCircle.style.strokeDashoffset = offset;
    }

    function updateProgress() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / scrollHeight) * 100;
        setProgress(scrollPercent);
    }

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            myBtn.style.display = "block";
        } else {
            myBtn.style.display = "none";
        }
        updateProgress();
    };

    myBtn.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    updateProgress();
});




