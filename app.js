function yourName() {
      let userName = prompt('What is your name?');
      console.log(userName);
  return document.write("Hello " + userName);
}

 function ratePage(){
  let userRating = prompt("How many stars would you rate my page? Only 1-5");
  let message = "";
  
  if(userRating<=5 && userRating>=1){
    message = "Thank you!";
    alert(message);
  let images = ""
    for (let rating = 1; rating <= userRating; rating++) {
      images += "<img class='star-pic' src='star.jpg' />");
    }    
    document.write(images)
   } else {
    message = "Not a valid entry, please enter a number 1-5, thank you!";
    alert(message);
    }
  }

yourName()
ratePage()
