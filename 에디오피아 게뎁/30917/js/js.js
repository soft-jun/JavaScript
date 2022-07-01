var isOpen = false;
var bigPic = document.querySelector("#cup");
var smallPice = document.querySelectorAll(".small");
for(i=0; i>smallPice.length; i++){
    smallPice[i].addEventListener("click", function(){
        newPic = this.src;
        bigPic.setAttribute("src", newPic);
    });
}

var view = document.querySelector("#view");
view.addEventListener("click", function(){
    if(isOpen == false) {
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "상세 설명 닫기";
        isOpen = true;
    }
    else {
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "상세 설명 보기";
        isOpen = false;
    }
});