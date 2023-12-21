document.addEventListener("DOMContentLoaded", (event) => {
	// const shapes = document.querySelectorAll(".shapes");
	const shapes = document.querySelectorAll(".shapes");
	const shape = document.querySelectorAll(".shapes");

	gsap.set(shapes, { transformOrigin: "50% 50%" });
	const duration = 1.5;
	const ease = "power4.out";

	// Define the positions

	const positions = [
		// { x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 250, y: -200 },
		{ x: -550, y: -300 },
		{ x: -250, y: -100 },
		{ x: -100, y: 350 },
		{ x: 200, y: -550 },
		{ x: 400, y: 450 },
		{ x: -100, y: 250 },
		{ x: 460, y: 200 },
		{ x: -300, y: -500 },
		{ x: -220, y: 300 },
		{ x: 660, y: 150 },
		{ x: -650, y: -300 },
		{ x: 220, y: -200 },
		{ x: -300, y: 500 },
		{ x: -620, y: 300 },
		{ x: 450, y: -400 },
		{ x: -360, y: 450 },
		{ x: -560, y: -150 },
		{ x: -420, y: 300 },
		{ x: 460, y: 350 },
		{ x: 350, y: 300 },
		{ x: 460, y: 250 },
		{ x: -420, y: -400 },
		{ x: 350, y: 300 },
		{ x: -450, y: -500 },
		{ x: 400, y: -150 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
	];
	console.log(positions.length)

	function scaleShapes() {
		const scaleTl = gsap.timeline({
			yoyo: true,
			repeat: -1,
			repeatDelay: 5, // in seconds
			delay: 5,
			onUpdate: () => {
				// Update scaleX and scaleY with new random values for each shape
				scaleTl.to(shapes, 0.75, {
					scaleX: () => gsap.utils.random(0.25, 1.5),
					scaleY: () => gsap.utils.random(0.35, 1.5),
					// ease: "power4.out",
				});
			},
		});

		// Scale animation
		scaleTl.to(
			shapes,
			0.5,
			{
				scaleX: () => gsap.utils.random(0.75, 1.5),
				ease: "power4.out",
			},
			0
		);

		scaleTl.to(
			shapes,
			0.5,
			{
				scaleY: () => gsap.utils.random(0.75, 1.5),
				ease: "power4.out",
			},
			0
		);
	}
	scaleShapes();

	function morphShapes() {
		const durationMorph = 1;
		const masterMorphTL = gsap.timeline({
			repeat: -1,
			yoyo: true,
		});
		const morphDelay = 6;

		const morphTL1 = gsap.timeline({
			repeat: -1,
			yoyo: true,
			delay: morphDelay,
		});
		morphTL1.to("#rec_1", {
			morphSVG: { shape: "#rec_1_a" },
			duration: durationMorph,
		});
		morphTL1.to("#rec_1", {
			morphSVG: { shape: "#rec_1_b" },
			duration: durationMorph,
		});
		morphTL1.to("#rec_1", {
			morphSVG: { shape: "#rec_1_c" },
			duration: durationMorph,
		});

		const morphTL2 = gsap.timeline({
			repeat: -1,
			yoyo: true,
			delay: morphDelay,
		});
		morphTL2.to("#rec_2", {
			morphSVG: { shape: "#rec_2_a" },
			duration: durationMorph,
		});
		morphTL2.to("#rec_2", {
			morphSVG: { shape: "#rec_2_b" },
			duration: durationMorph,
		});
		morphTL2.to("#rec_2", {
			morphSVG: { shape: "#rec_2_c" },
			duration: durationMorph,
		});

		const morphTL3 = gsap.timeline({
			repeat: -1,
			yoyo: true,
			delay: morphDelay,
		});
		morphTL3.to("#rec_3", {
			morphSVG: { shape: "#rec_3_b" },
			duration: durationMorph,
		});
		morphTL3.to("#rec_3", {
			morphSVG: { shape: "#rec_3_a" },
			duration: durationMorph,
		});
		morphTL3.to("#rec_3", {
			morphSVG: { shape: "#rec_3_c" },
			duration: durationMorph,
		});

		const morphTL4 = gsap.timeline({
			repeat: -1,
			yoyo: true,
			delay: morphDelay,
		});
		morphTL4.to("#rec_4", {
			morphSVG: { shape: "#rec_4_b" },
			duration: durationMorph,
		});
		morphTL4.to("#rec_4", {
			morphSVG: { shape: "#rec_4_a" },
			duration: durationMorph,
		});
		morphTL4.to("#rec_4", {
			morphSVG: { shape: "#rec_4_c" },
			duration: durationMorph,
		});

		const morphTL5 = gsap.timeline({
			repeat: -1,
			yoyo: true,
			delay: morphDelay,
		});
		morphTL5.to("#rec_5", {
			morphSVG: { shape: "#rec_5_a" },
			duration: durationMorph,
		});
		morphTL5.to("#rec_5", {
			morphSVG: { shape: "#rec_5_b" },
			duration: durationMorph,
		});
		morphTL5.to("#rec_5", {
			morphSVG: { shape: "#rec_5_c" },
			duration: durationMorph,
		});
	}
	morphShapes();

	// Fisher-Yates shuffle function
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	// Select the shapes
	const shapesz = ["#rec_1", "#rec_2", "#rec_3", "#rec_4", "#rec_5"];

	// const filterTl = gsap.timeline({ delay: 3.5 });

	const filterTl2 = gsap.timeline({ ease: "power4.out", delay: 10 });

	// filterTl2.to(".moving-elements", {
	// 	filter: "url(#main-blur)",
	// 	duration: 4.1,
	// 	ease: "power4.out"
	// 	// paused: true,
	// });

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	// Create a GSAP timeline
	const tl = gsap.timeline({
		repeat: -1,
		delay: 6,
		// duration: 25,
		onRepeat: () => {
			console.log("Repeat");
		},
		// onStart: () => {
		// 	console.log("Start");
		// },
		// onComplete: () => {
		// 	console.log("Complete");
		// },
		onUpdate: () => {
			// shuffleArray(positions);
			// Update the animation targets with the newly shuffled positions
			// shapesz.forEach((shape, shapeIndex) => {
			// 	tl.to(
			// 		shape,
			// 		5,
			// 		{
			// 			x: positions[shapeIndex % positions.length].x * 1.5,
			// 			y: positions[shapeIndex % positions.length].y * 1.25,
			// 			ease: "back.out(1.7)",
			// 		},
			// 		shapeIndex
			// 	);
			// });
			// const newSpeed = getRandom(9, 35);
			// changeStdDeviation(newSpeed);
			// const newSpeed = gsap.utils.random(20, 27);
			// changeStdDeviation(newSpeed);
			// console.log("Up")
		},
	});

	function changeStdDeviation(value) {
		var feGaussianBlur = document.querySelector("#blur feGaussianBlur");
		shapes.forEach((shape) => {
			gsap.to(shape, { filter: "url(#blur)", delay: 1, duration: 1.25 });
		});
		feGaussianBlur.setAttribute("stdDeviation", value);
	}

	// Loop through positions and create animations
	// shuffleArray(positions);
	const newSpeed = gsap.utils.random(1.25, 2.25);

	positions.forEach((position, index) => {
		shapesz.forEach((shape, shapeIndex) => {
			tl.to(
				shape,
				2,
				{
					x: positions[(index + shapeIndex) % positions.length].x * newSpeed/2,
					y: positions[(index + shapeIndex) % positions.length].y * newSpeed/3,
					ease: "power4.out",
					stagger: { 
						from: "random", 
						amount: 5 
					  }
					// repeatRefresh: true,
				},
				index* 1.15,
			);
		});
	});

	// Add a pause for 3 seconds
	// tl.to({}, 0, {});
	// Start the animation
	// tl.play();

	// function getRandomScale(min, max) {
	// 	return Math.random() * (max - min) + min;
	// }


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
