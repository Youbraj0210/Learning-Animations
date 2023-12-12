let videoCon = document.querySelector("#video-container");
let playbtn = document.querySelector("#play");
videoCon.addEventListener("mouseenter",()=>{
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })

})
videoCon.addEventListener("mouseleave",()=>{
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    });
});

videoCon.addEventListener("mousemove",(dets)=>{
    gsap.to(playbtn,{
        left: dets.x - 60,
        top: dets.y-60
    })
})