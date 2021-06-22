var ftr = document.querySelectorAll(".ftr-head");
var ftr_div = document.querySelectorAll(".ftr-cntnr div");
var fi = document.querySelectorAll(".fa-angle-down")

console.log(ftr,ftr_div);
for(let i=0;i<ftr.length;i++){
    ftr[i].addEventListener('click', function(){
        ftr_div[i].classList.toggle("active");
        fi[i].classList.toggle("active")
    })
}
