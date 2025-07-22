window.addEventListener("mousemove", function (details) {
    

    let rect = document.querySelector("#Rectangle")
    let xval = gsap.utils.mapRange(
        0, 
        window.innerWidth, 
        100+rect.getBoundingClientRect().width/2,   // 100 points aage + rectangle ki aadhi width
        window.innerWidth - (100+rect.getBoundingClientRect().width/2),
        details.clientX
    );
    gsap.to("#Rectangle", {
        left: xval + "px",
        ease: Power3
    });
})