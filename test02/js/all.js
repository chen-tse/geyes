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
        items: 1,
        // autoplay: 3000
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
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    // contact us page
    $('#contact_Name').on('invalid',function(){
        if (!this.validity.valid) this.setCustomValidity("請輸入聯絡人名字!");
    })
    $('#contact_Name').on('input' ,function(){
        this.setCustomValidity("");
    })
    $('#contact_Phone').on('input',function() {
        this.setCustomValidity("");
        let mystr = new RegExp('09[0-9]{8}');
        if (!mystr.test(this.value)) this.setCustomValidity("格式錯誤!例如:09xxxxxxxx");
    })    
    $('#contact_Email').on('input' ,function() {
        this.setCustomValidity("");
        let mystr = new RegExp('[^@\s]+@[^@\s]+\.[^@\s]+');
        if (!mystr.test(this.value)) this.setCustomValidity("E-mail格式錯誤!");
    })
    $('#contact_Info').on('invalid' ,function(){
        if (!this.validity.valid) this.setCustomValidity("請輸入聯絡內容!");
    })
    $('#contact_Info').on('input' ,function() {
        this.setCustomValidity("");
    })

    // member
    $('#contact_PWD').on('invalid',function(){
        if (!this.validity.valid) this.setCustomValidity("請輸入密碼!");
    })
    $('#contact_PWD').on('input' ,function(){
        this.setCustomValidity("");
    })
    $('#member_Name').on('invalid',function(){
        if (!this.validity.valid) this.setCustomValidity("請輸入會員姓名!");
    })
    $('#member_Name').on('input' ,function(){
        this.setCustomValidity("");
    })

    // shopping car
    $('.input_name').on('invalid',function(){
        if (!this.validity.valid){
            $(this).parent('.input-group').append(
                $('<p/>').addClass('invalid-feedback')
                .text('輸入姓名')
            )
        }
    })
    $('.input_phone').on('input',function(){
        this.setCustomValidity("");
        let mystr = new RegExp('09[0-9]{8}');
        if (!mystr.test(this.value)) this.setCustomValidity("格式錯誤!例如:09xxxxxxxx");
    })
    $('.input_email').on('input' ,function() {
        this.setCustomValidity("");
        let mystr = new RegExp('[^@\s]+@[^@\s]+\.[^@\s]+');
        if (!mystr.test(this.value)) this.setCustomValidity("E-mail格式錯誤!");
    })

    // mall in
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true
    });

    // orderlist
    $(".clickable-row").click(function() {
        window.location = $(this).data("href");
    });

    // shopping car page
    // 整理總計和總數量
    flushSumPrice();
    // 點選商品後面的刪除
    $(".p-trash a").on('click',function(){
        //刪除當前商品
        $(this).parents(".cart-item").remove();
        flushSumPrice();
    })
    // 增減商品，修改價格
    // 點選加號時
    $('.increase').on('click',function(){
        //獲得輸入框的數量
        var num = $(this).siblings('.piece').val();
        //加一
        num++;
        that = this;
        flushSum(that,num);
        flushSumPrice();
    })
    // 點選減號時
    $('.decrease').on('click',function(){
        //獲得輸入框的數量
        var num = $(this).siblings(".piece").val();
        console.log(num);
        //如果數量大於一
        if(num > 1){
            //減一
            num--;
        }
        that = this;
        flushSum(that,num);
        flushSumPrice();
    })

    // 使用者修改輸入框
    $(".piece").change(function(){
        //獲得輸入框的數量
        var num = $(this).val();
        //判斷是否輸入有誤
        if(num == ""){
            alert("輸入有誤");
            num = 1;
            $(this).val(1);
        }
        that = this;
        flushSum(that,num);
        flushSumPrice();
    })

    // 重新整理小計
    function flushSum(that,num){
        //重新整理商品數量
        $(that).siblings(".piece").val(num);
        //獲得商品的價格
        var price = $(that).parents(".quantity-form").siblings(".p-price").text();
        //擷取數字部分並轉型
        price = parseInt(price.substr(1 ,price.length - 2));
        //獲得商品小計
        sum = num * price;
        //重新整理商品小計
        $(that).parents(".p-count").siblings(".p-small_price").text("$" + sum);
    }

    //重新整理總計和總數量
    function flushSumPrice(){
        //總件數
        var count = 0;
        //總價錢
        var money = 0;
        //運費
        var freight = 80;
        //最大總金額
        var maxprice = 2000;
        
        //遍歷數量
        $(".piece").each(function(i,ele){
            //累加
            count += parseInt($(ele).val());
        })
        //重新整理總數量
        $(".totalCount em").text(count);
        
        //遍歷價錢
        $(".p-small_price").each(function(i,ele){
            //累加
            money += parseInt($(ele).text().substr(1));
        })
        //重新整理總價錢
        $(".totalPrice em").text("$" + money);

        //運費的判斷
        if(money >= maxprice){
            freight = 0  
        }
        // 顯示運費價錢
        $('.freight em').text("$" + freight);

        money += freight;

        $(".total em").text("$" + money);
    }
})
