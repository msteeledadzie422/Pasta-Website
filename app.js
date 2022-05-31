function yourName() {
      userName = prompt('What is your name?');
      console.log(userName);
  return document.write("Hello " + userName);
}

 function ratePage(){
  let userRating = prompt("How many stars would you rate my page? Only 1-5");
  let message = "";
  
  if(userRating<=5 && userRating>=1){
    message = "Thank you " + userName;
    alert(message);
  
    for (let rating = 1; rating <= userRating; rating++) {
      document.write("<img class='star-pic' src='star.jpg' />");
  }
    
  else {
    message = "Not a valid entry, please enter a number 1-5, thank you!";
    alert(message);
  }

