var swiper = new Swiper ('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2500
    },
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  