var tl = gsap.timeline()

tl.from(".nav , .nav h3, .nav button", {
     y: -100,
     duration:1,
     delay:1,
     opacity:0,
     stagger:0.2
})
// tl.to(".nav img,", {
//     opacity:1,
// })

tl.from(".heading h1", {
    y: 120,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})

tl.from(".main>img",{
    scale:0,
    opacity:0,
    stagger:0.3,
    duration:2,
    ease: "power3.out" 
})

tl.from("h5",{
    scale:0,
    opacity:0,
})
tl.to("h5",{
     y:30,
     repeat: -1,
     duration:0.8,
     yoyo:true,

})