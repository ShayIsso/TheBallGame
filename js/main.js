'use strict'
var ballSize = 100

function onBallClick(elCell) {
  ballSize += 50
  elCell.style.width = `${ballSize}px`
  elCell.style.height = `${ballSize}px`
}