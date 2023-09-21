var slides = document.querySelectorAll("#slides > img");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

// 슬라이드 번호를 저장할 인덱스 변수 current
var current = 0;

showSlides(current);        /* 현재 이미지 표시 */
prev.onclick = prevSlide;   /* 이전 이미지 표시 */
next.onclick = nextSlide;   /* 다음 이미지 표시 */

// 슬라이드 이미지를 화면에 표시하는 showSlide(n) 함수
// n = 0이면 첫 번째 이미지를 의미, n = 1이면 두 번째 이미지를 의미
function showSlides(n) {                                /* n번째 슬라이드 이미지 화면에 표시(0부터 시작) */
    for (var i = 0; i < slides.length; i++) {           /* 배열의 처음부터 끝까지 반복 */
        slides[i].style.display = "none";               /* 모든 이미지를 화면에서 감춤 */
    }
    slides[n].style.display = "block";                  /* n번째 이미지만 화면에 표시 */
}

// [이전]버튼을 클릭하면 동작할 prevSlide() 함수
// 현재 보이는 이미지가 첫 번째인지 체크
// 만약 current값이 0이라면 첫 번째 이미지이므로 마지막 이미지(slides.length - 1)을 보여줘야 함
function prevSlide() {
    if (current > 0) current -= 1;       /* current값이 0보다 크면 이전 위치로 */
    else current = slides.length - 1;   /* 그렇지 않으면 (첫 번째 이미지이므로) 마지막 위치로 */
        showSlides(current);
}

// [다음]버튼을 클릭하면 실행할 함수
// 현재 보이는 이미지가 마지막인지 체크
// current값이 slides.length -1보다 작은지 체크
// 현재 이미지가 마지막이 아니라면 다음 위치(current + 1)를 표시함
// 하지만 마지막 이미지라면 current값을 0으로 만들어 첫 번째 이미지를 보여줘야 함
function nextSlide() {
    if(current < slides.length - 1) current += 1;   /* current값이 2보다 작으면 다음 위치로 */
    else current = 0;                               /* 그렇지 않다면(마지막 이미지이므로) 첫 번째 위치로 이동 */
        showSlides(current);                        /* 이동한 위치의 이미지 표시 */
}