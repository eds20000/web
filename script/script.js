const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
//sort-tab start
function sort__tab(a){
    document.querySelector(".content__title-sort-selected").value = a.innerHTML;
    var sorttab = document.querySelectorAll(".sort__tab-list");
    document.querySelector('.sort__tab-list.selected').classList.remove('selected');
    a.classList.add('selected');
    // for (let i of sorttab){
    //              if(i.innerHTML === document.querySelector(".content__title-sort-selected").value){
    //                 i.classList.add("selected");
    //                 }
    //             else{
    //                 i.classList.remove("selected");

    //                 }
    //             }
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



// <!---------------Page-bar--------End--> 



// LOGIN-PAGE
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


// 
