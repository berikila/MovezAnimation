document.addEventListener("DOMContentLoaded", (event) => {
    const shapes = document.querySelectorAll(".shapes");
    gsap.set(shapes, { transformOrigin: "50% 50%" });
  
    const positions = [
    	// { x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
        { x: 50, y: 100 },
        { x: -250, y: -100 },
        { x: -150, y: -300 },
        { x: 250, y: -200 },
        { x: -550, y: -300 },
        { x: -300, y: 100 },
        { x: -20, y: 300 },
        { x: 460, y: 50 },
        { x: -100, y: 50 },
        { x: -20, y: 100 },
        { x: 220, y: -200 },
        { x: -260, y: -150 },
        { x: 250, y: -200 },
        { x: -550, y: -300 },
        { x: 350, y: 300 },
        { x: 200, y: -150 },
        { x: 160, y: 50 },
        { x: -20, y: 300 },
        { x: 460, y: 50 },
        { x: 50, y: 100 },
        { x: -20, y: 100 },
        { x: 160, y: 50 },
        { x: 350, y: 300 },
        { x: -300, y: 100 },
        { x: -150, y: -300 },
        { x: -250, y: -100 },
        { x: -100, y: 50 },
        { x: 220, y: -200 },
        { x: -260, y: -150 },
        { x: 200, y: -150 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
    ];
    console.log(positions.length)
  
    const shapesz = ["#rec_1", "#rec_2", "#rec_3", "#rec_4", "#rec_5"];
  
    const mainAnimation = gsap.timeline({ repeat: -1, delay: 4 });
  
    positions.forEach((position, index) => {
      shapesz.forEach((shape, shapeIndex) => {
        mainAnimation.to(
          shape,
          5,
          {
            x: positions[(index + shapeIndex) % positions.length].x,
            y: positions[(index + shapeIndex) % positions.length].y,
            ease: "back.out(1.7)",
            onStart: () => {
                console.log("Started")
                gsap.to(".moving-elements", {
                    filter: "url(#main-blur)",
                    duration: 2.1,
                });

            },
         
            onUpdate: () => {
                // console.log("Updated")
             
            //   scaleTl.play();
            // scaleShapes()
            },
            onReapet: () => {
                console.log("Reapeted")
                gsap.to(".moving-elements", {
                    filter: "",
                    duration: 3.1,
                });
            //   scaleTl.play();
            // scaleShapes()
            },
            onComplete: () => {
               
                gsap.to(shapes, 0.75, {
                    delay: 4,
                    scaleX: 1, 
                    scaleY: 1,
                    ease: "power4.out",
                });
                // console.log("Completed")

            //   scaleTl.reverse();
            },
          },
          index * 0.75
        );
      });
    });
  
    const filterAnimation = gsap.to(".moving-elements", {
      filter: "url(#main-blur)",
      duration: 2.1,
      paused: true,
    });
    const nofilterAnimation = gsap.to(".moving-elements", {
      filter: "",
      duration: 2.1,
      paused: true,
    });
  
    mainAnimation.to({}, 5, {}); // Add a pause for 1 second
    // mainAnimation.eventCallback("onComplete", () => {
    //     // Stop the morphing animations
    //     morphTL1.kill();
    //     morphTL2.kill();
    //     morphTL3.kill();
    //     morphTL4.kill();
    //     morphTL5.kill();
    // });
    mainAnimation.play();

  
    function scaleShapes() {
      const scaleTl = gsap.timeline({
        yoyo: true,
        repeat: -1,
        repeatDelay: 5,
        delay: 3,
        onUpdate: () => {
            // Update scaleX and scaleY with new random values for each shape
            scaleTl.to(shapes, 0.75, {
                scaleX: () => gsap.utils.random(0.25, 1.5), 
                scaleY: () => gsap.utils.random(0.35, 1.5),
                // ease: "power4.out",
            });
        },
      });
  
    //   scaleTl.to(
    //     shapes,
    //     0.5,
    //     {
    //       scaleX: () => getRandomScale(0.75, 1.5),
    //       ease: "power4.out",
    //     },
    //     0
    //   );
  
    //   scaleTl.to(
    //     shapes,
    //     0.5,
    //     {
    //       scaleY: () => getRandomScale(0.75, 1.5),
    //       ease: "power4.out",
    //     },
    //     0
    //   );
    }
  
    scaleShapes();
  
    function morphShapes() {
      const durationMorph = 1;
      const masterMorphTL = gsap.timeline({ repeat: -1, yoyo: true,   });
  
      function createMorphTL(target, shapes) {
        const morphTL = gsap.timeline({
          repeat: -1,
          yoyo: true,
          delay: 3,
        });
  
        shapes.forEach((shape) => {
          morphTL.to(target, {
            morphSVG: { shape: shape },
            duration: durationMorph,
            stagger: { 
                from: "random", 
                amount: 1 
              }
          });
        });
  
        return morphTL;
      }
  
      const morphTL1 = createMorphTL("#rec_1", ["#rec_1_a", "#rec_1_b", "#rec_1_c"]);
      const morphTL2 = createMorphTL("#rec_2", ["#rec_2_a", "#rec_2_b", "#rec_2_c"]);
      const morphTL3 = createMorphTL("#rec_3", ["#rec_3_b", "#rec_3_a", "#rec_3_c"]);
      const morphTL4 = createMorphTL("#rec_4", ["#rec_4_b", "#rec_4_a", "#rec_4_c"]);
      const morphTL5 = createMorphTL("#rec_5", ["#rec_5_a", "#rec_5_b", "#rec_5_c"]);
  
      masterMorphTL.add(morphTL1, morphTL2, morphTL3, morphTL4, morphTL5);
    }
  
  });
  