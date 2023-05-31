const dice = () => {
  let randomNum1 = Math.floor(Math.random() * 6) + 1;

  let randomDiceImage1 = "dice" + randomNum1 + ".png";

  let randomImageSource1 = "images/" + randomDiceImage1;

  let image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource1);

  let randomNum2 = Math.floor(Math.random() * 6) + 1;

  let randomDiceImage2 = "dice" + randomNum2 + ".png";

  let randomImageSource2 = "images/" + randomDiceImage2;

  let image2 = document.querySelectorAll("img")[1];

  image2.setAttribute("src", randomImageSource2);

  let returnMessage = document.querySelector("#returnMessage");

  if (randomNum1 > randomNum2) {
    returnMessage.innerHTML = "Player 1 Wins 🏁";
  } else if (randomNum1 < randomNum2) {
    returnMessage.innerHTML = "Player 2 Wins 🏁";
  } else {
    returnMessage.innerHTML = "Draw, Try Again♻";
  }
};

