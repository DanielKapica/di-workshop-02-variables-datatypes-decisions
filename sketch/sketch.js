var position = 100
var name = "Daniel"
var moving = true
var direction = true
var count = 0
function setup() {
    createCanvas(400, 200)
  }

  function draw() {
    background(100)
    text('My name is ' + name, 10, 30)
    text(moving, 200, 30)
    text(moving, 200, 100)
    text(count, 200, 150)
    if (position > 400){
        direction = false
        count++
    }
    if (position < 0){
        direction = true
        count++
    }
    if (moving) {
        if (direction){
    position = position + 10 }
    else{position = position - 10}
    }
    rect(position, 0, 10, 10)
    console.log("the position is " + position)
  }
  function mousePressed() {
    moving = !moving
  }
  