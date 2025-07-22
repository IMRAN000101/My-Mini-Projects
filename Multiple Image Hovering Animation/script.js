// let elem_1 = document.querySelector("#elem-1")
// let elem1_img = document.querySelector("#elem-1 img")

// elem_1.addEventListener("mousemove",function(dets){
//     elem1_img.style.left=dets.x + "px"
//     elem1_img.style.top=dets.y + "px"
// })

// elem_1.addEventListener("mouseenter",function(dets){
//     elem1_img.style.opacity = 1;
// })

// elem_1.addEventListener("mouseleave",function(dets){
//     elem1_img.style.opacity = 0;
// })
let elem = document.querySelectorAll(".elem")

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left = dets.x + "px"
        // val.childNodes[3].style.top = dets.y + "px"
    })
});