/*-------------------------------- Constants --------------------------------*/
const pop = new Audio('./sounds/pop.wav')

/*-------------------------------- Variables --------------------------------*/
let win, turn, winner, p1Store, p2Store, marbles, currentPlace, marblesInCurrentPlace, start
let board = []
/*------------------------ Cached Element References ------------------------*/
const pitElements = document.querySelectorAll('.pit')
const p2StoreEl = document.querySelector('#p2Store')
const p1StoreEl = document.querySelector('#p1Store')
const howToButton = document.querySelector('#howToButton')
const resetButton = document.querySelector('#resetButton')
const p1Icon = document.querySelector('#p1icon') 
const p2Icon = document.querySelector('#p2icon')
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
/*----------------------------- Event Listeners -----------------------------*/
pitElements.forEach(function(pit){pit.addEventListener("click",handleClick)})
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
  render();
}

function render() {
  pitElements.forEach(function(pit) {
    let pitElementIndex = pit.id.slice(3)
    pit.textContent = board[pitElementIndex]
    pit.setAttribute("data-bs-original-title", pit.textContent)
  })
}

function handleClick(evt) { //moves marbles 
  start = +evt.target.id.slice(3)

  if (start === 6 || start == 13) {
    return
  }
  if (start > 5 && turn === 1) {
    return
  }
  if (start < 6 && turn === 2) {
    return
  }

  if (board[start] === 0) {
    return
  }

  marbles = board[start]
  board[start] = 0
  
  for (let i = 1; i <= marbles; i++){
    pop.play()
    marblesInCurrentPlace=board[start+i]
    if (turn === 2 && start+i === 6) {
      start++
    }
    if (turn === 1 && start+i === 13) {
      start++
    }
    if ((start + i) > 13) {
      start = 0 - i
    }
    board[start+i]++
    currentPlace = start+i
  }
  if (marblesInCurrentPlace === 0) {
    steal();
  }
  doubleTurn();
  turnChange();
  render();
  winnerCheck();
}

function doubleTurn() {
  if ((turn === 1) && (currentPlace) === 6) {
    turn++
  }
  if ((turn === 2) && (currentPlace) === 13) {
    turn--
  }
}

function steal() {
  if (turn === 1) {
    if (currentPlace === 0 && board[12] > 0) {
      board[6] += (board[12]+board[0])
      board[12] = 0
      board[0] = 0
    }else if (currentPlace === 1 && board[11] > 0) {
      board[6] += (board[11]+board[1])
      board[11] = 0
      board[1] = 0
    }else if (currentPlace === 2 && board[10] > 0) {
      board[6] += (board[10]+board[2])
      board[10] = 0
      board[2] = 0
    }else if (currentPlace === 3 && board[9] > 0) {
      board[6] += (board[9]+board[3])
      board[9] = 0
      board[3] = 0
    }else if (currentPlace === 4 && board[8] > 0) {
      board[6] += (board[8]+board[4])
      board[8] = 0
      board[4] = 0
    }else if (currentPlace === 5 && board[7] > 0) {
      board[6] += (board[7]+board[5])
      board[7] = 0
      board[5] = 0
    }
  }
  if (turn === 2) {
    if (currentPlace === 12 && board[0] > 0) {
      board[13] += (board[12]+board[0])
      board[12] = 0
      board[0] = 0
    }else if (currentPlace === 11 && board[1] > 0) {
      board[13] += (board[11]+board[1])
      board[11] = 0
      board[1] = 0
    }else if (currentPlace === 10 && board[2] > 0) {
      board[13] += (board[10]+board[2])
      board[10] = 0
      board[2] = 0
    }else if (currentPlace === 9 && board[3] > 0) {
      board[13] += (board[9]+board[3])
      board[9] = 0
      board[3] = 0
    }else if (currentPlace === 8 && board[4] > 0) {
      board[13] += (board[8]+board[4])
      board[8] = 0
      board[4] = 0
    }else if (currentPlace === 7 && board[5] > 0) {
      board[13] += (board[7]+board[5])
      board[7] = 0
      board[5] = 0
    }
  }
}

function turnChange() {
  if (turn === 1){
    turn++
    p2Icon.style.fontWeight = "bold"
    p1Icon.style.fontWeight = "normal"
    p2Icon.classList.add('animate__animated', 'animate__headShake')
    p1Icon.classList.remove('animate__animated', 'animate__headShake')
  }else {
    turn--
    p1Icon.style.fontWeight = "bold"
    p2Icon.style.fontWeight = "normal"
    p1Icon.classList.add('animate__animated', 'animate__headShake')
    p2Icon.classList.remove('animate__animated', 'animate__headShake')
  }
}

function winnerCheck(){
  let p1Side = board.slice(0,6).reduce(function(a, b){
    return a + b
  }, 0)
  let p2Side = board.slice(7,13).reduce(function(a, b){
    return a + b
  }, 0)
  if (p1Side === 0 || p2Side === 0) {
    p1Side += board[6]
    p2Side += board[13]
    board.splice(0,5,0,0,0,0,0,0)
    board.splice(7,5,0,0,0,0,0,0)
    board[6] = p1Side
    board[13] = p2Side
    render()
    resetButton.textContent = "Replay?"
    winner = board[6] > board[13] ? 1 : 2
    if (board[6] === board[13]) {
      winner = 0
      alert(`it's a tie!`)
      return
    }

    alert(`the winner is Player ${winner}!`)
  }
}

function gameReset() {
  init()
  resetButton.textContent = "Reset"
}
