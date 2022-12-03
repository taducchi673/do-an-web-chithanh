document.body.onload = function(){
    var trung_tam_laptop_img = document.querySelectorAll(".trungtamlaptop-slider>img");
    var laptop__todisplay__img = document.querySelectorAll(".laptop__display__img>div>img")
    for (var i = 0; i<trung_tam_laptop_img.length; i++){
        trung_tam_laptop_img[i].onclick = function(){
            console.log(this.id);
            document.getElementsByClassName("laptop__display__img")[0].style.display = "block";
            for (var j =0; j<laptop__todisplay__img.length; j++){
                laptop__todisplay__img[j].style.display = "none";
            }
            laptop__todisplay__img[this.id].style.display = "block";
        }
    }



    function runOnScroll() {
        var height= document.body.scrollTop;
        var laptop_fixed_div = document.getElementsByClassName("laptop__main__fixed-div")[0];
        if (height>= 350) {
            laptop_fixed_div.style.display= "flex";
        }
        else if (height<350){
            laptop_fixed_div.style.display= "none";
        }
        if (height>800 && height<970 ) {
            index_fixed_li=0;
            fixed_div_xuly();
        }
        else if  (height>970 && height<2000) {
            index_fixed_li = 1;
            fixed_div_xuly();
        }
        else if  (height>2000 && height<3250) {
            index_fixed_li = 2;
            fixed_div_xuly();
        }
        else if  (height>3250 && height<4530) {
            index_fixed_li = 3;
            fixed_div_xuly();
        }
        else if  (height>4630 && height<5817) {
            index_fixed_li = 4;
            fixed_div_xuly();
        }
        else if  (height>5817 && height<7210) {
            index_fixed_li = 5;
            fixed_div_xuly();
        }

        else if  (height>7210 && height<8200) {
            index_fixed_li = 6;
            fixed_div_xuly();
        }
        else if  (height>8200 && height<9500) {
            index_fixed_li = 7;
            fixed_div_xuly();
        }
     };
     window.addEventListener("scroll", runOnScroll);
     var laptop__main__fixed_div = document.querySelectorAll(".laptop__main__fixed-div>li>a>div");
     var laptop__main__fixed_p = document.querySelectorAll(".laptop__main__fixed-div>li>a>p");
     function fixed_div_xuly(){
        for (var i=0; i<laptop__main__fixed_div.length; i++){
            laptop__main__fixed_div[i].style["background-color"] = "white";
            laptop__main__fixed_p[i].style['color'] = "white";
        }
        laptop__main__fixed_div[index_fixed_li].style["background-color"] = "#F2C94C";
        laptop__main__fixed_p[index_fixed_li].style['color'] = "#F2C94C"; 
    }

   

     
    

   
    var wrapper = document.getElementsByClassName("laptop__display__img")[0];
    var wrapper__img = document.querySelectorAll(".trungtamlaptop-slider>div>img")
    var index1 = 0;
    var laptop__display__img = document.querySelectorAll(".laptop__display__img>div>img");
    console.log(laptop__display__img)
    function laptop__display__img__show(){
        for (var i = 0; i<laptop__display__img.length; i++){
            laptop__display__img[i].style.display = "none";
        }
        laptop__display__img[index1].style.display = "block";
    }

    for (var i = 0; i<wrapper__img.length; i++){
        wrapper__img[i].onclick = function(){
            index1 = this.id-1;
            console.log(this);
            laptop__display__img__show();
            wrapper.style.display = "flex";
        }
    } 

    laptop__display__img__show()
    
    var laptop_giam1 = document.getElementsByClassName("giam1")[0];
    var laptop_tang1 = document.getElementsByClassName("tang1")[0];
    laptop_giam1.onclick = function(){
        index1-=1;
        if (index1<0) {
            index1 = 5;
        }
        index1 = index1 % 6;
        laptop__display__img__show()
    }
    laptop_tang1.onclick = function(){
        index1+=1;
        index1 = index1 % 6;
        laptop__display__img__show()
    };
    document.getElementsByClassName("quit-button")[0].onclick = function(){
        wrapper.style.display = "none";
    };

    var index2 = 0;
    var trungtamlaptop_slider_divs = document.querySelectorAll(".trungtamlaptop-slider>div");
    var li_mini_button  = document.querySelectorAll(".laptop__trungtamlaptop ul li");
    function trungtamlaptop_slider_divs__show() {
        for (var i = 0; i<trungtamlaptop_slider_divs.length; i++) {
            trungtamlaptop_slider_divs[i].style.display = "none";
            li_mini_button[i].style["background-color"] = "white";
            li_mini_button[i].style["width"] = "10px";
            li_mini_button[i].style["height"] = "10px";
        }
        trungtamlaptop_slider_divs[index2].style.display = "flex";
        li_mini_button[index2].style["background-color"] = "green";
        li_mini_button[index2].style["width"] = "20px";
        li_mini_button[index2].style["height"] = "20px";



    }
    trungtamlaptop_slider_divs__show();

    var laptop_giam2 = document.getElementsByClassName("giam2")[0];
    var laptop_tang2 = document.getElementsByClassName("tang2")[0];
    laptop_giam2.onclick = function(){
        index2-=1;
        if (index2<0) {
            index2 = 5;
        }
        index2 = index2 % 6;
        trungtamlaptop_slider_divs__show()
    }
    laptop_tang2.onclick = function(){
        index2+=1;
        index2 = index2 % 6;
        trungtamlaptop_slider_divs__show()
    };

    document.getElementsByClassName("xemthemcuahang")[0].onclick = function(){
       for (var i = 0; i<7; i++){
        document.querySelectorAll(".trungtamlaptop__cuahang>div:first-child")[0].innerHTML += `
        <a href="#">
        <p>Trung tâm Laptop 237 Nguyễn An Ninh 
            <span>
                Xem chỉ đường <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
        </p>
        <p>
            237 Nguyễn An Ninh, KP. Bình Minh 2, P. Dĩ An, Tx. Dĩ An, T. Bình Dương.
        </p>
    </a>`
       }
        ;
    }
}   

$(document).ready(function(){
    $(".laptop__main__divtype1__absolute-button").click(function(){
        $(this).parent().find(">div").toggle();
    });
    $(".laptop__main__divtype1__absolute-quitbutton").click(function(){
        $(this).parent().parent().toggle();
    });
})