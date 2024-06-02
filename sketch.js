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
    obj2 = await loadModel('takodachi.obj');
    obj3 = await loadModel('floating_island.obj');
    wallTexture = loadImage('wall.jpg');
    floorTexture = loadImage('wood.jpg');
    ceilingTexture = loadImage('ceiling.jpg');
    console.log("Models loaded successfully");
  } catch (err) {
    console.error("Error loading model:", err);
  }
}

function setup() {
  createCanvas(1900, 1080, WEBGL);
  pixelDensity(1);
}

function draw() {
  // Set camera position
  let camX = sin(camAngle) * 900;
  let camZ = cos(camAngle) * 900;
  camera(camX, 0, camZ, 0, 0, 0, 0, 1, 0);

  // Creating the ambient light  
  ambientLight(64, 64, 64);

  lights();

  // Create spotlight
  spotLight(255, 255, 255, 850, 0, -50, 0, 0, -1, PI / 2, 50);
  spotLight(255, 255, 255, 0, 0, 50, 0, 0, 1, PI / 8, 100);
  spotLight(255, 255, 255, -800, 0, 50, 0, 0, -1, PI / 2, 50);
  
  shininess(16);
  specularColor(255, 255, 255);
  specularMaterial(64, 64, 64);
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
  translate(800, 0, -1480);
  rotateX(135);
  scale(145, 145, 25);
  fill(0, 0, 0, 255);
  noStroke();
  model(obj2);
  pop();

  lights();

  push();
  translate(800, 0, -1000);
  rotateX(135);
  scale(150);
  noStroke();
  specularMaterial(128, 0, 128); // Set obj2 to be reflective
  model(obj2);
  pop();

  noLights();

  push();
  translate(0, 100, 1480);
  rotateX(20.4);
  rotateZ(18.9);
  scale(0.95, 0.95, 1);
  noStroke();
  fill(0, 0, 0, 255); // Set obj2 to be reflective
  model(obj1);
  pop();

  lights();

  // Adjust lighting for obj1
  ambientLight(128, 128, 128); // Increase ambient light
  pointLight(255, 255, 255, 0, -100, 500); // Add a point light source from infront of object
  pointLight(255, 255, 255, 1000, -100, 1000); // Add a point light source from left of object

  push();
  translate(0, 100, 1000);
  rotateX(20.4);
  rotateZ(18.9);
  scale(1);
  noStroke();
  fill(128, 64, 128); // Set obj2 to be reflective
  model(obj1);
  pop();

  
  noLights();

  push();
  translate(-800, 0, -1480);
  rotateX(135);
  scale(145, 145, 25);
  fill(0, 0, 0, 255);
  noStroke();
  model(obj3);
  pop();

  lights();

  ambientLight(32, 32, 32);
  pointLight(32, 32, 32, -800, 100, 1000); // Add a point light source from infront of object

  push();
  translate(-800, 0, -800);
  rotateX(135);
  scale(150);
  noStroke();
  specularMaterial(128, 0, 128); // Set obj2 to be reflective
  model(obj3);
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
