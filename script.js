const bar = document.querySelector("#bar")
const nav = document.querySelector(".navbarul")


if (bar) {
    bar.addEventListener("click",function(e){
        e.preventDefault()
        nav.classList.add("active");
    })

}

const crossNav = document.querySelector(".fa-xmark")
if (crossNav) {
    crossNav.addEventListener("click",function(e){
        e.preventDefault()
        nav.classList.remove("active");
    })

}




// toastbox

const toastbox = document.querySelector(".toastBox")


 let success = '<i class="fa-solid fa-circle-check"></i>Item added to cart'




function toastShow(msg) {

    let toast = document.createElement("div")
    toast.classList.add("Toast")
    toast.innerHTML =msg
toastbox.appendChild(toast)


setTimeout(() => {
    toast.remove()
}, 3000);

}




