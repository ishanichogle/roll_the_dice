// for first image 

var randomno1 = Math.floor(Math.random() * 6) + 1;
var randomimage = "dice" + randomno1 + ".png";
var imagesource = "images/" + randomimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imagesource);

// for second image 

var randomno2 = Math.floor(Math.random() * 6) + 1;
var randomimage2 = "dice" + randomno2 + ".png";
var imagesource2 = "images/" + randomimage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imagesource2);

if(randomno1 > randomno2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomno1 < randomno2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Its a draw!";
}




