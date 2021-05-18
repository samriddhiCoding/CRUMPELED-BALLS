class Dustbin{
    constructur (x,y,width,height){
    var options={
        isStatic:true,
       
    }
     this.x=x;
     this.y=y;
     this.width=width;
     this.height=height;
     this.body=Bodies.rectangle(x,y,width,height,options);
     World.add(world,this.body)
    }
     display(){
      var dusbinPos=this.body.position;
     
      rectMode(CENTER);
      fill ("blue");
      rect(dusbinPos.x,dusbinPos.y,this.width,this.height);
      
     }
    }