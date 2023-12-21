document.addEventListener("DOMContentLoaded", (event) => {
	// var _container = document.querySelector(".myElement"),
	// 	_boubles = document.querySelectorAll(".recG"),
	// 	_maxY = _container.getBoundingClientRect().height,
	// 	_maxX = _container.getBoundingClientRect().width;

	//     function _NextBounce(bouble) {
	//         var r = parseFloat(bouble.getAttribute('r')),
	//             minY = r,
	//             minX = r,
	//             maxY = _maxY - r,
	//             maxX = _maxX - r,
	//             randY = random(minY, maxY),
	//             randX = random(minX, maxX);

	//         bouble.tween = TweenMax.to(bouble, random(5, 10), {
	//             x: randX,
	//             y: randY,
	//             ease: Power1.easeInOut,
	//             onComplete: function () {
	//                 _NextBounce(bouble);
	//             },
	//         });
	//     }

	//     function random(min, max) {
	//         if (max == null) {
	//             max = min;
	//             min = 0;
	//         }
	//         return Math.random() * (max - min) + Number(min);
	//     }

	//     function _BubbleClick() {
	//         if (this.tweenpaused) _NextBounce(this);
	//         else {
	//             this.tween.kill();
	//             TweenMax.to(this, 0.5, {
	//                 x: parseFloat(this.oCx),
	//                 y: parseFloat(this.oCy),
	//             });
	//         }

	//         this.tweenpaused = !this.tweenpaused;
	//     }

	//     // initialize
	//     for (var i = 0; i < _boubles.length; i++) {
	//         _boubles[i].oCx = _boubles[i].getAttribute('x');
	//         _boubles[i].oCy = _boubles[i].getAttribute('y');
	//         _boubles[i].addEventListener('click', _BubbleClick);
	//         _boubles[i].tweenpaused = false;
	//         _NextBounce(_boubles[i]);
	//     }
	gsap.registerPlugin(CustomEase, CustomWiggle);

	const shapes = document.querySelectorAll(".shapes");
	// swarms all the shapes by 400px in each direction on the x-axis, 150 on the y-axis, and uses a 12-second duration for each tween and 15 wiggles.
	swarm(shapes, 400, 350, 30, 10);
	// helper function for building the swarm
	function swarm(elements, x, y, duration, wiggles) {
		elements = gsap.utils.toArray(elements);
		var tl = gsap.timeline({ repeat: -1, repeatDelay: 0 }),
			i = elements.length,
			ease = "wiggle({type: random, wiggles: " + wiggles + "})",
			delay;
		duration = duration || 4;
		while (--i > -1) {
			delay = Math.random() * duration;
			// set to random color
			// gsap.set(elements[i], { fill: "hsl(random(0, 360),80%,40%)" });
			// animate x and y separately so that they're more randomized
			tl.to(elements[i], { duration: duration, x: "+=" + x, ease: ease }, delay)
				.to(elements[i], { duration: duration, y: "+=" + y, ease: ease }, delay)
				.to(elements[i], { duration: 1, x: 0, y: 0, ease: "power1.inOut" });
		}
		// Additional animation to return shapes to x: 0, y: 0 after the specified duration
		tl.time(0); 
		// jump ahead so that we start with everything spread out.
		return tl;
	}
});
