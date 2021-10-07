const bird = document.getElementById("bird")
const crash = document.getElementById("crash")
function jump() {
    if(bird.classList != "jump"){
        bird.classList.add("jump");
        setTimeout(function () {
            bird.classList.remove("jump");
        },300);
    }
}
 
function play() {
    var audio = new Audio("jump.wav");
    audio.play();
}

let collision = setInterval(function () {
    let crashLeft = parseInt(
        window.getComputedStyle(crash).getPropertyValue("left")
      );
    let birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if (crashLeft < 50 && crashLeft > 0 && birdTop >= 150) {
      alert("Twitter has crashed! Game Over!");
    }
  }, 11);

document.addEventListener("keydown", function (event) {
    play();
    jump();
});
