'use strict'
var ballSize = 100

function onBallClick(elCell) {
  const ranIncrease = getRandomInt(20, 60)
  ballSize += ranIncrease
  
  if (ballSize > 400) ballSize = 100

  elCell.style.width = `${ballSize}px`
  elCell.style.height = `${ballSize}px`
  elCell.innerText = ballSize
}