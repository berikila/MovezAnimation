document.addEventListener("DOMContentLoaded", (event) => {
	// const shapes = document.querySelectorAll(".shapes");
	const shapes = document.querySelectorAll(".shapes");
	// const shape = document.querySelectorAll(".shapes");
	const shapesz = ["#rec_1", "#rec_2", "#rec_3", "#rec_4", "#rec_5"];

	gsap.set(shapes, { transformOrigin: "50% 50%" });
	const duration = 1.5;
	const ease = "power4.out";

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}
	// const positions = [
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	{ x: 250, y: -200 },
	// 	{ x: -550, y: -300 },
	// 	{ x: 460, y: 250 },
	// 	{ x: -450, y: -500 },
	// 	{ x: 460, y: 350 },
	// 	{ x: -100, y: 250 },
	// 	{ x: -250, y: -100 },
	// 	{ x: 400, y: 450 },
	// 	{ x: -420, y: -400 },
	// 	{ x: -100, y: 350 },
	// 	{ x: 200, y: -550 },
	// 	{ x: 400, y: -150 },
	// 	{ x: 350, y: 300 },
	// 	{ x: 220, y: -200 },
	// 	{ x: 350, y: -400 },
	// 	{ x: 350, y: 300 },
	// 	{ x: -360, y: -450 },
	// 	{ x: -220, y: 300 },
	// 	{ x: -300, y: -500 },
	// 	{ x: 460, y: 200 },
	// 	{ x: -650, y: -300 },
	// 	{ x: -220, y: 300 },
	// 	{ x: 460, y: 150 },
	// 	{ x: -300, y: 500 },
	// 	{ x: -360, y: -150 },
	// 	{ x: -420, y: 300 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// 	// { x: 0, y: 0 },
	// ];

	// shuffleArray(positions);

	// const newPosition = shuffleArray(positions);
	// Function to generate random positions within the viewport

	function generateRandomPositions() {
		const randomPositions = [];

		for (let i = 0; i < 25; i++) {
			const x = Math.random() * window.innerWidth - window.innerWidth / 2;
			const y = Math.random() * window.innerHeight - window.innerHeight / 2;
			randomPositions.push({ x, y });
		}

		return randomPositions;
	}

	// Example usage:
	//   const elapsedTime = clock.getElapsedTime()/* get elapsed time from your animation */;
	//   const frameNumber = Math.floor((elapsedTime % duration) / frameRate); /* calculate which frame you're on based

	function animateShapes() {
		const randomPositions = generateRandomPositions();

		// setInterval(randomPositions, 1000);

		const movez = gsap.timeline({
			repeat: -1,
			repeatDelay: 1,
			delay: 2,
		});

		shapes.forEach((shape, index) => {
			randomPositions.forEach((position, positionIndex) => {
				movez.to(
					shape,
					{
						x: position.x,
						y: position.y,
						ease: "power4.out",
						duration: 5,
					},
					index * 0.5 + positionIndex * 1
				);
			});

			movez.to(shape, {
				duration: 1.5,
				x: 0,
				y: 0,
			});
		});

		movez.eventCallback("onComplete", () => {
			// shuffleArray(positions);
			gsap.set(shapes, { fill: "#ffffff" });
		});
	}

	// Example usage:
	let startTime;

	function startAnimation() {
		startTime = performance.now();
		animateShapes();
	}

	// Call startAnimation whenever you want to start the animation
	startAnimation();

	// const totalDuration = movez.totalDuration();
	// console.log(totalDuration);

	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
	}

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function scaleShapes() {
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

		return scaleTl;
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

	const filterTl2 = gsap.timeline({ ease: "power4.out", delay: 10 });

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

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
