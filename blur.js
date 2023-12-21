document.addEventListener("DOMContentLoaded", (event) => {
	const svg = document.querySelector("svg");
	const shapes = document.querySelectorAll(".shapes");
	const shape = document.querySelector(".casssa_logo");

	const rec1 = document.getElementById("rec_1");
	const svgs = document.getElementById("casssa_logo");

	gsap.set(shapes, { transformOrigin: "50% 50%" });
	const filterTl = gsap.timeline({ delay: 3 });

	const animationDuration = 1.5; // Adjust the duration in seconds

	// function getRandomPosition() {
	// 	const randomX = (Math.random() - 0.65) * 800;
	// 	const randomY = (Math.random() - 0.5) * 800;

	// 	// Check if the new position is too close to any other shape
	// 	const isTooClose = Array.from(shapes).some((otherShape) => {
	// 		const otherX = parseFloat(otherShape.style.left || 0);
	// 		const otherY = parseFloat(otherShape.style.top || 0);
	// 		const distance = Math.hypot(randomX - otherX, randomY - otherY);
	// 		return distance < 250; // Adjust the minimum distance as needed
	// 	});

	// 	// If too close, recursively call the function to get a new position
	// 	if (isTooClose) {
	// 		return getRandomPosition();
	// 	}

	// 	return { x: randomX, y: randomY };
	// }

	// function animateShape(shape) {
	// 	moveTl.to(shape, {
	// 		...getRandomPosition(),
	// 		duration: animationDuration,
	// 		onprogress: function () {
	// 			animateShape(shape);
	// 		},
	// 	});
	// 	filterTl.to(".shapes", { filter: "url(#blur)", duration: 1.1 });
	// }

	// shapes.forEach((shape) => {
	// 	// animateShape(shape);
	// });

	// // Initial state: Set scaleX and scaleY to 1
	// // gsap.set(shapes, { scaleX: 1, scaleY: 1 });

	// // Pause scaleTl at the start
	// // scaleTl.pause();
	// // Reset to (0, 0) after a delay and pause scaleTl
	// moveTl.to(".shapes", {
	// 	x: 0,
	// 	y: 0,
	// 	duration: 1.1,
	// 	delay: animationDuration,
	// 	onprogress: function () {
	// 		// scaleTl.pause(); // Pause scaleTl when resetting position
	// 		gsap.set(shapes, { scaleX: 1, scaleY: 1 }); // Reset scaleX and scaleY to 0
	// 		filterTl.to(".shapes", { filter: "none", duration: 1.1 }); // Disable the filter
	// 	},
	// 	onComplete: function () {
	// 		// Delay and resume scaleTl after resetting position
	// 		filterTl.to(".shapes", { filter: "url(#blur)", duration: 1.1 });
	// 		gsap.delayedCall(1.1, function () {
	// 			// scaleTl.resume(); // Resume scaleTl after a delay
	// 		});
	// 	},
	// });
	const staggerAmount = 0.25; // Adjust the stagger amount as needed

	const ease = "power4.out";
	const duration = 0.75;
	const staggerDelay = 1.2;

	// Create a master timeline to contain all the individual timelines
	const masterTl = gsap.timeline({ repeat: -1, yoyo: true });

	// const moveTla = gsap.timeline();
	// Timeline 1
	const moveTl1 = gsap.timeline({ repeat: -1,  });

	moveTl1.to(".shapes", { x: 0, y: 0, duration: duration, delay: 3 });
	moveTl1.to("#rec_1", { x: 200, y: -50, ease: ease, duration: duration });
	moveTl1.to("#rec_2", { x: -250, y: -250, ease: ease, duration: duration });
	moveTl1.to("#rec_3", { x: -450, y: -100, ease: ease, duration: duration });
	moveTl1.to("#rec_4", { x: -100, y: 50, ease: ease, duration: duration });
	moveTl1.to("#rec_5", { x: 460, y: 200, ease: ease, duration: duration });
	// Timeline 3
	// const moveTl2 = gsap.timeline({});
	moveTl1.to("#rec_1", { x: 50, y: 100, ease: ease, duration: duration });
	moveTl1.to("#rec_2", { x: -250, y: -100, ease: ease, duration: duration });
	moveTl1.to("#rec_3", { x: -100, y: 50, ease: ease, duration: duration });
	moveTl1.to("#rec_4", { x: -20, y: 100, ease: ease, duration: duration });
	moveTl1.to("#rec_5", { x: 160, y: 50, ease: ease, duration: duration });

	// Timeline 2
	// const moveTl3 = gsap.timeline();
	moveTl1.to("#rec_1", { x: 250, y: -200, ease: ease, duration: duration });
	moveTl1.to("#rec_2", { x: -550, y: -300, ease: ease, duration: duration });
	moveTl1.to("#rec_3", { x: -300, y: 0, ease: ease, duration: duration });
	moveTl1.to("#rec_4", { x: -20, y: 300, ease: ease, duration: duration });
	moveTl1.to("#rec_5", { x: 460, y: 50, ease: ease, duration: duration });
	moveTl1.to(".shapes", { x: 0, y: 0, duration: duration,  });

	// const moveTl = gsap.timeline();
	// moveTl.to(".shapes", { x: 0, y: 0, duration: duration,  });
	// moveTla.to({}, 3, {});
	// Add each individual timeline to the master timeline
	// masterTl.add(moveTla);
	// 	masterTl.add(moveTl1, );
	// 	masterTl.add(moveTl2,);
	// 	masterTl.add(moveTl3, );
	// 	// masterTl.add(moveTl,"-=1.25");

	// // Start the master timeline
	// masterTl.play();

	// const masterTl = gsap.timeline({ repeat: -1 });

	// // Function to create individual timelines
	// function createTimeline(x, y) {
	// 	const tl = gsap.timeline();
	// 	tl.to(
	// 		"#rec_1",
	// 		{ x: x[0], y: y[0], ease: ease, duration: duration },
	// 		"-=" + staggerDelay
	// 	);
	// 	tl.to(
	// 		"#rec_2",
	// 		{ x: x[1], y: y[1], ease: ease, duration: duration },
	// 		"-=" + staggerDelay
	// 	);
	// 	tl.to(
	// 		"#rec_3",
	// 		{ x: x[2], y: y[2], ease: ease, duration: duration },
	// 		"-=" + staggerDelay
	// 	);
	// 	tl.to(
	// 		"#rec_4",
	// 		{ x: x[3], y: y[3], ease: ease, duration: duration },
	// 		"-=" + staggerDelay
	// 	);
	// 	tl.to(
	// 		"#rec_5",
	// 		{ x: x[4], y: y[4], ease: ease, duration: duration },
	// 		"-=" + staggerDelay
	// 	);
	// 	return tl;
	// }

	// // Create individual timelines with different parameters
	// const moveTl = gsap.timeline();
	// moveTl.to(".shapes", { x: 0, y: 0, duration: 3 });

	// const moveTl1 = createTimeline(
	// 	[200, -250, -450, -100, 460],
	// 	[-50, -250, -100, 50, 200]
	// );
	// const moveTl2 = createTimeline(
	// 	[250, -550, -300, -20, 460],
	// 	[-200, -300, 0, 300, 50]
	// );
	// const moveTl3 = createTimeline(
	// 	[50, -250, -100, -20, 160],
	// 	[100, -100, 50, 100, 50]
	// );

	// const moveTl4 = gsap.timeline();
	// moveTl4.to(".shapes", { x: 0, y: 0, duration: 1 });

	// // Add the timelines to the master timeline in sequence
	// masterTl.add(moveTl);
	// masterTl.add(moveTl1);
	// masterTl.add(moveTl2);
	// masterTl.add(moveTl3);
	// masterTl.add(moveTl4);

	function getRandomScale(min, max) {
		return Math.random() * (max - min) + min;
	}

	const scaleTl = gsap.timeline({
		yoyo: true,
		repeat: -1,
		delay: 4,

		onUpdate: () => {
			// Update scaleX and scaleY with new random values for each shape

			scaleTl.to(
				shapes,
				0.5,

				{
					scaleX: () => getRandomScale(0.5, 1.5),
					scaleY: () => getRandomScale(0.5, 1.5),
					// ease: "power4.out",
				}
			);
		},
	});

	// Scale animation
	scaleTl.to(
		shapes,
		0.25,
		// {
		// 	scaleX: () => getRandomScale(0.5, 1.5),
		// },
		{
			scaleX: () => getRandomScale(0.75, 1.5),
			ease: "power4.out",

			// stagger: {
			// 	amount: 0.5,
			// 	from: "random",
			// },
			// paused:true,
		},
		0
	);

	scaleTl.to(
		shapes,
		0.25,
		// {
		// 	scaleY: () => getRandomScale(0.5, 1.5),
		// },
		{
			scaleY: () => getRandomScale(0.75, 1.5),
			ease: "power4.out",

			// stagger: {
			// 	amount: 0.5,
			// 	from: "random",
			// },
			// paused:true,
		},
		0
	);

	// function getRandomScale(min, max) {
	// 	return Math.random() * (max - min) + min;
	//   }

	//   // Initial scale animation for each shape
	//   shapes.forEach((shape) => {
	// 	scaleTL.fromTo(
	// 	  shape,
	// 	  0.25,
	// 	  {
	// 		scaleX: () => getRandomScale(0.5, 1.5),
	// 		scaleY: () => getRandomScale(0.5, 1.5),
	// 	  },
	// 	  {
	// 		scaleX: () => getRandomScale(0.5, 1.5),
	// 		scaleY: () => getRandomScale(0.5, 1.5),
	// 		ease: "power4.out",
	// 	  }
	// 	);
	//   },0);
	// const duration = 0.5;
	// const delay = 0.25;
	// const ease = "none";

	const durationMorph = 1;
	const masterMorphTL = gsap.timeline({ repeat: -1, yoyo: true });
	const morphDelay = 4.5;
	const morphTL1 = gsap.timeline({
		repeat: -1,
		yoyo: true,
		delay: morphDelay,
		// ease: "circ.inOut",
		// delay: .5,
		// duration: 2,
		// stagger: {
		// 	amount: .75,
		// 	from: "random",
		// },
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
		// ease : "back.inOut(2.7)" ,
		// delay: 0.25,
		// duration: 1,

		// stagger: {
		// 	amount: 2.25,
		// 	from: "random",
		// },
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
		// ease: "power4.out",
		// // delay: .5,
		// duration: 1,
		// stagger: {
		// 	amount: 1.75,
		// 	from: "random",
		// },
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
		// ease: "power4.out",
		// delay: .5,
		// duration: 1,
		// stagger: {
		// 	amount: .75,
		// 	from: "random",
		// },
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
		// ease: "power4.out",
		// delay: .5,
		// duration: 1,
		// stagger: {
		// 	amount: .75,
		// 	from: "random",
		// },
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

	// masterMorphTL.play();

	// Scale animation with random scaling for each shape
	// shapes.forEach((shape) => {
	// 	scaleTl.to(
	// 		shape,
	// 		0.5,
	// 		{
	// 			scaleX: 0.5 + Math.random() * 2, // Random scaling between 0.5 and 2
	// 			scaleY: 0.5 + Math.random() * 3.5,
	// 			stagger: {
	// 				amount: 0.5,
	// 				from: "random",
	// 			},
	// 			ease: Power0.easeNone,
	// 		},
	// 		0
	// 	);
	// });
});
