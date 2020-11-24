// Initialize swiper
const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1.1,
  spaceBetween: 10
});

// State of dark mode
var dark = false;
// State of sidenav
var menuOpen = false;
// Get sidenav
var menu = document.getElementById('menu');
// Get dark-mode button
var nightSwitch = document.getElementById('switch');
// Get backdrop
var backdrop = document.getElementById('backdrop');
// Get burger
var burger = document.getElementById('burger');
// Moon icon
var moon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
`;
// Sun icon
var sun = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
`;

// Switch the icon based on dark-mode state
function setIcon() {
  if (dark) {
    nightSwitch.innerHTML = sun;
  } else {
    nightSwitch.innerHTML = moon;
  }
}

// Activate backdrop based on sidenav state
function setBackdrop() {
  if (menuOpen) {
    backdrop.classList.remove('z-0');
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-50');
    backdrop.classList.add('z-20');
  } else {
    backdrop.classList.remove('z-20');
    backdrop.classList.remove('opacity-50');
    backdrop.classList.add('opacity-0');
    backdrop.classList.add('z-0');
  }
}

// Bring in sidenav based on sidenav state
function setMenu() {
  if (menuOpen) {
    menu.classList.remove('-translate-x-full');
  } else {
    menu.classList.add('-translate-x-full');
  }
}

// Activate dark-mode based on dark-mode switch
nightSwitch.onclick = function () {
  if (dark) {
    document.documentElement.classList = '';
  } else {
    document.documentElement.classList = 'dark';
  }
  dark = !dark;
  setIcon();
};

// Watch for clicks
hamburger.onclick = function () {
  menuOpen = !menuOpen;
  setMenu();
  setBackdrop();
};

backdrop.onclick = function () {
  menuOpen = false;
  setBackdrop();
  setMenu();
};
