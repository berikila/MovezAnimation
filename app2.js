document.addEventListener("DOMContentLoaded", function (event) {
	const shapes = document.querySelectorAll(".shapes");
	gsap.set(shapes, { transformOrigin: "50% 50%" });
	const filterTl = gsap.timeline({ delay: 3 });
	const filterTl2 = gsap.timeline({ delay: 3 });

	const recs = ["rec1", "rec2", "rec3", "rec4", "rec5"];

	filterTl.to(".moving-elements", { filter: "url(#main-blur)", duration: 1.1 });
	// filterTl.to(".shapes", { filter: "url(#blur)", duration: 1.1 });
	// filterTl2.to(recs, { filter: "url(#pictureFilter)", duration: 1.1 });

	function scaleShapes() {
		function getRandomScale(min, max) {
			return Math.random() * (max - min) + min;
		}

		const scaleTl = gsap.timeline({
			// yoyo: true,
			repeat: 6,
			// repeatDelay: 5,

			onUpdate: () => {
				// Update scaleX and scaleY with new random values for each shape

				setTimeout(function () {
					scaleTl.to(
						shapes,
						0.75,

						{
							scaleX: 1,
							scaleY: 1,
							// ease: "power4.out",
							// paused: true,
							// repeat: 1,
							// yoyo: true,
						}
					);
					setTimeout(function () {
						scaleTl.to(
							shapes,
							0.75,

							{
								scaleX: () => getRandomScale(0.25, 1.5),
								scaleY: () => getRandomScale(0.35, 1.5),
								// ease: "power4.out",
								// paused: true,
								// repeat: 1,
								// yoyo: true,
							}
						);
					}, 5000); // Adjust the timeout duration for restart
				}, 5000);

				// scaleTl.to(
				// 	shapes,
				// 	0.75,

				// 	{
				// 		scaleX: () => getRandomScale(0.25, 1.5),
				// 		scaleY: () => getRandomScale(0.35, 1.5),
				// 		// ease: "power4.out",
				// 		// paused: true,
				// 		// repeat: 1,
				// 		// yoyo: true,
				// 	}
				// );
			},
			onRepeat: () => {
				// Pause the timeline and restart after a timeout
				// setTimeout(function () {
				// 	scaleTl.revert();
				// 	setTimeout(function () {
				// 		scaleTl.restart();
				// 	}, 5000); // Adjust the timeout duration for restart
				// }, 5000);
			},
			onComplete: () => {
				scaleTl.to(
					shapes,
					0.75,

					{
						scaleX: 1,
						scaleY: 1,
						// ease: "power4.out",
						// paused: true,
						// repeat: 1,
						// yoyo: true,
					}
				);
			},
		});

		// // Scale animation
		// scaleTl.to(
		// 	shapes,
		// 	0.5,

		// 	{
		// 		scaleX: () => getRandomScale(0.5, 1.5),
		// 		ease: "power4.out",
		// 	},
		// 	0
		// );

		// scaleTl.to(
		// 	shapes,
		// 	0.5,

		// 	{
		// 		scaleY: () => getRandomScale(0.35, 1.5),
		// 		ease: "power4.out",
		// 	},
		// 	0
		// );

		// scaleTl.kill()
		// scaleTl.iteration(2)
		// setTimeout(function () {
		// 	scaleTl.pause();

		// 	setTimeout(function () {
		// 		scaleTl.restart();
		// 	}, 5000); // Adjust the timeout duration for restart
		// }, 5000);
	}
	scaleShapes();

	function morphShapes() {
		const durationMorph = 0.5;
		const masterMorphTL = gsap.timeline({
			repeat: -1,
			delay: 4,
			duration: 0.25,
			yoyo: true,
		});
		// const morphDelay = 4.5;
		const morphTL1 = gsap.timeline({
			repeat: -1,
			// delay: 4,
			yoyo: true,
			// repeatDelay: 5,
			// delay: morphDelay,
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
			// delay: 4,
			yoyo: true,
			// delay: morphDelay,
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
			// delay: 4,
			yoyo: true,
			// delay: 4,
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
			// delay: 4,
			yoyo: true,
			// delay: morphDelay,
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
			// delay: 4,
			// delay: morphDelay,
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

	
		
		
		masterMorphTL.add(morphTL1, "0");
		masterMorphTL.add(morphTL2, "0");
		masterMorphTL.add(morphTL3, "0");
		masterMorphTL.add(morphTL4, "0");
		masterMorphTL.add(morphTL5, "0");	

		// setTimeout(function () {
		// 	masterMorphTL.revert();
		// 	setTimeout(function () {
		// 		masterMorphTL.restart();
		// 	}, 5000); // Adjust the timeout duration for restart
		// }, 5000);
		
	}
	morphShapes();

	function bounceModifier(min, max) {
		var range = max - min;
		return function (value) {
			value = parseFloat(value);
			var cycle = Math.abs((value - min) / range);
			var clippedValue = (cycle % 1) * range;
			var isEvenCycle = Math.floor(cycle) % 2 === 0;
			return (isEvenCycle ? min + clippedValue : max - clippedValue) + "px";
		};
	}

	function getRandom(min, max) {
		return Math.random() * (max - min) + min;
	}

	function initRandomMovingElements(selectorParent) {
		const elementsWrapper = document.querySelector(".scene");
		const movingElementsWrapper = document.querySelector(".moving-elements");
		const wrapperHeight = elementsWrapper.offsetHeight;
		const wrapperWidth = elementsWrapper.offsetWidth;

		document.querySelectorAll(".shapes").forEach((element) => {
			const xMax = wrapperWidth - element.offsetWidth;
			const yMax = wrapperHeight - element.offsetHeight;

			let speed = getRandom(15, 28);

			// const moveShapes = gsap.timeline();

			gsap.to(element, {
				x: getRandom(400, xMax),
				y: getRandom(400, yMax),
				duration: getRandom(5, 8),
                delay: getRandom(3, 5),
				repeat: -1,
				// repeatRefresh: true,
				ease: "back.out(1.7)",
				modifiers: {
					x: bounceModifier(0, xMax),
					y: bounceModifier(0, yMax),
				},
				onUpdate: () => {
					// Change speed smoothly on each update
					const newSpeed = getRandom(15, 28);
					// gsap.to(element, {
					// 	duration: 0.25,
					// 	ease: "power2.inOut",
					// 	overwrite: "auto",
					// 	duration: newSpeed,
					// });
					const timeline = gsap.getTweensOf(element)[0];
					const progress = timeline.progress();
					const oscillationFactor = Math.sin(progress * Math.PI * 2);
					const newStdDeviation = newSpeed * 1 * (1 + oscillationFactor);
					changeStdDeviation(newStdDeviation);
				},
			});

			// setTimeout(function () {
			// 	moveShapes.revert();
			// 	setTimeout(function () {
			// 		moveShapes.restart();
			// 	}, 5000); // Adjust the timeout duration for restart
			// }, 5000);

			// moveShapes.kill(2);
			// moveShapes.to(element, {
			// 	x: 300,
			// 	y: 100,
			// 	duration: 1, // Adjust the duration as needed
			// 	delay: 1, // Adjust the delay as needed
			// });
		});
	}

	initRandomMovingElements(document);

	function changeStdDeviation(value) {
		// Get the feGaussianBlur element
		var feGaussianBlur = document.querySelector("#blur feGaussianBlur");
		gsap.to(".shapes", { filter: "url(#blur)", duration: 1.1 });

		// Change the stdDeviation attribute
		feGaussianBlur.setAttribute("stdDeviation", value);
	}
	

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
