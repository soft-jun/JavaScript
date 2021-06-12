var coverImage = document.querySelector("#cover");
coverImage.onclick = function() {
    alert('1회 눌렀습니다');
};

coverImage.onclick = function() {
    alert('2회 눌렀습니다');
};
//coverImage 객체에 두 가지 이벤트를 적용했으나 마지막 이벤트만 적용됨. 이벤트가 추가되는 것이 아닌 속성의 내용이 두 번째 함수의 내용으로 변경되었기 때문임

coverImage.onmouseover = function() {
    coverImage.getElementsByClassName.border = "5px black solid";
};

coverImage.onmouseout = function() {
    coverImage.getElementsByClassName.border = "";
};