var build = 200
var sun = ("#FFE600")
var boat = 225
var sail1 = ("#FF006F")
var sail2 = ("#DEA5F1")
var sail3 = ("#49D3B4")
var wind = ("#C9E7F5")
var markers = ("#FAFE01")

function setup() {
  createCanvas(1000, 1000)
}

  var img
  var wheel1 = 75
  var wheel2 = 225
  var body = 75
  var speedX = 8
function draw() {
  clear()
  background(30, 180, 230)
  fill(100)
  rect(0, 500, 1000, 200)
  noFill()

  //cars


    fill(255, 255, 255)
    rect(body, 515, 150, 65, 5)
    c = color(0, 150, 250)
    fill(c)
    ellipse(wheel1, 565, 50, 50)
    ellipse(wheel2, 565, 50, 50)
    wheel1 = wheel1 + speedX
    wheel2 = wheel2 + speedX
    body = body + speedX
    if (wheel2 > windowWidth) {
      (speedX = speedX * -1)
    }
    if (wheel1 < 0) {
      speedX = speedX * -1
    }

fill(205, 25, 255)
    rect(body, 610, 150, 65, 5)
    c = color(90)
    fill(c)
    ellipse(wheel1, 660, 50, 50)
    ellipse(wheel2, 660, 50, 50)
    wheel1 = wheel1 + speedX
    wheel2 = wheel2 + speedX
    body = body + speedX
    if (wheel2 > windowWidth) {
      (speedX = speedX * -1)
    }
    if (wheel1 < 0) {
      speedX = speedX * -1
    }


    //road markers(from left to right)
    fill(markers)
    rect(20, 590, 40, 15)
    rect(80, 590, 40, 15)
    rect(140, 590, 40, 15)
    rect(200, 590, 40, 15)
    rect(260, 590, 40, 15)
    rect(320, 590, 40, 15)
    rect(380, 590, 40, 15)
    rect(440, 590, 40, 15)
    rect(500, 590, 40, 15)
    rect(560, 590, 40, 15)
    rect(620, 590, 40, 15)
    rect(680, 590, 40, 15)
    rect(740, 590, 40, 15)
    rect(800, 590, 40, 15)
    rect(860, 590, 40, 15)
    rect(920, 590, 40, 15)

    //leftskyscraper
    fill(build)
    rect(50, 500, 175, -300)
    //middle left skyscraper
    rect(300, 500, 175, -400)
    //middle right skyscraper
    rect(550, 500, 175, -425)
    //right skyscraper
    rect(775, 500, 175, -325)

    //windows
    //building 1
    fill(wind)
    ellipse(70, 245, 20, 20)
    ellipse(70, 275, 20, 20)
    ellipse(70, 305, 20, 20)
    ellipse(70, 335, 20, 20)
    ellipse(70, 365, 20, 20)
    ellipse(70, 395, 20, 20)
    ellipse(70, 425, 20, 20)
    ellipse(70, 455, 20, 20)
    ellipse(100, 455, 20, 20)
    ellipse(100, 425, 20, 20)
    ellipse(100, 395, 20, 20)
    ellipse(100, 365, 20, 20)
    ellipse(100, 335, 20, 20)
    ellipse(100, 305, 20, 20)
    ellipse(100, 275, 20, 20)
    ellipse(100, 245, 20, 20)
    ellipse(130, 245, 20, 20)
    ellipse(130, 275, 20, 20)
    ellipse(130, 305, 20, 20)
    ellipse(130, 335, 20, 20)
    ellipse(130, 365, 20, 20)
    ellipse(130, 395, 20, 20)
    ellipse(130, 425, 20, 20)
    ellipse(130, 455, 20, 20)
    ellipse(160, 245, 20, 20)
    ellipse(160, 275, 20, 20)
    ellipse(160, 305, 20, 20)
    ellipse(160, 335, 20, 20)
    ellipse(160, 365, 20, 20)
    ellipse(160, 395, 20, 20)
    ellipse(160, 425, 20, 20)
    ellipse(160, 455, 20, 20)
    ellipse(190, 245, 20, 20)
    ellipse(190, 275, 20, 20)
    ellipse(190, 305, 20, 20)
    ellipse(190, 335, 20, 20)
    ellipse(190, 365, 20, 20)
    ellipse(190, 395, 20, 20)
    ellipse(190, 425, 20, 20)
    ellipse(190, 455, 20, 20)

    //building 2
    ellipse(320, 145, 20)
    ellipse(320, 177, 20)
    ellipse(320, 208, 20)
    ellipse(320, 240, 20)
    ellipse(320, 274, 20)
    ellipse(320, 305, 20)
    ellipse(320, 335, 20)
    ellipse(320, 367, 20)
    ellipse(320, 400, 20)
    ellipse(320, 430, 20)
    ellipse(320, 460, 20)
    ellipse(353, 145, 20)
    ellipse(353, 177, 20)
    ellipse(353, 209, 20)
    ellipse(353, 240, 20)
    ellipse(353, 274, 20)
    ellipse(353, 305, 20)
    ellipse(353, 335, 20)
    ellipse(353, 367, 20)
    ellipse(353, 400, 20)
    ellipse(353, 430, 20)
    ellipse(353, 460, 20)
    ellipse(385, 145, 20)
    ellipse(385, 177, 20)
    ellipse(385, 209, 20)
    ellipse(385, 240, 20)
    ellipse(385, 274, 20)
    ellipse(385, 305, 20)
    ellipse(385, 335, 20)
    ellipse(385, 367, 20)
    ellipse(385, 400, 20)
    ellipse(385, 430, 20)
    ellipse(385, 460, 20)
    ellipse(415, 145, 20)
    ellipse(415, 177, 20)
    ellipse(415, 209, 20)
    ellipse(415, 240, 20)
    ellipse(415, 274, 20)
    ellipse(415, 305, 20)
    ellipse(415, 335, 20)
    ellipse(415, 367, 20)
    ellipse(415, 400, 20)
    ellipse(415, 430, 20)
    ellipse(415, 460, 20)
    ellipse(445, 145, 20)
    ellipse(445, 177, 20)
    ellipse(445, 209, 20)
    ellipse(445, 240, 20)
    ellipse(445, 274, 20)
    ellipse(445, 305, 20)
    ellipse(445, 335, 20)
    ellipse(445, 367, 20)
    ellipse(445, 400, 20)
    ellipse(445, 430, 20)
    ellipse(445, 460, 20)

    //building 3
    ellipse(570, 100, 20, 20)
    ellipse(570, 130, 20, 20)
    ellipse(570, 160, 20, 20)
    ellipse(570, 190, 20, 20)
    ellipse(570, 220, 20, 20)
    ellipse(570, 250, 20, 20)
    ellipse(570, 280, 20, 20)
    ellipse(570, 310, 20, 20)
    ellipse(570, 340, 20, 20)
    ellipse(570, 370, 20, 20)
    ellipse(570, 400, 20, 20)
    ellipse(570, 430, 20, 20)
    ellipse(570, 460, 20, 20)
    ellipse(600, 100, 20, 20)
    ellipse(600, 130, 20, 20)
    ellipse(600, 160, 20, 20)
    ellipse(600, 190, 20, 20)
    ellipse(600, 220, 20, 20)
    ellipse(600, 250, 20, 20)
    ellipse(600, 280, 20, 20)
    ellipse(600, 310, 20, 20)
    ellipse(600, 340, 20, 20)
    ellipse(600, 370, 20, 20)
    ellipse(600, 400, 20, 20)
    ellipse(600, 430, 20, 20)
    ellipse(600, 460, 20, 20)
    ellipse(630, 100, 20, 20)
    ellipse(630, 130, 20, 20)
    ellipse(630, 160, 20, 20)
    ellipse(630, 190, 20, 20)
    ellipse(630, 220, 20, 20)
    ellipse(630, 250, 20, 20)
    ellipse(630, 280, 20, 20)
    ellipse(630, 310, 20, 20)
    ellipse(630, 340, 20, 20)
    ellipse(630, 370, 20, 20)
    ellipse(630, 400, 20, 20)
    ellipse(630, 430, 20, 20)
    ellipse(630, 430, 20, 20)
    ellipse(630, 460, 20, 20)
    ellipse(660, 100, 20, 20)
    ellipse(660, 130, 20, 20)
    ellipse(660, 160, 20, 20)
    ellipse(660, 190, 20, 20)
    ellipse(660, 220, 20, 20)
    ellipse(660, 250, 20, 20)
    ellipse(660, 280, 20, 20)
    ellipse(660, 310, 20, 20)
    ellipse(660, 340, 20, 20)
    ellipse(660, 370, 20, 20)
    ellipse(660, 400, 20, 20)
    ellipse(660, 430, 20, 20)
    ellipse(660, 460, 20, 20)
    ellipse(690, 100, 20, 20)
    ellipse(690, 130, 20, 20)
    ellipse(690, 130, 20, 20)
    ellipse(690, 160, 20, 20)
    ellipse(690, 190, 20, 20)
    ellipse(690, 220, 20, 20)
    ellipse(690, 250, 20, 20)
    ellipse(690, 280, 20, 20)
    ellipse(690, 310, 20, 20)
    ellipse(690, 340, 20, 20)
    ellipse(690, 370, 20, 20)
    ellipse(690, 400, 20, 20)
    ellipse(690, 430, 20, 20)
    ellipse(690, 460, 20, 20)


    //building 4
    ellipse(800, 200, 20)
    ellipse(800, 230, 20)
    ellipse(800, 260, 20)
    ellipse(800, 293, 20)
    ellipse(800, 325, 20)
    ellipse(800, 355, 20)
    ellipse(800, 385, 20)
    ellipse(800, 415, 20)
    ellipse(800, 445, 20)
    ellipse(800, 475, 20)
    ellipse(830, 200, 20)
    ellipse(830, 230, 20)
    ellipse(830, 260, 20)
    ellipse(830, 293, 20)
    ellipse(830, 325, 20)
    ellipse(830, 355, 20)
    ellipse(830, 385, 20)
    ellipse(830, 415, 20)
    ellipse(830, 445, 20)
    ellipse(830, 475, 20)
    ellipse(860, 200, 20)
    ellipse(860, 230, 20)
    ellipse(860, 260, 20)
    ellipse(860, 293, 20)
    ellipse(860, 325, 20)
    ellipse(860, 355, 20)
    ellipse(860, 385, 20)
    ellipse(860, 415, 20)
    ellipse(860, 445, 20)
    ellipse(860, 475, 20)
    ellipse(890, 200, 20)
    ellipse(890, 230, 20)
    ellipse(890, 260, 20)
    ellipse(890, 293, 20)
    ellipse(890, 325, 20)
    ellipse(890, 355, 20)
    ellipse(890, 385, 20)
    ellipse(890, 415, 20)
    ellipse(890, 445, 20)
    ellipse(890, 475, 20)
    ellipse(920, 200, 20)
    ellipse(920, 230, 20)
    ellipse(920, 260, 20)
    ellipse(920, 293, 20)
    ellipse(920, 325, 20)
    ellipse(920, 355, 20)
    ellipse(920, 385, 20)
    ellipse(920, 415, 20)
    ellipse(920, 445, 20)
    ellipse(920, 475, 20)

    //sun
    fill(sun)
    ellipse(940, 60, 100)
    //wave left
    line(50, 900, 250, 900)
    //wave middle 
    line(350, 850, 550, 850)
    //wave right
    line(650, 950, 860, 950)
    //boat left
    fill(boat)
    ellipse(150, 890, 86, 40)
    line(150, 870, 150, 850)
    fill(sail1)
    triangle(130, 860, 150, 840, 170, 860)
    //boat right
    fill(boat)
    ellipse(750, 940, 86, 40)
    line(750, 920, 750, 900)
    fill(sail2)
    triangle(730, 910, 750, 890, 770, 910)
    //boat middle
    fill(boat)
    ellipse(440, 850, 90, 30)
    fill(sail3)
    triangle(420, 835, 440, 815, 460, 835)
    //windows
  }

  function mousePressed() {
    var d = dist(mouseX, mouseY, 50, 500)
    if (d < 600) {
      console.log("d", d)
      build = 0;
    }
    var e = dist(mouseX, mouseY, 940, 60)
    if (e < 100) {
      sun = 0
    }
    var f = dist(mouseX, mouseY, 150, 890)
    if (f < 500) {
      boat = 0
    }
    var g = dist(mouseX, mouseY, 150, 840)
    if (g < 100) {
      sail1 = 0
    }
    var h = dist(mouseX, mouseY, 750, 940)
    if (h < 100) {
      sail2 = 0
    }
    var i = dist(mouseX, mouseY, 440, 815)
    if (i < 100) {
      sail3 = 0
    }
    var m = dist(mouseX, mouseY, 30, 600)
    if (m < 600) {
      console.log("m", m)
      markers = 0
    }
    var a = dist(mouseX, mouseY, 320, 145)
    if (a < 600) {
      console.log("a", a)
      wind = 0
    }
  }
