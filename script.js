/* =========================
   1. Scroll Reveal (Cards)
========================= */
const cards = document.querySelectorAll(".card");

const revealCards = () => {
  const trigger = window.innerHeight * 0.85;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealCards);
revealCards();


/* =========================
   2. Active Navbar Link
========================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("class");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});


/* =========================
   3. Smooth Scroll (Nav)
========================= */
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    if (link.hash !== "") {
      e.preventDefault();
      document.querySelector(link.hash)
        .scrollIntoView({ behavior: "smooth" });
    }
  });
});


/* =========================
   4. Typewriter Effect
========================= */
const roles = ["Developer", "Frontend Developer", "Web Engineer"];
let index = 0;
let char = 0;
const roleText = document.querySelector(".home-content h3");

function typeEffect() {
  if (char < roles[index].length) {
    roleText.textContent += roles[index].charAt(char);
    char++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (char > 0) {
    roleText.textContent = roles[index].substring(0, char - 1);
    char--;
    setTimeout(eraseEffect, 80);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();


/* =========================
   5. Scroll To Top Button
========================= */
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 12px 16px;
  border-radius: 50%;
  border: none;
  background: #6d28d9;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: none;
  z-index: 1000;
`;

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const  procards = document.querySelectorAll(".card");

cards.forEach(card => {

  // Initial style from JS
  card.style.transition = "all 0.3s ease";
  card.style.borderRadius = "15px";
  card.style.cursor = "pointer";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-12px) scale(1.05)";
    card.style.boxShadow =
      "0 20px 40px rgba(0,0,0,0.25)";
    card.style.background =
      "linear-gradient(135deg,#667eea,#764ba2)";
    card.style.color = "#fff";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow =
      "0 6px 15px rgba(0,0,0,0.15)";
    card.style.background = "#fff";
    card.style.color = "#000";
  });
});
function downloadResume() {
  const link = document.createElement("a");
  link.href = "RESUME_Tharadevi.pdf";
  link.download = "RESUME_Tharadevi.pdf";
  link.click();
}

