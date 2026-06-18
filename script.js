const bootScreen = document.getElementById("bootScreen");
const startScreen = document.getElementById("startScreen");
const startBtn = document.getElementById("startBtn");

const spaceScene = document.getElementById("spaceScene");

const dateText = document.getElementById("dateText");
const deathText = document.getElementById("deathText");

const endGlitch = document.getElementById("endGlitch");

const audio = document.getElementById("audio");

/* =========================
   نجوم الفضاء
========================= */

const stars = document.getElementById("stars");

for(let i = 0; i < 250; i++){

    const star = document.createElement("div");

    star.classList.add("star");

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDuration =
    (2 + Math.random() * 6) + "s";

    stars.appendChild(star);

}

/* =========================
   شاشة الاختراق
========================= */

const lines =
document.querySelectorAll(".line");

setTimeout(() => {

    lines[1].classList.remove("hidden");

}, 1200);

setTimeout(() => {

    lines[2].classList.remove("hidden");

}, 2500);

setTimeout(() => {

    bootScreen.classList.add("hidden");

    startScreen.classList.remove("hidden");

}, 4500);

/* =========================
   تشغيل السجل
========================= */

startBtn.addEventListener("click", () => {

    startScreen.classList.add("hidden");

    spaceScene.classList.remove("hidden");

    audio.play();

});

/* =========================
   الكتابة التدريجية
========================= */

function typeWriter(element, text, duration){

    element.textContent = "";

    let index = 0;

    const speed =
    duration / text.length;

    const interval = setInterval(() => {

        element.textContent += text[index];

        index++;

        if(index >= text.length){

            clearInterval(interval);

        }

    }, speed);

}

/* =========================
   التزامن مع الصوت
========================= */

let dateStarted = false;
let deathStarted = false;
let endingStarted = false;

audio.addEventListener("timeupdate", () => {

    const t = audio.currentTime;

    /* الجملة الأولى */

    if(t >= 2 && !dateStarted){

        dateStarted = true;

        typeWriter(

            dateText,

            "في السابع من شهر مايو سنة 2341...",

            6000

        );

    }

    /* الجملة الثانية */

    if(t >= 9 && !deathStarted){

        deathStarted = true;

        typeWriter(

            deathText,

            "مات أوليفر.",

            3000

        );

        document.body.classList.add("flash");

        setTimeout(() => {

            document.body.classList.remove("flash");

        },300);

    }

});

/* =========================
   نهاية التسجيل
========================= */

audio.addEventListener("ended", () => {

    if(endingStarted) return;

    endingStarted = true;

    spaceScene.style.opacity = "0";

    setTimeout(() => {

        spaceScene.classList.add("hidden");

        endGlitch.classList.remove("hidden");

    },1000);

    setTimeout(() => {

        endGlitch.innerHTML = `
        <div class="endLine">
        ARCHIVE CLOSED
        </div>
        `;

    },1500);

    setTimeout(() => {

        endGlitch.innerHTML = `
        <div class="endLine">
        CONNECTION LOST
        </div>
        `;

    },3000);

    setTimeout(() => {

        endGlitch.innerHTML = `
        <div class="endLine">
        SIGNAL TERMINATED
        </div>
        `;

    },4500);

    setTimeout(() => {

        document.body.innerHTML = "";

        document.body.style.background = "black";

    },7000);

});
