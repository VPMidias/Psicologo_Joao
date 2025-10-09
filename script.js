document.addEventListener("DOMContentLoaded", () => {

  // Serve para inicializar o Swiper
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
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
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

  /* ---------------------------------------------------------------------------------- */

  // Serve para adicionar o background a navbar ao rolar a página

  const navbar = document.querySelector(".navbar");
  const SCROLL_LIMIT = 20; 
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

  /* ---------------------------------------------------------------------------------- */

  // Serve para deixar o ano dinamico no rodapé

  const labelAno = document.querySelector("#ano");
  const anoAtual = new Date().getFullYear();

  labelAno.innerText = anoAtual;
  
 /* ---------------------------------------------------------------------------------- */


   // Serve para fechar o menu ao clicar em algum link de navegação ou fora do mesmo

  const navbarCollapse = document.getElementById("navbarNav");
  const navbarLinks = navbarCollapse.querySelectorAll("a.nav-link, a.btn");

  // Função para fechar o menu
  const closeMenu = () => {
    if (navbarCollapse.classList.contains("show")) {
      // Usando o método do Bootstrap para collapse
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    }
  };

  // Fecha ao clicar em qualquer link dentro do menu
  navbarLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Fecha ao clicar fora do menu
  document.addEventListener("click", (e) => {
    if (
      !navbarCollapse.contains(e.target) &&
      !e.target.matches(".navbar-toggler")
    ) {
      closeMenu();
    }
  });
});
