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
};

