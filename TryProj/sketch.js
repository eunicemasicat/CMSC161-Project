let angle = 0;
let obj1;
let obj2;

let wallTexture;
let ceilingTexture;

let camAngle = 0;
let lastMouseX = 0;

async function preload() {
  try {
    obj1 = await loadModel('star_girl.obj');
    obj2 = await loadModel('test.obj');
    wallTexture = loadImage('wall.jpg');
    ceilingTexture = loadImage('wood.jpg');
    console.log("Models loaded successfully");
  } catch (err) {
    console.error("Error loading model:", err);
  }

  //wallTexture = loadModel('wall.jpg');
}

function setup() {
  createCanvas(1900, 1080, WEBGL);
}



function draw() {
  // Set camera position
  let camX = sin(camAngle);
  let camZ = cos(camAngle);
  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);

  // Setting the vector values for the directional light
  let dx = 500;
  let dy = 500;
  let dz = 250;

  // Creating the ambient light  
  ambientLight(64, 64, 64);

  lights();

  // Create spotlight
  spotLight(128, 128, 128, -1500, 500, 1500, 1, 0, 0, PI / 4, 5);

  // Creating the directional light 
  // by using the given vector 
  //directionalLight(255, 255, 255, dx, dy, dz);

  shininess(16);
  specularColor(255, 255, 255);
  specularMaterial(255, 255, 255);

  background(255, 255, 255);
  ambientMaterial(128, 128, 128);

  // Draw rectangle (rectangular prism)
  //push();
  textureMode(NORMAL);

  //fill(255,255,255); // Rectangle color
  beginShape(QUADS);

  texture(wallTexture);
  vertex(-1500, -250, 1500, 0, 0);
  vertex(1500, -250, 1500, 1, 0);
  vertex(1500, 250, 1500, 1, 1);
  vertex(-1500, 250, 1500, 0, 1);

  // Back face
  texture(wallTexture);
  vertex(-1500, -250, -1500, 0, 0);
  vertex(-1500, 250, -1500, 0, 1);
  vertex(1500, 250, -1500, 1, 1);
  vertex(1500, -250, -1500, 1, 0);

  // Left face
  texture(wallTexture);
  vertex(-1500, -250, 1500, 0, 0);
  vertex(-1500, 250, 1500, 0, 1);
  vertex(-1500, 250, -1500, 1, 1);
  vertex(-1500, -250, -1500, 1, 0);

  // Right face
  texture(wallTexture);
  vertex(1500, -250, 1500, 0, 0);
  vertex(1500, -250, -1500, 1, 0);
  vertex(1500, 250, -1500, 1, 1);
  vertex(1500, 250, 1500, 0, 1);

  endShape();

  beginShape(QUADS);

  // Top face
  texture(ceilingTexture);
  vertex(-1500, 250, 1500, 0, 0);
  vertex(1500, 250, 1500, 1, 0);
  vertex(1500, 250, -1500, 1, 1);
  vertex(-1500, 250, -1500, 0, 1);

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
  translate(1500, 0, 0); // Move to right side of rectangle
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
