let x = 400;
let y = 400;
let size=30;
let opacity =255;
let angle = 0;
let inc = 0.05;
let circles = [];
let numCircles = 600;
let osc =1;
// let scroll=0.1;

function setup() {
    createCanvas(1500,800);
     frameRate(10);
 
        for(let i = 0; i < numCircles; i++) {
        circles[i] = new Circle( i*3-100,-100,size);
       
    }


// setInterval(initCircles,3000);


}

function draw() {
  
    background(random(130));
  
    scale(0.9);
    //translate(500,500);
    rotate(angle/10000);
        for(let i = 0; i < numCircles; i++) {
     
        osc = map(sin(angle),-1,1,0,height);  
          

        circles[i].update(osc);             
        circles[i].display();


        console.log(angle);    
        if (angle < 5000) {
        angle+=inc;    
        }
        else {
            angle = 0;
        }
        
    }
    

   // scroll+=0.01; 
    

    
 
   
}



let Circle = function(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = [random(255),0,random(255),random(255)];
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size); 
    }
    
    this.update = function(osc, scroll) {
//        console.log(mult);
        // console.log(this.y);
         // this.x = this.x+0.1;
       let sizeOsc = map(tan(angle/2)*sin(osc),-1,1,0,100);
        this.size = sizeOsc/10;
        this.y = this.y/8+osc/2+100;
  
    }

    
}



function initCircles() {
        for(let i = 0; i < numCircles; i++) {
        circles = new Circle( i*10 +200 + i*random(20),0,random(size));
    }
}

