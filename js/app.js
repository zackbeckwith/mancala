/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let win, turn, winner, p1store, p2store
let p2side = []
let p1side = [] 
/*------------------------ Cached Element References ------------------------*/
const pitElements = document.querySelectorAll('.pit')
const p2Store = document.querySelector('#p2Store')
const p1Store = document.querySelector('#p1Store')
const howToButton = document.querySelector('#howToButton')
const resetButton = document.querySelector('#resetButton')
/*----------------------------- Event Listeners -----------------------------*/
pitElements.forEach(function(pit){pit.addEventListener("click",handleClick)})
pitElements.forEach(function(pit){pit.addEventListener("mouseover",handleHover)})

p1Store.addEventListener("mouseover",handleHover)
p2Store.addEventListener("mouseover",handleHover)

howToButton.addEventListener("click",callHowTo)
resetButton.addEventListener("click",gameReset)
/*-------------------------------- Functions --------------------------------*/






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