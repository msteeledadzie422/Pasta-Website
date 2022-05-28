let firstName = "";
let age = prompt("How old are you?");

function askName() {
    firstName = prompt("What is your first name?");
    console.log(firstName);
    document.write("Hello " + firstName + ", how goes it?");
}
