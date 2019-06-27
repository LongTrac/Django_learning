var user1 = prompt("Player 1 please enter your name");
var usr1Color = 'red';
var user2 = prompt("Player 2 please enter your name");
var usr2Color = 'blue';

var gameOn = true;
var table = $('table tr');
var buttons = $('button');
$('h3').text(user1 +": It is your turn, pick a column for a blue chip")
 console.log(buttons)
var turn = 0
//the loop that loop 42 time since we have a 7*6=42 spaces
while(turn < 42){
    //changing the name that fit the turn for each player
    if(turn %2 === 0)
        $('h3').text(user1 +": It is your turn, pick a column for a blue chip")
    else
        $('h3').text(user2 +": It is your turn, pick a column for a red chip")


    turn++
}

alert("The game has ended please refresh to play again")

// function to change color of a button
//      this function take in row, col, and color to change the button
function changeColor (row, col, color){
    return table.eq(row).find('td').eq(col).find('button').css('background-color',color);
}

// function to report the current color on the button
//      this function take in row, col to report the color at that position
function reportColor (row,col){
    return table.eq(row).find('td').eq(col).find('button').css('background-color');
}

//check bottom function
//      this function take in col to check the last button the still gray out
function checkBottom (col){
    var currentColor = null;
    //loop through from the bottom line up because we are dropping the token in
    for (var r = 5; r >=0; r--){
        currentColor = reportColor(r,col);
        if (currentColor === 'rgb(128, 128, 128)'){
            return row
        }
    }
}

// this is more like the final check when we suspect that onw player already have all 4 nodes
function colorMatchCheck(one, two, three, two){
    return (one === two && one === three && one === four && one != 'rgb(128, 128, 128)'&& one!=undefined)
}

// now we have a check that check for a win
// for each row we need to check 4 time, and we have 6 rows in total
function hWinChek(){
    //6 rows with 4 col check each
    for(var r= 0; r<6; r++){
        for(var c=0; c<4; c++){
            if(colorMatchCheck(reportColor(r,c),reportColor(r,c+1),reportColor(r,c+2),reportColor(r,c+3))){
                console.log('horizontal win at row: '+row+" col: "+col )
                return true;
            }
            else
                continue;
        }
    }
}

// now we have a check that check for a win
// for each col we need to check 3 times, and we have 7 col in total
function hWinChek(){
    //6 rows with 4 col check each
    for(var c= 0; c<7; c++){
        for(var r=0; r<3; r++){
            if(colorMatchCheck(reportColor(r,c),reportColor(r+1,c),reportColor(r+2,c),reportColor(r+3,c))){
                console.log('vertical win at row: '+row+" col: "+col )
                return true;
            }
            else
                continue;
        }
    }
}