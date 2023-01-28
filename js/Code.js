const accessCode1 = "VARIABLE";
const accessCode2 = "FUNCTION";
const accessCode3 = "DATABASE";

function clues() {

    this.clue1 = createElement('h2');
    this.clue2 = createElement('h2');
    this.clue3 = createElement('h2');

    var message1 = "R E V B A I L A </br> Hint: Always changing, not constant";
    this.clue1.html(message1);
    this.clue1.position(width/2-600,250);
    this.clue1.class("greeting");

    var message2 = "C U T N I F O N </br> Hint: Performs a particular task";
    this.clue2.html(message2);
    this.clue2.position(width/2-100,250);
    this.clue2.class("greeting");

    var message3 = "A T E D A S B A </br> Hint: Stores all information";
    this.clue3.html(message3);
    this.clue3.position(width/2+350,250);
    this.clue3.class("greeting");


}

function clearClue(){
    this.clue1.hide();
    this.clue2.hide();
    this.clue3.hide();
}