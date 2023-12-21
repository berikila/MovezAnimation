import {
    spline,
    pointsInPath,
    createCoordsTransformer
  } from "https://cdn.skypack.dev/@georgedoescode/generative-utils@1.0.1";
  import { Vector2D } from "https://cdn.skypack.dev/@georgedoescode/vector2d@1.0.1";
  import gsap from "https://cdn.skypack.dev/gsap@3.6.1";
  import debounce from "https://cdn.skypack.dev/debounce@1.2.1";
  
  console.clear();
  
  let isWobbling = false;
  
  function createLiquidPath(path, opts) {
    const svgPoints = pointsInPath(path, opts.detail);
    let originPoints = svgPoints.map((p) => new Vector2D(p.x, p.y));
    let liquidPoints = originPoints.map((p) => new Vector2D(p.x, p.y));
  
    if (
      Vector2D.dist(liquidPoints[liquidPoints.length - 1], liquidPoints[0]) < 8
    ) {
      liquidPoints = liquidPoints.slice(0, liquidPoints.length - 1);
    }
  
    const transformCoords = createCoordsTransformer(path.closest("svg"));
    const mousePos = new Vector2D(0, 0);
  
    const maxDist = {
      x: opts.axis.includes("x")
        ? Vector2D.dist(originPoints[0], originPoints[1]) / 2
        : 0,
      y: opts.axis.includes("y")
        ? Vector2D.dist(originPoints[0], originPoints[1]) / 2
        : 0
    };
  
    window.addEventListener("mousemove", (e) => {
      const { x, y } = transformCoords(e);
  
      mousePos.x = x;
      mousePos.y = y;
  
      // use gsap to lerp vertex { x, y } values on mousemove
      liquidPoints.forEach((point, index) => {
        const pointOrigin = originPoints[index];
        const distX = Math.abs(pointOrigin.x - mousePos.x);
        const distY = Math.abs(pointOrigin.y - mousePos.y);
  
        if (distX < opts.range.x && distY < opts.range.y) {
          isWobbling = true;
  
          const d = Vector2D.sub(pointOrigin, mousePos);
          const target = Vector2D.sub(pointOrigin, new Vector2D(-d.x, -d.y));
  
          const x = gsap.utils.clamp(
            pointOrigin.x - maxDist.x,
            pointOrigin.x + maxDist.x,
            target.x
          );
          const y = gsap.utils.clamp(
            pointOrigin.y - maxDist.y,
            pointOrigin.y + maxDist.y,
            target.y
          );
  
          gsap.to(point, {
            x: x,
            y: y,
            ease: "sine",
            overwrite: true,
            duration: 0.175,
            onComplete() {
              gsap.to(point, {
                x: pointOrigin.x,
                y: pointOrigin.y,
                ease: "elastic.out(1, 0.3)",
                duration: 1.25
              });
            }
          });
        }
      });
    });
  
    gsap.ticker.add(() => {
      gsap.set(path, {
        attr: {
          d: spline(liquidPoints, opts.tension, opts.close)
        }
      });
  
    //   if (isWobbling) {
    //     gsap.to("#eye-right-inner", {
    //       attr: {
    //         cx: 116
    //       }
    //     });
  
    //     gsap.to("#eye-left-inner", {
    //       attr: {
    //         cx: 91
    //       }
    //     });
    //     gsap.set("#mouth-open", {
    //       scaleY: 1,
    //       transformOrigin: "50% 0%",
    //       duration: 0.3
    //     });
    //   } else {
    //     gsap.to("#eye-right-inner", {
    //       attr: {
    //         cx: 113
    //       }
    //     });
  
    //     gsap.to("#eye-left-inner", {
    //       attr: {
    //         cx: 88
    //       }
    //     });
  
    //     gsap.set("#mouth-open", {
    //       scaleY: 0,
    //       transformOrigin: "50% 0%",
    //       duration: 0.3
    //     });
    //   }
    });
  }
  
  Array.from(document.querySelectorAll("path"))
    .slice(0, 9)
    .forEach((path) => {
      createLiquidPath(path, {
        detail: 20,
        tension: 1,
        close: true,
        range: {
          x: 12,
          y: 42
        },
        axis: ["x", "y"]
      });
    });
  
//   const eyeLeft = document.getElementById("eye-left");
//   const eyeRight = document.getElementById("eye-right");
  
  window.addEventListener("mousemove", (e) => {
    const { clientX, clientY } = e;
  
    const heading = new Vector2D(
      clientX - window.innerWidth / 2,
      clientY - window.innerHeight / 2
    ).heading();
  
    let deg = heading * 57.2958;
  
    // gsap.to([eyeLeft, eyeRight], {
    //   rotate: deg + "_short",
    //   transformOrigin: "50% 50%",
    //   ease: "elastic.out(1, 0.4)",
    //   duration: 1.5,
    //   stagger: 0.05
    // });
  });
  
  window.addEventListener(
    "mousemove",
    debounce(() => {
      isWobbling = true;
    }, 750)
  );
  
  gsap.set("svg", {
    opacity: 1
  });
  