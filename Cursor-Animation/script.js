const cursor = document.querySelector("#cursor");
const Main = document.querySelector("#Main");
const Image = document.querySelector("#image");

Main.addEventListener("mousemove" , (e) => {
       gsap.to(cursor , {
           x : e.x,
           y : e.y,
           duration : 0.5
       })
})


Image.addEventListener("mouseenter" , () =>  {
        cursor.innerHTML = "View More"
        gsap.to(cursor , {
             scale : 5,
             backgroundColor : "#f9f9f990"
        })
})

Image.addEventListener("mouseleave" , () =>  {
        gsap.to(cursor , {
             scale : 1,
             backgroundColor : "white"
        })
})