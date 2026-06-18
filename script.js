const music = document.getElementById("music");

const dateText = document.getElementById("dateText");
const deathText = document.getElementById("deathText");
const journeyText = document.getElementById("journeyText");
const endText = document.getElementById("endText");
const thanksText = document.getElementById("thanksText");

const particlesContainer =
document.getElementById("particles");

/* =========================
   إنشاء الغبار المتحرك
========================= */

for(let i = 0; i < 80; i++){

    const particle =
    document.createElement("div");

    particle.classList.add("particle");

    particle.style.left =
    Math.random() * 100 + "%";

    particle.style.animationDuration =
    (10 + Math.random() * 20) + "s";

    particle.style.animationDelay =
    Math.random() * 10 + "s";

    particle.style.opacity =
    Math.random() * 0.5;

    particlesContainer.appendChild(particle);

}

/* =========================
   تشغيل الموسيقى
========================= */

window.addEventListener("load", () => {

    music.volume = 1;

    music.play().catch(() => {

        console.log(
        "المتصفح منع التشغيل التلقائي"
        );

    });

});

/* =========================
   التوقيتات السينمائية
========================= */

/* الثانية 8 */

setTimeout(() => {

    dateText.classList.add("show");

}, 8000);

/* الثانية 11 */

setTimeout(() => {

    deathText.classList.add("show");

}, 11000);

/* الثانية 20 */

setTimeout(() => {

    dateText.style.opacity = "0";

}, 20000);

/* الثانية 24 */

setTimeout(() => {

    journeyText.classList.add("show");

}, 24000);

/* الثانية 28 */

setTimeout(() => {

    journeyText.style.opacity = "0";

    endText.classList.add("show");

}, 28000);

/* الثانية 31 */

setTimeout(() => {

    thanksText.classList.add("show");

}, 31000);

/* الثانية 33 */

setTimeout(() => {

    thanksText.style.opacity = "0";

}, 33000);