let rect = document.querySelector("#Rectangle")

rect.addEventListener("mousemove", function (dets) {
    //pata karo rectangle ka postition kya haiii
    let rectanglelocation = rect.getBoundingClientRect();
    // console.log(dets)

    //rectangle ki width hai 250px
    // console.log(dets.clientX - rectanglelocation.left)
    let insiderectanglevalue = dets.clientX - rectanglelocation.left;


    if (insiderectanglevalue < rectanglelocation.width / 2) {
        // console.log('left');
        let redcolor = gsap.utils.mapRange(
            0,
            rectanglelocation.width / 2,
            255,
            0,
            insiderectanglevalue
        );
        gsap.to(rect, {
            backgroundColor : `rgb(${redcolor},0,0)`,
            ease: Power3,
        });
    } else {
        // console.log('right');
        let bluecolor = gsap.utils.mapRange(
            rectanglelocation.width / 2,
            rectanglelocation.width,
            0,
            255,
            insiderectanglevalue
        );
        gsap.to(rect, {
            backgroundColor : `rgb(0,0,${bluecolor})`,
            ease: Power3,
        });
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor : `white`
    });
})