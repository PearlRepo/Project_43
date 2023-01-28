class Security {

    constructor(){

        this.access1 = createInput("").attribute("placeholder", "Decode 1");
        this.access1.position(width/2-500,350);
        this.access1.class('input');  

        this.button1 = createButton('CHECK');
        this.button1.position(width/2-450,450);
        this.button1.class('btn');    

        this.access2 = createInput("").attribute("placeholder", "Decode 2");
        this.access2.position(width/2-50,350);
        this.access2.class('input');  

        this.button2 = createButton('CHECK');
        this.button2.position(width/2,450);
        this.button2.class('btn');    

        this.access3 = createInput("").attribute("placeholder", "Decode 3");
        this.access3.position(width/2+400,350);
        this.access3.class('input');  

         this.button3 = createButton('CHECK');
         this.button3.position(width/2+450,450);
         this.button3.class('btn');    
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
                ryt.play();
            }else{wrg.play()}
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                ryt.play();
            }else{wrg.play()}
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
          
                 this.button3.hide();
                 this.access3.hide();
                
                score++;
                ryt.play();
            }else{wrg.play()}
        });
    }
}