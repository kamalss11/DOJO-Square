var li = document.querySelectorAll(".li")
var div = document.querySelectorAll(".id")
var idv = document.querySelectorAll(".idv")
var iidv = document.querySelectorAll(".iidv")
var ic = document.querySelector(".ic")
var cart = document.querySelector(".cart")
var lii 
console.log(div,idv,iidv)

for(let i=0;i<idv.length;i++){

    if(i==5||i>=8){
        continue
    }

    idv[i].addEventListener("mouseover",function(){

        for(let j=0;j<idv.length;j++){
            iidv[j].classList.remove("active")
        }
        iidv[i].classList.add("active")
        div[lii].classList.add("wide")
    })
}

for(let i=0;i<idv.length;i++){
    idv[i].addEventListener("mouseout",function(){
        iidv[i].classList.remove("active")
    })
}

for(let i=0;i<li.length;i++){
    li[i].addEventListener("mouseover",function(){
        div[i].classList.add("active")
        lii = i
    })
}

for(let i=0;i<li.length;i++){
    li[i].addEventListener("mouseout",function(){
        div[i].classList.remove("active")
        div[i].classList.remove("wide")
        /*for(let j=0;j<idv.length;j++){
            iidv[j].classList.remove("active")
        }*/
    })
}

ic.addEventListener("mouseover",function(){
    cart.classList.add("active")
})

ic.addEventListener("mouseout",function(){
    cart.classList.remove("active")
})