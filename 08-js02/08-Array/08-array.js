// creating the Array
var arr = []

var useAns = prompt("Would you like to start the roster app? y/n")
var userChoice = null

if(useAns === "y" || useAns === "Y"){
    while (userChoice !== "quit"){
        userChoice = prompt("please select an action: add, remove , display, or quit")
        // if choose the add 
        if(userChoice === "add")
            addName()
        else if (userChoice === "remove")
            remove()
        else if(userChoice === "display")
            display()
    }
}
else{
    alert("Thank you for using the app. Please refresh the page to start over")

}


function addName (){
    var name = prompt ("Please enter the name you want to add")
    arr.push(name)
}

function display(){
    console.log(arr)
}

function remove (){
    name = prompt("Please input the name you want to remove")
    arr.splice(arr.indexOf(name),1)

}
