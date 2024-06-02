let angle = 0;
let obj;

function preload(){
  obj = loadModel('star_girl.obj');
}

function setup() {
  createCanvas(500, 500, WEBGL);
}

function draw() {

  // Setting the vector values  
  // or the direction of light 
  let dx = 300; 
  let dy = 200; 
  let dz = -500; 
  let v = createVector(dx, dy, dz); 

  // Creating the ambient light  
  ambientLight(0, 0,255); 
    
  // Creating the directional light 
  // by using the given vector 
  directionalLight(255, 0, 0, v); 
    
  shininess(255); 
  specularColor(255); 
  specularMaterial(255); 

  background(255);
  ambientMaterial(128,128,128);
  translate(0,100);

  // given points from the given directions 
  pointLight(255, 255, 255, 0, -50, 0); 
  pointLight(255, 255, 255, 200,200,30); 

  rotateX(20);
  rotateZ(angle);
  
 
  // box(100);
  noStroke();
  model(obj);
  angle += 0.02;
}
