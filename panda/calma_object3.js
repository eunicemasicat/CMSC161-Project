// layer 3
// row 1
const pandaObjC1 = {
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
	position: [20, 1, 25.5]
}

// row 2
export const pandaObjC4 = {...pandaObjC1}
pandaObjC4.position = [20.5, 1.5, 25.5]

export const pandaObjC5 = {...pandaObjC1}
pandaObjC5.position = [20, 1.5, 25.5]

export const pandaObjC6 = {...pandaObjC1}
pandaObjC6.position = [19.5, 1.5, 25.5]

export const pandaObjC7 = {...pandaObjC1}
pandaObjC7.position = [19, 1.5, 25.5]

export const pandaObjC8 = {...pandaObjC1}
pandaObjC8.position = [18, 1.5, 25.5]

export const pandaObjC9 = {...pandaObjC1}
pandaObjC9.position = [17.5, 1.5, 25.5]

export const pandaObjC10 = {...pandaObjC1}
pandaObjC10.position = [17, 1.5, 25.5]

// row 3
export const pandaObjC11 = {...pandaObjC1}
pandaObjC11.position = [22.5, 2, 25.5]

export const pandaObjC12 = {...pandaObjC1}
pandaObjC12.position = [22, 2, 25.5]

export const pandaObjC13 = {...pandaObjC1}
pandaObjC13.position = [21, 2, 25.5]

export const pandaObjC14 = {...pandaObjC1}
pandaObjC14.position = [20.5, 2, 25.5]

export const pandaObjC15 = {...pandaObjC1}
pandaObjC15.position = [20, 2, 25.5]

export const pandaObjC16 = {...pandaObjC1}
pandaObjC16.position = [19.5, 2, 25.5]

export const pandaObjC17 = {...pandaObjC1}
pandaObjC17.position = [18, 2, 25.5]

export const pandaObjC18 = {...pandaObjC1}
pandaObjC18.position = [17.5, 2, 25.5]

export const pandaObjC19 = {...pandaObjC1}
pandaObjC19.position = [17, 2, 25.5]

export const pandaObjC20 = {...pandaObjC1}
pandaObjC20.position = [16.5, 2, 25.5]

// row 4
export const pandaObjC21 = {...pandaObjC1}
pandaObjC21.position = [23, 2.5, 25.5]

export const pandaObjC22 = {...pandaObjC1}
pandaObjC22.position = [22.5, 2.5, 25.5]

export const pandaObjC23 = {...pandaObjC1}
pandaObjC23.position = [22, 2.5, 25.5]

export const pandaObjC24 = {...pandaObjC1}
pandaObjC24.position = [21, 2.5, 25.5]

export const pandaObjC25 = {...pandaObjC1}
pandaObjC25.position = [20.5, 2.5, 25.5]

export const pandaObjC26 = {...pandaObjC1}
pandaObjC26.position = [20, 2.5, 25.5]

export const pandaObjC27 = {...pandaObjC1}
pandaObjC27.position = [19.5, 2.5, 25.5]

export const pandaObjC28 = {...pandaObjC1}
pandaObjC28.position = [17.5, 2.5, 25.5]

export const pandaObjC29 = {...pandaObjC1}
pandaObjC29.position = [17, 2.5, 25.5]

export const pandaObjC30 = {...pandaObjC1}
pandaObjC30.position = [16.5, 2.5, 25.5]

// row 5
export const pandaObjC31 = {...pandaObjC1}
pandaObjC31.position = [23.5, 3, 25.5]

export const pandaObjC32 = {...pandaObjC1}
pandaObjC32.position = [23, 3, 25.5]

export const pandaObjC33 = {...pandaObjC1}
pandaObjC33.position = [22.5, 3, 25.5]

export const pandaObjC34 = {...pandaObjC1}
pandaObjC34.position = [22, 3, 25.5]

export const pandaObjC35 = {...pandaObjC1}
pandaObjC35.position = [21.5, 3, 25.5]

export const pandaObjC36 = {...pandaObjC1}
pandaObjC36.position = [21, 3, 25.5]

export const pandaObjC37 = {...pandaObjC1}
pandaObjC37.position = [20.5, 3, 25.5]

export const pandaObjC38 = {...pandaObjC1}
pandaObjC38.position = [20, 3, 25.5]

export const pandaObjC39 = {...pandaObjC1}
pandaObjC39.position = [19.5, 3, 25.5]

export const pandaObjC40 = {...pandaObjC1}
pandaObjC40.position = [19, 3, 25.5]

export const pandaObjC41 = {...pandaObjC1}
pandaObjC41.position = [18.5, 3, 25.5]

export const pandaObjC42 = {...pandaObjC1}
pandaObjC42.position = [18, 3, 25.5]

export const pandaObjC43 = {...pandaObjC1}
pandaObjC43.position = [17.5, 3, 25.5]

export const pandaObjC44 = {...pandaObjC1}
pandaObjC44.position = [17, 3, 25.5]

export const pandaObjC45 = {...pandaObjC1}
pandaObjC45.position = [16.5, 3, 25.5]

export const pandaObjC46 = {...pandaObjC1}
pandaObjC46.position = [16, 3, 25.5]

// row 6
export const pandaObjC47 = {...pandaObjC1}
pandaObjC47.position = [23.5, 3.5, 25.5]

export const pandaObjC48 = {...pandaObjC1}
pandaObjC48.position = [23, 3.5, 25.5]

export const pandaObjC49 = {...pandaObjC1}
pandaObjC49.position = [22.5, 3.5, 25.5]

export const pandaObjC50 = {...pandaObjC1}
pandaObjC50.position = [22, 3.5, 25.5]

export const pandaObjC51 = {...pandaObjC1}
pandaObjC51.position = [21.5, 3.5, 25.5]

export const pandaObjC52 = {...pandaObjC1}
pandaObjC52.position = [21, 3.5, 25.5]

export const pandaObjC53 = {...pandaObjC1}
pandaObjC53.position = [20.5, 3.5, 25.5]

export const pandaObjC54 = {...pandaObjC1}
pandaObjC54.position = [20, 3.5, 25.5]

export const pandaObjC56 = {...pandaObjC1}
pandaObjC56.position = [18, 3.5, 25.5]

export const pandaObjC57 = {...pandaObjC1}
pandaObjC57.position = [17.5, 3.5, 25.5]

export const pandaObjC58 = {...pandaObjC1}
pandaObjC58.position = [17, 3.5, 25.5]

export const pandaObjC59 = {...pandaObjC1}
pandaObjC59.position = [16.5, 3.5, 25.5]

export const pandaObjC60 = {...pandaObjC1}
pandaObjC60.position = [16, 3.5, 25.5]

// row 7
export const pandaObjC61 = {...pandaObjC1}
pandaObjC61.position = [23.5, 4, 25.5]

export const pandaObjC62 = {...pandaObjC1}
pandaObjC62.position = [23, 4, 25.5]

export const pandaObjC63 = {...pandaObjC1}
pandaObjC63.position = [22, 4, 25.5]

export const pandaObjC64 = {...pandaObjC1}
pandaObjC64.position = [21.5, 4, 25.5]

export const pandaObjC65 = {...pandaObjC1}
pandaObjC65.position = [21, 4, 25.5]

export const pandaObjC66 = {...pandaObjC1}
pandaObjC66.position = [20.5, 4, 25.5]

export const pandaObjC67 = {...pandaObjC1}
pandaObjC67.position = [19, 4, 25.5]

export const pandaObjC68 = {...pandaObjC1}
pandaObjC68.position = [17, 4, 25.5]

export const pandaObjC69 = {...pandaObjC1}
pandaObjC69.position = [16.5, 4, 25.5]

export const pandaObjC70 = {...pandaObjC1}
pandaObjC70.position = [16, 4, 25.5]

// row 8
export const pandaObjC71 = {...pandaObjC1}
pandaObjC71.position = [24, 4.5, 25.5]

export const pandaObjC72 = {...pandaObjC1}
pandaObjC72.position = [23.5, 4.5, 25.5]

export const pandaObjC73 = {...pandaObjC1}
pandaObjC73.position = [22, 4.5, 25.5]

export const pandaObjC74 = {...pandaObjC1}
pandaObjC74.position = [21.5, 4.5, 25.5]

export const pandaObjC75 = {...pandaObjC1}
pandaObjC75.position = [21, 4.5, 25.5]

export const pandaObjC76 = {...pandaObjC1}
pandaObjC76.position = [19.5, 4.5, 25.5]

export const pandaObjC77 = {...pandaObjC1}
pandaObjC77.position = [19, 4.5, 25.5]

export const pandaObjC78 = {...pandaObjC1}
pandaObjC78.position = [18.5, 4.5, 25.5]

export const pandaObjC79 = {...pandaObjC1}
pandaObjC79.position = [16.5, 4.5, 25.5]

export const pandaObjC80 = {...pandaObjC1}
pandaObjC80.position = [16, 4.5, 25.5]

// row 9
export const pandaObjC81 = {...pandaObjC1}
pandaObjC81.position = [24, 5, 25.5]

export const pandaObjC82 = {...pandaObjC1}
pandaObjC82.position = [23.5, 5, 25.5]

export const pandaObjC83 = {...pandaObjC1}
pandaObjC83.position = [22, 5, 25.5]

export const pandaObjC84 = {...pandaObjC1}
pandaObjC84.position = [21.5, 5, 25.5]

export const pandaObjC85 = {...pandaObjC1}
pandaObjC85.position = [17.5, 5, 25.5]

export const pandaObjC86 = {...pandaObjC1}
pandaObjC86.position = [16,  5, 25.5]

// row 10
export const pandaObjC87 = {...pandaObjC1}
pandaObjC87.position = [24, 5.5, 25.5]

export const pandaObjC88 = {...pandaObjC1}
pandaObjC88.position = [22, 5.5, 25.5]

export const pandaObjC89 = {...pandaObjC1}
pandaObjC89.position = [20.5, 5.5, 25.5]

export const pandaObjC90 = {...pandaObjC1}
pandaObjC90.position = [20, 5.5, 25.5]

export const pandaObjC91 = {...pandaObjC1}
pandaObjC91.position = [18, 5.5, 25.5]

export const pandaObjC92 = {...pandaObjC1}
pandaObjC92.position = [17.5, 5.5, 25.5]

export const pandaObjC93 = {...pandaObjC1}
pandaObjC93.position = [16, 5.5, 25.5]

// row 11
export const pandaObjC94 = {...pandaObjC1}
pandaObjC94.position = [24, 6, 25.5]

export const pandaObjC95 = {...pandaObjC1}
pandaObjC95.position = [22, 6, 25.5]

export const pandaObjC96 = {...pandaObjC1}
pandaObjC96.position = [20.5, 6, 25.5]

export const pandaObjC97 = {...pandaObjC1}
pandaObjC97.position = [20, 6, 25.5]

export const pandaObjC98 = {...pandaObjC1}
pandaObjC98.position = [19.5, 6, 25.5]

export const pandaObjC99 = {...pandaObjC1}
pandaObjC99.position = [18, 6, 25.5]

export const pandaObjC100 = {...pandaObjC1}
pandaObjC100.position = [17.5, 6, 25.5]

export const pandaObjC101 = {...pandaObjC1}
pandaObjC101.position = [16, 6, 25.5]

// row 12
export const pandaObjC102 = {...pandaObjC1}
pandaObjC102.position = [24, 6.5, 25.5]

export const pandaObjC103 = {...pandaObjC1}
pandaObjC103.position = [22, 6.5, 25.5]

export const pandaObjC104 = {...pandaObjC1}
pandaObjC104.position = [20, 6.5, 25.5]

export const pandaObjC105 = {...pandaObjC1}
pandaObjC105.position = [19.5, 6.5, 25.5]

// row 13
export const pandaObjC106 = {...pandaObjC1}
pandaObjC106.position = [24, 7, 25.5]

export const pandaObjC107 = {...pandaObjC1}
pandaObjC107.position = [22, 7, 25.5]

export const pandaObjC108 = {...pandaObjC1}
pandaObjC108.position = [21.5, 7, 25.5]

// row 14
export const pandaObjC109 = {...pandaObjC1}
pandaObjC109.position = [23.5, 7.5, 25.5]

export const pandaObjC110 = {...pandaObjC1}
pandaObjC110.position = [21.5, 7.5, 25.5]

// row 15
export const pandaObjC111 = {...pandaObjC1}
pandaObjC111.position = [23, 8, 25.5]

export const pandaObjC112 = {...pandaObjC1}
pandaObjC112.position = [21, 8, 25.5]

export const pandaObjC113 = {...pandaObjC1}
pandaObjC113.position = [16.5, 8, 25.5]

export const pandaObjC114 = {...pandaObjC1}
pandaObjC114.position = [16, 8, 25.5]