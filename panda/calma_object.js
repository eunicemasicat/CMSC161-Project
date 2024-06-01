// layer 1
// row 1
export const pandaObjA1 = {
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
	position: [20, 1, 25]
}

export const pandaObjA2 = {...pandaObjA1}
pandaObjA2.position = [19.50, 1, 25]

export const pandaObjA3 = {...pandaObjA1}
pandaObjA3.position = [19, 1, 25]

// row 2
export const pandaObjA4 = {...pandaObjA1}
pandaObjA4.position = [20.5, 1.5, 25]

export const pandaObjA5 = {...pandaObjA1}
pandaObjA5.position = [20, 1.5, 25]

export const pandaObjA6 = {...pandaObjA1}
pandaObjA6.position = [19.5, 1.5, 25]

export const pandaObjA7 = {...pandaObjA1}
pandaObjA7.position = [19, 1.5, 25]

export const pandaObjA8 = {...pandaObjA1}
pandaObjA8.position = [18, 1.5, 25]

export const pandaObjA9 = {...pandaObjA1}
pandaObjA9.position = [17.5, 1.5, 25]

export const pandaObjA10 = {...pandaObjA1}
pandaObjA10.position = [17, 1.5, 25]

// row 3
export const pandaObjA11 = {...pandaObjA1}
pandaObjA11.position = [22.5, 2, 25]

export const pandaObjA12 = {...pandaObjA1}
pandaObjA12.position = [22, 2, 25]

export const pandaObjA13 = {...pandaObjA1}
pandaObjA13.position = [21, 2, 25]

export const pandaObjA14 = {...pandaObjA1}
pandaObjA14.position = [20.5, 2, 25]

export const pandaObjA15 = {...pandaObjA1}
pandaObjA15.position = [20, 2, 25]

export const pandaObjA16 = {...pandaObjA1}
pandaObjA16.position = [19.5, 2, 25]

export const pandaObjA17 = {...pandaObjA1}
pandaObjA17.position = [18, 2, 25]

export const pandaObjA18 = {...pandaObjA1}
pandaObjA18.position = [17.5, 2, 25]

export const pandaObjA19 = {...pandaObjA1}
pandaObjA19.position = [17, 2, 25]

export const pandaObjA20 = {...pandaObjA1}
pandaObjA20.position = [16.5, 2, 25]

// row 4
export const pandaObjA21 = {...pandaObjA1}
pandaObjA21.position = [23, 2.5, 25]

export const pandaObjA22 = {...pandaObjA1}
pandaObjA22.position = [22.5, 2.5, 25]

export const pandaObjA23 = {...pandaObjA1}
pandaObjA23.position = [22, 2.5, 25]

export const pandaObjA24 = {...pandaObjA1}
pandaObjA24.position = [21, 2.5, 25]

export const pandaObjA25 = {...pandaObjA1}
pandaObjA25.position = [20.5, 2.5, 25]

export const pandaObjA26 = {...pandaObjA1}
pandaObjA26.position = [20, 2.5, 25]

export const pandaObjA27 = {...pandaObjA1}
pandaObjA27.position = [19.5, 2.5, 25]

export const pandaObjA28 = {...pandaObjA1}
pandaObjA28.position = [17.5, 2.5, 25]

export const pandaObjA29 = {...pandaObjA1}
pandaObjA29.position = [17, 2.5, 25]

export const pandaObjA30 = {...pandaObjA1}
pandaObjA30.position = [16.5, 2.5, 25]

// row 5
export const pandaObjA31 = {...pandaObjA1}
pandaObjA31.position = [23.5, 3, 25]

export const pandaObjA32 = {...pandaObjA1}
pandaObjA32.position = [23, 3, 25]

export const pandaObjA33 = {...pandaObjA1}
pandaObjA33.position = [22.5, 3, 25]

export const pandaObjA34 = {...pandaObjA1}
pandaObjA34.position = [22, 3, 25]

export const pandaObjA35 = {...pandaObjA1}
pandaObjA35.position = [21.5, 3, 25]

export const pandaObjA36 = {...pandaObjA1}
pandaObjA36.position = [21, 3, 25]

export const pandaObjA37 = {...pandaObjA1}
pandaObjA37.position = [20.5, 3, 25]

export const pandaObjA38 = {...pandaObjA1}
pandaObjA38.position = [20, 3, 25]

export const pandaObjA39 = {...pandaObjA1}
pandaObjA39.position = [19.5, 3, 25]

export const pandaObjA40 = {...pandaObjA1}
pandaObjA40.position = [19, 3, 25]

export const pandaObjA41 = {...pandaObjA1}
pandaObjA41.position = [18.5, 3, 25]

export const pandaObjA42 = {...pandaObjA1}
pandaObjA42.position = [18, 3, 25]

export const pandaObjA43 = {...pandaObjA1}
pandaObjA43.position = [17.5, 3, 25]

export const pandaObjA44 = {...pandaObjA1}
pandaObjA44.position = [17, 3, 25]

export const pandaObjA45 = {...pandaObjA1}
pandaObjA45.position = [16.5, 3, 25]

export const pandaObjA46 = {...pandaObjA1}
pandaObjA46.position = [16, 3, 25]

// row 6
export const pandaObjA47 = {...pandaObjA1}
pandaObjA47.position = [23.5, 3.5, 25]

export const pandaObjA48 = {...pandaObjA1}
pandaObjA48.position = [23, 3.5, 25]

export const pandaObjA49 = {...pandaObjA1}
pandaObjA49.position = [22.5, 3.5, 25]

export const pandaObjA50 = {...pandaObjA1}
pandaObjA50.position = [22, 3.5, 25]

export const pandaObjA51 = {...pandaObjA1}
pandaObjA51.position = [21.5, 3.5, 25]

export const pandaObjA52 = {...pandaObjA1}
pandaObjA52.position = [21, 3.5, 25]

export const pandaObjA53 = {...pandaObjA1}
pandaObjA53.position = [20.5, 3.5, 25]

export const pandaObjA54 = {...pandaObjA1}
pandaObjA54.position = [20, 3.5, 25]

export const pandaObjA56 = {...pandaObjA1}
pandaObjA56.position = [18, 3.5, 25]

export const pandaObjA57 = {...pandaObjA1}
pandaObjA57.position = [17.5, 3.5, 25]

export const pandaObjA58 = {...pandaObjA1}
pandaObjA58.position = [17, 3.5, 25]

export const pandaObjA59 = {...pandaObjA1}
pandaObjA59.position = [16.5, 3.5, 25]

export const pandaObjA60 = {...pandaObjA1}
pandaObjA60.position = [16, 3.5, 25]

// row 7
export const pandaObjA61 = {...pandaObjA1}
pandaObjA61.position = [23.5, 4, 25]

export const pandaObjA62 = {...pandaObjA1}
pandaObjA62.position = [23, 4, 25]

export const pandaObjA63 = {...pandaObjA1}
pandaObjA63.position = [22, 4, 25]

export const pandaObjA64 = {...pandaObjA1}
pandaObjA64.position = [21.5, 4, 25]

export const pandaObjA65 = {...pandaObjA1}
pandaObjA65.position = [21, 4, 25]

export const pandaObjA66 = {...pandaObjA1}
pandaObjA66.position = [20.5, 4, 25]

export const pandaObjA67 = {...pandaObjA1}
pandaObjA67.position = [19, 4, 25]

export const pandaObjA68 = {...pandaObjA1}
pandaObjA68.position = [17, 4, 25]

export const pandaObjA69 = {...pandaObjA1}
pandaObjA69.position = [16.5, 4, 25]

export const pandaObjA70 = {...pandaObjA1}
pandaObjA70.position = [16, 4, 25]

// row 8
export const pandaObjA71 = {...pandaObjA1}
pandaObjA71.position = [24, 4.5, 25]

export const pandaObjA72 = {...pandaObjA1}
pandaObjA72.position = [23.5, 4.5, 25]

export const pandaObjA73 = {...pandaObjA1}
pandaObjA73.position = [22, 4.5, 25]

export const pandaObjA74 = {...pandaObjA1}
pandaObjA74.position = [21.5, 4.5, 25]

export const pandaObjA75 = {...pandaObjA1}
pandaObjA75.position = [21, 4.5, 25]

export const pandaObjA76 = {...pandaObjA1}
pandaObjA76.position = [19.5, 4.5, 25]

export const pandaObjA77 = {...pandaObjA1}
pandaObjA77.position = [19, 4.5, 25]

export const pandaObjA78 = {...pandaObjA1}
pandaObjA78.position = [18.5, 4.5, 25]

export const pandaObjA79 = {...pandaObjA1}
pandaObjA79.position = [16.5, 4.5, 25]

export const pandaObjA80 = {...pandaObjA1}
pandaObjA80.position = [16, 4.5, 25]

// row 9
export const pandaObjA81 = {...pandaObjA1}
pandaObjA81.position = [24, 5, 25]

export const pandaObjA82 = {...pandaObjA1}
pandaObjA82.position = [23.5, 5, 25]

export const pandaObjA83 = {...pandaObjA1}
pandaObjA83.position = [22, 5, 25]

export const pandaObjA84 = {...pandaObjA1}
pandaObjA84.position = [21.5, 5, 25]

export const pandaObjA85 = {...pandaObjA1}
pandaObjA85.position = [17.5, 5, 25]

export const pandaObjA86 = {...pandaObjA1}
pandaObjA86.position = [16,  5, 25]

// row 10
export const pandaObjA87 = {...pandaObjA1}
pandaObjA87.position = [24, 5.5, 25]

export const pandaObjA88 = {...pandaObjA1}
pandaObjA88.position = [22, 5.5, 25]

export const pandaObjA89 = {...pandaObjA1}
pandaObjA89.position = [20.5, 5.5, 25]

export const pandaObjA90 = {...pandaObjA1}
pandaObjA90.position = [20, 5.5, 25]

export const pandaObjA91 = {...pandaObjA1}
pandaObjA91.position = [18, 5.5, 25]

export const pandaObjA92 = {...pandaObjA1}
pandaObjA92.position = [17.5, 5.5, 25]

export const pandaObjA93 = {...pandaObjA1}
pandaObjA93.position = [16, 5.5, 25]

// row 11
export const pandaObjA94 = {...pandaObjA1}
pandaObjA94.position = [24, 6, 25]

export const pandaObjA95 = {...pandaObjA1}
pandaObjA95.position = [22, 6, 25]

export const pandaObjA96 = {...pandaObjA1}
pandaObjA96.position = [20.5, 6, 25]

export const pandaObjA97 = {...pandaObjA1}
pandaObjA97.position = [20, 6, 25]

export const pandaObjA98 = {...pandaObjA1}
pandaObjA98.position = [19.5, 6, 25]

export const pandaObjA99 = {...pandaObjA1}
pandaObjA99.position = [18, 6, 25]

export const pandaObjA100 = {...pandaObjA1}
pandaObjA100.position = [17.5, 6, 25]

export const pandaObjA101 = {...pandaObjA1}
pandaObjA101.position = [16, 6, 25]

// row 12
export const pandaObjA102 = {...pandaObjA1}
pandaObjA102.position = [24, 6.5, 25]

export const pandaObjA103 = {...pandaObjA1}
pandaObjA103.position = [22, 6.5, 25]

export const pandaObjA104 = {...pandaObjA1}
pandaObjA104.position = [20, 6.5, 25]

export const pandaObjA105 = {...pandaObjA1}
pandaObjA105.position = [19.5, 6.5, 25]

// row 13
export const pandaObjA106 = {...pandaObjA1}
pandaObjA106.position = [24, 7, 25]

export const pandaObjA107 = {...pandaObjA1}
pandaObjA107.position = [22, 7, 25]

export const pandaObjA108 = {...pandaObjA1}
pandaObjA108.position = [21.5, 7, 25]

// row 14
export const pandaObjA109 = {...pandaObjA1}
pandaObjA109.position = [23.5, 7.5, 25]

export const pandaObjA110 = {...pandaObjA1}
pandaObjA110.position = [21.5, 7.5, 25]

// row 15
export const pandaObjA111 = {...pandaObjA1}
pandaObjA111.position = [23, 8, 25]

export const pandaObjA112 = {...pandaObjA1}
pandaObjA112.position = [21, 8, 25]

export const pandaObjA113 = {...pandaObjA1}
pandaObjA113.position = [16.5, 8, 25]

export const pandaObjA114 = {...pandaObjA1}
pandaObjA114.position = [16, 8, 25]

// row 16
export const pandaObjA115 = {...pandaObjA1}
pandaObjA115.position = [21, 8.5, 25]

export const pandaObjA116 = {...pandaObjA1}
pandaObjA116.position = [20.5, 8.5, 25]

export const pandaObjA117 = {...pandaObjA1}
pandaObjA117.position = [20, 8.5, 25]

export const pandaObjA118 = {...pandaObjA1}
pandaObjA118.position = [19.5, 8.5, 25]

export const pandaObjA119 = {...pandaObjA1}
pandaObjA119.position = [17.5, 8.5, 25]

export const pandaObjA120 = {...pandaObjA1}
pandaObjA120.position = [17, 8.5, 25]

export const pandaObjA121 = {...pandaObjA1}
pandaObjA121.position = [16.5, 8.5, 25]

export const pandaObjA122 = {...pandaObjA1}
pandaObjA122.position = [16, 8.5, 25]

// row 17
export const pandaObjA123 = {...pandaObjA1}
pandaObjA123.position = [21, 9, 25]

export const pandaObjA124 = {...pandaObjA1}
pandaObjA124.position = [20.5, 9, 25]

export const pandaObjA125 = {...pandaObjA1}
pandaObjA125.position = [20, 9, 25]

export const pandaObjA126 = {...pandaObjA1}
pandaObjA126.position = [19.5, 9, 25]

export const pandaObjA127 = {...pandaObjA1}
pandaObjA127.position = [17, 9, 25]

export const pandaObjA128 = {...pandaObjA1}
pandaObjA128.position = [16.5, 9, 25]

// row 18
export const pandaObjA129 = {...pandaObjA1}
pandaObjA129.position = [20.5, 9.5, 25]

export const pandaObjA130 = {...pandaObjA1}
pandaObjA130.position = [20, 9.5, 25]