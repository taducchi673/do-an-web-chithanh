document.body.onload = function(){
    var index3 = 0;
    var haituhcongnghe_slider_divs = document.querySelectorAll(".haituhcongnghe-slider>div");
    var li_mini_button  = document.querySelectorAll(".haituhcongnghe-minibutton>li");
    function haituhcongnghe_slider_divs__show() {
        for (var i = 0; i<haituhcongnghe_slider_divs.length; i++) {
            console.log(haituhcongnghe_slider_divs.length)
            haituhcongnghe_slider_divs[i].style.display = "none";
            li_mini_button[i].style["background-color"] = "#005B73";
            li_mini_button[i].style["width"] = "10px";
            li_mini_button[i].style["height"] = "10px";
        }
        haituhcongnghe_slider_divs[index3].style.display = "flex";
        li_mini_button[index3].style["background-color"] = "green";
        li_mini_button[index3].style["width"] = "20px";
        li_mini_button[index3].style["height"] = "20px";

    }
    haituhcongnghe_slider_divs__show();

    var laptop_giam3 = document.getElementsByClassName("giam3")[0];
    var laptop_tang3 = document.getElementsByClassName("tang3")[0];
    laptop_giam3.onclick = function(){
        index3-=1;
        if (index3<0) {
            index3 = 4;
        }
        index3 = index3 % 5;
        haituhcongnghe_slider_divs__show()
    }
    laptop_tang3.onclick = function(){
        index3+=1;
        index3 = index3 % 5;
        haituhcongnghe_slider_divs__show()
    };
}