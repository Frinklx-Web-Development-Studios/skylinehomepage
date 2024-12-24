// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const snowContainer = document.getElementById("snow");

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");

  // Randomize size and position
  const size = Math.random() * 5 + 2 + "px";
  const left = Math.random() * window.innerWidth + "px";

  snowflake.style.width = size;
  snowflake.style.height = size;
  snowflake.style.left = left;

  // Randomize animation duration and delay
  const animationDuration = Math.random() * 3 + 2 + "s";
  const animationDelay = Math.random() * 5 + "s";

  snowflake.style.animationDuration = animationDuration;
  snowflake.style.animationDelay = animationDelay;

  snowContainer.appendChild(snowflake);

  // Remove the snowflake after it falls out of view
  setTimeout(() => {
    snowflake.remove();
  }, parseInt(animationDuration) * 1000);
}

// Generate snowflakes continuously
setInterval(createSnowflake, 100);
