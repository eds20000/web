const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//sort-tab start
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

//item end//

// <!---------------Page-bar--------Start--> 

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
    price:1.023
    }
]

var sort__item_list = $('.sort__item-list')

for(let i = 0 ; i< list_item.length ; ++i){
    sort__item_list.innerHTML =
     `<div class="col l-2-4">
        <div class="sort__item">
        <a href="#" class="sort__item-link" >
            <div class="sort__item-img">
                <img src="${list_item[i].img[i]}" alt="">
                <div class="sort__item-img_btn sort__item-img_btn-left"><i class="fa-solid fa-angle-left"></i></div>
                <div class="sort__item-img_btn sort__item-img_btn-right"><i class="fa-solid fa-angle-right"></i></div>
            </div>
            <div class="sort__item-brand">${list_item[i].brand}</div>
            <div class="sort__item-text">${list_item[i].name}</div>
        </a>
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
                    (<p>0</p>)</div>
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



// LOGIN-PAGE
if (window.location.pathname === './login.html') {

var input_userid = $('.login-form-input_userid')
var input_password = $('.login-form-input_userpassword')
var passHide=$('.login-form-input_userpassword')
const ID_label = $('.login-id')
const Pass_label = $('.login-password')

document.body.onload = function(){
    if (input_password.value !== '') {
        Pass_label.classList.add('labelMove_focus');
        Pass_label.classList.remove('labelMove_blur');
    }
    if (input_userid.value !== '') {
        ID_label_label.classList.add('labelMove_focus');
        ID_label_label.classList.remove('labelMove_blur');
    } 
}
$('.pass-hide').onclick = function () {
    if(this.classList.contains('hidden')){
        passHide.type='text'
        this.classList.remove('hidden');
        this.classList.add('visible');
        this.innerHTML = '非表示';
    }else{
        passHide.type='password'
        this.classList.remove('visible');
        this.classList.add('hidden');
        this.innerHTML = '表示';

    }

}


var labelid_focus = function(){
    ID_label.classList.add('labelMove_focus')
    ID_label.classList.remove('labelMove_blur')
}

var labelid_blur = function(){
    if (input_userid.value === '') {
        ID_label.classList.remove('labelMove_focus');
        ID_label.classList.add('labelMove_blur');
    }
}

var labelpass_focus = function(){
    Pass_label.classList.add('labelMove_focus')
    Pass_label.classList.remove('labelMove_blur')
}

var labelpass_blur = function(){
    if (input_password.value === '') {
        Pass_label.classList.remove('labelMove_focus');
        Pass_label.classList.add('labelMove_blur');
    }
}
input_userid.onchange = labelid_focus
input_userid.onfocus = labelid_focus
input_userid.onblur = labelid_blur

input_password.onchange = labelpass_focus
input_password.onfocus = labelpass_focus
input_password.onblur = labelpass_blur
}
// 

