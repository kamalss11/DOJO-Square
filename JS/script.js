var li = document.querySelectorAll(".center li")
var div = document.querySelectorAll(".id")
var idv = document.querySelectorAll(".idv")
var iidv = document.querySelectorAll(".iidv")
console.log(div,idv,iidv)

for(let i=0;i<idv.length;i++){
    idv[i].addEventListener("mouseover",function(){
        idv[i].classList.add("active")
        div[0].classList.add("wide")
        iidv[i].classList.add("active")
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
    })
}

for(let i=0;i<li.length;i++){
    li[i].addEventListener("mouseout",function(){
        div[i].classList.remove("active")
    })
}