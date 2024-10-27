'use strict'

function onBallClick(elCell, madDiameter) {
  const ranIncrease = getRandomInt(20, 60)
  var size = +(elCell.innerText) + ranIncrease 

  if (size > madDiameter) size = 100

  elCell.style.width = `${size}px`
  elCell.style.height = `${size}px`
  elCell.style.backgroundColor = getRandomColor()
  elCell.innerText = size
}

function swapBalls() {
  const ball1 = document.querySelector('.ball-1')
  const ball2 = document.querySelector('.ball-2')
  
  const tempColor = ball1.style.backgroundColor
  const tempSize = ball1.innerText
  
  ball1.style.backgroundColor = ball2.style.backgroundColor
  ball1.innerText = ball2.innerText
  ball1.style.width = ball2.style.width
  ball1.style.height = ball2.style.height
  
  ball2.style.backgroundColor = tempColor
  ball2.innerText = tempSize
  ball2.style.width = `${tempSize}px`
  ball2.style.height = `${tempSize}px`
}

function reduceBalls() {
  const ball1 = document.querySelector('.ball-1')
  const ball2 = document.querySelector('.ball-2')

  const reduction = getRandomInt(20, 60)

  var size1 = Math.max(100, +(ball1.innerText) - reduction)
  ball1.innerText = size1
  ball1.style.width = `${size1}px`
  ball1.style.height = `${size1}px`

  var size2 = Math.max(100, +(ball2.innerText) - reduction)
  ball2.innerText = size2
  ball2.style.width = `${size2}px`
  ball2.style.height = `${size2}px`
}