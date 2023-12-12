function videoCon() {
    let videoCon = document.querySelector("#video-container");
    let playbtn = document.querySelector("#play");
    videoCon.addEventListener("mouseenter", () => {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })

    })
    videoCon.addEventListener("mouseleave", () => {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        });
    });

    videoCon.addEventListener("mousemove", (dets) => {
        gsap.to(playbtn, {
            left: dets.x - 60,
            top: dets.y - 60
        })
    })
}

videoCon();



function loadingAnimation(){
    gsap.from("#page1 h1",{
        y: 80,
        stagger: 0.3,
        opacity: 0,
        delay: 0.5,
        duration:1
    });
    gsap.from("#video-container video",{
        scale: 0.9,
        opacity: 0,
        delay: 0.5,
        duration:1,
        z:0
    })
}

loadingAnimation()