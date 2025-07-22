let arr =[
    {dp: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1671229456411-659ff6049231?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1624562563808-170065db4fcc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1556261347-b69c68963b31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwaWRlciUyMG1hbiUyMG1hcnZlbHxlbnwwfDB8MHx8fDA%3D"},

    {dp: "https://images.unsplash.com/photo-1635863138275-d9b33299680b?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1507629479746-d7ac4064838d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://plus.unsplash.com/premium_photo-1669704098824-3bb06bb771f4?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

    {dp: "https://plus.unsplash.com/premium_photo-1682096515837-81ef4d728980?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMG1vZGVsfGVufDB8MHwwfHx8MA%3D%3D",story:"https://images.unsplash.com/photo-1645561305502-63a9ba09ab09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D"},

    {dp: "https://plus.unsplash.com/premium_photo-1664475945300-2a152f7f9e54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D",story:"https://plus.unsplash.com/premium_photo-1682095643806-79da986ccf8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGZhc2hpb24lMjBtb2RlbHxlbnwwfDB8MHx8fDA%3D"}
]



var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})

var storiyan = document.querySelector("#storiyan")

// document.querySelector("#storiyan").innerHTML = clutter
storiyan.innerHTML = clutter

storiyan.addEventListener("click",function(dets){
    // console.log(arr[dets.target.id].story)
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#full-screen").style.display = "none"
    }, 3000);
})