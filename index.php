<?php
 session_start();
 include_once './includes/header.php'
?>
    <link rel="stylesheet" href="./style/home.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d72dd2144a.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script type ="module" src="./script/script.js" defer></script>
    <script type ="module" src="./script/home.js" defer></script>
<!-- Container start -->
        <div class="container">
            <div class="grid wide">
                <div class="homepage__slide col l-12">
                    <div class="swiper swiper-homepage">
                        <div class="swiper-wrapper">
                            <!-- Slides -->
                            <div class="swiper-slide"><img src="./image/homepage/homepage-slide/homepage-slide1.webp" alt=""></div>
                            <div class="swiper-slide"><img src="./image/homepage/homepage-slide/homepage-slide2.webp" alt=""></div>
                            <div class="swiper-slide"><img src="./image/homepage/homepage-slide/homepage-slide3.webp" alt=""></div>
                            <div class="swiper-slide"><img src="./image/homepage/homepage-slide/homepage-slide4.webp" alt=""></div>
                        </div>
                        <!-- Nếu cần pagination -->
                        <div class="swiper-pagination"></div>
                    
                        <!-- Nếu cần navigation -->
                        <div class="swiper-button-prev">
                            <div class="custom-button-prev">    
                                <i class="fa-solid fa-angle-left"></i>
                            </div>
                        </div>
                        <div class="swiper-button-next">
                            <div class="custom-button-next">
                                <i class="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <ul class="row category__list-img">
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/top.png" alt="">
                            <div class="category-item-title">トップス</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/jacket.png" alt="">
                            <div class="category-item-title">ジャケット/アウター</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/pant.png" alt="">
                            <div class="category-item-title">パンツ</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/skrit.png" alt="">
                            <div class="category-item-title">スカート</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/dress.png" alt="">
                            <div class="category-item-title">ワンピース/ドレス</div>
                        </a>
          
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/Accessories.png" alt="">
                            <div class="category-item-title">小物</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/bag.png" alt="">
                            <div class="category-item-title">バッグ</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/shoes.png" alt="">
                            <div class="category-item-title">シューズ</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/phukien.png" alt="">
                            <div class="category-item-title">ファッション雑貨</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/hat.jpg" alt="">
                            <div class="category-item-title">帽子</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/watch.png" alt="">
                            <div class="category-item-title">腕時計</div>
                        </a>
                    </li>
                    <li class="category-item col l-2">
                        <a href="http://">
                            <img src="./image/homepage/category-img/trangsuc.png" alt="">
                            <div class="category-item-title">アクセサリー</div>  
                        </a>
                    </li>
                </ul>

                <div class="row section__brand">
                    <div class="row section_title section__brand-title ">ブランド</div>
                    <div class="row section__brand-list">
                        <a href="" class="col l-2 brand-item"><img src="./image/homepage/brand-recomend/shein.webp" alt="" width="500" height="675"></a>
                        <a href="" class="col l-2 brand-item"><img src="./image/homepage/brand-recomend/romwe.webp" alt=""></a>
                        <a href="" class="col l-2 brand-item"><img src="./image/homepage/brand-recomend/dazy.webp" alt=""></a>
                        <a href="" class="col l-2 brand-item"><img src="./image/homepage/brand-recomend/zoztown.jpg" alt=""></a>
                        <a href="" class="col l-2 brand-item"><img src="./image/homepage/brand-recomend/friful.webp" alt=""></a>
                        <a href="" class="col l-2 brand-item"><img src="./image/homepage/brand-recomend/manginity.png" alt=""></a>
                    </div>
                </div>

                <div class="row section__recommend">
                    <div class="section_title section__recommend-title ">おすすめ</div>
                    <div class="row section__recommend-list">
                    </div>
                </div>
        </div>

        <!-- Container end -->

        <!-- Footer Start -->
<?php
include_once './includes/footer.php'
?>