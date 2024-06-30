const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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

// insert item

import list_item from "./script.js"
import { exportItem,changeImage,takeCart,productRedirect,getItemParent,CreatItemSelectBox } from "./script.js"
var recommendList = $('.section__recommend-list')
exportItem(recommendList,'l-2');
// CreatItemSelectBox();
changeImage();
takeCart();
productRedirect();

