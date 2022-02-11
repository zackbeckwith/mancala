/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let win, turn, winner, p1Store, p2Store
let p2side = []
let p1side = [] 
/*------------------------ Cached Element References ------------------------*/
const pitElements = document.querySelectorAll('.pit')
const p2StoreEl = document.querySelector('#p2Store')
const p1StoreEl = document.querySelector('#p1Store')
const howToButton = document.querySelector('#howToButton')
const resetButton = document.querySelector('#resetButton')
/*----------------------------- Event Listeners -----------------------------*/
pitElements.forEach(function(pit){pit.addEventListener("click",handleClick)})
pitElements.forEach(function(pit){pit.addEventListener("mouseover",handleHover)})

p1StoreEl.addEventListener("mouseover",handleHover)
p2StoreEl.addEventListener("mouseover",handleHover)

howToButton.addEventListener("click",callHowTo)
resetButton.addEventListener("click",gameReset)
/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  p1side = [4,4,4,4,4,4]
  p2side = [4,4,4,4,4,4]
  p1Store = 0
  p2Store = 0
  turn = 1
  winner = null
}




function handleClick() {
  console.log("hi")  
  }
  
function handleHover() {
console.log("yo")  
}

function callHowTo() {
  console.log("help")  
}

function gameReset() {
  console.log("bye")  
}