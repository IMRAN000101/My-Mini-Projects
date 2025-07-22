let rishta = document.querySelector("h4")

let btn = document.querySelector("#add")
let check = 0;
// let removeFriend = document.querySelector("#remove")
// removeFriend.addEventListener("click",function(){
//     rishta.innerHTML = "Stranger"
//     rishta.style.color = "red"
// })

btn.addEventListener("click",function(){
    if(check == 0){
        rishta.innerHTML = "Friends"
        rishta.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1;
    }
    else if(check == 1){
        rishta.innerHTML = "Stranger"
        rishta.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0;

    }
})
