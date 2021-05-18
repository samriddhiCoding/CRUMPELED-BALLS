class Ground{
    constructur (x,y,width,height){
    var options={
        isStatic:true,
       
    }
     push()
     this.width=width;
     this.height=height;
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body)
    }
     display(){
      var grPos=this.body.position;
     
      rectMode(CENTER);
      fill ("blue");
      rect(grPos.x,grPos.y,this.width,this.height);
      
     }
    }