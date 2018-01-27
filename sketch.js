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
    createCanvas(1000,800);
     frameRate(10);
 
        for(let i = 0; i < numCircles; i++) {
        circles[i] = new Circle( i*3-100,-100,size);
       
    }


// setInterval(initCircles,3000);


}

function draw() {
  
    background(random(130));
  
    scale(14);
    translate(50,-200);
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
    this.color = [random(255),0,random(0),random(200,255)];
    
    this.display = function() {
        strokeWeight(1);
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size); 
    }
    
    this.update = function(osc, scroll) {
//        console.log(mult);
        // console.log(this.y);
         // this.x = this.x+0.1;
        let phi = 0.6 * PI * sin(3 * angle);

       let sizeOsc = map(tan(angle/2)*2*sin(osc*3),-1,1,0,random(180));
        this.size = sizeOsc/100;
        this.y = this.y/8+osc/2+100+cos(phi)*sin(2*angle);
        this.x = this.y/8*this.size/10 * cos(phi) * cos(2*angle);
  
    }

    
}



function initCircles() {
        for(let i = 0; i < numCircles; i++) {
        circles = new Circle( i*10 +200 + i*random(20),0,random(size));
    }
}

