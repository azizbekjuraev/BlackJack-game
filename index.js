// Get random number!

let getRandomNumber = function (n) {
  let randomNum = Math.floor(Math.random() * 13) + 1;

  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 1) {
    return 11;
  } else {
    return randomNum;
  }
};

console.log(getRandomNumber());

//let firstCard = getRandomNumber();
//let secondCard = getRandomNumber();
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

console.log(cards);

let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector(`#cards-el`);
let messageEl = document.querySelector("#message-el");
let startGame = document.querySelector("#start-btn");
let newCard = document.querySelector(`#newcard-btn`);
let playerEl = document.querySelector(`#player-el`);
let textEl = document.querySelector(`#text-el`);
let submitBtn = document.querySelector(`#submit-btn`);
let inputYourName = document.querySelector(`#input-name`);
let welcomeEl = document.querySelector(`#welcome-el`);

let newGame = document.querySelector(`#newgame-btn`);

// Creating clock here

let today = new Date();
console.log(today);

let hours = today.getHours();
console.log(hours);
let minutes = today.getMinutes();
console.log(minutes);
let seconds = today.getSeconds();
console.log(seconds);

let h = document.querySelector(`#hours`);
let m = document.querySelector(`#minutes`);
let s = document.querySelector(`#seconds`);

h.textContent = `${hours}:`;
m.textContent = `${minutes}:`;
s.textContent = `${seconds}`;

if (seconds < 10) {
  s.textContent = `0${seconds}`;
}
if (minutes < 10) {
  s.textContent = `0${minutes}`;
}

function styleChanger(element) {
  element.style.display = `none`;
}

styleChanger(messageEl);
styleChanger(cardsEl);
styleChanger(sumEl);
styleChanger(startGame);
styleChanger(newCard);
styleChanger(newGame);

let player = {
  name: `Azizbek`,
  chips: 145,
  sayHello: function () {
    return `Heissan!`;
  },
};

//playerEl.textContent = player.name + `: $` + player.chips;

function toCapital(name) {
  let nameTo = name[0].toUpperCase() + name.slice(1);
  return nameTo;
}

textEl.addEventListener(`keyup`, () => {
  document.querySelector(`#submit-btn`).disabled = false;
});

submitBtn.addEventListener("click", () => {
  document.querySelector(`#background-video`).style.display = `none`;

  let valueOfText = textEl.value;
  player.name = valueOfText;

  console.log(valueOfText);
  playerEl.textContent = toCapital(player.name) + `: $` + player.chips;
  alert(`${toCapital(player.name)} you have $${player.chips} in your account!`);

  textEl.value = " ";

  function styleChanger(element) {
    element.style.display = `block`;
  }

  styleChanger(messageEl);
  styleChanger(cardsEl);
  styleChanger(sumEl);

  startGame.style.display = `inline-block`;
  newCard.style.display = `inline-block`;
  newGame.style.display = `inline-block`;

  inputYourName.style.display = `none`;
  submitBtn.style.display = `none`;
  textEl.style.display = `none`;

  welcomeEl.textContent = `Welcome back, ${toCapital(player.name)}!`;
});

console.log(playerEl);
console.log(player.sayHello());

let start = function () {
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    document.body.style.backgroundColor = `red`;
    welcomeEl.textContent = `You are a winner ${toCapital(player.name)}!`;
    document.querySelector(`#newcard-btn`).disabled = true;
    document.querySelector(`#start-btn`).disabled = true;
  } else {
    message = "You're out of the game!";
    document.body.style.backgroundColor = `black`;
    isAlive = false;
    document.querySelector(`#newcard-btn`).disabled = true;
    document.querySelector(`#start-btn`).disabled = true;
  }

  sumEl.textContent += ` ${sum}`;
  messageEl.textContent = message;

  // used for loop for cards array
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]} `;
    console.log(cards[i]);
  }
};

let newGameStarter = function () {
  cardsEl.textContent = `Cards:`;
  sumEl.textContent = `Sum:`;
  firstCard = "";
  secondCard = "";
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    document.body.style.backgroundColor = `red`;
    welcomeEl.textContent = `You are a winner ${toCapital(player.name)}!`;
    document.querySelector(`#newcard-btn`).disabled = true;
    document.querySelector(`#start-btn`).disabled = true;
  } else {
    message = "You're out of the game!";
    document.body.style.backgroundColor = `black`;
    isAlive = false;
    document.querySelector(`#newcard-btn`).disabled = true;
    document.querySelector(`#start-btn`).disabled = true;
  }

  sumEl.textContent += ` ${sum}`;
  messageEl.textContent = message;

  // used for loop for cards array
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]} `;

    console.log(cards[i]);
  }
};

startGame.addEventListener("click", () => {
  isAlive = true;
  start();
});

newCard.addEventListener("click", () => {
  let card = getRandomNumber();
  cards.push(card);
  let text = (sumEl.textContent = sum + card);
  let number = parseInt(text);
  console.log(number);

  console.log(typeof number);
  console.log(typeof cardsEl);
  cardsEl.textContent += ` ${card}`;

  if (number <= 20) {
    messageEl.textContent = "Do you want to draw a new card?";
  } else if (number === 21) {
    messageEl.textContent = "Wohoo! You've got Blackjack!";
    document.body.style.backgroundColor = `red`;
    welcomeEl.textContent = `You are a winner, ${toCapital(player.name)}!`;
    welcomeEl.style.fontSize = `80px`;
    hasBlackJack = true;
    document.querySelector(`#newcard-btn`).disabled = true;
    document.querySelector(`#start-btn`).disabled = true;

    //alert(`${player.name} you won additional $${player.chips} !`);
  } else {
    messageEl.textContent = "You're out of the game!";
    document.body.style.backgroundColor = `black`;
    welcomeEl.textContent = `Game over, ${toCapital(player.name)}!`;
    playerEl.textContent = toCapital(player.name) + `: -$` + player.chips;
    document.querySelector(`#newcard-btn`).disabled = true;
    document.querySelector(`#start-btn`).disabled = true;

    //alert(`${player.name} you lost all $${player.chips}!`);
    isAlive = false;
  }
});

newGame.addEventListener(`click`, () => {
  document.body.style.backgroundColor = `#016f32`;
  welcomeEl.textContent = `New game has started, ${toCapital(player.name)}!`;
  messageEl.textContent = `Want to play a round?`;
  document.querySelector(`#newcard-btn`).disabled = false;
  document.querySelector(`#start-btn`).disabled = false;
  playerEl.textContent = toCapital(player.name) + `: $` + player.chips;
  newGameStarter();
});
