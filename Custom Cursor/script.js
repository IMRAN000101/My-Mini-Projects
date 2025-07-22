let main = document.querySelector(".main")
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){     //dets ka matlab hota hai details
    // console.log(dets.x)
    // console.log(dets.y)
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})