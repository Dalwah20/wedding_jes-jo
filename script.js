// OPEN INVITATION + MUSIC
function openInvitation() {
  const opening = document.getElementById("opening");
  const main = document.getElementById("main");

  opening.style.opacity = "0";
  opening.style.transition = "1s";

  setTimeout(() => {
    opening.style.display = "none";
    main.classList.remove("hidden");
    document.getElementById("music").play();
  }, 1000);
}


// COUNTDOWN
const countdown = document.getElementById("countdown");
const eventDate = new Date("2026-06-06 10:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((diff%(1000*60*60))/(1000*60));
  const s = Math.floor((diff%(1000*60))/1000);

  countdown.innerHTML = `${d} Hari ${h} Jam ${m} Menit ${s} Detik`;
}, 1000);


// SCROLL REVEAL
function revealOnScroll() {
  const sections = document.querySelectorAll(".section");

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100) {
      sec.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


// SPARKLE EFFECT
function createSparkle() {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");

  const size = Math.random() * 6 + 3;
  sparkle.style.width = size + "px";
  sparkle.style.height = size + "px";

  sparkle.style.left = Math.random() * window.innerWidth + "px";
  sparkle.style.top = window.innerHeight + "px";

  sparkle.style.animationDuration = (Math.random() * 2 + 2) + "s";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 3000);
}

setInterval(createSparkle, 120);


setInterval(createSparkle, 200);


// RSVP LOCAL
function submitRSVP() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!name || !message) return;

  const p = document.createElement("p");
  p.innerText = name + ": " + message;

  document.getElementById("comments").appendChild(p);

  document.getElementById("name").value = "";
  document.getElementById("message").value = "";
}
