
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);
  noFill()
  stroke(255)

  /*for (let i = 0; i < 10; i = i + 1) {
    //console.log(i);
    let posX=i*200;
    rect(posX, 0 * 200, 180, 180);
  }
    */

  


 zeichneZeile(0);
 zeichneZeile(1);
 zeichneZeile(2);
 zeichneZeile(3);
 zeichneZeile(4);
 zeichneZeile(5);
 zeichneZeile(6);
 zeichneZeile(7);
 zeichneZeile(8);
 zeichneZeile(9);
  

  noLoop();
}

function zeichneZeile(j){
  let anzahl=random(2,5);
  rectMode(CENTER)
  for (let i = 0; i < 10; i = i + 1) {
    let skaliere=1;
    for(let m=0;m<anzahl;m++){
      let verschiebungX=random(-5,5)
      let verschiebungY=random(-5,5)
      rect(i * 200+verschiebungX, j * 200+verschiebungY, 180*skaliere, 180*skaliere);
      let skalierfaktor=random(1.2, 1.8);
      skaliere=skaliere/skalierfaktor;
    }
    
  }
}