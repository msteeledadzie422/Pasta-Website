let userName = prompt("What is your name?");
console.log(userName);
document.write("Hello " + userName);

function myFunction() {
  
  confirm("Click OK if your positive POSITIVE");
  
}

function ratePage(){
    let userRating = prompt("How many stars would you rate my page? 1-5");
    if (userRating<=5 && userRating >=1) {
      let message = "";
      message = "Thank you for helping us to improve our service - your rating is appreciated";
      alert(message);
      for (let i = 1; i <= userRating; i++) {
        document.write("<img class='star-pic' src='star.jpeg' />");
    }
      
    else {
      message = "Sorry, we only accept ratings up to 5, but we appreciate your enthusiasm!";
      alert(message);
    }
    }
  
}

ratePage();
