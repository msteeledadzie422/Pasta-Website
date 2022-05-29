let userName = prompt("What is your name?");
console.log(userName);
document.write("Hello " + userName);

function myFunction() {
  
  confirm("Click OK if your positive POSITIVE");
  
}

function ratePage(){
    let userNumber = prompt("How many stars would you rate my page? 1-5");
    for (let i = 1; i <= userNumber; i++){
        document.write("<img class='star-pic' src='star.jpeg' />");
    }
      }

ratePage()
