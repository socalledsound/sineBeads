let x = 400;
let y = 400;
let size=30;
let opacity =255;
let angle = 0;
let angle2 = 0;
let inc = 0.05;
let inc2 = 0.1;
let circles = [];
let numCircles = 600;
let osc =1;
let scaler = 14;
// let scroll=0.1;

function setup() {
    createCanvas(1000,800);
     frameRate(10);
 
        for(let i = 0; i < numCircles; i++) {
        circles[i] = new Circle( i*3-100,-100,size);
       
    }


 // setInterval(randomAngle,3000);
 // setInterval(randomScale,300);


}

function draw() {
  
    // background(random(90,200),0,random(90));
  background(random(90,200));
    let scaleOsc = map(sin(angle2),-1,1,3,15);

    scale(scaleOsc);
    translate(50,-200);
    rotate(angle/100000);
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
    
    angle2+=inc2;
   // scroll+=0.01; 
    

    
 
   
}



let Circle = function(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = [random(255),0,random(0),random(160,180)];
    
    this.display = function() {
        strokeWeight(random(0,3));
        //noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.size); 
    }
    
    this.update = function(osc, scroll) {
//        console.log(mult);
        // console.log(this.y);
         // this.x = this.x+0.1;
        let phi = 0.6 * PI * sin(3 * angle);
let scaleOscInner = map(sin(angle2),-1,1,3,8);
       let sizeOsc = map(tan(angle/2)*2*sin(osc*3),-1,1,0,random(100)*scaleOscInner);
        this.size = sizeOsc/100;
        this.y = this.y/8+osc/2+100+cos(phi)*sin(2*angle);
        this.x = this.y/8*this.size/10 * cos(phi) * cos(2*angle);
  
    }

    
}



function randomAngle() {
    angle = random(10000);
}

function randomScale() {
    scaler = random(3,16);
}

function initCircles() {
        for(let i = 0; i < numCircles; i++) {
        circles[i] = new Circle( i*3-100,-100,size);
    }
}

