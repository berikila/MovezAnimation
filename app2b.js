document.addEventListener("DOMContentLoaded", function (event) {
	const shapes = document.querySelectorAll(".shapes");
	gsap.set(shapes, { transformOrigin: "50% 50%" });
	const filterTl = gsap.timeline({ delay: 3 });

	// filterTl.to(".shapes", { filter: "url(#blur)", duration: 1.1 });
	filterTl.to(".moving-elements", { filter: "url(#main-blur)", duration: 1.1 });

	function getRandomScale(min, max) {
		return Math.random() * (max - min) + min;
	}

	// function bounceModifier(min, max) {
	// 	var range = max - min;
	// 	return function (value) {
	// 		value = parseFloat(value);
	// 		var cycle = Math.abs((value - min) / range);
	// 		var clippedValue = (cycle % 1) * range;
	// 		var isEvenCycle = Math.floor(cycle) % 2 === 0;
	// 		return (isEvenCycle ? min + clippedValue : max - clippedValue) + "px";
	// 	};
	// }
	function bounceModifier(min, max, duration) {
		var range = max - min;
		var startTime = performance.now();
	
		return function (value) {
			value = parseFloat(value);
			var currentTime = performance.now();
			var elapsedTime = (currentTime - startTime) / 2000; // Convert milliseconds to seconds
	
			if (elapsedTime >= duration) {
				// If the specified duration has passed, return the static value
				return value + "px";
			}
	
			var cycle = Math.abs((value - min) / range);
			var clippedValue = (cycle % 1) * range;
			var isEvenCycle = Math.floor(cycle) % 4 === 0;
			var dynamicValue = isEvenCycle ? min + clippedValue : max - clippedValue;
	
			// Smoothly interpolate between the dynamic value and the static value
			var t = elapsedTime / duration;
			var smoothValue = value + t * (dynamicValue - value);
	
			return smoothValue + "px";
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

			// Initial random speed
			let speed = getRandom(12, 18);
			const delay = getRandom(3, 5);

			gsap.to(element, {
				x: getRandom(400, xMax),
				y: getRandom(400, yMax),
				duration: speed,
				delay: delay,
				repeat: -1,
				// repeatRefresh: true,
				// ease: "back.out(1.7)",
				modifiers: {
					x: bounceModifier(0, xMax, 10), // Stop bouncing after 5 seconds and smoothly move to x: 0
					y: bounceModifier(0, yMax, 10), // Stop bouncing after 5 seconds and smoothly move to y: 0
				},
				onRepeat: () => {
					console.log("Repeat");
				},
				onUpdate: () => {
					console.log("Update");
				},
				onComplete: () => {
					console.log("Complete");
				},
				onStart: () => {
					// Change speed smoothly on each update
					// const newSpeed = getRandom(3, 5);
					// // gsap.to(element, { duration: 0.5, ease: "power2.inOut", overwrite: "auto", duration: newSpeed });
					// const timeline = gsap.getTweensOf(element)[2];
					// const progress = timeline.progress();
					// const oscillationFactor = Math.sin(progress * Math.PI * 2);
					// const newStdDeviation = newSpeed * 2 * (1 + oscillationFactor);

					// changeStdDeviation(newStdDeviation);
				},
			});
		});
	}

	// function changeStdDeviation(value) {
	// 	var feGaussianBlur = document.querySelector("#blur feGaussianBlur");
	// 	feGaussianBlur.setAttribute("stdDeviation", value);
	// }

	initRandomMovingElements(document);

	function changeStdDeviation(value) {
		var feGaussianBlur = document.querySelector("#blur feGaussianBlur");
		gsap.to(".shapes", { filter: "url(#blur)", duration: 1.1 });
		feGaussianBlur.setAttribute("stdDeviation", value);
	}
	//learn how this was made: https://www.creativecodingclub.com/

	//learn how this was made: https://www.creativecodingclub.com/
	// document.addEventListener("click", () =>
	// 	gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
	// );

	function scaleShapes() {
		const scaleTl = gsap.timeline({
			yoyo: true,
			repeat: -1,
			repeatDelay: 11, // in seconds
			delay: 4,

			onUpdate: () => {
				// Update scaleX and scaleY with new random values for each shape
				scaleTl.to(shapes, 0.75, {
					scaleX: () => getRandomScale(0.25, 1.5),
					scaleY: () => getRandomScale(0.35, 1.5),
					// ease: "power4.out",
				});
			},
		});

		// Scale animation
		scaleTl.to(
			shapes,
			0.5,

			{
				scaleX: () => getRandomScale(0.75, 1.5),
				ease: "power4.out",
			},
			0
		);

		scaleTl.to(
			shapes,
			0.5,

			{
				scaleY: () => getRandomScale(0.75, 1.5),
				ease: "power4.out",
			},
			0
		);
	}
	scaleShapes();

	function morphShapes() {
		const durationMorph = 1;
		const masterMorphTL = gsap.timeline({ repeat: -1, yoyo: true });
		const morphDelay = 4.5;

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
			delay: 4,
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

// $(document).ready(function(){
//     animateDiv('.a');
//     animateDiv('.b');
//     animateDiv('.c');
//     animateDiv('.d');
//     animateDiv('.e');
//     animateDiv('.rectangle');

//     animateDiv('.casssa_logo');
//     animateDiv('.s1');
// });

// gsap.set(".rectangle", {x: 500, y: 300})

// function makeNewPosition(){

//     // Get viewport dimensions (remove the dimension of the div)
//     var h = $(window).height() - 50;
//     var w = $(window).width() - 50;

//     var nh = Math.floor(Math.random() * h);
//     var nw = Math.floor(Math.random() * w);

//     return [nh,nw];

// }

// function animateDiv(myclass){
//     var newq = makeNewPosition();
//     $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
//       animateDiv(myclass);
//     });

// };
