// gsap.to(["#rec_1, #rec_2"], { x: 0, y: 56 },0);
// gsap.to("#rec_3", { x: 34, y: -110},0);

// gsap.to("#rec_2", { x: 120, y: -50 },1);
// gsap.to("#rec_3", { x: 334, y: -55, rotate: 90},1);

// gsap.to("#rec_2", { x: 0, y: 56 },2);
// gsap.to("#rec_1", { x: -120, y: -50 },2.5);

// gsap.to("#rec_3", { x: 150, y: 0, rotate: 0},3);

// gsap.to(["#rec_1, #rec_2, #rec_3"], { x: 0, y: 0 },4);

// gsap.to("#rec_4", { x: -100, y: 50 });
// gsap.to("#rec_5", { x: 360, y: 200 });
const svg = document.querySelector("svg");
const shapes = document.querySelectorAll(".shapes");
const shape = document.querySelector(".casssa_logo");
const maxMove = 20;
const rec1 = document.getElementById("rec_1");
const svgs = document.getElementById("casssa_logo");
gsap.set(shapes, { transformOrigin: "50% 50%" });

let tl;
// shapes.forEach((shape) => {
//     function handleTouchStart() {
//       gsap.to(shape, {
//         duration: 2,
//         y: 0,
//         x: 0,
//         scaleY: 1.75,
//         // fill: '#e0e1da',
//         ease: "elastic.out(1.5, 0.73)",
//       });
//     }

//     function handleTouchEnd() {
//       gsap.to(shape, {
//         duration: 2,
//         y: 0,
//         scaleY: 1,
//         ease: "elastic.out(1.5, 0.73)",
//       });
//     }

//     shape.addEventListener("mouseover", handleTouchStart);
//     shape.addEventListener("mouseout", handleTouchEnd);

//     // Touch events to simulate mouseover and mouseout
//     shape.addEventListener("touchstart", function (event) {
//       event.preventDefault(); // Prevent scrolling on touch devices
//       handleTouchStart();
//     });

//     shape.addEventListener("touchend", function (event) {
//       event.preventDefault(); // Prevent scrolling on touch devices
//       handleTouchEnd();
//     });
//   });

// const playButton = document.getElementById("playButton");
// let animationPaused = false;

// playButton.addEventListener("click", () => {
//   if (animationPaused) {
//     // If the animation is paused, resume it
//     tl.play();
//     playButton.textContent = "Pause Animation";
//   } else {
//     // If the animation is playing, pause it
//     tl.pause();
//     playButton.textContent = "Play Animation";
//   }
//   animationPaused = !animationPaused; // Toggle the animation state
// });

var hoverMouse = function ($el) {
	$el.each(function () {
		var $self = $(this);
		var hover = false;
		var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
		var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

		var attachEventsListener = function () {
			$(window).on("mousemove", function (e) {
				//
				var hoverArea = hover ? offsetHoverMax : offsetHoverMin;

				// cursor
				var cursor = {
					x: e.clientX,
					y: e.clientY - $(window).scrollTop(),
				};

				// size
				var width = $self.outerWidth();
				var height = $self.outerHeight();

				// position
				var offset = $self.offset();
				var elPos = {
					x: offset.left + width / 2,
					y: offset.top + height / 2,
				};

				// comparaison
				var x = cursor.x - elPos.x;
				var y = cursor.y - elPos.y;

				// dist
				var dist = Math.sqrt(x * x + y * y);

				// mutex hover
				var mutHover = false;

				// anim
				if (dist < width * hoverArea) {
					mutHover = true;
					if (!hover) {
						hover = true;
					}
					onHover(x, y);
				}

				// reset
				if (!mutHover && hover) {
					onLeave();
					hover = false;
				}
			});
		};

		var onHover = function (x, y) {
			TweenMax.to($self, 0.4, {
				x: x * 0.8,
				y: y * 0.8,
				//scale: .9,
				rotation: x * 0.05,
				ease: Power2.easeOut,
			});
		};
		var onLeave = function () {
			TweenMax.to($self, 0.7, {
				x: 0,
				y: 0,
				scale: 1,
				rotation: 0,
				ease: Elastic.easeOut.config(1.2, 0.4),
			});
		};

		attachEventsListener();
	});
};

hoverMouse($("#casssa_logo"));

function loopAnimations() {
	const tl = gsap.timeline({
		paused: true,
		defaults: { duration: 1, ease: "power4.out" },
	});
	const playButton = document.getElementById("playButton");

	tl.from(shapes, { display: 'none' })
		.to("#rec_1", { x: 0, y: 56 })
		.to("#rec_2", { x: 0, y: 56 })
		.to("#rec_3", { x: 34, y: -110 })
		.to(shapes, { fill: "#a8a9a3" })
		.to("#rec_2", { x: 120, y: -50 })
		.to("#rec_3", { x: 240, y: -25, rotate: 90 })
		.to(shapes, { fill: "#6fc1ca" })
		.to("#rec_2", { x: 0, y: 56 })
		.to("#rec_1", { x: -120, y: -50 })
		.to("#rec_3", { x: 150, y: 0, rotate: 0 })
		.to(shapes, { fill: "#ffffff" })
		.to(["#rec_1, #rec_2, #rec_3"], { x: 0, y: 0 });

	tl.eventCallback("onComplete", () => {
		// When the timeline completes, restart it to create a loop
		// if (!animationPaused) {
		//   tl.restart();
		// }
		playButton.addEventListener("click", () => {
			tl.restart(); // Restart the animation
		});
	});

	// Start the initial animation loop
	tl.play();
}

// Call the function to start the loop
loopAnimations();
