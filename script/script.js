const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//sort-tab start


//item end//

// <!---------------Page-bar--------Start--> 

    function sort__tab(a){
    document.querySelector(".content__title-sort-selected").value = a.innerHTML;
    var sorttab = document.querySelectorAll(".sort__tab-list");
    document.querySelector('.sort__tab-list.selected').classList.remove('selected');
    a.classList.add('selected');
            }
// sort-tab end//

//item start//

function favoritebutton(a){
    console.log(a.classList[1])
    if(a.classList.contains('sort__item-takecart-disable')){
        a.classList.remove('sort__item-takecart-disable');
        a.classList.add('sort__item-takecart-enable');
    }
    else{
        a.classList.remove('sort__item-takecart-enable');
        a.classList.add('sort__item-takecart-disable');
    }
}
var pageButton = document.querySelectorAll(".bar-page_list-item");
Array.from(pageButton).forEach(function(item){
    item.addEventListener('click',function(){
        document.querySelector('.page-checked').classList.remove('page-checked')
        this.classList.add('page-checked');
    });
}

);

//Item

var list_item = [
    {
    id:1,
    brand:'SHEIN',
    name:'Manfinity EMRG メンズシャツ バギー クルーネック 半袖 グラフィックティー 夏用',
    img:['./image/item-image/item1-img1.jpg','./image/item-image/item1-img2.jpg','./image/item-image/item1-img3.webp','./image/item-image/item1-img4.webp','./image/item-image/item1-img5.webp','./image/item-image/item1-img6.webp'],
    price:1.023,
    size:['M','L'],
    color:['black','red']
    }
]

var sort__item_list = $('.sort__item-list')

for(let i = 0 ; i< list_item.length ; ++i){
    sort__item_list.innerHTML =
    `<div class="col l-2-4">
        <div class="sort__item">
            <a href="./product.html" class="sort__item-link" >
                <div class="sort__item-img">
                    <img src="${list_item[i].img[i]}" alt="">
                </div>
                <div class="sort__item-brand">${list_item[i].brand}</div>
                <div class="sort__item-text">${list_item[i].name}</div>
            </a>
            <div class="sort__item-img_btn sort__item-img_btn-left"><i class="fa-solid fa-angle-left"></i></div>
            <div class="sort__item-img_btn sort__item-img_btn-right"><i class="fa-solid fa-angle-right"></i></div>
            <div class="sort__item-content">
                <div class="sort__item-title">
                    <div class="sort__item-price">￥${list_item[i].price}</div>
                    <div class="sort__item-takeit">
                        <button type="button" class="sort__item-favorite sort__item-takecart-disable" onclick="favoritebutton(this)"></button>
                        <button type="button" class="sort__item-takecart"><i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                </div>
                <div class="sort__item-star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <div class="sort__item-star-number">
                        (<p>0</p>)
                    </div>
                </div>
            </div>
        </div>
    </div>`
    var sort__item_btn_left = $('.sort__item-img_btn-left')
    var sort__item_btn_right = $('.sort__item-img_btn-right')
    var list_itemLength = list_item[i].img.length
    var index = 0;
    sort__item_btn_left.onclick = function(){
        index = index - 1
        if(index < 0 ){
            index = list_itemLength+index
        }
        console.log(index)
        $('.sort__item-img img').src = list_item[i].img[index]
    }

    sort__item_btn_right.onclick = function(){
        index = index + 1
        if(index >= list_itemLength ){
            index = 0
        }
        console.log(index)
        $('.sort__item-img img').src = list_item[i].img[index]
    }
}






// <!---------------Page-bar--------End--> 

//-----------------------Take-cart--------------------------------Start

var takeCartBoxBtn = $('.sort__item-takecart');
var takeCartBtn = $('.item-checklist-takecart-btn')
var myCart = [];
// var ItemParent = $('')

function getItemParent(element) {
    while (element.parentElement) {
        if (element.parentElement.matches('.select-cart-box-content')) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}


takeCartBoxBtn.onclick = function(a){
    var body = document.body;
    var SelectCartCloseBtn = $('.select-cart-box-close')
    
    body.classList.toggle("overlay-open_select-cart-box");

    if (body.classList.contains("overlay-open")) {
        body.style.position = "fixed";
    } else {
        body.style.position = "";
    }

    SelectCartCloseBtn.onclick = function(){
        var body = document.body;
        if (body.classList.contains("overlay-open_select-cart-box")){
            body.classList.remove("overlay-open_select-cart-box");
        }
    }

    console.log(myCart);
    
}

takeCartBtn.onclick = function(){
    var ItemImgSrc = getItemParent(this).querySelector('.item-checklist-img-main img').src;
    var ItemName = getItemParent(this).querySelector('.item-checklist-name').innerHTML;
    var ItemPrice = getItemParent(this).querySelector('.item-checklist-price').innerHTML;
    var ItemColor = getItemParent(this).querySelector('.checklist-color-name span').innerHTML;
    var ItemSize = getItemParent(this).querySelector('.checklist-size.size_checked').innerHTML;

    $('.header__navbar-cart-box').innerHTML = 
    `<div class=" header__navbar-cart-list">
    <div class="row header__navbar-cart-item">
        <div class="col l-3 header__navbar-cart-item_img">
            <a href="http://" class="item-link">
                <img src="${ItemImgSrc}" alt="">
            </a> 
        </div>

        <div class="col l-9 header__navbar-cart-item_content">
            <a href="" class="item-link">
                <div class="header__navbar-cart-item_title">
                    ${ItemName}
                </div>
            </a>
            <div class="header__navbar-cart-item_info">
                <div class="header__navbar-cart-item_info-box">
                    <div class="header__navbar-cart-item_info-color"><b>カラー：</b>${ItemColor}</div>
                    <div class="header__navbar-cart-item_info-size"><b>サイズ：</b>${ItemSize}</div>
                </div>
                <div class="header__navbar-cart-item_info-quantity-box">
                    <div class="header__navbar-cart-item_info-quantity-down">-</div>
                    <div class="header__navbar-cart-item_info-quantity-num">1</div>
                    <div class="header__navbar-cart-item_info-quantity-up">+</div>
                </div>
            </div>
            <div class="header__navbar-cart-item_info-footer">
                <div class="header__navbar-cart-item_info-price">￥${ItemPrice}</div>
                <div class="header__navbar-cart-item_btn-remove"><i class="fa-regular fa-trash-can"></i></div>
            </div>
        </div>

    </div>
</div>`


}




//-----------------------Take-cart--------------------------------End



// }
// 

