const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

var swiperHomepage = new Swiper ('.swiper-homepage', {
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

// insert item

import list_item from "./script.js"
import { exportItem,changeImage,takeCart,productRedirect,getItemParent,CreatItemSelectBox } from "./script.js"
var recommendList = $('.section__recommend-list')
exportItem(recommendList,'l-2');
// CreatItemSelectBox();
changeImage();
takeCart();
productRedirect();

