const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var swiperTab = new Swiper('.tab',{
  direction:'horizontal',
  loop:true,
  slidesPerView:window.innerWidth < 740 ?3:8,
  spaceBetween: 1,
})

var swiperHomepage = new Swiper ('.swiper-homepage', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500
  },
  slidesPerView:window.innerWidth < 740 ? 1:2,
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

var swiperBrand = new Swiper ('.swiper__brand-list', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 5,
  spaceBetween: 20,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

window.addEventListener('resize', function() {
  // Cập nhật cấu hình Swiper khi kích thước màn hình thay đổi
  swiperTab.params.slidesPerView = window.innerWidth < 740 ? 3 : 8;
  swiperTab.update();
});

// insert item

