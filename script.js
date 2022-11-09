let randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

let randomDiceImage = "dice" + randomNumber1 + ".png";
//dice1.png - dice6.png

let randomImageSource = "img/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

console.log(randomNumber2);
let randomImageSource2 = "img/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🤺Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "🤼‍♂️Player 2 WINS!";
} else {
  document.querySelector("h1").innerHTML = "🏂Draw!";
}

function refresh() {
  window.location.reload("Refresh");
}
