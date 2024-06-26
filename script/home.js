var swiper = new Swiper ('.swiper', {
    // Các Parameters
    direction: 'vertical',
    loop: true,

    // Nếu cần pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Nếu cần navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Nếu cần scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })
