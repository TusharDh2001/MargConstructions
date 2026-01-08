// Simple navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow = window.scrollY > 50
    ? "0 2px 10px rgba(0,0,0,0.5)"
    : "none";
});
