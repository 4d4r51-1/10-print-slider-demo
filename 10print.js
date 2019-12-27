var cols = 20;
var rows = 20;
let slider
  var still = 0
function setup() {

  createCanvas(800,800)

  slider = createSlider(0,100,10,1)
  slider.position(10,900)
  slider.style("width", "80px")

}

function draw() {

  let val = slider.value();
  let f = val/100
  background(255)


  for (var i = 0; i < cols; i++) {

    for (var j = 0; j < rows; j++) {
      var x  = i * 40;
      var y = j * 40;
  //rect(x,y,40,40)
  var d = random()
  if (d < f){
  line(x,y+40,x+40,y)


  }
  if (d > f) {
    line(x,y,x+40,y+40)
  }

if ( keyIsDown(32)) {
  noLoop()

}



  }
  }


}
