const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links'); // FIXED LINE
const menuBTNicon = menuBtn.querySelector('i');

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBTNicon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBTNicon.setAttribute("class", "ri-menu-line");
});
