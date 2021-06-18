var li = document.querySelectorAll(".center li")
var div = document.querySelectorAll(".id")
var idv = document.querySelectorAll(".id div")
console.log(li,div)

for(let i=0;i<idv.length;i++){
    idv[i].addEventListener("mouseover",function(){
        idv[i].classList.add("active")
        div[i].classList.add("wide")
    })
}

for(let i=0;i<idv.length;i++){
    idv[i].addEventListener("mouseout",function(){
        idv[i].classList.remove("active")
        div[i].classList.remove("wide")
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