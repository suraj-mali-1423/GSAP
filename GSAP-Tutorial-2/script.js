gsap.to("#Page2 h1" , {
       transform:"translate(-100%)",
       scrollTrigger:{
            trigger:"#Page2",
            scroller:"body",
            markers:true,
            start: "top 0%",
            end:"top -100%",
            scrub : 2,
            pin:true
       }
})