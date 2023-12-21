const svg = document.querySelector("svg");
const shapes = document.querySelectorAll(".shapes");
const shape = document.querySelector(".casssa_logo");
const maxMove = 20;
const rec1 = document.getElementById("rec_1");
const svgs = document.getElementById("casssa_logo");

gsap.set(shapes, { transformOrigin: "50% 50%" });

// gsap.set("#rec_1", { x: 200, y: -50 });
// gsap.set("#rec_2", { x: -50, y: -150 });
// gsap.set("#rec_3", { x: -300, y: 0 });
// gsap.set("#rec_4", { x: -100, y: 50 });
// gsap.set("#rec_5", { x: 260, y: 150 });

// const moveTl = gsap.timeline({ repeat: 0, duration: 0.1 });

// 	moveTl.to("#rec_1", { x: 200, y: -50 });
// 	moveTl.to("#rec_2", { x: -250, y: -250 });
// 	moveTl.to("#rec_3", { x: -300, y: 0 });
// 	moveTl.to("#rec_4", { x: -100, y: 250 });
// 	moveTl.to("#rec_5", { x: 360, y: 100 });

// 	moveTl.to("#rec_1", { x: 50, y: -20 });
// 	moveTl.to("#rec_2", { x: -150, y: -50 });
// 	moveTl.to("#rec_3", { x: -30, y: 0 });
// 	moveTl.to("#rec_4", { x: -20, y: 50 });
// 	moveTl.to("#rec_5", { x: 160, y: 50 });


// 	moveTl.to("#rec_1", { x: 0, y: 0 });
// 	moveTl.to("#rec_2", { x: 0, y: 0 });
// 	moveTl.to("#rec_3", { x: 0, y: 0 });
// 	moveTl.to("#rec_4", { x: 0, y: 0 });
// 	moveTl.to("#rec_5", { x: 0, y: 0 });

// const moveTl = gsap.timeline({ repeat: -1, ease: "power4.inOut" });
// // const shapes = document.querySelectorAll('.shape');
// const animationDuration = 0.5; // Adjust the duration in seconds

// function getRandomPosition() {
//   const randomX = (Math.random() - 0.75) * 500; // Adjust the range based on your requirements
//   const randomY = (Math.random() - 0.75) * 500; // Adjust the range based on your requirements
//   return { x: randomX, y: randomY };
// }

// function animateShape(shape) {
//   moveTl.to(shape, {
//     ...getRandomPosition(),
//     duration: animationDuration,
//     onComplete: function () {
//       animateShape(shape); // Call the function again for the next animation
//     },
//   });
// }

// shapes.forEach((shape) => {
//   animateShape(shape);
// });

// // Reset to (0, 0) after a delay
// moveTl.to(".shapes", { x: 0, y: 0, duration: 1.1, delay: animationDuration });



const tl = gsap.timeline();

tl.fromTo(shapes, 1.5,
  {
	scaleX: 0.5,
	
  x: () => Math.random() * (window.innerWidth - shapes[0].offsetWidth),
  y: () => Math.random() * (window.innerHeight - shapes[0].offsetHeight),

  },{
	scaleX: 2,
	yoyo: true,
	repeat: -1,
	// ease: "elastic.out(1.5, 0.73)",
  ease: Power0.easeNone,
  stagger: {
    amount: 0.75, // Adjust the amount of staggering
    from: "random", // Use random staggering
  },
  x: () => Math.random() * (window.innerWidth - shapes[0].offsetWidth),
  y: () => Math.random() * (window.innerHeight - shapes[0].offsetHeight),
},0);

tl.fromTo(shapes, 1.5,
  {
	scaleY: 0.75,
	
  x: () => Math.random() * (window.innerWidth - shapes[0].offsetWidth),
  y: () => Math.random() * (window.innerHeight - shapes[0].offsetHeight),

  },{
	scaleY: 2,
	yoyo: true,
	repeat: -1,
	// ease: "elastic.out(1.5, 0.73)",
  ease: Power0.easeNone,
  stagger: {
    amount: 0.5, // Adjust the amount of staggering
    from: "random", // Use random staggering
  },
  x: () => Math.random() * (window.innerWidth - shapes[0].offsetWidth),
  y: () => Math.random() * (window.innerHeight - shapes[0].offsetHeight),
},0);

// tl.fromTo(shapes, 3.5,
//   {
// 	// scaleX: 0.5,
//   // x: () => Math.random() * (window.innerWidth - shapes[0].offsetWidth),
//   // y: () => Math.random() * (window.innerHeight - shapes[0].offsetHeight),

//   },{
// 	// scaleX: 1.5,
// 	yoyo: true,
// 	repeat: -1,
// 	// ease: "elastic.out(1.5, 0.73)",
//   ease: Power0.easeNone,
//   stagger: {
//     amount: 2.75, // Adjust the amount of staggering
//     from: "random", // Use random staggering
//   },
//   x: () => Math.random() * (window.innerWidth - shapes[0].offsetWidth),
//   y: () => Math.random() * (window.innerHeight - shapes[0].offsetHeight),
// },0);



// tl.to(shapes, {
// 	scaleY: 1.5,
// 	repeat: -1,
// 	yoyo: true,
// 	// ease: "elastic.out(1.5, 0.73)",
//   ease: Power0.easeNone,
//   stagger: {
//     amount: 0.25, // Adjust the amount of staggering
//     from: "random", // Use random staggering
//   },
// });

// gsap.to(shape, {
// 	duration: 1,
// 	scaleX: 1,
// 	// scaleY: 1,
// 	ease: Power4.out,
// });

// shapes.forEach((shape) => {
//   function handleTouchStart() {
//     gsap.to(shape, {
//       duration: 2,
//       y: 0,
//       x: 0,
//       scaleX: 1.15,
//       // scaleY: 1.25,
//       // fill: '#ffffff',
//       ease: "elastic.out(1.5, 0.73)",
//     });
//     gsap.to(shape, {
//       duration: 1,
//       scaleX: 1.15,
//       ease: "elastic.out(1.5, 0.73)",

//     });
//   }

//   function handleTouchEnd() {
//     gsap.to(shape, {
//       duration: 2,
//       y: 0,
//       scaleX: 1,
//       // scaleY: 1,
//       ease: "elastic.out(1.5, 0.73)",
//     });

//     gsap.to(shape, {
//       duration: 1,
//       scaleX: 1,
//       // scaleY: 1,
//       ease: Power4.out,
//     });
//   }

//   shape.addEventListener("mouseover", handleTouchStart);
//   shape.addEventListener("mouseout", handleTouchEnd);

//   // Touch events to simulate mouseover and mouseout
//   shape.addEventListener("touchstart", function (event) {
//     event.preventDefault(); // Prevent scrolling on touch devices
//     handleTouchStart();
//   });

//   shape.addEventListener("touchend", function (event) {
//     event.preventDefault(); // Prevent scrolling on touch devices
//     handleTouchEnd();
//   });
// });




const durationMorph = 1.5;

	const morphTL1 = gsap.timeline({
		repeat: -1,
		yoyo: true,
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


function updateShapePosition(clientX, clientY, shape) {
	const rect = shape.getBoundingClientRect();
	const centerX = rect.left + rect.width / 2;
	const centerY = rect.top + rect.height / 4;

	const deltaX = ((clientX - centerX) / rect.width) * maxMove;
	const deltaY = ((clientY - centerY) / rect.height) * maxMove;

	gsap.to(shape, {
		x: deltaX,
		y: deltaY,
		duration: 0.2,
		ease: "power1.inOut",
	});
}

// Add pointer movement to the window for both mouse and touch events
function handleMove(event) {
	const { clientX, clientY } = event;
	updateShapePosition(clientX, clientY, shape);
}

window.addEventListener("mousemove", handleMove);
window.addEventListener(
	"touchmove",
	(event) => {
		event.preventDefault(); // Prevent scrolling on touch devices
		const touch = event.touches[0];
		const { clientX, clientY } = touch;
		updateShapePosition(clientX, clientY, shape);
	},
	{ passive: false }
);

// gsap.set(svgs, { transformOrigin: "50% 50%", scale: 2 });
