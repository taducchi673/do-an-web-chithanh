
$(document).ready(function(){

    for (var i=0; i<19; i++){
        $(".div-pcmayin-content-content").append(
            `
            <a class="dienthoai-laptop-content__items">
             <img src="../asset/img/pcmayin/pc-mayin5.png" alt="">
             <p>
               IPhone Máy in đa năng Brother Laser
             </p>
            
             <p class="price">
              5.700.000đ
             </p>
           </a>
            `
        );
    }
    var total2=19;
    var num2=15;
    $(".dienthoai-tablet_xemthem").click(function(){
        if (total2>=50){
             num2=0;
             document.querySelectorAll(".dienthoai-tablet_xemthem")[0].innerHTML = "Đã hết sản phẩm";
             document.querySelectorAll(".dienthoai-tablet_xemthem")[0].style.color="red";
            
        }
        total2+=num2;
        
        for (var i=0; i<num2; i++){
            $(".div-pcmayin-content-content").append(
                `
                <a class="dienthoai-laptop-content__items">
                 <img src="../asset/img/pcmayin/pc-mayin5.png" alt="">
                 <p>
                   IPhone Máy in đa năng Brother Laser
                 </p>
                
                 <p class="price">
                  5.700.000đ
                 </p>
               </a>
                `
            );
        }
    });
})