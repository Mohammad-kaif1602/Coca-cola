const mm = gsap.matchMedia();

mm.add("(max-width: 600px)", () => {

  window.onload = function() {
    let gifUrl = 'sprite-gif/preloder.gif'; 
  
    let preloader1 = document.getElementById('preloder');
    let preloader2 = document.getElementById('preloder2');
  
   
    preloader1.style.backgroundImage = `url('${gifUrl}?${new Date().getTime()}')`;
    preloader2.style.backgroundImage = `url('${gifUrl}?${new Date().getTime()}')`;
  };
  


  function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
      lerp: 0.01, // Smoothness factor (0.08 best hota hai mobile ke liye)
      multiplier: 0.7, // Speed Control
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    ScrollTrigger.addEventListener("refresh", () => {
      locoScroll.update();
      console.log("ScrollTrigger refreshed");
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    locoScroll.update();
  }

  locoscroll();

  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
    console.log("Page Loaded & Animation Triggered");
  });

  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
    console.log("Window Resized & Animation Adjusted");
  });

  // navbar customize on
  var tog = document.getElementById("tog");
  var navbar = document.querySelector(".navbar");
  
  if (tog) {
      let isOpen = false; 
  
      tog.addEventListener("click", function () {
          if (isOpen) {
              navbar.style.height = "15vh";
              navbar.style.transition = "1s";
              // navbar.style.background = "red";
          } else {
              navbar.style.height = "auto";
              navbar.style.transition = "1s";
              // navbar.style.background = "green";
          }
          isOpen = !isOpen; 
      });
  }
  

  // navbar customize off

  // Text animation

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#red",
      start: "45% 40%",
      end: "130% 50%",
      scrub: 2,
      scroller: "#main",
      // markers:true,
    },
  });

  tl2.to(
    "#modalcoke",
    {
      top: "125%",
      left: "0%",
    },
    "all"
  );

  tl2.to(
    "#ice",
    {
      top: "115%",
    },
    "all"
  );

  tl2.to(
    "#ice2",
    {
      top: "170%",
      width: "50%",
      left: "25%",
    },
    "all"
  );

  tl2.to(
    "#ice3",
    {
      top: "140%",
      left: "20%",
    },
    "all"
  );

  tl2.to(
    "#leaf1",
    {
      top: "155%",
      left: "55%",
      height: "10vh",
      rotate: "90deg",
    },
    "all"
  );

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      start: "0% 60%",
      end: "80% 70%",
      scrub: 2,
      scroller: "#main",
      // markers:true,
    },
  });
  tl3.to(
    "#leaf2",
    {
      left: "50vw",
      opacity: 1,
    },
    "p2"
  );
  tl3.to(
    "#blank",
    {
      left: "7vw",
      opacity: 1,
    },
    "p2"
  );
  tl3.to(
    "#cockinfo h3",
    {
      left: "5vw",

      opacity: 1,
    },
    "p2"
  );

  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      start: "-10% 60%",
      end: "40% 50%",
      scrub: 2,
      scroller: "#main",
      // markers:true,
    },
  });

  tl4.to(
    "#modalcoke",
    {
      left: "28%",
      top: "203vh",
      height: "25vh",
      width: "30vw",
      zIndex: 500,
      height:"200px",
      width:'200px',
    },
    "p3"
  );

  tl4.to(
    "#modalcoke2",
    {
      top: "3vh",
      left: "-6%",
      
      rotate: "0deg",
    },
    "p3"
  );

  tl4.to(
    "#modalcoke3",
    {
      top: "4vh",
      left: "65%",
     
      rotate: "0deg",
    },
    "p3"
  );
  tl4.to(
    "#ice3",
    {
      left: "34%",
      top: "200vh",
      height:"140px",
      width:'140px',
      rotate:"90deg",
      zIndex: 400,
      
    },
    "p3"
  );

  var tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      start: "50% 50%",
      end: "60% 10%",
      scrub: 2,
      scroller: "#main",
      // markers:true,
    },
  });

  tl5.to(
    "#modalcoke",
    {
      top: "250vh",
      opacity: 0,
    },
    "p32"
  );

  tl5.to(
    "#modalcoke2",
    {
      left: "27%",
    },
    "p32"
  );

  tl5.to(
    "#modalcoke3",
    {
      left: "32%",
    },
    "p32"
  );


  var tl7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      start: "10% 50%",
      end: "60% 20%",
      scrub: 3,
      scroller: "#main",
      // markers: true,
      // pin: true,
    },
  });

  tl7.to(
    "#gif1 video",
    {
      top: "10vh",
      left: "8vw",
    },
    "p5"
  );
  tl7.to(
    "#gif2 video",
    {
      top: "43vh",
      left: "8vw",
    },
    "p5"
  );
  tl7.to(
    "#gif3 video",
    {
      top: "10vh",
      left: "47vw",
    },
    "p5"
  );
  tl7.to(
    "#gif4 video",
    {
      top: "75vh",
      left: "8vw",
    },
    "p5"
  );
  tl7.to(
    "#gif5 video",
    {
      // top: "45vh",
      //   left: "54vw",
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    },
    "p5"
  );
  tl7.to(
    "#gif6 video",
    {
      top: "52vh",
      left: "48vw",
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    },
    "p5"
  );
});
