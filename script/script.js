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
    color_img:[
        {
        color_nameEng:'black',
        color_name:'ブラック',
        img:['./image/item-image/item1-img1.jpg',
        './image/item-image/item1-img2.webp',
        './image/item-image/item1-img3.webp',
        './image/item-image/item1-img4.webp',
        './image/item-image/item1-img5.webp']
        },
        {
        color_nameEng:'red',
        color_name:'レッド',
        img:['./image/item-image/item1-img7.webp',
        './image/item-image/item1-img8.webp',
        './image/item-image/item1-img9.webp',
        './image/item-image/item1-img10.webp',
        './image/item-image/item1-img11.webp']
        },
        {
        color_nameEng:'blue',
        color_name:'ブルー',
        img:['./image/item-image/item1-img12.webp',
        './image/item-image/item1-img13.webp',
        './image/item-image/item1-img14.webp',
        './image/item-image/item1-img15.webp',
        './image/item-image/item1-img16.webp']
        }]
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

        $('.sort__item-img img').src = list_item[i].img[index]
    }

    sort__item_btn_right.onclick = function(){
        index = index + 1
        if(index >= list_itemLength ){
            index = 0
        }

        $('.sort__item-img img').src = list_item[i].img[index]
    }
}






// <!---------------Page-bar--------End--> 

//-----------------------Take-cart--------------------------------Start

var takeCartBoxBtn = $('.sort__item-takecart');
var takeCartBtn = $('.item-checklist-takecart-btn');
var headerCartBox = $('.header__navbar-cart-box');
var myCart = [];
var cartItems = {};


function getItemParent(element,parentAdress) {
    while (element.parentElement) {
        if (element.parentElement.matches(parentAdress)) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

function getItemMainParent(element) {
    while (element.parentElement) {
        if (element.parentElement.matches('.sort__item')) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

var onChangeCart = function(){
    var myCartCount = $('.header__navbar-cart-count');

    if (myCart.length === 0){
        myCartCount.style.display = 'none';
    }else{
        myCartCount.style.display = 'block';
        myCartCount.innerHTML = myCart.length;
        headerCartBox.style.maxHeight = '80vh'

    }

    if (myCart.length === 0){
        headerCartBox.innerHTML = 
        `
            <div class="header__navbar-cart-box-empty">
                <div class="header__navbar-cart-box-empty-img">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div class="header__navbar-cart-box-empty-content">
                    現在カートに商品はありません。
                </div>
            </div>                       

        `
        }else{
            headerCartBox.innerHTML = 
            `<div class="header__navbar-cart-list">
                                
            </div>
            <div class="header__navbar-cart-checkox">
                <div class="header__navbar-cart-total">合計：<div class="header__navbar-cart-total-index">￥1023</div></div>
                <div class="header__navbar-cart-check-btn"><a href="./cart.html">買い物かごを見る(1)</a></div>
            </div>`
    }

    // Duyệt qua myCart và đếm số lượng của mỗi sản phẩm
    myCart.forEach(function(item) {
        const key = `${item.name}-${item.brand}-${item.color}-${item.size}-${item.img}-${item.price}`;
        if (!cartItems[key]) {
            cartItems[key] = { ...item, quantity: 0 };
        }
        cartItems[key].quantity++;
    });
    console.log(myCart)
// Duyệt qua cartItems để hiển thị các sản phẩm và số lượng của chúng
    Object.values(cartItems).forEach(function(a) {  
        $('.header__navbar-cart-list').innerHTML +=
            `   <div class="row header__navbar-cart-item">
                    <div class="col l-3 header__navbar-cart-item_img">
                        <a href="http://" class="item-link">
                        <img src="${a.img}" alt="">
                        </a> 
                    </div>
        
                    <div class="col l-9 header__navbar-cart-item_content">
                        <a href="" class="item-link">
                            <div class="header__navbar-cart-item_title">
                                ${a.name}
                            </div>
                        </a>

                        <div class = "header__navbar-cart-item_brand">${a.brand}</div>
                        <div class="header__navbar-cart-item_info">
                            <div class="header__navbar-cart-item_info-box">
                                <div class="header__navbar-cart-item_info-color"><b>カラー：</b>${a.color}</div>
                                <div class="header__navbar-cart-item_info-size"><b>サイズ：</b>${a.size}</div>
                            </div>
                            <div class="header__navbar-cart-item_info-quantity-box">
                                <div class="header__navbar-cart-item_info-quantity-down">-</div>
                                <div class="header__navbar-cart-item_info-quantity-num">${a.quantity}</div>
                                <div class="header__navbar-cart-item_info-quantity-up">+</div>
                            </div>
                        </div>
                        <div class="header__navbar-cart-item_info-footer">
                            <div class="header__navbar-cart-item_info-price">￥${a.price}</div>
                            <div class="header__navbar-cart-item_btn-remove"><i class="fa-regular fa-trash-can"></i></div>
                        </div>
                    </div>
                </div>`  
        })

}

takeCartBoxBtn.onclick = function(a){
    var ItemName = getItemMainParent(this).querySelector('.sort__item-text').innerHTML;
    var itemCurrent = list_item.find(function(item){
        return item.name === ItemName;
    });

    let ItemImg_Color = itemCurrent.color_img;
    let ItemPrice = itemCurrent.price;
    let ItemBrand = itemCurrent.brand;


    let body = document.body;
    let SelectCartCloseBtn = $('.select-cart-box-close')
    
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
    //chuyền thông tin sản phẩm vào box take cart

    var SelectCartBox = $('.select-cart-box-content');
    var itemChecklistImg =$('.item-checklist-imglist');
    var itemCheckSizeList = $('.checklist-size-list');    
    var iteamCheckBrand = $('.item-checklist-brand');
    

    itemChecklistImg.innerHTML="";
    for ( var i = 0 ; i < ItemImg_Color[0].img.length ;++i){
        itemChecklistImg.innerHTML += 
        `<li class="item-checklist-imglist-item"><img src="${ItemImg_Color[0].img[i]}" alt=""></li>
        `
    }
    $('.item-checklist-name').innerHTML = ItemName;
    $('.item-checklist-price span').innerHTML = ItemPrice;
   
    itemCheckSizeList.innerHTML="";
    itemCheckSizeList.innerHTML += `<li class="checklist-size size_checked">${itemCurrent.size[0]}</li>`;
    iteamCheckBrand.innerHTML = ItemBrand;
     for(var i = 1; i < itemCurrent.size.length; ++i){
        itemCheckSizeList.innerHTML+=`
        <li class="checklist-size">${itemCurrent.size[i]}</li>
        `
    }

    //trich xuat color tu list item
    var CheckColorList = $('.checklist-color-list');
    var CheckColorName = $('.checklist-color-name span');
    var itemColorCurrent = itemCurrent.color_img.find(
        colorList => colorList.color_name == CheckColorName.innerHTML);
    CheckColorList.innerHTML = "";
    for(let i = 0; i < itemCurrent.color_img.length; ++i){
        
        CheckColorList.innerHTML += `<li class="checklist-color"></li>`;
    }
    var checkListItem = $$('.checklist-color');
    checkListItem[0].classList.add('color-checked')
    colorNameChange();
    colorImageChange();

    function colorNameChange(){
        for(let i = 0; i < itemCurrent.color_img.length; ++i){
            checkListItem[i].style.backgroundColor = itemCurrent.color_img[i].color_nameEng;
            if(checkListItem[i].classList.contains('color-checked')){
                CheckColorName.innerHTML = itemCurrent.color_img[i].color_name;//trich xuat ten mau vao box
            }
        }
    }
    function colorImageChange(){//Ham doi hinh anh khi chon color
        itemColorCurrent = itemCurrent.color_img.find(
            colorList => colorList.color_name == CheckColorName.innerHTML);
        

        itemChecklistImg.innerHTML="";
        for ( var i = 0 ; i < itemColorCurrent.img.length ;++i){
            itemChecklistImg.innerHTML += 
            `<li class="item-checklist-imglist-item"><img src="${itemColorCurrent.img[i]}" alt=""></li>
            `
            $('.item-checklist-img-main').innerHTML = 
            `<img src="${itemColorCurrent.img[0]}" alt="">`;
        }
    }


    // THIET LAP NUT CHON SIZE
    let sizeBtn = $$('.checklist-size');
    sizeBtn.forEach(function(a){
        a.onclick = function(){
            $('.size_checked').classList.remove('size_checked');
            this.classList.add('size_checked');
        }
    });

    //THIET LAP NUT CHON MAU
    let colorBtn = $$('.checklist-color');
    colorBtn.forEach(function(color){
        color.onclick = function(){
            $('.color-checked').classList.remove('color-checked');
            this.classList.add('color-checked');

            colorNameChange();   
            colorImageChange();
        }
    })


    //Item product take --------------------------------- Start
    takeCartBtn.onclick = function(){
        var ItemImgSrc = itemColorCurrent.img[0];
        var ItemColor = itemColorCurrent.color_name;
        var ItemPrice = itemCurrent.price;
        var ItemSize = $('.checklist-size.size_checked').innerHTML;
        var ItemBrand = itemCurrent.brand;

        myCartProxy.push({
            name : ItemName,
            brand : ItemBrand,
            img : ItemImgSrc,
            price : ItemPrice,
            size : ItemSize,
            color : ItemColor

        })   
        
    };    
    onChangeCart();
    
    let myCartProxy = new Proxy(myCart, {
        set(target, property, value, receiver) {
            // Thực hiện hành động mặc định
            let result = Reflect.set(target, property, value, receiver);
    
            // Kiểm tra nếu hành động là thêm hoặc thay đổi một phần tử trong mảng
            if (property !== 'length') {
                onChangeCart();
            }
    
            return result;
        },
        deleteProperty(target, property) {
            // Thực hiện hành động mặc định
            let result = Reflect.deleteProperty(target, property);
    
            // Gọi hàm khi một phần tử bị xóa
            onChangeCart();
    
            return result;
        }
    });
    
//Item product take -------------------------------- Enđ
}
onChangeCart();






//-----------------------Take-cart--------------------------------End
var itemQuantityDown = $('.header__navbar-cart-item_info-quantity-down');
var itemQuantityUp = $('.header__navbar-cart-item_info-quantity-up');


// itemQuantityDown.onclick = function (){
//     var item
// }

// }
// 

