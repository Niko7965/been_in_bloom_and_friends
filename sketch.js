
var leaf_seq;

function setup() {
  createCanvas(windowWidth, windowHeight);

  leaf_seq = [];
  for(let i = 0; i <= 100; i++){
    leaf_seq.push(new Leaf(i*100,0));
  }

}

function draw() {
  background(0);
  ellipse(mouseX, mouseY, 80, 80);

  for(let i = 0; i <= 100; i++){
    let leaf = leaf_seq[i];
    ellipse(leaf.x,leaf.y,10,10)
    leaf.move()
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function rand_int(max){
  return Math.floor(Math.random() * max)
}


class Leaf {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move(){
    this.y++;
  }

  draw(){
    
  }
}


