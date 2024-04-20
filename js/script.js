const btnForward = document.getElementById('forward');
const btnBackward = document.getElementById('backward');

const carousel = document.getElementById('carousel');

let currentPosition = 0;

function pressForward(){
    currentPosition -= 100;
    currentPosition = Math.max(-1300, currentPosition);    
    carousel.style.transform = `translateX(${currentPosition}px)`;
}

function pressBackward(){
    currentPosition += 100;
    currentPosition = Math.min(0, currentPosition);
    carousel.style.transform = `translateX(${currentPosition}px)`;
}


btnForward.addEventListener('click', pressForward);

btnBackward.addEventListener('click',pressBackward);
