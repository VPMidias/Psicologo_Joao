document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const SCROLL_LIMIT = 200;
  const DESKTOP_WIDTH = 992;

  updateNavbar();
  window.addEventListener("scroll", updateNavbar, { passive: true });
  window.addEventListener("resize", updateNavbar);

  function updateNavbar() {
    const isDesktop = window.innerWidth >= DESKTOP_WIDTH;
    const scrolled = window.scrollY > SCROLL_LIMIT;

    if (!isDesktop) {
      navbar.classList.add("navbar-scrolled");
      return;
    }

    if (scrolled) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  }

});
