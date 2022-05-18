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
    $('._carsoul .owl-carousel').owlCarousel({
        loop: true,
        items: 1
    })

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
})
