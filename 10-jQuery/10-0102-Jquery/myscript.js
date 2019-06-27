$("h1").click(function(){
    $(this).text("Changing the text")
})

$('input').eq(0).keypress(function(){
    console.log(event)

    // .which will take in the in put
    if(event.which === 13){
        $('h3').toggleClass('turnBlue');
    }
})

// on is like addEventListener
$('h1').on('dblclick',function(){
    $(this).toggleClass('turnRed')
})

//animation
$('input').eq(1).on('click',function(){
    $('.container').slideUp(3000)
})