var myRect = document.querySelector("#rect");
myRect.addEventListener("click", function() {
    alert('1회 눌렀습니다');
});

myRect.addEventListener("click", function() {
    alert('2회 눌렀습니다');
});
//이벤트 리스너 방식으로 코드를 실행하면 두 이벤트가 순차적으로 적용됨
myRect.addEventListener("mouseover", function() { // mouseover 이벤트 처리
    myRect.style.backgroundColor = "green"; // muRect 요소의 배경색
    myRect.style.borderRadius = "50%"; //mmyRect 요소의 테두리 둥글게 처리
});

myRect.addEventListener("mouseover", function() { // mouseover 이벤트 처리
    myRect.style.backgroundColor = ""; // muRect 요소의 배경색 지우기
    myRect.style.borderRadius = ""; //mmyRect 요소의 테두리 둥글게 처리 안함
});