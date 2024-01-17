//Players details
let PlayerName= window.prompt("Enter you name")
let PlayerChips = parseInt(window.prompt("Enter Value of chips 100+"))
/*let player = {
    Name:name,
    Chips:200
}*/

// Declaration Zone
let cards = []// array
let sum = 0
let hasBlackJack = false
let isAlive = false
let Message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

function PlayerEl(){
    return playerEl.textContent = PlayerName + ": $" + PlayerChips
}
PlayerEl()
 

// Start game

function getRandomCard(){
  let randomNumber = Math.floor(Math.random()*13)+1  
  if(randomNumber > 10 ){
    return 10
  }else if (randomNumber === 1){
    return 11
  }
  else{
    return randomNumber
  }
}

function StartGame(){
   
   isAlive = true
   let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard, secondCard]
   sum = firstCard + secondCard
   renderGame()
}
function renderGame(){
    cardEl.textContent = "Cards: " 
    for (i =0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20){
        Message ="Do you want to draw a new card? 🥱"
        
    }
    else if (sum === 21){
        Message = "You have got BlackJack! 😎"
        PlayerChips = PlayerChips+ 100
        PlayerEl()
        hasBlackJack = true
        
    }
    else{
        Message = "You are out of the Game!🤪"
        PlayerChips = PlayerChips - 100
        PlayerEl()
        isAlive = false
        
    }
    messageEl.textContent = Message
    
    
}
function newCard(){
    if (isAlive === true && hasBlackJack === false && PlayerChips >= 100){
        let card = getRandomCard()
        sum +=card
        cards.push(sum)
        renderGame()
    }
}
    
//cash out
