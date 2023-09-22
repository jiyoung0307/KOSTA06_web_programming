window.addEventListener('scroll', function(){
    let favTexts = document.querySelectorAll(".fav-text");
    let value = scrollY;
    console.log(value);
    if(value > 400) {
        console.log("뒤로 이동");
        favTexts.forEach((item) => item.style.animation = "slide-backward 2s ease-in-out forwards");
    } else {
        console.log("앞으로 이동");
        favTexts.forEach((item) => item.style.animation = "slide-forward 2s easy-in-out");
    }
})