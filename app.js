function displayRating() {

    let output = '';
    let rating = prompt('scale of 1-5, how many stars?');
    for(let i = 0; i < rating; i++){
        output += "<img class='star' src='images/star.png'/>";
    }

    return document.write(output);
}
