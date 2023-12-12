const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoCon() {
    let videoCon = document.querySelector("#video-container ");
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

function loadingAnimation() {
    gsap.from("#page1 h1", {
        y: 80,
        stagger: 0.3,
        opacity: 0,
        delay: 0.5,
        duration: 1
    });
    gsap.from("#video-container video", {
        scale: 0.9,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        z: 0
    })
}

loadingAnimation()

document.addEventListener("mousemove", (dets) => {
    gsap.to("#cursor", {
        top: dets.y,
        left: dets.x
    })
})

// document.querySelectorAll(".child").addEventListener("mouseenter", () => {
//     gsap.to("#cursor", {
//         transform: "translate(-50%,-50%) scale(1)"
//     })
// })
// document.querySelectorAll(".child").addEventListener("mouseleave", () => {
//     gsap.to("#cursor", {
//         transform: "translate(-50%,-50%) scale(0)"
//     })
// })



let childs = document.querySelectorAll(".child");
childs.forEach(element => {
    element.addEventListener("mouseenter", () => {
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(1)"
        })
    })
    element.addEventListener("mouseleave", () => {
        gsap.to("#cursor", {
            transform: "translate(-50%,-50%) scale(0)"
        })
    })
})