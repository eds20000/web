const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
var cartItemQuanityBtn = document.querySelector(".cart__list-item-quantily i");
var cartItemSelect = document.querySelector(".cart__list-item-count");





var itemPrice = $('.cart__list-item-price span');
var itemPricePay = $('.cart-detail-price span');
var itemShipPay = $('.cart-detail-price-ship span');
var TotalPay = $('.cart-detail-total-price span');
var itemPayCount =$('.cart__list-item-count')
var TotalPrice = 0;
if(itemPricePay){
    itemPricePay.innerHTML = parseInt(itemPrice.innerHTML) * parseInt(itemPayCount.value);
    TotalPrice = (parseInt(itemPricePay.innerHTML) + parseInt(itemShipPay.innerHTML)).toLocaleString();
    TotalPay.innerHTML = TotalPrice;
    itemPayCount.addEventListener("change",function(){
    itemPricePay.innerHTML = parseInt(itemPrice.innerHTML) * parseInt(itemPayCount.value);
    
    TotalPrice = (parseInt(itemPricePay.innerHTML) + parseInt(itemShipPay.innerHTML)).toLocaleString();
    TotalPay.innerHTML = TotalPrice;
})
}

var payBtn = $('.cart-total-account');
if(payBtn){
    payBtn.onclick = function(){
        $('.container').innerHTML = 
        `
        <div class="grid wide">
                    <div class="row">
                        <div class="cart-heading">
                            <div class="cart-heading-list cart-heading-cartshow">ショッピングカート</div>
                            <div class="cart-heading-list">></div>
                            <div class="cart-heading-list cart-heading-pay cart-cast-main">お届け先･発送方法･お支払い方法</div>
                            <div class="cart-heading-list">></div>
                            <div class="cart-heading-list cart-heading-paysucess">注文完了</div>                  
                        </div>
                    </div>
                    <form action="post" id ="cart__pay-form" class="row cart-content">
                        <div class="col l-8">
                            <div class="cart__pay-form">
                                    <div class="address-form">
                                         <div class="row">
                                        <div class="cart__pay-form-title">届け先</div>
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-name" class="address-id">
                                                名前
                                                <span class="required_label">必須</span>
                                            </label>
                                        </div>
                                        
                                        <div class="col l-8">
                                            <input type="text" class="pay-form-input pay-form-input_name" name="adress-name" id="adress-name">
                                            <span class="form-message"></span>
                                        </div>
                                        
    
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-phone" class="address-phone">電話番号
                                                <span class="required_label">必須</span>
                                            </label>
                                        </div>
                                        <div class="col l-8">
                                            <input type="text" class="pay-form-input pay-form-input_phone" name="adress-phone" id="adress-phone">                                  
                                            <span class="form-message"></span>
                                        </div>
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-zipcode" class="address-zip-code">郵便番号
                                                <span class="required_label">必須</span>
                                            </label>
                                        </div>
                                        <div class="col l-8">
                                            <div class="input_zip-code-box">
                                                <input type="text" class="pay-form-input pay-form-input_zip-code" name="adress-zip-code" id="adress-zip-code" >
                                                <div class="zip-code-checkBtn primary-btn" onclick = "AjaxZip3.zip2addr('adress-zip-code','','adress-prefecture','adress-city');">住所を自動入力</div>
                                            </div>
                                            <span class="form-message"></span>
                                        </div>
                                        
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-prefecture" class="address-prefecture">都道府県
                                                <span class="required_label">必須</span>
                                            </label>
                                        </div>
                                        <div class="col l-8">
                                            <input type="text" class="pay-form-input pay-form-input_prefecture" name="adress-prefecture" id="adress-prefecture">
                                            <span class="form-message"></span>
                                        </div>
                                        
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-city" class="address-city">市区町村
                                                <span class="required_label">必須</span>
                                            </label>
                                        </div>
                                        <div class="col l-8">
                                            <input type="text" class="pay-form-input pay-form-input_city" name="adress-city" id="adress-city">
                                            <span class="form-message"></span>
                                        </div>
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-add" class="address-add">町名・丁番地等
                                                <span class="required_label">必須</span>
                                            </label>
                                        </div>
                                        <div class="col l-8">
                                            <input type="text" class="pay-form-input pay-form-input_add" name="adress-add" id="adress-add">
                                            <span class="form-message"></span>
                                        </div>
                                    </div>
                                    <div class="input-group row">
                                        <div class="col l-4">
                                            <label for="adress-building" class="address-building">マンション名・号室等</label>
                                        </div>
                                        <div class="col l-8">
                                            <input type="text" class="pay-form-input pay-form-input_building" name="adress-building" id="adress-building">
                                            <span class="form-message"></span>
                                        </div>
                                    </div>
                                    </div>
                                   
                                
                                
                                    <div class="payment-form">
                                        <div id ="payment-form" class="form-close input-group">
                                            <div class="row">
                                                <div class="payment-form-title">お支払方法</div>
                                            </div>
                                            <div class="radio-group row">
                                                <input type="radio" name="payment" id="payment-cashon" class="payment-cashon" value ="cash">
                                                <label for="payment-cashon">代金引換 手数料 : 550円～※</label>
                                            </div> 
                                            <div class="radio-group row">
                                                <input type="radio" name="payment" id="payment-credit" class="payment-credit" value ="credit">
                                                <label for="payment-credit">クレジットカード決済</label>
                                            </div>
                                            <div class="radio-group row">
                                                <input type="radio" name="payment" id="payment-paypay" class="payment-paypay" value ="paypay">
                                                <label for="payment-paypay">PayPay</label>
                                            </div>
                                           
                                            <div class="radio-group row">
                                                <input type="radio" name="payment" id="payment-d" class="payment-d" value = "dbarai">
                                                <label for="payment-d">d払い ｄポイントがたまる・つかえる</label>
                                            </div>
                                            <div class="radio-group row">
                                                <input type="radio" name="payment" id="payment-paydy" class="payment-paydy value ="paidy">
                                                <label for="payment-paydy">Paidyあと払い（3･6･12回払いも可能）</label>
                                            
                                            </div>
                                            <span class="form-message payment-error"></span>
                                        </div>
                                        
                                        <div class="close-formBtn">他のお支払い方法で支払う<i class="fa-solid fa-chevron-down"></i></div>
                                    </div>
                            </div>
    
                        </div>
                        <div class="col l-4">
                            <div class="cart-total-box">
                                <div class="cart-total-title">
                                    商品合計
                                </div>
                                <div class="cart-detail-box">
                                    <div class="cart-detail">
                                        <div class="cart-detail-total-titletext">
                                            <div class="cart-detail-total-title">合計</div>
                                            <div class="cart-detail-total-tax"> 税込</div>
                                        </div>
                                        <div class="cart-detail-total-price">￥<span>${TotalPrice}</span> </div>
                                    </div>
                                    </div>
                                <button type="submit" class="payment-agree-btn primary-btn">入力内容を確認する</button>
                        </div>
                        </div>
                    </form>
                </div>
        `
        let paymentCloseBtn = $('.close-formBtn')
        paymentCloseBtn.onclick = function(){
            let paymentForm = $('#payment-form')
            paymentForm.classList.toggle('form-close');
            if(paymentForm.classList.contains('form-close')){
                paymentCloseBtn.innerHTML = '他のお支払い方法で支払う<i class="fa-solid fa-chevron-down"></i>';
            }
            else{
                paymentCloseBtn.innerHTML = '閉じる<i class="fa-solid fa-chevron-up"></i>';
            }

        }
        Validator({
            form:'#cart__pay-form',
            formGroupSelector:'.input-group',
            errorSelector:'.form-message',
            rules:[
                Validator.isRequired('#adress-name','ユーザー名を入力してください'),
    
                Validator.isRequired('#adress-phone','電話番号を入力してください'),
                Validator.isPhoneNumber('#adress-phone','正しい電話番号を入力してください'),
    
                Validator.isRequired('#adress-zip-code','郵便番号を入力してください'),
                Validator.isRequired('#adress-prefecture','都道府県を入力してください'),
                Validator.isRequired('#adress-city','市区町村を入力してください'),
                Validator.isRequired('#adress-add','町名・丁番地等を入力してくださいを入力してください。'),
    
                Validator.isRequired('input[name="payment"]','支払い方法を選択しください')
            ],
            onSubmit: function (data) {
                console.log(data);
                let PaymentSuccessBtn = $('.payment-agree-btn');
                $('.container').innerHTML = 
                `<div class="gird wide">
                <div class="row">
                    <div class="cart-heading">
                        <div class="cart-heading-list cart-heading-cartshow ">ショッピングカート</div>
                        <div class="cart-heading-list">></div>
                        <div class="cart-heading-list cart-heading-pay">お届け先･発送方法･お支払い方法</div>
                        <div class="cart-heading-list">></div>
                        <div class="cart-heading-list cart-heading-paysucess cart-cast-main">注文完了</div>
                    </div>
                </div>
                <div class="row">
                    <div class="payment-success__content">
                        <div class="payment-success__content-title">
                            THANK YOU!
                        </div>
                        <div class="payment-success__content-thank">
                            ご注文ありがとうございます
                        </div>
                        <div class="payment-success__content-img">
                            <i class="fa-solid fa-truck"></i>
                        </div>
                        <div class="payment-success__content-number-box">
                            <div class="payment-success__content-number-title">
                                お客様のご注文番号
                            </div>
                            <div class="payment-success__content-number">
                                SL00------------
                            </div>
                        </div>
                        <div class="payment-success__content-notification">ご注文詳細メールを</div>
                        <div class="payment-success__content-notification">ご登録メールアドレスに送りしました</div>
                        <div class="payment-success__content-cancel">ご注文キャンセルについて</div>
                        <div class="payment-success__content-change">返品・交換について</div>
                        <a href="./index.html" class="primary-btn payment-success__content-keepBtn ">
                            買い物を続けます
                        </a>
                    </div>
                </div>
            </div>
                `
            }
        });

        
        
    }
    

    

}


// payment-CloseBtn---------------------------------------------Start









// payment-CloseBtn---------------------------------------------End

//zipcodeCheckBtn-----------------------------------------------Start


//zipcodeCheckBtn-----------------------------------------------End