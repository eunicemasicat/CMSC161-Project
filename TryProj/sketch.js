let angle = 0;
let obj1;
let obj2;

async function preload(){
  try {
    obj1 = await loadModel('star_girl.obj');
    obj2 = await loadModel('test.obj');
    console.log("Model loaded successfully");
  } catch(err) {
    console.error("Error loading model:", err);
  }
}
function setup() {
  createCanvas(1900, 1080, WEBGL);
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
  translate(0,0,0);
  fill(200);
  box(4000, 1000, 4000);

  // given points from the given directions 
  pointLight(255, 255, 255, 0, -50, 0); 
  pointLight(255, 255, 255, 200,200,30); 

  rotateX(20);
  rotateZ(angle);
  
 
  // Render first model
  push(); // Save current transformation state
  translate(-100, 0, 0); // Move to left side
  scale(1); // Scale down
  noStroke();
  model(obj1);
  pop(); // Restore previous transformation state

  // Render second model
  push(); // Save current transformation state
  translate(100, 0, 0); // Move to right side
  scale(100); // Scale down
  noStroke();
  model(obj2);
  pop(); // Restore previous transformation state
  
  //angle += 0.02;
}
