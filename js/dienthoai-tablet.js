document.body.onload = function(){
    
}

$(document).ready(function(){
    for (var i=0; i<19; i++){
        $(".div-laptop-content-content").append(
            `
            <a class="dienthoai-laptop-content__items">
                 <img src="../asset/img/dienthoai/dienthoai__main__div-img1.jpg" alt="">
                 <p>
                   IPhone 14 Plus
                 </p>
                 <ul>
                   <li>
                     6.7"
                   </li>
                   <li>
                     Super Rentina XDR
                   </li>
                 </ul>
                 <ul>
                   <li>
                     128GB
                   </li>
                   <li>
                     256GB
                   </li>
                   <li>
                     512GB
                   </li>
                 </ul>
                 <p class="price-giamgia">
                   <span>
                     27.990.000đ
                   </span>
                   -8%
                 </p>
                 <p class="price">
                   25.490.000đ
                 </p>
               </a>
            `
        );
        
    };
    for (var i=0; i<19; i++){
        $(".div-tablet-content-content").append(
            `
            <a class="dienthoai-laptop-content__items">
         <img src="../asset/img/tablet/tablet__main__img1.jpg" alt="">
         <p>
           iPad Pro M2 12.9" WiFi Cellular 2TB
         </p>
         <ul>
           <li>
            Liquid Rentina XDR
           </li>
           <li>
             12.9"
           </li>
         </ul>
         <ul>
           <li>
             128GB
           </li>
           <li>
             256GB
           </li>
           <li>
             512GB
           </li>
         </ul>
         
         <p class="price">
           Dự kiên: 25.490.000đ
         </p>
         <ul>
            <li>
              Chip Apple M2 8 nhân
            </li>
            <li>
              RAM 16GB
            </li>
            <li>
              Dung lượng 2TB
            </li>
            <li>
              5G, Nghe gọi qua FaceTime
            </li>
            <li>
              Pin 40.88 Wh (~ 10.835 mAh), Sạc 20W
            </li>
         </ul>
       </a>
            `
        );
        
    };
    var total1=19;
    var num=15;
    $(".dienthoai-laptop_xemthem").click(function(){
        if (total1>=50){
             num=0;
             document.querySelectorAll(".dienthoai-laptop_xemthem")[0].innerHTML = "Đã hết sản phẩm";
             document.querySelectorAll(".dienthoai-laptop_xemthem")[0].style.color="red";
            
        }
        total1+=num;
        
        for (var i=0; i<num; i++){
            $(".div-laptop-content-content").append(
                `
                <a class="dienthoai-laptop-content__items">
                     <img src="../asset/img/dienthoai/dienthoai__main__div-img1.jpg" alt="">
                     <p>
                       IPhone 14 Plus
                     </p>
                     <ul>
                       <li>
                         6.7"
                       </li>
                       <li>
                         Super Rentina XDR
                       </li>
                     </ul>
                     <ul>
                       <li>
                         128GB
                       </li>
                       <li>
                         256GB
                       </li>
                       <li>
                         512GB
                       </li>
                     </ul>
                     <p class="price-giamgia">
                       <span>
                         27.990.000đ
                       </span>
                       -8%
                     </p>
                     <p class="price">
                       25.490.000đ
                     </p>
                   </a>
                `
            );
        }
    });
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
            $(".div-tablet-content-content").append(
                `
                <a class="dienthoai-laptop-content__items">
                <img src="../asset/img/tablet/tablet__main__img1.jpg" alt="">
                <p>
                  iPad Pro M2 12.9" WiFi Cellular 2TB
                </p>
                <ul>
                  <li>
                   Liquid Rentina XDR
                  </li>
                  <li>
                    12.9"
                  </li>
                </ul>
                <ul>
                  <li>
                    128GB
                  </li>
                  <li>
                    256GB
                  </li>
                  <li>
                    512GB
                  </li>
                </ul>
                
                <p class="price">
                  Dự kiên: 25.490.000đ
                </p>
                <ul>
                   <li>
                     Chip Apple M2 8 nhân
                   </li>
                   <li>
                     RAM 16GB
                   </li>
                   <li>
                     Dung lượng 2TB
                   </li>
                   <li>
                     5G, Nghe gọi qua FaceTime
                   </li>
                   <li>
                     Pin 40.88 Wh (~ 10.835 mAh), Sạc 20W
                   </li>
                </ul>
              </a>
                `
            );
        }
    });
    

   
  var show = true;
    $(".dienthoai-tablet__filter>ul:first-child>li").click(function(){
        $(this).parent().find("li").find("ul").css("display", "flex");
        $(this).parent().find("li").find("ul").not($(this)).css("display", "none");
       
        if (show) {
          console.log(show);
          $(this).find("ul").css("display", "flex");
          show = false;
        }
        else {
          show = true;
          $(this).find("ul").css("display", "none");
        }
        
      })
})