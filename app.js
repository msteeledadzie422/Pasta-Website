let firstName = "";
let age = prompt("How old are you?");

function askName() {
    firstName = prompt("What is your first name?");
    console.log(firstName);
    document.write("Hello " + firstName + ", how goes it?");
}

function ratePage(){
    let userNumber = prompt("How many stars would you rate my page? 1-5");
    for (let i = 1; i <= userNumber; i++){
        document.write("<img class='star-pic' src='star.jpeg' />");
    }
