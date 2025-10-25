var tl = gsap.timeline();

tl.to(".ball", {
    y: -50,
    duration: 0.5,
    repeat: -1,
    backgroundColor:"salmon", 
    yoyo: true,
    ease: "power1.inOut"
});

tl.to(".shadow", {
    scale: 0.5,   
    duration: 0.5,
    repeat: -1,
    yoyo: true
},0);  