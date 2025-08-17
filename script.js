// Font Awesome (for icons)
//<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
const faScript = document.createElement('script');
faScript.src = 'https://kit.fontawesome.com/a076d05399.js';
faScript.crossOrigin = 'anonymous';
document.head.appendChild(faScript);

// Circles for professional skills
document.querySelectorAll(".circle").forEach(circle => {
  let percent = circle.getAttribute("data-percent");
  let dashoffset = 220 - (220 * percent) / 100;
  circle.querySelector("svg circle:last-child").style.strokeDashoffset = dashoffset;
});

const toggleBtn = document.getElementById("modeToggle");
const icon = toggleBtn.querySelector("i");

// Load mode from localStorage if available
if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark-mode");
  icon.classList.remove("fa-moon");
  icon.classList.add("fa-sun");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle icon
  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    localStorage.setItem("mode", "dark");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
    localStorage.setItem("mode", "light");
  }
});
