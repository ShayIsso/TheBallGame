'use strict'
var ballSize = 100

function onBallClick(elCell, madDiameter) {
  const ranIncrease = getRandomInt(20, 60)
  ballSize += ranIncrease

  if (ballSize > madDiameter) ballSize = 100

  elCell.style.width = `${ballSize}px`
  elCell.style.height = `${ballSize}px`
  elCell.style.backgroundColor = getRandomColor()
  elCell.innerText = ballSize
}