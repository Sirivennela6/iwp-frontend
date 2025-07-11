// Toggle hamburger menu
function toggleMenu() {
  const nav = document.getElementById("main-nav");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}

// Access control function
function checkAccess(expectedRole) {
  const userRole = localStorage.getItem("userRole");
  if (userRole !== expectedRole) {
    alert("Access denied. Please login with proper credentials.");
    window.location.href = "home.html";
  }
}

// Logout function
function logout() {
  localStorage.removeItem("userRole");
  window.location.href = "home.html";
}

// Auto-close mobile nav on link click (optional enhancement)
window.addEventListener("load", () => {
  const navLinks = document.querySelectorAll("nav a");
  const nav = document.getElementById("main-nav");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        nav.style.display = "none";
      }
    });
  });
});
