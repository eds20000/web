
function Validator(options){

    var selectedRules = {};

    function validate(inputElement,rule){
        var errorMessage;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        
        //ルールを取り出し、チェック
        var rules = selectedRules[rule.selector];
        for (var i =0; i < rules.length; ++i){
            errorMessage = rules[i](inputElement.value);
            if(errorMessage){
                break;
            }
        }
        if(errorMessage){
            errorElement.innerText = errorMessage;
            errorElement.parentElement.classList.add('invalid')
            }else{
                errorElement.innerText = '';
                errorElement.parentElement.classList.remove('invalid')
            }

            return !errorMessage;
    }

    var formElement = document.querySelector(options.form);
    
    if(formElement){

        formElement.onsubmit = function(e){
            e.preventDefault();
            

            var isFormValid = true;

            
            



            options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if (!isValid){
                    isFormValid = false;
                }
            });
            

            if (isFormValid){
                if (typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('input:not([type="radio"]):not(select)[name]');
                    console.log(Array.from(enableInputs))
                    var formValues = Array.from(enableInputs).reduce(function(values,input){
                        return (values[input.name] = input.value) && values;
                    },{});
                    
                    options.onSubmit(formValues);
                }
            }
            // else{
            //     formElement.submit()
            // }
        }
        options.rules.forEach(function(rule){
            // ルールの保存
            if(Array.isArray(selectedRules[rule.selector])){
                selectedRules[rule.selector].push(rule.test);
            }
            else{
                selectedRules[rule.selector] = [rule.test];
            }

            
            var inputElement = formElement.querySelector(rule.selector);
            var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
            if(inputElement){
                inputElement.onblur = function(){
                    validate(inputElement,rule);
                }

                inputElement.oninput = function () {
                    errorElement.innerText = '';
                    errorElement.parentElement.classList.remove('invalid')
                }
            }

        });
    }
}

Validator.isRequired = function(selector,message){

   
    return {
        selector: selector,
        test: function (value) {
            return value.trim() ? undefined : message || 'ユーザー名を入力してください。'
        }

    };
}
Validator.isEmail = function(selector,message){
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined :  message || '正しいメールアドレスを入力してください。';
        }

    };
}

Validator.minLength = function (selector,min,max){
    return{
        selector:selector,
        test: function (value){
            return value.length >=min &&value.length <=max ? undefined : `パスワードは${min}〜${max}文字の間で入力してください`;
        }
    }

}

Validator.isConfirmed = function (selector,getCofirmValue,message) {
    return{
        selector: selector,
        test:function (value){
            return value === getCofirmValue() ? undefined : message ||'確認パスワードが一致しません。'
        }
    }
}