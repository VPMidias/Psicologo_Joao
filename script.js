document.addEventListener("DOMContentLoaded", () => {

   const swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1.1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3.2,
          },
        },
      });

      const swiperTerapia = new Swiper(".swiper-terapia", {
        slidesPerView: 3,
        spaceBetween: 50,
        centeredSlides: true,
        loop: true,
        loopedSlides: 2, // número total de slides
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          0: { slidesPerView: 1, centeredSlides: false },
          768: { slidesPerView: 2, centeredSlides: true },
          992: { slidesPerView: 3, centeredSlides: true },
        },
        
      });

      

  const navbar = document.querySelector(".navbar");
  const SCROLL_LIMIT = 50; // alterado de 200 para 50
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
