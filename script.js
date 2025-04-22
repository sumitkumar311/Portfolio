


tailwind.config = {
    theme: {
      extend: {
        fontSize: {
          "small": "clamp(0.75rem, 1vw, 1rem)",
          "medium": "clamp(1rem, 3vw, 2rem)",
          "mlarge": "clamp(2rem, 7vw, 5rem)",
          "large": "clamp(3rem, 8vw, 8rem)",

        },
        screens: {
          rs: { max: "600px" },
          rmd: { max: "868px" },
        },
      },
    },
  }
  
  function init() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("main"),
      smooth: true,
    });
    
    ScrollTrigger.scrollerProxy("main", {
      scrollTop(value) {
        return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("main").style.transform ? "transform" : "fixed",
    });
    
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();
    
  }
  init();
  

const circle = document.querySelector(".minicircle");
function mouseCircle() {

  let mouse = { x: 0, y: 0 };
  let circlePos = { x: 0, y: 0 };
  let velocity = { x: 0, y: 0 };
  let xprev = 0;
  let yprev = 0;
  
  function circleChaptaKaro() {
    document.querySelector("main").addEventListener("mousemove", function (dets) {
      // Update target mouse position
      mouse.x = dets.clientX;
      mouse.y = dets.clientY;
  
 
      let xdiff = dets.clientX - xprev;
      let ydiff = dets.clientY - yprev;
  
      velocity.x = xdiff;
      velocity.y = ydiff;
  

      xscale = gsap.utils.clamp(0.9, 1.6, 1 + Math.abs(xdiff) * 0.02);
      yscale = gsap.utils.clamp(0.9, 1.6, 1 + Math.abs(ydiff) * 0.02);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
    });
  }
  
  function circleMouseFollower() {
    gsap.ticker.add(() => {
      // Lerp the circle toward the mouse with inertia
      circlePos.x += (mouse.x - circlePos.x) * 0.1;
      circlePos.y += (mouse.y - circlePos.y) * 0.1;
  
      // Add a wobble factor that settles over time
      velocity.x *= 0.9;
      velocity.y *= 0.9;
  
      let wobbleX = 1 + velocity.x * 0.02;
      let wobbleY = 1 + velocity.y * 0.02;
  
      gsap.set(circle, {
        x: circlePos.x,
        y: circlePos.y,
        scaleX: gsap.utils.clamp(0.9, 1.6, wobbleX),
        scaleY: gsap.utils.clamp(0.9, 1.6, wobbleY),
      });
    });
  }
  
  circleChaptaKaro();
  circleMouseFollower();
  
  }
  mouseCircle();

  function magneteffect() {
  const magnets = document.querySelectorAll(".magnetic");
  const activationDistance = 40;

  function resizeCircle(size) {
    gsap.to(circle, {
      width: `${size}px`,
      height: `${size}px`,
      duration: 0.3,
      ease: "power2.out",
    });
  }

  document.addEventListener("mousemove", (e) => {
    let isInsideAnyMagnet = false;

    magnets.forEach((magnet) => {
      const rect = magnet.getBoundingClientRect();
      const magnetCenterX = rect.left + rect.width / 2;
      const magnetCenterY = rect.top + rect.height / 2;

      const distX = e.clientX - magnetCenterX;
      const distY = e.clientY - magnetCenterY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < activationDistance) {
        isInsideAnyMagnet = true;

        const moveX = distX * 0.6;
        const moveY = distY * 0.6;

        // Move magnet toward cursor
        gsap.to(magnet, {
          x: moveX,
          y: moveY,
          duration: 0.3,
          ease: "power3.out",
        });
      } else {
        // Reset magnet
        gsap.to(magnet, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        });
      }
    });

    // Resize minicircle only once after loop
    if (isInsideAnyMagnet) {
      resizeCircle(50); // Hover size
    } else {
      resizeCircle(10); // Default size
    }
  });
}

magneteffect();



  function arroweffect(){
    const arrowDivs = document.querySelectorAll(".arrowdiv");
  
  arrowDivs.forEach((div) => {
    const child = div.querySelector(".arrowdivchild");
  
    div.addEventListener("mouseenter", () => {
      gsap.to(child, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
        transformOrigin: "center center",
        boxShadow: "0 0 30px rgba(255, 105, 180, 0.2)",
      });
    });
  
    div.addEventListener("mouseleave", () => {
      gsap.to(child, {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        ease: "power3.inOut",
        transformOrigin: "center center",
        boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
      });
    });
  });
  }
  arroweffect();

  var hero = document.querySelector(".heading h1");
  var tl = gsap.timeline({
    scrollTrigger: {
        trigger: hero,
        scroller: "main",
        // markers:true,
        start: "top 27%",
        end: "top 0",
        scrub: 3
    }
})
tl.to(hero, {
  x: -100,
}, "anim")
tl.to(".heading h2", {
  x: 100
}, "anim")
tl.to(".vid video", {
  width: "90%"
}, "anim")

var about = document.querySelector(".about");
var headH2 = document.querySelectorAll(".about-head h2");
var abouthead = document.querySelectorAll(".about-head h1");
console.log(abouthead);
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: about,
    scroller: "main",
    // markers:true,
    start: "top 27%",
    end: "top 0%",
    scrub: 3,
  }
});

abouthead.forEach((head) => {
  tl3.to(head, {
    x: 100,
  }, "aboutanim");
});
headH2.forEach((head) => {
  tl3.to(head, {
    x: -100,
  }, "aboutanim");
});


var main = document.querySelector("main");
var imagediv = document.querySelectorAll(".image");



imagediv.forEach((div) => {
  const video = div.querySelector("video");

  div.addEventListener("mouseenter", function () {
    video.play();

 

    // Make video grayscale
    gsap.to(video, {
      filter: "grayscale(100%)",
    });
    
    gsap.to(main, {
      backgroundColor: "grey",
      ease: "power2.out",
    });
    
  });
  
  div.addEventListener("mouseleave", function () {
    video.pause();
    
    // Remove grayscale
    gsap.to(video, {
      filter: "grayscale(0%)",
    });
    
    // Reset background color
    gsap.to(main, {
      backgroundColor: "black",
      ease: "power2.out",
    });
  });
});


function imgfollower3DwithSpin() {
  const view2imgs = document.querySelectorAll('.view2img');

  view2imgs.forEach((view2img) => {
    const imgdiv = view2img.querySelector('.imgdiv');
    const headings = view2img.querySelectorAll('h1'); // select all h1s
    let prevX = 0;

    view2img.addEventListener('mouseenter', function () {
      // Show image
      gsap.to(imgdiv, {
        opacity: 1,
        zIndex: 100,
        display: 'block',
        duration: 0.3,
        ease: 'power2.out'
      });

      // Animate all h1s
      headings.forEach(h1 => {
        gsap.to(h1, {
          marginLeft: '1.5rem', // adjust value if needed
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    view2img.addEventListener('mouseleave', function () {
      // Hide image
      gsap.to(imgdiv, {
        opacity: 0,
        display: 'none',
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });

      // Reset h1s
      headings.forEach(h1 => {
        gsap.to(h1, {
          marginLeft: '0rem',
          duration: 0.4,
          ease: 'power2.out'
        });
      });
    });

    view2img.addEventListener('mousemove', function (e) {
      const rect = view2img.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) * 0.05;
      const rotateY = (x - centerX) * -0.05;

      const diffX = e.clientX - prevX;
      prevX = e.clientX;

      const flatRotate = gsap.utils.clamp(-15, 15, diffX * 0.4);

      gsap.to(imgdiv, {
        top: y,
        left: x,
        rotateX: rotateX,
        rotateY: rotateY,
        rotate: flatRotate,
        transformPerspective: 800,
        transformOrigin: 'center',
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  });
}

imgfollower3DwithSpin();

