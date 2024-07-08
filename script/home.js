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
  slidesPerView: window.innerWidth < 740 ? 2 : window.innerWidth < 1024 ? 3 : 5,
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

//CATEGORY BOX HIDE 
var categoryBoxBtn = $('.header-category-box i');
var categoryBoxBtnClose = $('.category-box-closeBtn')
var categoryBox = $('.category-box');
categoryBoxBtn.onclick = function(){
    categoryBox.classList.toggle('unhide-active')
    document.body.classList.add('over')
    $('.over-play').style.display = 'block'
    document.body.style.position = 'fixed'
}
categoryBoxBtnClose.onclick = function(){
    categoryBox.classList.remove('unhide-active')
    document.body.classList.remove('over')
    $('.over-play').style.display = 'none'
    document.body.style.position = ''
}


