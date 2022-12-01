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

}