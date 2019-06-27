// grab all the component
button = document.querySelector("#restart")
button1 = document.querySelector("#google")
squares = document.querySelectorAll("td")

//refresh page
button.addEventListener("click",function(){
    console.log("in button")
    //location = "https://google.com"
    location.reload(true)
})

// go to google
button1.addEventListener("click",function(){
    console.log("in button")
    location = "https://google.com"
})

//assign the fucntion to change when click
squares.forEach(sq => {sq.addEventListener("click",changeSymbol)});
// the function that help changing the content
function changeSymbol(){
    if (this.textContent === "x")
        this.textContent = "o"
    else if (this.textContent === "o")
        this.textContent = " "
    else if (this.textContent === " ")
        this.textContent = "x"
}