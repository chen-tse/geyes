$(document).ready(function(){

    $(window).scroll(function(){
        scrolledPx = $(this).scrollTop();
        console.log(scrolledPx);
        if(scrolledPx >= 1){
            $('.top-area').addClass('active');
            $('.go_top').addClass('active');
        }
        else{
            $('.top-area').removeClass('active');
            $('.go_top').removeClass('active');
        }
    })

    // 彈跳選單
    $('.menu-toggle').on('click',function(){
        $(this).toggleClass('active');
        $('.nav').toggleClass('active');
    })

    $('.navbar_menu a').on('click',function(){
        $('.menu-toggle').removeClass('active');
        $('.nav').removeClass('active')
    })

    $('.go_top').click(function(){
        console.log('666')
        $('html,body').animate({ scrollTop: 0 }, 'fast');   /* 返回到最頂上 */
        return false;
    })

    //owl-carousel initilization
    //  home slider
    $('._carsoul .owl-carousel').owlCarousel({
        loop: true,
        items: 1
    })
    // home news
    $('.news .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 16,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            577:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    // contact us page
    document.querySelector("#contact_Name").oninvalid = function () {
        if (!this.validity.valid) this.setCustomValidity("請輸入聯絡人名字!");
    }
    document.querySelector("#contact_Name").oninput = function () {
        this.setCustomValidity("");
    }
    document.querySelector("#contact_Phone").oninput = function () {
        this.setCustomValidity("");
        let mystr = new RegExp('09[0-9]{8}');
        if (!mystr.test(this.value)) this.setCustomValidity("格式錯誤!例如:09xxxxxxxx");
    }    
    document.querySelector("#contact_Email").oninput = function () {
        this.setCustomValidity("");
        let mystr = new RegExp('[^@\s]+@[^@\s]+\.[^@\s]+');
        if (!mystr.test(this.value)) this.setCustomValidity("E-mail格式錯誤!");
    }
    document.querySelector("#contact_Info").oninvalid = function () {
        if (!this.validity.valid) this.setCustomValidity("請輸入聯絡內容!");
    }
    document.querySelector("#contact_Info").oninput = function () {
        this.setCustomValidity("");
    }
})
