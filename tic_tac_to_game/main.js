var modal = document.getElementById("myModal"),
    square = document.getElementById("square");

var x = document.getElementById("x"),
    y = document.getElementById("y");

var divs = document.querySelectorAll("#inner_square div");

var player_move_bool = true;

var player_score = document.getElementById("player_score");
player_score.innerHTML = 0;

var computer_score = document.getElementById("computer_score");
computer_score.innerHTML = 0;

var undecided_score = document.getElementById("undecided_score");
undecided_score.innerHTML = 0;

var timeOut;

var checked_4 = false, checked_corners = false, checked_corners_2= false,
    checked_1 = false, checked_sides1  = false, checked_sides2 = false,
    checked_4_1 = false, checked_4_7 = false, checked_6_8 = false,
    checked_0_2 = false, checked_0_6 = false, checked_2_8 = false,
    checked_4_5 = false, checked_4_3 = false, checked_0_4 = false,
    checked_4_7 = false, checked_4_2 = false, checked_4_6 = false,
    checked_3_5 = false, checked_3_6 = false, checked_5_8 = false,
    checked_0_1 = false, checked_1_2 = false, checked_6_7 = false,
    checked_7_8 = false, checked_2_5 = false, checked_0_3 = false,
    checked_1_7 = false;

function show_modal(){
    var i, divs_length = divs.length;
    modal.style.display = "block";
    square.style.opacity = "0.4"
    
    for(i = 0; i < divs_length; i++){
        divs[i].style.opacity = "0";
    }
    
}

window.addEventListener("load",show_modal);

/*
window.addEventListener("click",function(event){
    var i, divs_length = divs.length;
    if(event.target !== modal){
        modal.style.display = "none";
        square.style.opacity = "1"
        
        for(i = 0; i < divs_length; i++){
            divs[i].style.opacity = "1";
        }
    }
});*/

var player = {
    won: 0,
    choice: ""
}

var app_data = {
     computer_arr: [],
     player_arr: [],
     computer_choice: "",
     brojac: 0,
     computer_won: 0,
     computer_brojac: 0,
     undecided_score: 0
}

function check_result(str){
    var won = false;
    if(str.indexOf(0) !== -1 && str.indexOf(1) !== -1 && str.indexOf(2) !== -1){won = true;}
    else if
    (str.indexOf(3) !== -1 && str.indexOf(4) !== -1 && str.indexOf(5) !== -1){won = true;}
    else if
    (str.indexOf(6) !== -1 && str.indexOf(7) !== -1 && str.indexOf(8) !== -1){won = true;}
    else if
    (str.indexOf(0) !== -1 && str.indexOf(3) !== -1 && str.indexOf(6) !== -1){won = true;}
    else if
    (str.indexOf(1) !== -1 && str.indexOf(4) !== -1 && str.indexOf(7) !== -1){won = true;}
    else if
    (str.indexOf(2) !== -1 && str.indexOf(5) !== -1 && str.indexOf(8) !== -1){won = true;}
    else if
    (str.indexOf(0) !== -1 && str.indexOf(4) !== -1 && str.indexOf(8) !== -1){won = true;}
    else if
    (str.indexOf(2) !== -1 && str.indexOf(4) !== -1 && str.indexOf(6) !== -1){won = true;}
    
    return won;
}

function who_won(){
    var i;
    
    app_data.computer_arr.sort();
    app_data.player_arr.sort();
    
    var player_str = app_data.player_arr.join(""),
        computer_str = app_data.computer_arr.join("");
    
    var player_won_bool = check_result(player_str);
    var computer_won = check_result(computer_str);
    
    
    if(player_won_bool && computer_won){
        app_data.undecided_score++;
        undecided_score.innerHTML = app_data.undecided_score;
    }else if(player_won_bool){
        player.won++;
        player_score.innerHTML = player.won;
    }else if(computer_won){
        app_data.computer_won++;
        computer_score.innerHTML = app_data.computer_won;
    }
    
    
    
    timeOut = setTimeout(function(){
        app_data.brojac = 0;
        app_data.computer_arr = [];
        app_data.computer_brojac = 0;
        app_data.player_arr = [];
        checked_4 = false;
        checked_corners = false;
        checked_corners_2 = false;
        checked_1 = false;
        checked_sides1 = false;
        checked_sides2 = false;
        checked_4_1 = false;
        checked_4_7 = false;
        checked_6_8 = false;
        checked_0_2 = false;
        checked_0_6 = false;
        checked_2_8 = false;
        checked_4_5 = false;
        checked_4_3 = false;
        checked_0_4 = false;
        checked_4_7 = false;
        checked_4_2 = false;
        checked_4_6 = false;
        checked_3_5 = false;
        checked_3_6 = false;
        checked_5_8 = false;
        checked_0_1 = false;
        checked_1_2 = false;
        checked_6_7 = false;
        checked_7_8 = false;
        checked_2_5 = false;
        checked_0_3 = false;
        checked_1_7 = false;

       for(i = 0; i < divs.length; i++){
           divs[i].childNodes[0].innerHTML = "";
       }
        
       player_move_bool = true;    
    },2000)
    
    
}

/*
function computer_move(){
    var idx = 0, i;
    
    for(i = 0; i < 1000; i++){
        idx = Math.floor(Math.random() * 9);
        if(app_data.computer_arr.indexOf(idx) === -1 && app_data.player_arr.indexOf(idx) === -1){
            app_data.computer_arr.push(idx);
            divs[idx].childNodes[0].innerHTML = app_data.computer_choice;
            player_move_bool = true;
            break;
        }else{
            continue;
        }
    }
}*/

function hide_modal(){
    var i, divs_length = divs.length;
    if(event.target !== modal){
        modal.style.display = "none";
        square.style.opacity = "1"
        
        for(i = 0; i < divs_length; i++){
            divs[i].style.opacity = "1";
        }
    }
}


function computer_move(){
    var idx = 0;
    
    
    if(app_data.player_arr[0] === 4 && !checked_4){
        checked_4 = true;
        idx = 2;
    }else if((app_data.player_arr.indexOf(0) !== -1 && 
              app_data.player_arr.indexOf(1) !== -1)&& !checked_0_1){
             checked_0_1 = true;
             idx = 2;
    }else if((app_data.player_arr.indexOf(1) !== -1 && 
              app_data.player_arr.indexOf(2) !== -1)&& !checked_1_2){
             checked_1_2 = true;
             idx = 0;
    }else if((app_data.player_arr.indexOf(1) !== -1 && 
              app_data.player_arr.indexOf(7) !== -1)&& !checked_1_7){
             checked_1_7 = true;
             idx = 4;
    }else if((app_data.player_arr.indexOf(0) !== -1 && 
              app_data.player_arr.indexOf(2) !== -1)&& !checked_0_2){
             checked_0_2 = true;
             idx = 1;
    }else if((app_data.player_arr.indexOf(0) !== -1 && 
              app_data.player_arr.indexOf(3) !== -1)&& !checked_0_3){
             checked_0_3 = true;
             idx = 6;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(3) !== -1)&& !checked_4_3){
             checked_4_3 = true;
             idx = 5;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(5) !== -1)&& !checked_4_5){
             checked_4_5 = true;
             idx = 3;
    }else if((app_data.player_arr.indexOf(3) !== -1 && 
              app_data.player_arr.indexOf(5) !== -1)&& !checked_3_5){
             checked_3_5 = true;
             idx = 4;
    }else if((app_data.player_arr.indexOf(0) !== -1 && 
              app_data.player_arr.indexOf(6) !== -1)&& !checked_0_6){
             checked_0_6 = true;
             idx = 3;
    }else if((app_data.player_arr.indexOf(2) !== -1 && 
              app_data.player_arr.indexOf(5) !== -1)&& !checked_2_5){
             checked_2_5 = true;
             idx = 8;
    }else if((app_data.player_arr.indexOf(2) !== -1 && 
              app_data.player_arr.indexOf(8) !== -1)&& !checked_2_8){
             checked_2_8 = true;
             idx = 5;
    }else if((app_data.player_arr.indexOf(3) !== -1 && 
              app_data.player_arr.indexOf(6) !== -1)&& !checked_3_6){
             checked_3_6 = true;
             idx = 0;
    }else if((app_data.player_arr.indexOf(5) !== -1 && 
              app_data.player_arr.indexOf(8) !== -1)&& !checked_5_8){
             checked_5_8 = true;
             idx = 2;
    }else if((app_data.player_arr.indexOf(6) !== -1 && 
              app_data.player_arr.indexOf(7) !== -1)&& !checked_6_7){
             checked_6_7 = true;
             idx = 8;
    }else if((app_data.player_arr.indexOf(7) !== -1 && 
              app_data.player_arr.indexOf(8) !== -1)&& !checked_7_8){
             checked_7_8 = true;
             idx = 6;
    }else if((app_data.player_arr.indexOf(6) !== -1 && 
              app_data.player_arr.indexOf(8) !== -1)&& !checked_6_8){
             checked_6_8 = true;
             idx = 7;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(1) !== -1)&& !checked_4_1){
             checked_4_1 = true;
             idx = 7;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(7) !== -1)&& !checked_4_7){
             checked_4_7 = true;
             idx = 1;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(0) !== -1)&& !checked_0_4){
             checked_0_4 = true;
             idx = 8;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(2) !== -1)&& !checked_4_2){
             checked_4_2 = true;
             idx = 6;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(6) !== -1)&& !checked_4_6){
             checked_4_6 = true;
             idx = 2;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
              app_data.player_arr.indexOf(7) !== -1)&& !checked_4_7){
             checked_4_7 = true;
             idx = 0;
    }else if((app_data.player_arr.indexOf(0) !== -1 || 
             app_data.player_arr.indexOf(2)  !== -1 ||
             app_data.player_arr.indexOf(6)  !== -1 ||
             app_data.player_arr.indexOf(8)  !== -1)&& !checked_corners){
             checked_corners = true;
             idx = 4;
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
             app_data.player_arr.indexOf(1)  !== -1 &&
             app_data.player_arr.indexOf(8)  !== -1 &&
             app_data.player_arr.indexOf(5)  !==-1) && 
             !checked_sides1){
             checked_sides1 = true;
             idx = 3;
             
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
             app_data.player_arr.indexOf(1)  !== -1 &&
             app_data.player_arr.indexOf(8)  !== -1 &&
             app_data.player_arr.indexOf(3)  !==-1) && 
             !checked_sides2){
             checked_sides2 = true;
             idx = 5;
             
    }else if((app_data.player_arr.indexOf(4) !== -1 && 
             app_data.player_arr.indexOf(1)  !== -1 &&
             app_data.player_arr.indexOf(8)  !== -1)&& !checked_1){
             checked_1 = true;
             idx = 7;
             
    }else if((app_data.player_arr.indexOf(4) !== -1 &&
             app_data.player_arr.indexOf(8)  !== -1)&& !checked_corners_2){
             checked_corners_2 = true;
             idx = 0;
    }else{
        idx = Math.floor(Math.random() * 9);
    }
    
    
    
    if(app_data.computer_arr.indexOf(idx) === -1 && 
       app_data.player_arr.indexOf(idx) === -1){
        app_data.computer_arr.push(idx);
        divs[idx].childNodes[0].innerHTML = app_data.computer_choice;
        player_move_bool = true;
        app_data.computer_brojac++;
        return;
    }else{
        computer_move();
    }
    
}


function player_move(val){
    app_data.brojac++;
    app_data.player_arr.push(val);
    if(app_data.brojac === 5){
        who_won();
    }
}

x.addEventListener("click",function(){
    player.choice = "X";
    app_data.computer_choice = "O";
    hide_modal();
});

y.addEventListener("click",function(){
    player.choice = "O";
    app_data.computer_choice = "X";
    hide_modal();
});


document.getElementById("box1").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(0) === -1 
          && app_data.player_arr.indexOf(0) === -1 && app_data.brojac < 5){
            player_move(0);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box2").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(1) === -1 
          && app_data.player_arr.indexOf(1) === -1 && app_data.brojac < 5){
            player_move(1);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box3").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(2) === -1 
          && app_data.player_arr.indexOf(2) === -1 && app_data.brojac < 5){
            player_move(2);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
    
});

document.getElementById("box4").addEventListener("click",function(){
    
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(3) === -1 
          && app_data.player_arr.indexOf(3) === -1 && app_data.brojac < 5){
            player_move(3);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box5").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(4) === -1 
          && app_data.player_arr.indexOf(4) === -1 && app_data.brojac < 5){
            player_move(4);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box6").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(5) === -1 
          && app_data.player_arr.indexOf(5) === -1 && app_data.brojac < 5){
            player_move(5);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box7").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(6) === -1 
          && app_data.player_arr.indexOf(6) === -1 && app_data.brojac < 5){
            player_move(6);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box8").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(7) === -1 
          && app_data.player_arr.indexOf(7) === -1 && app_data.brojac < 5){
            player_move(7);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});

document.getElementById("box9").addEventListener("click",function(){
    if(player_move_bool){
        if(app_data.computer_arr.indexOf(8) === -1 
          && app_data.player_arr.indexOf(8) === -1 && app_data.brojac < 5){
            player_move(8);
            this.childNodes[0].innerHTML = player.choice;
            
        }else{return;}
        
    }
    player_move_bool = false;
    if(app_data.brojac < 5 && app_data.computer_brojac < app_data.brojac){
        computer_move();
    }
});







