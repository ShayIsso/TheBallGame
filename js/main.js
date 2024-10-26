'use strict'
var ballSize = 100

function onBallClick(elCell) {
  ballSize += 50

  if (ballSize > 400) ballSize = 100

  elCell.style.width = `${ballSize}px`
  elCell.style.height = `${ballSize}px`
  elCell.innerText = ballSize
}