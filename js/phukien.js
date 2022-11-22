document.body.onload = function(){
    var index_fixed_li = 0;
    function runOnScroll() {
        var height= document.body.scrollTop;
        var phukien_fixed_div = document.getElementsByClassName("phukien__main__fixed-div")[0];
        if (height>= 600) {
            phukien_fixed_div.style.display= "flex";
        }
        else if (height<600){
            phukien_fixed_div.style.display= "none";
        }
        console.log(height);
        if (height>800 && height<1368) {
            index_fixed_li=0;
            fixed_div_xuly();
        }
        else {
            index_fixed_li = 1;
            fixed_div_xuly();

        }
     };
     window.addEventListener("scroll", runOnScroll);
     
     var phukien__main__fixed_div = document.querySelectorAll(".phukien__main__fixed-div>li>a>div");
     function fixed_div_xuly(){
        for (var i=0; i<phukien__main__fixed_div.length; i++){
            phukien__main__fixed_div[i].style["background-color"] = "white";
        }
        phukien__main__fixed_div[index_fixed_li].style["background-color"] = "#F2C94C";
     }

     function init_style(string){
        var li_phukien__main__div = document.querySelectorAll(`${string}>ul>li`);
        var divs_phukien__main__div = document.querySelectorAll(`${string}>div`)
        for (var i=0; i<li_phukien__main__div.length; i++){
            divs_phukien__main__div[i].style.display = "none";
            li_phukien__main__div[i].style["background-color"] = "white";
        }
        divs_phukien__main__div[0].style.display = "flex";
        li_phukien__main__div[0].style["background-color"] = "#F2C94C";
    }

     
    function display_div(string){
        var li_phukien__main__div = document.querySelectorAll(`${string}>ul>li`);
        var divs_phukien__main__div = document.querySelectorAll(`${string}>div`);
        for (var i =0; i<li_phukien__main__div.length; i++){
   
           li_phukien__main__div[i].onclick = function(){
              
               for (var j = 0; j<divs_phukien__main__div.length; j++){
                   divs_phukien__main__div[j].style.display = "none";
                   li_phukien__main__div[j].style["background-color"] = "white";
               }
               li_phukien__main__div[this.className-1].style["background-color"] = "#F2C94C";
               divs_phukien__main__div[this.className-1].style.display = "flex";
           }
        }
    }

    function gopchung(string){
        init_style(string);
        display_div(string);
    }
    for (var i=1; i<=7; i++){
        gopchung(`.phukien__main__div${i}`);
    };

}