var user1 = prompt("Player 1 please enter your name");
var usr1Color = 'rgb(86, 151, 255)';
var user2 = prompt("Player 2 please enter your name");
var usr2Color = 'rgb(237, 45, 73)';

var gameOn = true;
var table = $('table tr');
////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  THE FLOW STARTED

$('h3').text(user1 +": It is your turn, pick a column for a blue chip")


var currentColor = usr1Color;
var currentName = user1;
var currentPlayer = 1;

////////////////////////////////////////////////////////////////////////////////////////////////////
//                  ACTION ON BUTTON CLICKED
$('.board button').on('click', function(){
    var col = $(this).closest('td').index();
    var bottomAvail = checkBottom(col);
    if (gameOn === true){

        changeColor(bottomAvail,col,currentColor)

        if(hWinChek()|| vWinChek()|| dWInCheck()){
            $('h1').text(currentName+", you won!!!");
            $('h3').fadeOut(200);
            $('h2').fadeOut(200);
            gameOn = false;
        }
        currentPlayer = currentPlayer * -1;

        if(currentPlayer === 1){
            currentName = user1;
            currentColor = usr1Color;
            $('h3').text(currentName +": It is your turn, pick a column for a blue chip")
        }
        else{
            currentName = user2;
            currentColor = usr2Color;
            $('h3').text(currentName +": It is your turn, pick a column for a blue chip")
        }
    }
    else{
        alert("Please refresh the page to play again")
    }
})


////////////////////////////////////////////////////////////////////////////////////////////////////
//                  LOGICAL FUNCTIONS
// function report win 
//      take in a row and col then spit out the correct win position
function reportWin(row, col){
    console.log("You won this game at row: "+row+" col: "+ col)
}

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
            return r;
        }
    }
}

// this is more like the final check when we suspect that onw player already have all 4 nodes
function colorMatchCheck(one, two, three, four){
    return (one === two && one === three && one === four && one != 'rgb(128, 128, 128)'&& one!=undefined)
}

// now we have a check that check for a win
// for each row we need to check 4 time, and we have 6 rows in total
function hWinChek(){
    //6 rows with 4 col check each
    for(var r= 0; r<6; r++){
        for(var c=0; c<4; c++){
            if(colorMatchCheck(reportColor(r,c),reportColor(r,c+1),reportColor(r,c+2),reportColor(r,c+3))){
                console.log('horizontal win at row: '+r+" col: "+c )
                reportWin(r,c);
                return true;
            }
            else
                continue;
        }
    }
}

// now we have a check that check for a win
// for each col we need to check 3 times, and we have 7 col in total
function vWinChek(){
    //6 rows with 4 col check each
    for(var c= 0; c<7; c++){
        for(var r=0; r<3; r++){
            if(colorMatchCheck(reportColor(r,c),reportColor(r+1,c),reportColor(r,c),reportColor(r,c))){
                console.log('vertical win at row: '+r+" col: "+c )
                reportWin(r,c);
                return true;
            }
            else
                continue;
        }
    }
}

function dWInCheck(){
    for (var c = 0; c < 5; c++){
        for (var r =0; r <7; r++){
            if(colorMatchCheck(reportColor(r,c), reportColor(r+1,c+1), reportColor(r+2,c+2),reportColor(r+3,c+3))){
                console.log("Diag");
                reportWin(r,c);
                return true;
            }else if(colorMatchCheck(reportColor(r,c), reportColor(r-1,c+1), reportColor(r-2,c+2),reportColor(r-3,c+3))){
                console.log("Diag");
                reportWin(r,c);
                return true;
            }else {
                continue;
            }
        }
    }
}