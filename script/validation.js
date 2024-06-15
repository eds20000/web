
function Validator(options){

    function getParent(element,selector){
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectedRules = {};
    function validate(inputElement,rule){
        var errorMessage;
        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
        
        //ルールを取り出し、チェック
        var rules = selectedRules[rule.selector];
        for (var i =0; i < rules.length; ++i){
            for (var i =0; i < rules.length; ++i){
                switch(inputElement.type){
                    case 'radio':
                    case 'checkbox':
                        errorMessage = rules[i](
                            formElement.querySelector(rule.selector + ':checked')
                        );
                        break;
                    default:
                        errorMessage = rules[i](inputElement.value);
                }
                if(errorMessage) break;
                
            }
            if(errorMessage){
                break;
            }
        }
        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement,options.formGroupSelector).classList.add('invalid')
        }else{
            errorElement.innerText = '';
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
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
                    var formValues = Array.from(enableInputs).reduce(function(values,input){
                        values[input.name] = input.value
                        return values;
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
                    getParent(inputElement,options.formGroupSelector).classList.remove('invalid')
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
Validator.isPhoneNumber = function(selector,message){
    return {
        selector: selector,
        test: function (value) {
            var regex = /^[0-9-]{10,13}$/i;
            return regex.test(value) ? undefined :  message || '正しい電話番号を入力してください。';
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

Validator.isConfirmed = function (selector,getConfirmValue,message) {
    return{
        selector: selector,
        test:function (value){
            return value === getConfirmValue() ? undefined : message ||'確認パスワードが一致しません。'
        }
    }
}