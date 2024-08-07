document.querySelectorAll('.calculator').forEach(calculator => {
    let buttons = calculator.querySelector('.calc-buttons');
    let btn = buttons.querySelectorAll('span');
    let value = calculator.querySelector('.value');

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
            if (this.innerHTML == "=") {
                value.innerHTML = eval(value.innerHTML);
            } else {
                if (this.innerHTML == 'Clear') {
                    value.innerHTML = "";
                } else {
                    value.innerHTML += this.innerHTML;
                }
            }
        })
    }
});
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
