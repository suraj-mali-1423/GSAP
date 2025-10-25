// gsap.to("#box1" , { 
//       x:1200,
//       rotate : 360,
//        borderRadius : "50%",
//       duration : 1.5,
//       delay : 1
// })

//  gsap.to("#box2" , { 
//       x:1200,
//       rotate : 360,
//        borderRadius : "50%",
//        backgroundColor : "blue",
//       duration : 1.5,
//       delay : 2.5
// })

//  gsap.to("#box3" , { 
//       x:1200,
//        rotate : 360,
//        borderRadius : "50%",
//        scale:0.4 ,
//        backgroundColor : "green",
//       duration : 1.5,
//       delay : 5
// })


var tl = gsap.timeline()

tl.to("#box1" , { 
        x:1200,
      rotate : 360,
       borderRadius : "50%",
      duration : 1,
      delay : 1,
      repeat:-1,
      yoyo:true
})
tl.to("#box2" , { 
        x:1200,
      rotate : 360,
       borderRadius : "50%",
      duration : 1,
      delay : 1.3,
       repeat:-1,
      yoyo:true
})
tl.to("#box3" , { 
        x:1200,
      rotate : 360,
       borderRadius : "50%",
      duration : 1,
      delay : 1.8,
       repeat:-1,
      yoyo:true
})