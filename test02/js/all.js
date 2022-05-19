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

    // shopping car page
    $('.increase').on('click',function(){
        var num = $('.piece').val();
        console.log(num);
        $('.decrease').prop('disabled', false);
        num++;
        flushSum(num);
    })
    $('.decrease').on('click',function(){
        var num = $('.piece').val();
        if(num <= 1){
            this.prop('disabled', true);
        }
        num--;
        flushSum(num);
    })

    $(".piece").change(function(){
		//獲得輸入框的數量
		var num = $(this).val();
		//判斷是否輸入有誤
		if(num == ""){
			alert("輸入有誤");
			num = 1;
			$(this).val(1);
		}
		//重新整理小計
		flushSum(num);
	})
    
	function flushSum(num){
		//重新整理商品數量
		$(".piece").val(num);
		//獲得商品的價格
		var price = $(".product_count").text();
		//轉型
		price = parseFloat(price);

        var freight = $('#freight').text();
        freight = parseFloat(freight.substr(1));
		//獲得商品小計
		sum = num * price;
        if( sum > 2000 ){
            $('#freight').text("$" + 0 )
            freight = 0;
            $('#total').text("$" + (sum + freight));
        }
        else{
            freight = 80;
            $('#freight').text("$" + freight )
        }
		//重新整理商品數量價錢
		$('.small_price').text(sum);
        $('#totalPrice').text("$" + sum)
        $("#totalCount").text("共" + num + "件");
        $('#total').text("$" + (sum + freight));
	}
})
