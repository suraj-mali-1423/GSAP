var tl = gsap.timeline();

tl.from("#H1", {
  opacity: 0,
  y: -30,
  duration: 1,
  delay:0.5
});

tl.from("h3", {
  opacity: 0,
  y: -30,
  duration: 1,
  delay:0.6,
  stagger : 0.3
});
