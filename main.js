import * as panda from './panda/calma_object.js';
import * as panda2 from './panda/calma_object2.js';
import * as panda3 from './panda/calma_object3.js';

var canvas = document.getElementById("main_canvas");
if(!canvas) {
	console.log("Failed to retrieve the <canvas> element");
}
var gl = initializeWebGL(canvas,true);
//initialize shaders program
var vertexShader = initializeShader(gl,"vshader");
var fragmentShader = initializeShader(gl, "fshader");
var program = initializeProgram(gl,vertexShader,fragmentShader);
gl.useProgram(program);

const programInfo = {
	program: program,
	aPositionPointer: gl.getAttribLocation(program,"aPosition"),
	aNormalPointer: gl.getAttribLocation(program,"aNormal"),
	uFragColorPointer: gl.getUniformLocation(program,"uColor"),
	uModelMatrixPointer: gl.getUniformLocation(program,"uModelMatrix"),
	uViewMatrixPointer: gl.getUniformLocation(program,"uViewMatrix"),
	uProjectionMatrixPointer: gl.getUniformLocation(program,"uProjectionMatrix"),
	uNormalMatrixPointer:gl.getUniformLocation(program,"uNormalMatrix"),
	uTransformMatrixPointer:gl.getUniformLocation(program,"uTransformMatrix")
}

const ceiling = {
	vertices: [
		// Floor
		-40.0, 0.0, -40.0, 1.0,
		40.0, 0.0, -40.0, 1.0,
		40.0, 0.0, 40.0, 1.0,
		-40.0, 0.0, 40.0, 1.0,
	
		// Ceiling
		-40.0, 25.0, -40.0, 1.0,
		40.0, 25.0, -40.0, 1.0,
		40.0, 25.0, 40.0, 1.0,
		-40.0, 25.0, 40.0, 1.0,
	],
	indices: [
		// Floor
		0, 1, 2,
		0, 2, 3,
	
		// Ceiling
		4, 5, 6,
		4, 6, 7,
	],
	normals: [
		0.0, -1.0, 0.0, 0.0,   0.0, -1.0, 0.0, 0.0,   0.0, -1.0, 0.0, 0.0,   0.0, -1.0, 0.0, 0.0,  	// bottom
		0.0, 1.0, 0.0, 0.0,   0.0, 1.0, 0.0, 0.0,   0.0, 1.0, 0.0, 0.0,   0.0, 1.0, 0.0, 0.0,  		// top
	],
	lightDirectionVector: [1, -3, -5, 0],
	lightColorVector: [1, 1, 1, 1],
	lightEyePositionVector: [1, 1, -5, 0],
	materialColorVector: [1, 1, 1, 1],
	rotationRate : 0, // degrees per second
	currentRotation : 0, // default degrees
	position: [0, 0, 10]
}

const walls = {
	vertices: [
		// Walls
		-40.0, 0.0, -40.0, 1.0,
		-40.0, 25.0, -40.0, 1.0,
		-40.0, 25.0, 40.0, 1.0,
		-40.0, 0.0, 40.0, 1.0,
	
		40.0, 0.0, -40.0, 1.0,
		40.0, 25.0, -40.0, 1.0,
		40.0, 25.0, 40.0, 1.0,
		40.0, 0.0, 40.0, 1.0,
	
		-40.0, 0.0, -40.0, 1.0,
		40.0, 0.0, -40.0, 1.0,
		40.0, 25.0, -40.0, 1.0,
		-40.0, 25.0, -40.0, 1.0,
	
		-40.0, 0.0, 40.0, 1.0,
		40.0, 0.0, 40.0, 1.0,
		40.0, 25.0, 40.0, 1.0,
		-40.0, 25.0, 40.0, 1.0,
	],
	indices: [
		0, 1, 2,
		0, 2, 3,

		4, 5, 6,
		4, 6, 7,

		8, 9, 10,
		8, 10, 11,
	
		12, 13, 14,
		12, 14, 15,
	],
	normals: [
		1.0, 0.0, 0.0, 0.0,   1.0, 0.0, 0.0, 0.0,   1.0, 0.0, 0.0, 0.0,   1.0, 0.0, 0.0, 0.0,  		// right
		-1.0, 0.0, 0.0, 0.0,  -1.0, 0.0, 0.0, 0.0,  -1.0, 0.0, 0.0, 0.0,  -1.0, 0.0, 0.0, 0.0,   	// left
		0.0, 0.0, -1.0, 0.0,   0.0, 0.0, -1.0, 0.0,   0.0, 0.0, -1.0, 0.0,   0.0, 0.0, -1.0, 0.0,  	// back
		0.0, 0.0, 1.0, 0.0,   0.0, 0.0, 1.0, 0.0,   0.0, 0.0, 1.0, 0.0,   0.0, 0.0, 1.0, 0.0,  		// front
	],
	lightDirectionVector: [1, -3, -5, 0],
	lightColorVector: [1, 1, 1, 1],
	lightEyePositionVector: [1, 1, -5, 0],
	materialColorVector: [1, 1, 1, 1],
	rotationRate : 0, // degrees per second
	currentRotation : 0, // default degrees
	position: [0, 0, 10]
}

const cameraObject = {
	x : 0,
	y : 0,
	z : 0,
	horizontal : 0,
	vertical : 0,
}
const mouseObject = {
	x: 0,
	y: 0,
	prevX: 0,
	prevY: 0
}
gl.enableVertexAttribArray(programInfo.aPositionPointer);
gl.enableVertexAttribArray(programInfo.aNormalPointer);

/**START VIEW MATRIX SPECIFICATION**/

var isPhong = true;

var time = 0;

// rotate x
// function Rx(value) {
// 	return [1, 0, 0, 0,
// 			0, Math.cos(value), -Math.sin(value), 0,
// 			0, Math.sin(value), Math.cos(value), 0,
// 			0, 0, 0, 1
// 		]
// }

//rotate y (this is what we're using with the rotation in the camera)
function Ry(value) {
	return [Math.cos(value), 0, Math.sin(value), 0,
			0, 1, 0, 0,
			-Math.sin(value), 0, Math.cos(value), 0,
			0, 0, 0, 1
		]
}

const defaultCameraLookPoint = vec4.create();
vec4.set(defaultCameraLookPoint, 0, 0, 100, 0);

function drawObject(cubeObject, delta) {
	//MODEL & NORMAL MATRIX
	// cubeObject.currentRotation += cubeObject.rotationRate * delta
	var modelMatrix = mat4.create();
	var normalMatrix = mat4.create();
	// ry = Ry(cubeObject.currentRotation);			// Rotation Matrix Around Y Axis
	mat4.translate(modelMatrix, modelMatrix, cubeObject.position);
	// mat4.multiply(modelMatrix, modelMatrix, ry);
	gl.uniformMatrix4fv(programInfo.uModelMatrixPointer, false, new Float32Array(modelMatrix));
	mat4.invert(normalMatrix, modelMatrix);
	mat4.transpose(normalMatrix, normalMatrix);
	gl.uniformMatrix4fv(programInfo.uNormalMatrixPointer, false, new Float32Array(normalMatrix));

	//set-up light and material parameters
	var uMaterialDiffuseColorPtr = gl.getUniformLocation(program, "uMaterialDiffuseColor");
	gl.uniform4fv(uMaterialDiffuseColorPtr, cubeObject.materialColorVector);

	var uLightDiffuseColorPtr = gl.getUniformLocation(program, "uLightDiffuseColor");
	gl.uniform4fv(uLightDiffuseColorPtr, cubeObject.lightColorVector);

	var uLightDirectionVectorPtr= gl.getUniformLocation(program, "uLightDirectionVector");
	gl.uniform4fv(uLightDirectionVectorPtr, cubeObject.lightDirectionVector);

	var uShinePtr = gl.getUniformLocation(program, "uShine");
	gl.uniform1f(uShinePtr, 1.3);
	var isPhongPtr = gl.getUniformLocation(program, "isPhong");
	if (isPhong) {
		gl.uniform1f(isPhongPtr, 1);
	} else {
		gl.uniform1f(isPhongPtr, 0);
	}

	//buffer creation
	var verticesBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeObject.vertices), gl.STATIC_DRAW);
	gl.vertexAttribPointer(programInfo.aPositionPointer, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(programInfo.aPositionPointer);

	//buffer creation
	var indexBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint8Array(cubeObject.indices), gl.STATIC_DRAW);
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

	//buffer creation
	var normalBuffer = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
	gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeObject.normals), gl.STATIC_DRAW);
	gl.vertexAttribPointer(programInfo.aNormalPointer, 4, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(programInfo.aNormalPointer);
	//draw part
	gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
	gl.drawElements(gl.TRIANGLES, cubeObject.indices.length, gl.UNSIGNED_BYTE, 0);

}

let lastTimestamp = performance.now();
let elapsedTime = 0; // Initialize elapsed time
function performDraw(){

    const currentTimestamp = performance.now();
    const deltaTime = currentTimestamp - lastTimestamp;
    elapsedTime += deltaTime; // Accumulate elapsed time
    if (elapsedTime >= 1000) {
    	elapsedTime -= 1000;
    }
    lastTimestamp = currentTimestamp;

	//ENABLE DEPTH TESTING
	gl.enable(gl.DEPTH_TEST);
	gl.clear(gl.DEPTH_BUFFER_BIT);
	//CLEAR SCREEN
	gl.clearColor(0.0,0.0,0.0,1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);

    var viewMatrix;
	var projectionMatrix;

	/**START PROJECTION MATRIX SPECIFICATION**/
	var fieldOfViewYAxis = glMatrix.toRadian(55);
	var aspectRatio      = canvas.width/canvas.height;
	var nearPlane        = 1;
	var farPlane         = 100;

	projectionMatrix = mat4.create();
	mat4.perspective(projectionMatrix, fieldOfViewYAxis, aspectRatio, nearPlane, farPlane);
	gl.uniformMatrix4fv(programInfo.uProjectionMatrixPointer, false, new Float32Array(projectionMatrix));
	/**END PROJECTION MATRIX SPECIFICATION**/

	/**START VIEW MATRIX SPECIFICATION**/
	var eyePoint    = [0.0,10.0,10.0,1.0];              //where the camera is placed
	var upVector    = [0.0,1.0,0.0,0.0];              //orientation of the camera
    //rx = Rx(cameraObject.vertical);				// Rotation Matrix Around X Axis (IGNORED ACCORDING TO PROJECT SPECS)
    var ry = Ry(cameraObject.horizontal);			// Rotation Matrix Around Y Axis

    //var cameraRotation = mat4.create();			// CAMERA IDENTITY MATRIX
    //mat4.multiply(cameraRotation, rx, ry);		// ROTATE CAMERA BY RX AND RY (IGNORED ACCORDING TO PROJECT SPECS)
    var cameraLookPoint = vec4.create();			// CAMERA TARGET MATRIX (the imaginary point that the camera is looking at)
    mat4.multiply(cameraLookPoint, ry, defaultCameraLookPoint);		//FORCE Y ROTATION ON CAMERA TARGET MATRIX

	viewMatrix = mat4.create();
	mat4.lookAt(viewMatrix, eyePoint, cameraLookPoint, upVector);
	gl.uniformMatrix4fv(programInfo.uViewMatrixPointer, false, new Float32Array(viewMatrix));
	/**END VIEW MATRIX SPECIFICATION**/

	drawObject(walls, deltaTime/1000);
	drawObject(ceiling, deltaTime/1000);
	Object.values(panda).forEach(object => {
		drawObject(object, deltaTime/1000)
	});
	Object.values(panda2).forEach(object => {
		drawObject(object, deltaTime/1000)
	});
	Object.values(panda3).forEach(object => {
		drawObject(object, deltaTime/1000)
	});
	window.requestAnimationFrame(performDraw);
}

performDraw(0)

// Function to request pointer lock
function requestPointerLock() {
    canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock || canvas.webkitRequestPointerLock;
    canvas.requestPointerLock();
}

// Function to handle pointer lock change
function handlePointerLockChange() {
    if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas || document.webkitPointerLockElement === canvas) {
        // Pointer is locked
        canvas.addEventListener("mousemove", handleMouseMoveLocked, false);
    } else {
        // Pointer is unlocked
        canvas.removeEventListener("mousemove", handleMouseMoveLocked, false);
    }
}

// Function to handle mouse movement while pointer is locked
function handleMouseMoveLocked(event) {
    var tempx = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
    var tempy = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
    mouseObject.prevX = mouseObject.x;
    mouseObject.prevY = mouseObject.y;
    mouseObject.x += tempx;
    mouseObject.y += tempy;
    cameraObject.horizontal += tempx/1000;
    cameraObject.vertical += tempy/1000;
}

// Attach click event listener to canvas to request pointer lock
canvas.addEventListener("click", requestPointerLock);

// Listen for pointer lock change events
document.addEventListener("pointerlockchange", handlePointerLockChange, false);
document.addEventListener("mozpointerlockchange", handlePointerLockChange, false);
document.addEventListener("webkitpointerlockchange", handlePointerLockChange, false);