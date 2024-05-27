const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var itemData = $$('.product-item-data-color_header');
var favorBtn = $$('.favor-btn')

itemData.forEach(a =>{
    var itemDataList = a.nextElementSibling
    console.log(itemDataList)
    var chevronText = a.querySelector('.product-item-data-color_header_open p')
    var chevronBtn = a.querySelector('.product-item-data-color_header_open i')
    a.onclick = function(){
        itemDataList.classList.toggle('item-data-open');
        chevronBtn.classList.toggle('fa-chevron-up')
        chevronBtn.classList.toggle('fa-chevron-down')
        if(chevronText.innerHTML === '在庫を確認する'){
            chevronText.innerHTML = '閉じる'
        }else{
            chevronText.innerHTML = '在庫を確認する'
        }
}
})


favorBtn.forEach(a => {
    a.onclick = function(){
        this.classList.toggle('favor-btn-disable')
        this.classList.toggle('favor-btn-available')
    }
});


///Image-------------------------------

var itemImageMain = $('.product-item-image-main');
var itemImage = $$('.product-item-image-item');


itemImage.forEach = function(a){
    
    if(a.classList.contains('main')){
        itemImageMain.querySelector('img').src = a.querySelector('img').src;
    }
}