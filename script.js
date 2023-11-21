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




const mainimg = document.querySelector(".mainimg")
const smallImg = document.querySelectorAll(".imgSmall")

smallImg[0].onclick=function(){
mainimg.src = smallImg[0].src
}
smallImg[1].onclick=function(){
mainimg.src = smallImg[1].src
}
smallImg[2].onclick=function(){
mainimg.src = smallImg[2].src
}
smallImg[3].onclick=function(){
mainimg.src = smallImg[3].src
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




