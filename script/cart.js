const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var cartItemQuanityBtn = document.querySelector(".cart__list-item-quantily i");
var cartItemSelect = document.querySelector(".cart__list-item-count");





var itemPrice = $('.cart__list-item-price span');
var itemPricePay = $('.cart-detail-price span');
var itemShipPay = $('.cart-detail-price-ship span');
var TotalPay = $('.cart-detail-total-price span');
var itemPayCount =$('.cart__list-item-count')
if(itemPricePay){
    itemPricePay.innerHTML = parseInt(itemPrice.innerHTML) * parseInt(itemPayCount.value);
    
    TotalPay.innerHTML = (parseInt(itemPricePay.innerHTML) + parseInt(itemShipPay.innerHTML)).toLocaleString();
    itemPayCount.addEventListener("change",function(){
    itemPricePay.innerHTML = parseInt(itemPrice.innerHTML) * parseInt(itemPayCount.value);
    
    TotalPay.innerHTML = (parseInt(itemPricePay.innerHTML) + parseInt(itemShipPay.innerHTML)).toLocaleString();
    })
}


// payment-CloseBtn---------------------------------------------Start

var paymentCloseBtn = $('.close-formBtn')

paymentCloseBtn.onclick = function(){
    console.log(1)
    $('#payment-form').classList.toggle('form-close');
}

// payment-CloseBtn---------------------------------------------End