function throttleFunction(func, delay) {
  let lastExecutedTime = 0;

  return function(...args) {
    const currentTime = Date.now();

    if (currentTime - lastExecutedTime >= delay) {
      lastExecutedTime = currentTime;
      func.apply(this, args);
    }
  };
}

// document.querySelector("#center").addEventListener("mousemove",throttleFunction(()=>{
//     console.log("Button is clicked")
// },500));    // Jab mouse move hoga to ye function 2sec ke gap me chalega
document.querySelector("#center").addEventListener("mousemove",throttleFunction((dets)=>{
    //your less repetition code
    let div = document.createElement("div");   //div banana sikha
    div.classList.add("imagediv");   //div ke andar class banana sikha
    div.style.left = dets.clientX +"px"; //Ye to pata hi haiii X axis ki position 
    div.style.top = dets.clientY +"px";  //Similarly Y axis ki position

    var img = document.createElement("img");
    img.setAttribute("src" , "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")  //ye wala sahi hai img pe src lagana using setAttribute 


    div.appendChild(img)

    gsap.to(img,{
        y:"0",
        ease : Power1,
        duration: .5
    });

    gsap.to(img,{
        y:"100%",
        delay: .5,  // pehla gsap chalne ke baad 
        ease : Power2,
    });

    document.body.appendChild(div);
    setTimeout(function(){
        div.remove();
    },1500)
},500)
);