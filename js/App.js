
$(document).ready(function () {
    $('.header-top-banner').slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',

        }
    );
    $('.chuoi-moi-deal-khung-slider').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '50px',
        }
    );
    $('.before-banner').slick(
        {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '50px',
            autoplay: true,
            autoplaySpeed: 1000,
        }
    );
    $('.giam-them-khi-thanh-toan-online__content').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '50px',
            autoplay: true,
            autoplaySpeed: 1000,
        }
    );
    $('.tuan-le-may-man__content').slick(
        {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '50px',

        }
    );
    $('.tuan-le-sam-sung-slider1').slick(
        {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '50px',

        }
    );
    $('.tuan-le-sam-sung__content').slick(
        {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '10px',

        }
    );
    $('.laptop-slider').slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '50px',
            autoplay: true,
            autoplaySpeed: 2000,
        }
    );
    $(".game-app__div2").slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centralPadding: '50px',
            autoplay: false,

        }
    );
    $(".header__address").click(function(){
        $(".form").css("display", "flex")
    });
    $(".form-top-top>button").click(function(){
        $(".form").css("display", "none")
    });


    $(".sanpham__main__div1__left__div1-slider").slick(
        {
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
             autoplay: false,
             prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
             nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>'
        }
    )
    for (let i = 0; i < 10; i++) {
        $('.goi-y-hom-nay__content1').append(`
        <div class="laptop__main__divtype1-divdiv laptop__main__divtype-divdiv">
        <a href="">
            <img src="../asset/img/homepage/homepage-img1.jpg" alt="">
            <p>
                Asus TUF Gaming FX506LHB i5 10300H (HN188W)
            </p>
        </a>            
        <ul>
            <li>
                <a href="">Ram 8GB</a>
            </li>
            <li>
                <a href="">SSD 256GB</a>
            </li>
        </ul>        
        <p class="price">
            18.990.000d
        </p>
        <p>
            Màn hình: 15.6", Full HD, 144Hz
        </p>
      <p>
        CPU: i5, 10300H, 2.5GHz
      </p>
       
    </div>

        `);
    }
   
    for (let i = 0; i < 10; i++) {
        
        $('.goi-y-hom-nay__content2').append(`
        <div class="laptop__main__divtype1-divdiv laptop__main__divtype-divdiv">
        <a href="">
        <img src="../asset/img/homepage/homepage-img2.jpg" alt="">            <p>
                Asus TUF Gaming FX506LHB i5 10300H (HN188W)
            </p>
        </a>            
        <ul>
            <li>
                <a href="">Ram 8GB</a>
            </li>
            <li>
                <a href="">SSD 256GB</a>
            </li>
        </ul>        
        <p class="price">
            18.990.000d
        </p>
        <p>
            Màn hình: 15.6", Full HD, 144Hz
        </p>
      <p>
        CPU: i5, 10300H, 2.5GHz
      </p>
       
    </div>
        `);
    }

    for (let i = 0; i < 10; i++) {
        $('.goi-y-hom-nay__content3').append(
            
            `
            <div class="laptop__main__divtype1-divdiv laptop__main__divtype-divdiv">
        <a href="">
        <img src="../asset/img/homepage/homepage-img3.jpg" alt="">            <p>
                Asus TUF Gaming FX506LHB i5 10300H (HN188W)
            </p>
        </a>            
        <ul>
            <li>
                <a href="">Ram 8GB</a>
            </li>
            <li>
                <a href="">SSD 256GB</a>
            </li>
        </ul>        
        <p class="price">
            18.990.000d
        </p>
        <p>
            Màn hình: 15.6", Full HD, 144Hz
        </p>
      <p>
        CPU: i5, 10300H, 2.5GHz
      </p>
       
    </div>
            `
        );
    }
    for (let i = 0; i < 10; i++) {
        $('.goi-y-hom-nay__content4').append(`
        <div class="laptop__main__divtype1-divdiv laptop__main__divtype-divdiv">
        <a href="">
        <img src="../asset/img/homepage/homepage-img4.jpg" alt="">            <p>
                Asus TUF Gaming FX506LHB i5 10300H (HN188W)
            </p>
        </a>            
        <ul>
            <li>
                <a href="">Ram 8GB</a>
            </li>
            <li>
                <a href="">SSD 256GB</a>
            </li>
        </ul>        
        <p class="price">
            18.990.000d
        </p>
        <p>
            Màn hình: 15.6", Full HD, 144Hz
        </p>
      <p>
        CPU: i5, 10300H, 2.5GHz
      </p>
       
    </div>
        `);
    };

    $('#goi-y-hom-nay-radio-4').click(function () {
        $('.label-for4 > li').css("background-image", "linear-gradient(-155deg, #ff4b1f, #1fddff)");
        $('.label-for2 > li').css("background-image", "none");
        $('.label-for1 > li').css("background-image", "none");
        $('.label-for3 > li').css("background-image", "none");

    }
    );
    $('#goi-y-hom-nay-radio-1').click(function () {
        $('.label-for1 > li').css("background-image", "linear-gradient(120deg, #ff4b1f, #1fddff)");
        $('.label-for2 > li').css("background-image", "none");
        $('.label-for4 > li').css("background-image", "none");
        $('.label-for3 > li').css("background-image", "none");

    }
    );
    $('#goi-y-hom-nay-radio-2').click(function () {
        $('.label-for2 > li').css("background-image", "linear-gradient(120deg, #ff4b1f, #1fddff)");
        $('.label-for1 > li').css("background-image", "none");
        $('.label-for4 > li').css("background-image", "none");
        $('.label-for3 > li').css("background-image", "none");

    }
    );
    $('#goi-y-hom-nay-radio-3').click(function () {
        $('.label-for3 > li').css("background-image", "linear-gradient(-155deg, #ff4b1f, #1fddff)");
        $('.label-for2 > li').css("background-image", "none");
        $('.label-for4 > li').css("background-image", "none");
        $('.label-for1 > li').css("background-image", "none");
    }
    );
    $(".footer__div1__tohide").click(
        function () {
            $(".footer__div1__tohide").hide();
            $(".footer__div1__toshow").show();
            $(".footer__above").css("height", "430px")
        }
    );


 

    // function runOnScroll() {
    //     var height= document.body.scrollTop;
    //     var category = document.getElementsByClassName("fixed__category")[0];
    //     if (height>= 205) {
    //         category.style["margin-left"] = "-20%";
    //         category.style["margin-right"] = "-20%";
    //     }
    //     else if (height<205){
    //         category.style["margin-left"] = "0%";
    //         category.style["margin-right"] = "0%";
    //         category.style["background-color"] = "black";
    //         category.style["color"] = "white";
    //     }

    //  }; 
    // window.addEventListener("scroll", runOnScroll);
    // var slickdotactive = document.getElementsByClassName(".slick-active")[0];
    //  slickdotactive.style["background-color", "black"];

    $(".hoi-dap__main__below__left>ul>li>div").click(function () {
        $(this).parent().find("ul").slideToggle(300);
    });

    $(".hoi-dap__main__above>div>a").click(
        function () {
            $(".hoi-dap-dangnhap-box").toggle();
        }
    );

    $(".list-types-devices>div").hover(function () {
        $(this).find("div:nth-child(2)").toggle();
    });

    $(".thuonghieuhangdau-show").click(
        function () {
            $(".phukien-toshow").css("display", "flex");
            $(".thuonghieuhangdau-show").hide();
        }
    )

    $(".thuonghieuhangdau-hide").click(
        function () {
            $(".thuonghieuhangdau-show").show();
            $(".phukien-toshow").css("display", "none");
        }
    )

    $(".phukien__phukien-giam-soc__slider").slick(
        {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 3,
            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
            nextArrow: '<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            centralPadding: '10px',
        }
    );

});


var number_to_show = 5;
var tintuc_show = function () {
    var div_show2 = document.getElementsByClassName("tin-tuc__main__left__div2")[0];
    const child = document.createElement("div");
    for (var i = 0; i < 5; i++) {
        $('.tin-tuc__main__left__div2').append(`
        <a href="">
        <div>
            <img src="../asset/img/tin-tuc/tin-tuc3.jpg" alt="">
        <div>
            <p>Google cập nhật loạt thay đổi theo World Cup 2022, ai yêu bóng đá không thể bỏ lỡ</p>
            <p><span>Lê Nguyễn Hoàng Duy</span> <span>26 phút trước</span></p>
        </div>
   </a>
        `)
    }
}

tintuc_show();

var tintuc_xulyxemthem = function () {
    number_to_show += 2;
    tintuc_show();
}

