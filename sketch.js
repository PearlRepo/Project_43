var title,pic, bg,bg2,form,system,code,security, clue;
var ryt, wrg, song;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.png");
  bg2 = loadImage("treasure.jpg");
  pic= loadImage("logo.png");
  song= loadSound("song.mp3");
  ryt= loadSound("correct.mp3");
  wrg= loadSound("wrong.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  song.loop();
  song.setVolume(0.2);
  title= createSprite(width/2, 120)
  title.addImage(pic);
  title.scale=0.6;

  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();

  this.msg = createElement('h2');

  var message = "Score: "+score;
  this.msg.html(message);
  this.msg.position(width/2-600,50);
  this.msg.class("Egreeting");

  if(score === 3) {
    clear();
    clearClue();
    background(bg2);
    swal({
      title: `VICTORY`,
      text: "You found the tressure!",
      imageUrl: "https://www.kindpng.com/picc/m/87-873423_treasure-pirate-treasurechest-chest-gold-treasure-chest-pirate.png",
      imageSize: "300x300",
      confirmButtonText: "OK"
    });
  }

  drawSprites()
}