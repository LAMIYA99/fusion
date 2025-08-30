var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const DARK = document.querySelector("#DarkMode");
  DARK.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("DarkMode");
  });