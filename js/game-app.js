document.body.onload = function(){
    var game_app_right_game  = document.querySelectorAll(".game-app__main__div2__right__div__menu>div:first-child")[0];
    var game_app_right_ungdung  = document.querySelectorAll(".game-app__main__div2__right__div__menu>div:last-child")[0];
    var game_app_right_game_div  = document.querySelectorAll(".game-app__main__div2__right__div__game")[0];
    var game_app_right_ungdung_div  = document.querySelectorAll(".game-app__main__div2__right__div__ungdung")[0];
    game_app_right_game.onclick = function(){
        game_app_right_game_div.style.display = "block";
        game_app_right_ungdung_div.style.display = "none";
        game_app_right_game.style["background-color"] = "white";
        game_app_right_game.style["border-bottom"] = "3px solid blue";
        game_app_right_ungdung.style["border-bottom"] = "1px solid rgb(201, 182, 182)";
        game_app_right_ungdung.style["background-color"] = "transparent";
        game_app_right_ungdung.style["color"] = "#818181";
        game_app_right_game.style["color"] = "blue";
    };
    game_app_right_ungdung.onclick = function(){
        game_app_right_ungdung_div.style.display = "block";
        game_app_right_game_div.style.display = "none";
        console.log("app");
        game_app_right_ungdung.style["background-color"] = "white";
        
        game_app_right_game.style["background-color"] = "transparent";
        game_app_right_ungdung.style["color"] = "blue";
        game_app_right_game.style["color"] = "#818181";
        game_app_right_game.style["border-bottom"] = "1px solid rgb(201, 182, 182)";
        game_app_right_ungdung.style["border-bottom"] = "3px solid blue";
        
    };
    game_app_right_ungdung_div.style.diplay = "block";

    var game_app_menu = document.querySelectorAll(".game-app__main__div2__left__div3>div>ul>li");
    var game_app_menu_div = document.querySelectorAll(".game-app__main__div2__left__div3>div");
 
    var index = 0;
    var to_show = function(){
        for (var i = 0; i<game_app_menu_div.length; i++){
            
            if(i==0){
                continue;
            }
            game_app_menu[i-1].style['border'] = "1px solid rgb(204, 176, 176)"
            game_app_menu_div[i].style.display = "none";
        }
        game_app_menu_div[index].style.display = "block";
        game_app_menu[index-1].style['border'] = "1px solid blue"
    };
    for (var i = 0; i<game_app_menu.length; i++){
        game_app_menu[i].onclick = function(){
            index = this.id;
            to_show();
            // console.log(`Show ${index}`);
        };
    };

};


// Jquery
$(document).ready(function() {
    for(var i=0; i<6; i++){
        $(".game-app-divphukiengaming__slick").append(`
        <div class="game-app-slick">
                                    <img src="../asset/img/game-app/game-app-phukien1.jpeg" alt="">
                                    <p>
                                        Chu???t c?? d??y Gaming Asus Keris
                                    </p>
                                    <p>
                                        Ch??? b??n online
                                    </p>
                                    <p>
                                        590.000??
                                    </p>
                                    <p>
                                        1.250.000??
                                    </p>
                                </div>
        `);
        
    }
    
        $(".game-app-divphukiengaming__slick").slick(
            {
            
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
                    nextArrow:'<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
            }
        );
        
        
           
        
            $(".game-app-divlaptopgaming__slick").slick(
                {
                
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
                        nextArrow:'<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
                }
            );
    
    
       
               
            
                $(".game-app-divdienthoaigaming__slick").slick(
                    {
                    
                            infinite: true,
                            slidesToShow: 4,
                            slidesToScroll: 3,
                            prevArrow: '<button type="button" class="slick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
                            nextArrow:'<button type="button" class="slick-next"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
                    }
                );
    $(".game_app_baivietvegame_button").click(
        function(){
            for (var i =0; i<5; i++){
                console.log("button-clicked")
                $(".game_app_baivietvegame").append(`
                    <li>
                    <a href="">
                    <img src="../asset/img/game-app/baivietgame2.jpg" alt="">
                    <div>
                        <p>
                            So s??nh Snapdragon 870 v?? Dimensity 1000 Plus, m???nh b???t ng???
                        </p>
                        <p>
                            <span>L?? T???n L???c</span>
                            <span>9 gi??? tr?????c</span>
                        </p>
                    </div>
                </a>
                    </li>
                `)
            }
        }
    )

});

