<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/base.css">
    <link rel="stylesheet" href="./style/grid.css">
    <link rel="stylesheet" href="./style/main.css">
    <script type ="module" src="./script/script.js" defer></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <title>TS-shop</title>
</head>
<body>
    <div class="app">
        <!-- Header start1-->
        <header class="header">
            <div class="grid wide">
                <a href="http://localhost/web/" class="header__logo"><img src="./image/logo.png" alt="logo" class="logo-img"></a>
                <div class="header__search">
                    <input type="text" placeholder="何にをお探しですか？" class="header__search-input">
                    <button class="header__search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
                    <div class="header__search-box">
                    </div>
                </div>
                <ul class="header__navbar">
                    <li class="header__navbar-user"><a href="./login.html"><i class="fa-regular fa-user"></i>ログイン</a></li>
                    <li class="header__navbar-like icon-center"><a href=""><i class="fa-regular fa-heart"></i></a></li>
                    <div class="navbar-cart">
                        <li class="header__navbar-cart icon-center">
                            <a href=""><i class="fa-solid fa-cart-shopping"></i>
                            </a>
                        </li>
                        <div class="header__navbar-cart-count"></div>
                        <div class="header__navbar-cart-box">

                        </div>
                    </div>
                    <li class="header__navbar-support"><a href=""><i class="fa-solid fa-headset"></i>サポート</a></li>
                </ul>
            </div>
            
            <div class="tab">  
                <ul class="tab__list">
                    <li class="tab__list-item "><a href="">おすすめ</a></li>
                    <li class="tab__list-item"><a href="">新着</a></li>
                    <li class="tab__list-item"><a href="">マイリスト</a></li>
                    <li class="tab__list-item"><a href="">ベストセラ</a></li>
                    <li class="tab__list-item"><a href="">メンズ</a></li>
                    <li class="tab__list-item"><a href="">レディース</a></li>
                    <li class="tab__list-item"><a href="">コスメ</a></li>
                    <li class="tab__list-item tab__list-start"><a href="">すべて</a></li>
                </ul>
            </div>
        </header>