let angle = 0;
let obj1;
let obj2;

let wallTexture;
let floorTexture;
let ceilingTexture;

let camAngle = 0;
let lastMouseX = 0;

async function preload() {
  try {
    obj1 = await loadModel('star_girl.obj');
    obj2 = await loadModel('test.obj');
    wallTexture = loadImage('wall.jpg');
    floorTexture = loadImage('wood.jpg');
    ceilingTexture = loadImage('ceiling.jpg');
    console.log("Models loaded successfully");
  } catch (err) {
    console.error("Error loading model:", err);
  }

  //wallTexture = loadModel('wall.jpg');
}

function setup() {
  createCanvas(1900, 1080, WEBGL);
  pixelDensity(1);
}



function draw() {
  // Set camera position
  let camX = sin(camAngle)*1000;
  let camZ = cos(camAngle)*1000;
  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);

  // Setting the vector values for the directional light
  let dx = 500;
  let dy = 500;
  let dz = 250;

  depthTest();

  // Creating the ambient light  
  ambientLight(64, 64, 64);

  lights();

  // Create spotlight
  spotLight(255, 255, 255, 0, 0, 0, 0, 0, -1, PI / 2,50);
  pointLight(255, 0, 255, 0, 0, 0);

  // Creating the directional light 
  // by using the given vector 
  //directionalLight(255, 255, 255, dx, dy, dz);

  shininess(32);
  specularColor(255, 255, 255);
  specularMaterial(48, 48, 48);

  //background(255, 255, 255);
  ambientMaterial(32, 32, 32);

  // Draw rectangle (rectangular prism)
  textureMode(NORMAL);

  beginShape(QUADS);

  //depthTest(DISABLE_DEPTH_TEST);
  texture(ceilingTexture);
  vertex(-1500, -250, 1500, 0, 0);
  vertex(1500, -250, 1500, 1, 0);
  vertex(1500, 250, 1500, 1, 1);
  vertex(-1500, 250, 1500, 0, 1);

  texture(ceilingTexture);
  vertex(-1500, -250, -1500, 0, 0);
  vertex(-1500, 250, -1500, 0, 1);
  vertex(1500, 250, -1500, 1, 1);
  vertex(1500, -250, -1500, 1, 0);

  texture(ceilingTexture);
  vertex(-1500, -250, 1500, 0, 0);
  vertex(-1500, 250, 1500, 0, 1);
  vertex(-1500, 250, -1500, 1, 1);
  vertex(-1500, -250, -1500, 1, 0);

  texture(ceilingTexture);
  vertex(1500, -250, 1500, 0, 0);
  vertex(1500, -250, -1500, 1, 0);
  vertex(1500, 250, -1500, 1, 1);
  vertex(1500, 250, 1500, 0, 1);

  endShape();

  beginShape(QUADS);

  //depthTest(DISABLE_DEPTH_TEST);
  // Top face
  texture(floorTexture);
  vertex(-1500, 250, 1500, 0, 0);
  vertex(1500, 250, 1500, 1, 0);
  vertex(1500, 250, -1500, 1, 1);
  vertex(-1500, 250, -1500, 0, 1);

  endShape();

  beginShape(QUADS);

  //depthTest(DISABLE_DEPTH_TEST);
  // Bottom face
  texture(ceilingTexture);
  vertex(-1500, -250, 1500, 0, 0);
  vertex(-1500, -250, -1500, 0, 1);
  vertex(1500, -250, -1500, 1, 1);
  vertex(1500, -250, 1500, 1, 0);

  endShape();
  //pop();

  // Position models inside rectangle
  //push(); // Save current transformation state
  //translate(0, 0, 0); // Move to left side of rectangle
  //scale(1); // Scale down model 1
  //noStroke();
  //model(obj1);
  //pop(); // Restore previous transformation state

  push(); // Save current transformation state


  //depthTest(DISABLE_DEPTH_TEST);

  translate(0, 0, -1000); // Move to right side of rectangle
  rotateX(135);
  scale(150); // Scale down model 2
  noStroke();
  model(obj2);
  pop(); // Restore previous transformation state

  
}

function mousePressed() {
  lastMouseX = mouseX;
}

function mouseDragged() {
  let deltaX = mouseX - lastMouseX;
  camAngle += deltaX * 0.01;
  lastMouseX = mouseX;
}
