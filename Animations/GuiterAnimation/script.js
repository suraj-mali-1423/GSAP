var path = `M 10 100 Q 250 100 490 100`;
var finalPath = `M 10 100 Q 250 100 490 100`;

const string = document.querySelector("#string");

string.addEventListener("mousemove" , (e) => {
       path = `M 10 100 Q ${e.x} ${e.y} 490 100`
       
       gsap.to("svg path" , {
           attr:{d:path},
           duration:0.3,
           ease:"power3.out"
        })
})


string.addEventListener("mouseleave" , () => {
        gsap.to("svg path" , {
           attr:{d:finalPath},
           duration:1.5,
           ease:"elastic.out(1,0.3)",
           backgroundColor:"salmon"
        })
})