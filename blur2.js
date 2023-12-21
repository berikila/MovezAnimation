document.addEventListener("DOMContentLoaded", (event) => {
	// const shapes = document.querySelectorAll(".shapes");
	const shapes = document.querySelectorAll(".shapes");
	// const shape = document.querySelectorAll(".shapes");
	const shapesz = ["#rec_1", "#rec_2", "#rec_3", "#rec_4", "#rec_5"];

	gsap.set(shapes, { transformOrigin: "50% 50%" });
	const duration = 1.5;
	const ease = "power4.out";

	const colors = ["#eeb900", "#6DD0A5", "#f799db"];

	let morphTL;
	// let masterMorphTL;
	// let scaleTl;
	// Define the positions
	// function repeatSequence() {
	// 	// Stop the animation after 30 seconds
	// 	setTimeout(() => {
	// 		// scaleTl.to(shapes, { scaleX: 1, scaleY: 1, duration: 1 }); // Set scaleX and scaleY to 1
	// 		// gsap.globalTimeline.revert();

	// 		// Restart the animation after 10 seconds
	// 		setTimeout(() => {
	// 			// gsap.globalTimeline.play();
	// 			// Repeat the entire sequence
	// 		}, 5000);
	// 	}, 58000);
	// }
	// // const scaleTl = scaleShapes();
	// repeatSequence();

	// setTimeout(() => {
	// 	// scaleTl.to(shapes, { scaleX: 1, scaleY: 1, duration: 1 }); // Set scaleX and scaleY to 1

	// 	// Restart the animation after 10 seconds
	// 	setTimeout(() => {
	// 		//   scaleTl.restart(); // Restart the animation, and it will repeat again
	// 	//   repeatSequence(); // Repeat the entire sequence
	// 	}, 10000);
	//   }, 58000);
	// Function to shuffle array

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	const positions = [
		{ x: 250, y: -200 },
		{ x: -550, y: -300 },
		{ x: 460, y: 250 },
		{ x: -450, y: -500 },
		{ x: 460, y: 350 },
		{ x: 400, y: -150 },
		{ x: -420, y: -400 },
		{ x: -100, y: 350 },
		{ x: 200, y: -550 },
		{ x: -100, y: 250 },
		{ x: -250, y: -100 },
		{ x: 400, y: 450 },
		{ x: -300, y: -500 },
		{ x: 460, y: 200 },
		{ x: -650, y: -300 },
		{ x: -220, y: 300 },
		{ x: 460, y: 150 },
		{ x: -300, y: 500 },
		{ x: -360, y: -150 },
		{ x: -420, y: 300 },
		{ x: 350, y: 300 },
		{ x: 220, y: -200 },
		{ x: 350, y: -400 },
		{ x: 350, y: 300 },
		{ x: -360, y: -450 },
		{ x: -220, y: 300 },
	];

	function resetScale() {
		gsap.to(shapes, {
			duration: 1, // Adjust the duration as needed
			scaleX: 1,
			scaleY: 1,
		});
	}

	shuffleArray(positions);

	const movez = gsap.timeline({
		repeat: -1,
		repeatDelay: 1,
		repeatRefresh: true,
		delay: 5,
		// duration: 15,
		onStart: () => {
			console.log("Start");
		},
		onComplete: () => {
			console.log("Killed");
		},
	});

	shapesz.forEach((shape, index) => {
		shuffleArray(positions);
		// movez.eventCallback("onRepeat", () => {
		// 	// shuffleArray(positions);
		// 	// console.log("onUpdate");
		// 	gsap.set(shapes, { fill: colors[~~(Math.random() * 3)] });
		// 	// masterMorphTL.play()
		// });
		const duration = 1 + (positions.length - 1) * 0.5;
		// Sequentially move to each position in the array
		positions.forEach((position, positionIndex) => {
			movez.to(
				shape,
				{
					x: position.x,
					y: position.y,
					ease: "power4.out",
					duration: 7, // 1 second per position
					Onstart: () => {
						scaleTl.resume();
						// masterMorphTL.resume();
						// [morphTL1, morphTL2, morphTL3, morphTL4, morphTL5].forEach(
						// 	(morphTimeline) => {
						// 		morphTimeline.resume();
						// 	}
						// );
						// let value = 10;
						// const incrementCap = 18;
						// value = Math.min(value, incrementCap);
						// setInterval(function () {
						// 	// changeStdDeviation(value);
						// 	value += 3;
						// 	changeStdDeviation(value);
						// }, 1000);
						changeStdDeviation(26);
						changeStdDeviationMain(12);
				gsap.set(".card", { opacity: 1 });

						// resetScale()
					},
				},
				index * 1 + positionIndex * 1.25
			); // Adjust the delay
		});

		// Reset to 0,0
		movez.to(shapes, {
			duration: 1.5,
			x: 0,
			y: 0,
			Onstart: () => {
				scaleTl.pause();
				// masterMorphTL.pause();

				// [morphTL1, morphTL2, morphTL3, morphTL4, morphTL5].forEach(
				// 	(morphTimeline) => {
				// 		// morphTimeline.reverse();
				// 	}
				// );

				gsap.set(".card", { opacity: 0 });
				changeStdDeviation(0);
				// resetMorph()
				changeStdDeviationMain(0);
				// morphTL.pause();
				resetScale();
			},
			OnComplete: () => {
				// resetScale()
				// scaleTl.Start();
			},
		});
	});

	movez.eventCallback("onRepeat", () => {
		shuffleArray(positions);
		gsap.set(shapes, { fill: "#ffffff" });
		// masterMorphTL.play()
	});

	const totalDuration = movez.totalDuration();
	console.log(totalDuration);

	// function scaleShapes() {
	let randomize;

	const scaleTl = gsap.timeline({
		// yoyo: true,
		repeat: -1,
		repeatRefresh: true,
		delay: 5,
		onUpdate: () => {
			scaleTl.to(shapes, 0.75, {
				scaleX: () => gsap.utils.random(0.25, 1.5),
				scaleY: () => gsap.utils.random(0.35, 1.5),
			});
			// const randomize = gsap.utils.random(0.25, 2.5);
		},
	});

	// return scaleTl;
	// }

	// const scaleShape = scaleShapes();

	// scaleTl.to(
	// 	shapes,
	// 	0.75,
	// 	{
	// 		scaleX: () => gsap.utils.random(0.25, 1.5),
	// 		ease: "power4.out",
	// 		stagger: {
	// 			from: "random",
	// 			amount: 1
	// 		  }
	// 		// onUpdate: () => {
	// 		// 	randomize = gsap.utils.random(0.25, 1.5);
	// 		// }
	// 	},
	// );

	// scaleTl.to(
	// 	shapes,
	// 	0.5,
	// 	{
	// 		scaleY: () => gsap.utils.random(0.25, 1.5),
	// 		ease: "power4.out",
	// 		stagger: {
	// 			from: "random",
	// 			amount: 1
	// 		  }
	// 		// onUpdate: () => {
	// 		// 	randomize = gsap.utils.random(0.25, 1.5);
	// 		// }
	// 	},

	// );
	// movez.to("#rec_1", {
	// 	// duration: 25,
	// 	keyframes: positions, // Use the corresponding position for each shape
	// 	repeat: -1,

	// 	ease: "power4.out",
	// },0.2578);
	// movez.to("#rec_1", {
	// 	x: 0,
	// 	y: 0,
	// });

	// movez.to("#rec_2", {
	// 	// duration: 25,
	// 	keyframes: positions, // Use the corresponding position for each shape
	// 	repeat: -1,

	// 	ease: "power4.out",
	// },0);
	// movez.to("#rec_2", {
	// 	x: 0,
	// 	y: 0,
	// });

	// movez.repeat(-1);
	// movez.repeatDelay(5);

	// function generateRandomArray() {
	// 	const randomArray = [];
	// 	for (let i = 0; i < positions.length; i++) {
	// 		randomArray.push({
	// 			x: Math.random() * (window.innerWidth - 150), // Assuming a shape width of 50
	// 			y: Math.random() * (window.innerHeight - 150), // Assuming a shape height of 50
	// 		});
	// 	}
	// 	return randomArray;
	// }

	// function updatePositions() {
	// 	const randomPositions = generateRandomArray();
	// 	shapesz.forEach((shape, index) => {
	// 		gsap.to(shape, {
	// 			keyframes: randomPositions,
	// 			// duration: 15,
	// 			ease: "power4.out",
	// 		},index * 1.5
	// 		);
	// 	});
	// 	requestAnimationFrame(updatePositions);
	// }
	// updatePositions(); // Start the animation loop

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	// function scaleShapes() {
	// 	const scaleTl = gsap.timeline({
	// 		yoyo: true,
	// 		repeat: -1,
	// 		// repeatDelay: 5, // in seconds
	// 		delay: 5,
	// 		onUpdate: () => {
	// 			// Update scaleX and scaleY with new random values for each shape
	// 			scaleTl.to(shapes, 0.75, {
	// 				scaleX: () => gsap.utils.random(0.25, 1.5),
	// 				scaleY: () => gsap.utils.random(0.35, 1.5),
	// 				// ease: "power4.out",
	// 			});
	// 		},
	// 	});

	// 	// Scale animation
	// 	scaleTl.to(
	// 		shapes,
	// 		0.5,
	// 		{
	// 			scaleX: () => gsap.utils.random(0.75, 1.5),
	// 			ease: "power4.out",
	// 		},
	// 		0
	// 	);

	// 	scaleTl.to(
	// 		shapes,
	// 		0.5,
	// 		{
	// 			scaleY: () => gsap.utils.random(0.75, 1.5),
	// 			ease: "power4.out",
	// 		},
	// 		0
	// 	);
	// }
	// scaleShapes();

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	movez.eventCallback("onRepeat", () => {
		// shuffleArray(positions);
		// gsap.set(shapes, { fill: "#ffffff" });
		// masterMorphTL.play()
		// scaleShape.Pause();
	});

	function resetMorph() {
		const morphDelay = 1

		const ResetMorphTL1 = gsap.timeline({
			repeat: -1,
			// yoyo: true,
			delay: morphDelay,
		});
		ResetMorphTL1.to("#rec_1", {
			morphSVG: { shape: "#rec_1" },
			duration: durationMorph,
		});
		const ResetMorphTL2 = gsap.timeline({
			repeat: -1,
			// yoyo: true,
			delay: morphDelay,
		});
		ResetMorphTL2.to("#rec_2", {
			morphSVG: { shape: "#rec_2" },
			duration: durationMorph,
		});
		const ResetMorphTL3 = gsap.timeline({
			repeat: -1,
			// yoyo: true,
			delay: morphDelay,
		});
		ResetMorphTL3.to("#rec_3", {
			morphSVG: { shape: "#rec_3" },
			duration: durationMorph,
		});
		const ResetMorphTL4 = gsap.timeline({
			repeat: -1,
			// yoyo: true,
			delay: morphDelay,
		});
		ResetMorphTL4.to("#rec_4", {
			morphSVG: { shape: "#rec_4" },
			duration: durationMorph,
		});
		const ResetMorphTL5 = gsap.timeline({
			repeat: -1,
			// yoyo: true,
			delay: morphDelay,
		});
		ResetMorphTL5.to("#rec_5", {
			morphSVG: { shape: "#rec_5" },
			duration: durationMorph,
		});
	}


	// function morphShapes() {
	// const durationMorph = 1;
	// const masterMorphTL = gsap.timeline({ repeat: -1, yoyo: true, delay: 5 });

	// function createMorphTL(target, shapes) {
	// 	const morphTL = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		delay: 5,
	// 	});

	// 	shapes.forEach((shape) => {
	// 		morphTL.to(target, {
	// 			morphSVG: { shape: shape },
	// 			duration: durationMorph,
	// 			stagger: {
	// 				from: "random",
	// 				amount: 1,
	// 			},
	// 		});
	// 	});

	// 	// return morphTL;
	// }

	// const morphTL1 = createMorphTL("#rec_1", [
	// 	"#rec_1_a",
	// 	"#rec_1_b",
	// 	"#rec_1_c",
	// ]);
	// const morphTL2 = createMorphTL("#rec_2", [
	// 	"#rec_2_a",
	// 	"#rec_2_b",
	// 	"#rec_2_c",
	// ]);
	// const morphTL3 = createMorphTL("#rec_3", [
	// 	"#rec_3_b",
	// 	"#rec_3_a",
	// 	"#rec_3_c",
	// ]);
	// const morphTL4 = createMorphTL("#rec_4", [
	// 	"#rec_4_b",
	// 	"#rec_4_a",
	// 	"#rec_4_c",
	// ]);
	// const morphTL5 = createMorphTL("#rec_5", [
	// 	"#rec_5_a",
	// 	"#rec_5_b",
	// 	"#rec_5_c",
	// ]);

	// masterMorphTL.add(morphTL, morphTL1, morphTL2, morphTL3, morphTL4, morphTL5);
	// }
	//   morphShapes()
	// movez.eventCallback("onStart", () => {
	// 	// Pause each individual morph timeline

	// });

	// function repeatSequence() {
	// 	// Stop the animation after 30 seconds
	// 	setTimeout(() => {
	// 		// scaleTl.to(shapes, { scaleX: 1, scaleY: 1, duration: 1 }); // Set scaleX and scaleY to 1
	// 		// Restart the animation after 10 seconds
	// 		setTimeout(() => {
	// 			scaleTl.resume(); // Restart the animation, and it will repeat again
	// 			repeatSequence(); // Repeat the entire sequence
	// 		}, 5000);
	// 	}, 58000);
	// }

	// const scaleTl = scaleShapes();
	// repeatSequence(); // Start the sequence

	// function morphShapes() {
	// 	const durationMorph = 1;
	// 	const masterMorphTL = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 	});
	// 	const morphDelay = 6;

	// 	const morphTL1 = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		delay: morphDelay,
	// 	});
	// 	morphTL1.to("#rec_1", {
	// 		morphSVG: { shape: "#rec_1_a" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL1.to("#rec_1", {
	// 		morphSVG: { shape: "#rec_1_b" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL1.to("#rec_1", {
	// 		morphSVG: { shape: "#rec_1_c" },
	// 		duration: durationMorph,
	// 	});

	// 	const morphTL2 = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		delay: morphDelay,
	// 	});
	// 	morphTL2.to("#rec_2", {
	// 		morphSVG: { shape: "#rec_2_a" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL2.to("#rec_2", {
	// 		morphSVG: { shape: "#rec_2_b" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL2.to("#rec_2", {
	// 		morphSVG: { shape: "#rec_2_c" },
	// 		duration: durationMorph,
	// 	});

	// 	const morphTL3 = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		delay: morphDelay,
	// 	});
	// 	morphTL3.to("#rec_3", {
	// 		morphSVG: { shape: "#rec_3_b" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL3.to("#rec_3", {
	// 		morphSVG: { shape: "#rec_3_a" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL3.to("#rec_3", {
	// 		morphSVG: { shape: "#rec_3_c" },
	// 		duration: durationMorph,
	// 	});

	// 	const morphTL4 = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		delay: morphDelay,
	// 	});
	// 	morphTL4.to("#rec_4", {
	// 		morphSVG: { shape: "#rec_4_b" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL4.to("#rec_4", {
	// 		morphSVG: { shape: "#rec_4_a" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL4.to("#rec_4", {
	// 		morphSVG: { shape: "#rec_4_c" },
	// 		duration: durationMorph,
	// 	});

	// 	const morphTL5 = gsap.timeline({
	// 		repeat: -1,
	// 		yoyo: true,
	// 		delay: morphDelay,
	// 	});
	// 	morphTL5.to("#rec_5", {
	// 		morphSVG: { shape: "#rec_5_a" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL5.to("#rec_5", {
	// 		morphSVG: { shape: "#rec_5_b" },
	// 		duration: durationMorph,
	// 	});
	// 	morphTL5.to("#rec_5", {
	// 		morphSVG: { shape: "#rec_5_c" },
	// 		duration: durationMorph,
	// 	});
	// }
	// morphShapes();

	// Fisher-Yates shuffle function

	// Select the shapes

	// const filterTl = gsap.timeline({ delay: 3.5 });

	// const filterTl2 = gsap.timeline({ ease: "power4.out", delay: 10 });

	// function getRandom(min, max) {
	// 	return Math.random() * (max - min) + min;
	// }

	// Create a GSAP timeline
	const mainTl = gsap.timeline({
		repeat: -1,
		delay: 6,
		// duration: 25,
		onComplete: () => {
			// console.log("All shapes reached final position");
			// Stop morphTL and scaleTL
			// morphTL2.pause();
			scaleTl.pause();
		},
		onStart: () => {
			// console.log("Shapes start moving again");
			// Restart morphTL and scaleTL
			// morphTL2.play();
			// scaleTl.play();
		},
		onUpdate: () => {},
	});

	// console.log(mainTl.endTime());
	mainTl.restart(true, false);
	var total = mainTl.totalDuration();
	// console.log(total);

	function changeStdDeviation(value) {
		var feGaussianBlur = document.querySelector("#blur feGaussianBlur");
		shapes.forEach((shape) => {
			gsap.to(shape, { filter: "url(#blur)", delay: 5, duration: 1.25 });
		});
		feGaussianBlur.setAttribute("stdDeviation", value);
	}
	function changeStdDeviationMain(value) {
		var feGaussianBlur = document.querySelector("#main-blur feGaussianBlur");
		shapes.forEach((shape) => {
			gsap.to(".moving-elements", {
				filter: "url(#main-blur)",
				delay: 3,
				duration: 1.25,
			});
		});
		feGaussianBlur.setAttribute("stdDeviation", value);
	}

	// Loop through positions and create animations
	// shuffleArray(positions);
	const newSpeed = gsap.utils.random(1.25, 2.25);

	// positions.forEach((position, index) => {
	// 	shapesz.forEach((shape, shapeIndex) => {
	// 		mainTl.to(
	// 			shape,
	// 			3,
	// 			{
	// 				x:
	// 					(positions[(index + shapeIndex) % positions.length].x * newSpeed) /
	// 					2,
	// 				y:
	// 					(positions[(index + shapeIndex) % positions.length].y * newSpeed) /
	// 					3,
	// 				ease: "power4.out",
	// 				stagger: {
	// 					from: "random",
	// 					amount: 5,
	// 				},
	// 				onRepeat: () => {
	// 					console.log("Repeat");
	// 					scaleTl.kill();

	// 					// morphTL.to({}, 4, {});
	// 					// gsap.to(shape, { fill: "#fe45e4", delay: 1, duration: 1.25 });
	// 				},
	// 				onStart: () => {
	// 					// console.log("Start");
	// 					// gsap.to(shape, { fill: "#ff0000", delay: 1, duration: 1.25 });
	// 				},
	// 				onComplete: () => {
	// 					// console.log("Complete");
	// 					// gsap.fromTo(shape, { fill: "#ff0000"}, { fill: "#fe45e4", delay: 1, duration: 1.25 });
	// 				},
	// 				repeatRefresh: true,
	// 			},
	// 			index * 1.5
	// 		);
	// 	});
	// });

	// shapes.forEach((shape, index) => {
	// 	gsap.to(shape, 5, {
	// 	  keyframes: [
	// 		{ x: 250, y: -200 },
	// 		{ x: -550, y: -300 },
	// 		{ x: 460, y: 250 },
	// 		{ x: -450, y: -500 },
	// 		{ x: 460, y: 350 },
	// 		{ x: 400, y: -150 },
	// 		{ x: -420, y: -400 },
	// 		{ x: -100, y: 350 },
	// 		{ x: 200, y: -550 },
	// 		{ x: -100, y: 250 },
	// 		{ x: -250, y: -100 },
	// 		{ x: 400, y: 450 },
	// 		{ x: -300, y: -500 },
	// 		{ x: 460, y: 200 },
	// 		{ x: -650, y: -300 },
	// 		{ x: -220, y: 300 },
	// 		{ x: 660, y: 150 },
	// 		{ x: -300, y: 500 },
	// 		{ x: -560, y: -150 },
	// 		{ x: -420, y: 300 },
	// 		{ x: 350, y: 300 },
	// 		{ x: 220, y: -200 },
	// 		{ x: 450, y: -400 },
	// 		{ x: 350, y: 300 },
	// 		{ x: -360, y: -450 },
	// 		{ x: -620, y: 300 },
	// 	],
	// 	  ease: 'bounce.out',
	// 	  repeat: -1,
	// 	  repeatDelay: 5 , // Add a delay based on the index to stagger the animations
	// 	});
	//   });

	var cursor = document.querySelector(".custom-cursor");
	var links = document.querySelectorAll("a");
	var initCursor = false;
	var speed = 0.3; // Adjust the speed value as needed

	for (var i = 0; i < links.length; i++) {
		var selfLink = links[i];

		selfLink.addEventListener("mouseover", function () {
			cursor.classList.add("moving-elements");
		});
		selfLink.addEventListener("mouseout", function () {
			cursor.classList.remove("moving-elements");
		});
	}

	window.onmousemove = function (e) {
		var mouseX = e.clientX;
		var mouseY = e.clientY;

		if (!initCursor) {
			TweenLite.to(cursor, speed, {
				// Use the 'speed' variable here
				opacity: 1,
			});
			initCursor = true;
		}

		TweenLite.to(cursor, speed, {
			// Use the 'speed' variable here
			top: mouseY + "px",
			left: mouseX + "px",
		});
	};

	window.onmouseout = function (e) {
		TweenLite.to(cursor, speed, {
			// Use the 'speed' variable here
			opacity: 0,
		});
		initCursor = false;
	};
});
