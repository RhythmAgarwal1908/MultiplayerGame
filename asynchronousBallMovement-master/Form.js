class Form{
    constructor(){
this.input = createInput("Name")
this.button = createButton("Play")
this.greeting = createElement('h3')
    }
    display(){
        var title = createElement("h2")
        title.html("Car Racing Game")
        title.position(230,0)
         this.input.position(230,260)
         this.button.position(300,300)
         this.button.mousePressed(()=>{ 
             this.input.hide(); 
             this.button.hide();
             player.name = this.input.value(); 
            playerCount+=1; 
            player.index = playerCount;
            player.update(playerCount); 
            player.updateCount(playerCount); 
            this.greeting.html("Hello " + player.name); 
  this.greeting.position(130,160); 
        }
        );  
     }
     hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide(); 
     }
}