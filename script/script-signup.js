const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// SIGNUP
var yearSelect = document.getElementById("signup-born-year");
var monthSelect = document.getElementById("signup-born-month");
var daySelect = document.getElementById("signup-born-day");
    
//year
    for (var i = 2014; i >= 1900; i--) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        yearSelect.add(option);
    }
// month
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement("option");
        option.text = (i < 10 ? "0" : "") + i;
        option.value = (i < 10 ? "0" : "") + i;
        monthSelect.add(option);
    }
// day
    for (var i = 1; i <= 31; i++) {
        var option = document.createElement("option");
        option.text = (i < 10 ? "0" : "") + i;
        option.value = (i < 10 ? "0" : "") + i;
        daySelect.add(option);
    }

var input_password = $('.signup-input-pass')
$('.pass-hide').onclick = function () {
    if(this.classList.contains('hidden')){
        input_password.type='text'
        this.classList.remove('hidden');
        this.classList.add('visible');
        this.innerHTML = '非表示';
    }else{
        input_password.type='password'
        this.classList.remove('visible');
        this.classList.add('hidden');
        this.innerHTML = '表示';

    }

}

// Agrrement

var agreement_btn = $('.signup-agreement-content a');
var agreement_btn_close = $('.agreement-container-close')

agreement_btn.onclick = function(){
    var overlay = $(".agreement-container");
    var body = document.body;

    
    body.classList.toggle("overlay-open");

    if (body.classList.contains("overlay-open")) {
        body.style.position = "fixed";
    } else {
        body.style.position = "";
    }
}

agreement_btn_close.onclick = function(){
    console.log(body.classList)
    if (body.classList.contains("overlay-open")){
        body.classList.remove("overlay-open");
    }
}