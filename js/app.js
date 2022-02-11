/*-------------------------------- Constants --------------------------------*/



/*-------------------------------- Variables --------------------------------*/
let win, turn, winner, p1Store, p2Store, marbles
let board = []
/*------------------------ Cached Element References ------------------------*/
const pitElements = document.querySelectorAll('.pit')

const p2StoreEl = document.querySelector('#p2Store')
const p1StoreEl = document.querySelector('#p1Store')
const howToButton = document.querySelector('#howToButton')
const resetButton = document.querySelector('#resetButton')
/*----------------------------- Event Listeners -----------------------------*/
pitElements.forEach(function(pit){pit.addEventListener("click",handleClick)})
pitElements.forEach(function(pit){pit.addEventListener("mouseover",handleHover)})

// p1StoreEl.addEventListener("mouseover",handleHover)
// p2StoreEl.addEventListener("mouseover",handleHover)

howToButton.addEventListener("click",callHowTo)
resetButton.addEventListener("click",gameReset)
/*-------------------------------- Functions --------------------------------*/
init();

function init() {
  board = [4,4,4,4,4,4,0,
           4,4,4,4,4,4,0]
  p1Store = board[6]
  p2Store = board[13]
  turn = 1
  winner = null
  // render();
}

function render() {
  //when render is called, it checks the state of every pit on the board. pit should = number of marbles in it. at start of game this is 4. if player clicks on a pit it empties that pit and adds to however many pits ahead of it that there were marbles in that pit
}

function handleClick(evt) {
  marbles = +evt.target.innerHTML
  let start = +evt.target.id.slice(3)
  evt.target.innerHTML = "0"
  for (let i = marbles; i > 0; i--){
    board[start+i]++
    if((start+i) > 13){
      start = 0
    }
    }
    console.log(board)
  }

function handleHover() {
}

function callHowTo() {
  console.log("help")  
}

function gameReset() {
  console.log("bye")  
}
