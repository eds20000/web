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