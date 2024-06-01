// layer 2
// row 1
const pandaObjB1 = {
	vertices: [
		// Front face
		-0.25, -0.25,  0.25, 1.0,
		 0.25, -0.25,  0.25, 1.0,
		 0.25,  0.25,  0.25, 1.0,
		-0.25,  0.25,  0.25, 1.0,

		// Back face
		-0.25, -0.25, -0.25, 1.0,
		-0.25,  0.25, -0.25, 1.0,
		 0.25,  0.25, -0.25, 1.0,
		 0.25, -0.25, -0.25, 1.0,

		// Top face
		-0.25,  0.25, -0.25, 1.0,
		-0.25,  0.25,  0.25, 1.0,
		 0.25,  0.25,  0.25, 1.0,
		 0.25,  0.25, -0.25, 1.0,

		// Bottom face
		-0.25, -0.25, -0.25, 1.0,
		 0.25, -0.25, -0.25, 1.0,
		 0.25, -0.25,  0.25, 1.0,
		-0.25, -0.25,  0.25, 1.0,

		// Right face
		 0.25, -0.25, -0.25, 1.0,
		 0.25,  0.25, -0.25, 1.0,
		 0.25,  0.25,  0.25, 1.0,
		 0.25, -0.25,  0.25, 1.0,

		// Left face
		-0.25, -0.25, -0.25, 1.0,
		-0.25, -0.25,  0.25, 1.0,
		-0.25,  0.25,  0.25, 1.0,
		-0.25,  0.25, -0.25, 1.0
	],
	indices: [
		0, 1, 2,      0, 2, 3,    // Front face
		4, 5, 6,      4, 6, 7,    // Back face
		8, 9, 10,     8, 10, 11,  // Top face
		12, 13, 14,   12, 14, 15, // Bottom face
		16, 17, 18,   16, 18, 19, // Right face
		20, 21, 22,   20, 22, 23  // Left face
	],
	normals: [
		0.0, 0.0, 1.0, 0.0,   0.0, 0.0, 1.0, 0.0,   0.0, 0.0, 1.0, 0.0,   0.0, 0.0, 1.0, 0.0,  		// front
		0.0, 0.0, -1.0, 0.0,   0.0, 0.0, -1.0, 0.0,   0.0, 0.0, -1.0, 0.0,   0.0, 0.0, -1.0, 0.0,  	// front
		0.0, 1.0, 0.0, 0.0,   0.0, 1.0, 0.0, 0.0,   0.0, 1.0, 0.0, 0.0,   0.0, 1.0, 0.0, 0.0,  		// front
		0.0, -1.0, 0.0, 0.0,   0.0, -1.0, 0.0, 0.0,   0.0, -1.0, 0.0, 0.0,   0.0, -1.0, 0.0, 0.0,  	// front
		1.0, 0.0, 0.0, 0.0,   1.0, 0.0, 0.0, 0.0,   1.0, 0.0, 0.0, 0.0,   1.0, 0.0, 0.0, 0.0,  		// right
		-1.0, 0.0, 0.0, 0.0,  -1.0, 0.0, 0.0, 0.0,  -1.0, 0.0, 0.0, 0.0,  -1.0, 0.0, 0.0, 0.0   	// left
	],
	lightDirectionVector: [1, -3, -5, 0],
	lightColorVector: [1, 1, 1, 1],
	lightEyePositionVector: [1, -3, -5, 0],
	materialColorVector: [0.3, 0.3, 0.3, 1],
	rotationRate : 0, // degrees per second
	currentRotation : 0, // default degrees
	position: [20, 1, 24.5]
}

// row 2
export const pandaObjB4 = {...pandaObjB1}
pandaObjB4.position = [20.5, 1.5, 24.5]

export const pandaObjB5 = {...pandaObjB1}
pandaObjB5.position = [20, 1.5, 24.5]

export const pandaObjB6 = {...pandaObjB1}
pandaObjB6.position = [19.5, 1.5, 24.5]

export const pandaObjB7 = {...pandaObjB1}
pandaObjB7.position = [19, 1.5, 24.5]

export const pandaObjB8 = {...pandaObjB1}
pandaObjB8.position = [18, 1.5, 24.5]

export const pandaObjB9 = {...pandaObjB1}
pandaObjB9.position = [17.5, 1.5, 24.5]

export const pandaObjB10 = {...pandaObjB1}
pandaObjB10.position = [17, 1.5, 24.5]

// row 3
export const pandaObjB11 = {...pandaObjB1}
pandaObjB11.position = [22.5, 2, 24.5]

export const pandaObjB12 = {...pandaObjB1}
pandaObjB12.position = [22, 2, 24.5]

export const pandaObjB13 = {...pandaObjB1}
pandaObjB13.position = [21, 2, 24.5]

export const pandaObjB14 = {...pandaObjB1}
pandaObjB14.position = [20.5, 2, 24.5]

export const pandaObjB15 = {...pandaObjB1}
pandaObjB15.position = [20, 2, 24.5]

export const pandaObjB16 = {...pandaObjB1}
pandaObjB16.position = [19.5, 2, 24.5]

export const pandaObjB17 = {...pandaObjB1}
pandaObjB17.position = [18, 2, 24.5]

export const pandaObjB18 = {...pandaObjB1}
pandaObjB18.position = [17.5, 2, 24.5]

export const pandaObjB19 = {...pandaObjB1}
pandaObjB19.position = [17, 2, 24.5]

export const pandaObjB20 = {...pandaObjB1}
pandaObjB20.position = [16.5, 2, 24.5]

// row 4
export const pandaObjB21 = {...pandaObjB1}
pandaObjB21.position = [23, 2.5, 24.5]

export const pandaObjB22 = {...pandaObjB1}
pandaObjB22.position = [22.5, 2.5, 24.5]

export const pandaObjB23 = {...pandaObjB1}
pandaObjB23.position = [22, 2.5, 24.5]

export const pandaObjB24 = {...pandaObjB1}
pandaObjB24.position = [21, 2.5, 24.5]

export const pandaObjB25 = {...pandaObjB1}
pandaObjB25.position = [20.5, 2.5, 24.5]

export const pandaObjB26 = {...pandaObjB1}
pandaObjB26.position = [20, 2.5, 24.5]

export const pandaObjB27 = {...pandaObjB1}
pandaObjB27.position = [19.5, 2.5, 24.5]

export const pandaObjB28 = {...pandaObjB1}
pandaObjB28.position = [17.5, 2.5, 24.5]

export const pandaObjB29 = {...pandaObjB1}
pandaObjB29.position = [17, 2.5, 24.5]

export const pandaObjB30 = {...pandaObjB1}
pandaObjB30.position = [16.5, 2.5, 24.5]

// row 5
export const pandaObjB31 = {...pandaObjB1}
pandaObjB31.position = [23.5, 3, 24.5]

export const pandaObjB32 = {...pandaObjB1}
pandaObjB32.position = [23, 3, 24.5]

export const pandaObjB33 = {...pandaObjB1}
pandaObjB33.position = [22.5, 3, 24.5]

export const pandaObjB34 = {...pandaObjB1}
pandaObjB34.position = [22, 3, 24.5]

export const pandaObjB35 = {...pandaObjB1}
pandaObjB35.position = [21.5, 3, 24.5]

export const pandaObjB36 = {...pandaObjB1}
pandaObjB36.position = [21, 3, 24.5]

export const pandaObjB37 = {...pandaObjB1}
pandaObjB37.position = [20.5, 3, 24.5]

export const pandaObjB38 = {...pandaObjB1}
pandaObjB38.position = [20, 3, 24.5]

export const pandaObjB39 = {...pandaObjB1}
pandaObjB39.position = [19.5, 3, 24.5]

export const pandaObjB40 = {...pandaObjB1}
pandaObjB40.position = [19, 3, 24.5]

export const pandaObjB41 = {...pandaObjB1}
pandaObjB41.position = [18.5, 3, 24.5]

export const pandaObjB42 = {...pandaObjB1}
pandaObjB42.position = [18, 3, 24.5]

export const pandaObjB43 = {...pandaObjB1}
pandaObjB43.position = [17.5, 3, 24.5]

export const pandaObjB44 = {...pandaObjB1}
pandaObjB44.position = [17, 3, 24.5]

export const pandaObjB45 = {...pandaObjB1}
pandaObjB45.position = [16.5, 3, 24.5]

export const pandaObjB46 = {...pandaObjB1}
pandaObjB46.position = [16, 3, 24.5]

// row 6
export const pandaObjB47 = {...pandaObjB1}
pandaObjB47.position = [23.5, 3.5, 24.5]

export const pandaObjB48 = {...pandaObjB1}
pandaObjB48.position = [23, 3.5, 24.5]

export const pandaObjB49 = {...pandaObjB1}
pandaObjB49.position = [22.5, 3.5, 24.5]

export const pandaObjB50 = {...pandaObjB1}
pandaObjB50.position = [22, 3.5, 24.5]

export const pandaObjB51 = {...pandaObjB1}
pandaObjB51.position = [21.5, 3.5, 24.5]

export const pandaObjB52 = {...pandaObjB1}
pandaObjB52.position = [21, 3.5, 24.5]

export const pandaObjB53 = {...pandaObjB1}
pandaObjB53.position = [20.5, 3.5, 24.5]

export const pandaObjB54 = {...pandaObjB1}
pandaObjB54.position = [20, 3.5, 24.5]

export const pandaObjB56 = {...pandaObjB1}
pandaObjB56.position = [18, 3.5, 24.5]

export const pandaObjB57 = {...pandaObjB1}
pandaObjB57.position = [17.5, 3.5, 24.5]

export const pandaObjB58 = {...pandaObjB1}
pandaObjB58.position = [17, 3.5, 24.5]

export const pandaObjB59 = {...pandaObjB1}
pandaObjB59.position = [16.5, 3.5, 24.5]

export const pandaObjB60 = {...pandaObjB1}
pandaObjB60.position = [16, 3.5, 24.5]

// row 7
export const pandaObjB61 = {...pandaObjB1}
pandaObjB61.position = [23.5, 4, 24.5]

export const pandaObjB62 = {...pandaObjB1}
pandaObjB62.position = [23, 4, 24.5]

export const pandaObjB63 = {...pandaObjB1}
pandaObjB63.position = [22, 4, 24.5]

export const pandaObjB64 = {...pandaObjB1}
pandaObjB64.position = [21.5, 4, 24.5]

export const pandaObjB65 = {...pandaObjB1}
pandaObjB65.position = [21, 4, 24.5]

export const pandaObjB66 = {...pandaObjB1}
pandaObjB66.position = [20.5, 4, 24.5]

export const pandaObjB67 = {...pandaObjB1}
pandaObjB67.position = [19, 4, 24.5]

export const pandaObjB68 = {...pandaObjB1}
pandaObjB68.position = [17, 4, 24.5]

export const pandaObjB69 = {...pandaObjB1}
pandaObjB69.position = [16.5, 4, 24.5]

export const pandaObjB70 = {...pandaObjB1}
pandaObjB70.position = [16, 4, 24.5]

// row 8
export const pandaObjB71 = {...pandaObjB1}
pandaObjB71.position = [24, 4.5, 24.5]

export const pandaObjB72 = {...pandaObjB1}
pandaObjB72.position = [23.5, 4.5, 24.5]

export const pandaObjB73 = {...pandaObjB1}
pandaObjB73.position = [22, 4.5, 24.5]

export const pandaObjB74 = {...pandaObjB1}
pandaObjB74.position = [21.5, 4.5, 24.5]

export const pandaObjB75 = {...pandaObjB1}
pandaObjB75.position = [21, 4.5, 24.5]

export const pandaObjB76 = {...pandaObjB1}
pandaObjB76.position = [19.5, 4.5, 24.5]

export const pandaObjB77 = {...pandaObjB1}
pandaObjB77.position = [19, 4.5, 24.5]

export const pandaObjB78 = {...pandaObjB1}
pandaObjB78.position = [18.5, 4.5, 24.5]

export const pandaObjB79 = {...pandaObjB1}
pandaObjB79.position = [16.5, 4.5, 24.5]

export const pandaObjB80 = {...pandaObjB1}
pandaObjB80.position = [16, 4.5, 24.5]

// row 9
export const pandaObjB81 = {...pandaObjB1}
pandaObjB81.position = [24, 5, 24.5]

export const pandaObjB82 = {...pandaObjB1}
pandaObjB82.position = [23.5, 5, 24.5]

export const pandaObjB83 = {...pandaObjB1}
pandaObjB83.position = [22, 5, 24.5]

export const pandaObjB84 = {...pandaObjB1}
pandaObjB84.position = [21.5, 5, 24.5]

export const pandaObjB85 = {...pandaObjB1}
pandaObjB85.position = [17.5, 5, 24.5]

export const pandaObjB86 = {...pandaObjB1}
pandaObjB86.position = [16,  5, 24.5]

// row 10
export const pandaObjB87 = {...pandaObjB1}
pandaObjB87.position = [24, 5.5, 24.5]

export const pandaObjB88 = {...pandaObjB1}
pandaObjB88.position = [22, 5.5, 24.5]

export const pandaObjB89 = {...pandaObjB1}
pandaObjB89.position = [20.5, 5.5, 24.5]

export const pandaObjB90 = {...pandaObjB1}
pandaObjB90.position = [20, 5.5, 24.5]

export const pandaObjB91 = {...pandaObjB1}
pandaObjB91.position = [18, 5.5, 24.5]

export const pandaObjB92 = {...pandaObjB1}
pandaObjB92.position = [17.5, 5.5, 24.5]

export const pandaObjB93 = {...pandaObjB1}
pandaObjB93.position = [16, 5.5, 24.5]

// row 11
export const pandaObjB94 = {...pandaObjB1}
pandaObjB94.position = [24, 6, 24.5]

export const pandaObjB95 = {...pandaObjB1}
pandaObjB95.position = [22, 6, 24.5]

export const pandaObjB96 = {...pandaObjB1}
pandaObjB96.position = [20.5, 6, 24.5]

export const pandaObjB97 = {...pandaObjB1}
pandaObjB97.position = [20, 6, 24.5]

export const pandaObjB98 = {...pandaObjB1}
pandaObjB98.position = [19.5, 6, 24.5]

export const pandaObjB99 = {...pandaObjB1}
pandaObjB99.position = [18, 6, 24.5]

export const pandaObjB100 = {...pandaObjB1}
pandaObjB100.position = [17.5, 6, 24.5]

export const pandaObjB101 = {...pandaObjB1}
pandaObjB101.position = [16, 6, 24.5]

// row 12
export const pandaObjB102 = {...pandaObjB1}
pandaObjB102.position = [24, 6.5, 24.5]

export const pandaObjB103 = {...pandaObjB1}
pandaObjB103.position = [22, 6.5, 24.5]

export const pandaObjB104 = {...pandaObjB1}
pandaObjB104.position = [20, 6.5, 24.5]

export const pandaObjB105 = {...pandaObjB1}
pandaObjB105.position = [19.5, 6.5, 24.5]

// row 13
export const pandaObjB106 = {...pandaObjB1}
pandaObjB106.position = [24, 7, 24.5]

export const pandaObjB107 = {...pandaObjB1}
pandaObjB107.position = [22, 7, 24.5]

export const pandaObjB108 = {...pandaObjB1}
pandaObjB108.position = [21.5, 7, 24.5]

// row 14
export const pandaObjB109 = {...pandaObjB1}
pandaObjB109.position = [23.5, 7.5, 24.5]

export const pandaObjB110 = {...pandaObjB1}
pandaObjB110.position = [21.5, 7.5, 24.5]

// row 15
export const pandaObjB111 = {...pandaObjB1}
pandaObjB111.position = [23, 8, 24.5]

export const pandaObjB112 = {...pandaObjB1}
pandaObjB112.position = [21, 8, 24.5]

export const pandaObjB113 = {...pandaObjB1}
pandaObjB113.position = [16.5, 8, 24.5]

export const pandaObjB114 = {...pandaObjB1}
pandaObjB114.position = [16, 8, 24.5]