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
    lerp: 0.02,
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

  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  
  ScrollTrigger.refresh();
}
locoscroll();



var body = document.querySelector("body");
var dot = document.querySelector("#dot");

body.addEventListener("mousemove", function (dets) {
  gsap.to(dot, {
    x: dets.x,
    y: dets.y,
    duration: 1,
    ease: "back.out",
  });
});

gsap.from(".nav-item3 a img ", {
  x: 500,
  ease: "back",
  opacity: 0,
  duration: 3,
  delay: 3,
  scrub: 3,
  stagger: 0.5,
});
gsap.from(".container-fluid .navbar-brand img ", {
  x: -500,
  ease: "back",
  opacity: 0,
  duration: 3,
  delay: 3,
  scrub: 3,
  stagger: 0.5,
});
gsap.from(".nav-item1 a img ", {
  y: -50,
  ease: "back",
  opacity: 0,
  duration: 3,
  delay: 3,
  scrub: 3,
  stagger: 0.5,
});

gsap.from("h1 #a", {
  y: 50,
  ease: "back",
  opacity: 0,
  duration: 3,
  delay: 3,
  scrub: 3,
  stagger: 0.5,
});
gsap.from("h1 #b", {
  y: -50,

  opacity: 0,
  duration: 3,
  delay: 3,
  stagger: -0.5,
  scrub: 3,
});
gsap.from("#modalcoke", {
  y: -100,

  opacity: 0,
  duration: 2.5,
  delay: 3,
  stagger: -0.3,
  scrub: 3,
  zIndex:10,
});
gsap.from("#ice", {
  opacity: 0,
  duration: 5,
  stagger: -0.3,
  x: -100,
  delay: 3,
});
gsap.from("#ice2", {
  opacity: 0,
  duration: 1.5,
  stagger: -0.3,
  x: 100,
  delay: 3,
});
gsap.from("#ice3", {
  opacity: 0,
  duration: 3.7,
  stagger: -0.3,
  y: -100,
  delay: 3,
  zIndex: 1 ,
});
gsap.from("#leaf1", {
  opacity: 0,
  duration: 3,
  stagger: -0.3,
  y: -100,
  delay: 3,
});
gsap.from("#cocoleaf", {
  opacity: 0,
  duration: 3,
  stagger: -0.3,
  x: 100,
  delay: 3,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#red",
    start: "45% 40%",
    end: "130% 50%",
    scrub: 3,
    scroller: "#main",
    // markers:true,
  },
});

tl2.to(
  "#modalcoke",
  {
    top: "125vh",
    left: "2%",
    
    // duration: 2,
   
  },
  "all"
);
tl2.to(
  "#ice",
  {
    // delay:-1,
    top: "125vh",
    rotate:'180deg',
    left:'50%',
    zIndex:10,
  },
  "all"
);
tl2.to(
  "#ice2",
  {
    // delay:-1,
    top: "145vh",
    left: "75%",
  
    // rotate:'360deg',
  },
  "all"
);
tl2.to(
  "#ice3",
  {
    // delay:1,
    top: "160vh",
    left: "18%",
    rotate:'180deg',
  },
  "all"
);
tl2.to(
  "#leaf1",
  {
    // delay:-1,
    top: "115vh",
    left: "5%",
    rotate: "200deg",
    opacite: 0,
  },
  "all"
);
tl2.to(
  "#cocoleaf",
  {
    // delay:-1,
    
    left: "100%",
    
  },
  "all"
);

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "0% 60%",
    end: "40% 50%",
    scrub: 2,
    scroller: "#main",
    // markers:true,
  },
});
tl3.to(
  "#leaf2",
  {
    left: "85vw",
    // opacity: 0,
  },
  "p2"
);
tl3.to(
  "#blank",
  {
    left: "7vw",
    // opacite: 0,
  },
  "p2"
);
tl3.to(
  "#cockinfo h3",
  {
    left: "45vw",
    // display:'none',
    // opacite: 0,
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
    left: "33%",
    top: "200vh",
    zIndex: 500,
   
  },
  "p3"
);
tl4.to(
  "#ice3",
  {
    left: "38.5%",
    top: "187vh",
    height:"330px",
    width:'330px',
    rotate:"90deg",
    zIndex: 400,
    
  },
  "p3"
);

tl4.to(
  "#modalcoke2",
  {
    top: "3vh",
    left: "-1%",
    rotate: "0deg",
  },
  "p3"
);

tl4.to(
  "#modalcoke3",
  {
    top: "5vh",
    left: "69%",
    rotate: "0deg",
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
    pin: true,
  },
});

tl5.to(
  "#modalcoke",
  {
    top: "250vh",
    opacity:0,
  },
  "p32"
);

tl5.to(
  "#modalcoke2",
  {
    left: "32%",
  },
  "p32"
);

tl5.to(
  "#modalcoke3",
  {
    left: "35%",
  },
  "p32"
);
tl5.to(
  "#bl1",
  {
    opacity:0,
  },
  "p32"
);
tl5.to(
  "#bl3",
  {
    opacity:0,
  },
  "p32"
);

var tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page4",
    start: "50% 50%",
    end: "60% 10%",
    scrub: 5,
    scroller: "#main",
    // markers:true,
    pin: true,
  },
});

tl6.to("#modalcoke4", {
  // top:"70vh",
  height: "120vh",
  width: "70%",
  // duration:3,
  // delay:'3',
  // zIndex: 1000,
  opacite: 0.9,
});

var tl7 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page5",
    start: "10% 40%",
    end: "40% 50%",
    scrub: 3,
    scroller: "#main",
    // markers: true,
    // pin: true,
  },
});

// tl7.to('#gif1 video',{

//   top: "10vh",
//   left: "15vw",

// },'p5')
// tl7.to('#gif2 video',{

//   top: "55vh",
//   left: "12vw",

// },'p5')
// tl7.to('#gif3 video',{

//   top: "19vh",
//   left: "35vw",

// },'p5')
// tl7.to('#gif4 video',{

//   top: "45vh",
//     left: "54vw",

// },'p5')
// tl7.to('#gif5 video',{

//   // top: "45vh",
//   //   left: "54vw",
//   opacity: 1,
//   duration: 2,
//   ease: "power2.out"

// },'p5')
// tl7.to('#gif6 video',{

//   // top: "45vh",
//   //   left: "54vw",
//   opacity: 1,
//   duration: 2,
//   ease: "power2.out"

// },'p5')

tl7.to("#logo5", {
  left: "80vw",
  duration: 2,
});
tl7.to("#cristal", {
  left: "73vw",
  duration: 2,
  // ease: "power2.out"
});

var path = "M 80 150 Q 650 150 1290 150";
var finalpath = "M 80 150 Q 650 150 1290 150";

var moveline = document.querySelector("#moveline");
var svg = document.querySelector("svg");

moveline.addEventListener("mousemove", function (dets) {
  var bounds = svg.getBoundingClientRect();

  var xPos = dets.clientX;
  var yPos = dets.clientY - bounds.top;

  path = `M 80 150 Q ${xPos} ${yPos} 1290 150`;

  console.log(path);

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

moveline.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: { d: finalpath },
    duration: 1,
    ease: "elastic.out(1,0.2)",
  });
});

// marque on

window.addEventListener("wheel", function (dets) {



  
  if (dets.deltaY > 0) {
    gsap.to("#marque", {
      transform: "translateX(-200%)",
      repeat: -1,
      duration: 7,
     
      ease: "linear",
    });

    gsap.to("#marque img", {
      rotate: 360, 
      duration: 3, 
      repeat: -1,   
      ease: "linear" 
    });
    gsap.to("#marque h1", {
      
      color:'#1A1818',

    });
  } else {
    gsap.to("#marque", {
      transform: "translateX(0)",
      repeat: -1,
      duration: 7,
      ease: "linear",
    });

    gsap.to("#marque img", {
      rotate: -360, 
      duration: 3, 
      repeat: -1,   
      ease: "linear" 
    });
    

    gsap.to("#marque h1", {
      
      color:'#1A1818',

    });
    
  }
});

// marque off
