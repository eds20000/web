const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var itemData = $$('.product-item-data-color_header');
var favorBtn = $$('.favor-btn')

itemData.forEach(a =>{
    var itemDataList = a.nextElementSibling
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

// Lấy thông tin về sản phẩm từ query parameter
import list_item from './script.js'
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

console.log(list_item)
console.log(productId)

var productItemContainer = $('.product-item-cotainer');

productItemContainer.innerHTML = 
`<div class="row">
<div class="breadcrumb">
    <ul class="breadcrumb-list">
        <li class="breadcrumb-item-main"><a href="./index.html">TS-SHOP</a></li>
        <li class="breadcrumb-item">${list_item[productId].category}</li>
    </ul>
</div>
</div>

<div class="row">
<div class="col l-5">
    <div class="product-item-image">
        <div class="product-item-image-main">
            <img src="${list_item[productId].color_img[0].img[0]}" alt="">
        <div class="product-item-btn product-item-btnNext"><i class="fa-solid fa-angle-right"></i></div>
        <div class="product-item-btn product-item-btnPrev"><i class="fa-solid fa-angle-left"></i></div>
        </div>
        
        
        <ul class="product-item-image_list">

        </ul>
    </div>
</div>

<div class="col l-7">
    <div class="product-item-data">
        <div class="product-item-data-title">
            <div class="product-item-data-title_name">Manfinity EMRG メンズシャツ バギー クルーネック 半袖 グラフィックティー 夏用</div>
            <div class="product-item-data-title_favor favor-btn favor-btn-disable">
            </div>
            <div class="product-item-data-title-favornum">900</div>
        </div>
        
        <div class="product-item-data-price">￥
            <div class="product-item-data-price_index">1.023</div>
            <div class="product-item-data-price_tax">税込</div>  </div>
        <div class="product-item-data_list">
            <div class="product-item-data-color">
            <ul class="product-item-data-color_list">
                <li class="product-item-data-color_item">
                    <div class="product-item-data-color_header">
                        <img src="./image/item-image/item1-img1.jpg" alt="">
                        <div class="product-item-data-color_header_text">
                            <div class="product-item-data-color_header_title">ブラック</div>
                        <div class="product-item-data-color_header_open">
                            <p>在庫を確認する</p>
                            <i class="fa-solid fa-chevron-down"></i></div>
                        </div>                     
                    </div>
                    <div class="product-item-data-size">
                        <div class="product-item-data-content">
                            <div class="product-item-data-content_size">
                                Mサイズ / 在庫あり
                            </div>
                            <div class="product-item-data-content_add favor-btn favor-btn-disable">
                                <div class="product-item-data-content_addcart">カートに入れる</div>
                            </div>
                        </div>

                        <div class="product-item-data-content">
                            <div class="product-item-data-content_size">
                                    Lサイズ / 在庫あり
                            </div>
                            <div class="product-item-data-content_add favor-btn favor-btn-disable">
                                <div class="product-item-data-content_addcart">カートに入れる</div>

                            </div>               
                        </div>
                    </div>
                    
                </li>
                
            </div>
            <div class="product-item-data-color">
            <ul class="product-item-data-color_list">
                <li class="product-item-data-color_item">
                    <div class="product-item-data-color_header">
                        <img src="./image/item-image/item1-img7.webp" alt="">
                        <div class="product-item-data-color_header_text">
                            <div class="product-item-data-color_header_title">レット</div>
                        <div class="product-item-data-color_header_open">
                            <p>在庫を確認する</p>
                            <i class="fa-solid fa-chevron-down"></i></div>
                        </div>                     
                    </div>
                    <div class="product-item-data-size">
                        <div class="product-item-data-content">
                            <div class="product-item-data-content_size">
                                Mサイズ / 在庫あり
                            </div>
                            <div class="product-item-data-content_add favor-btn favor-btn-disable">
                                <div class="product-item-data-content_addcart">カートに入れる</div>
                            </div>
                        </div>

                        <div class="product-item-data-content">
                                <div class="product-item-data-content_size">
                                    Lサイズ / 在庫あり
                                </div>
                                <div class="product-item-data-content_add favor-btn favor-btn-disable">
                                    <div class="product-item-data-content_addcart">カートに入れる</div>

                                </div>               
                        </div>
                    </div>
                    
                </li>
                
            </div>
        </div>
        
    </div>
</div>
</div>`
CreateImgItem ();
var itemImgList = $('.product-item-image_list');
    for (let i = 0 ;i < list_item[productId].img.lenght;++i) {
        itemImgList.innerHTML += 
        `<li class="product-item-image-item">
            <img src="${list_item[productId].img[i]}" alt="">
        </li>`
    }
function CreateImgItem (){
    
};