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
  let camX = sin(camAngle)*900;
  let camZ = cos(camAngle)*900;
  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);

  // Creating the ambient light  
  ambientLight(64, 64, 64);

  lights();

  // Create spotlight
  spotLight(255, 255, 255, 0, 0, 0, 0, 0, -1, PI / 2,50);

  shininess(32);
  specularColor(255, 255, 255);
  specularMaterial(48, 48, 48);
  ambientMaterial(32, 32, 32);

  textureMode(NORMAL);

  beginShape(QUADS);
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
  texture(floorTexture);
  vertex(-1500, 250, 1500, 0, 0);
  vertex(1500, 250, 1500, 1, 0);
  vertex(1500, 250, -1500, 1, 1);
  vertex(-1500, 250, -1500, 0, 1);

  endShape();

  beginShape(QUADS);
  texture(ceilingTexture);
  vertex(-1500, -250, 1500, 0, 0);
  vertex(-1500, -250, -1500, 0, 1);
  vertex(1500, -250, -1500, 1, 1);
  vertex(1500, -250, 1500, 1, 0);
  endShape();

  noLights();

  push();
  translate(0, 0, -1480);
  rotateX(135);
  scale(145, 145, 25);
  fill(0, 0, 0, 255); 
  noStroke();
  model(obj2);
  pop();

  lights();

  push();
  translate(0, 0, -1000); 
  rotateX(135);
  scale(150); 
  noStroke();
  specularMaterial(128, 0, 128); // Set obj2 to be reflective
  model(obj2);
  pop();

  
}

function mousePressed() {
  lastMouseX = mouseX;
}

function mouseDragged() {
  let deltaX = mouseX - lastMouseX;
  camAngle += deltaX * 0.01;
  lastMouseX = mouseX;
}
