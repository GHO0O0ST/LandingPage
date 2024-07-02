let Timeline = gsap.timeline()

Timeline.from(".logo",{
    y:-100,
    duration:1,
});
Timeline.from(".nav",{
    y:-100,
    duration:1,
});
Timeline.from(".login",{
    y:-100,
    duration:1,
});
Timeline.from(".main h1",{
    y:120,
    opacity:0,
    stagger:0.3,
});
Timeline.from(".container>img",{
   scale:0,
   opacity:0,
   stagger:0.3,
});