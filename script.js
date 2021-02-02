const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjump = false
let position = 0;

const handleKeyUp = ()=>{
    if (event.keyCode === 32) {
        if(!isjump){
            jump();
        }
    }
}

const jump = ()=>{
    isjump = true;
    let upInterval = setInterval(() => {
        if(position>=150){
            clearInterval(upInterval);
            let downInterval = setInterval(()=>{
                if(position<=0){
                    clearInterval(downInterval);
                    isjump = false;
                }else{
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
                
            },25);
        }else{
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let radomTime = Math.random() * 3000 + 600;

    cactus.classList.add('cactus');
    cactus.style.left = cactusPosition + "px";

    background.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            background.removeChild(cactus);
        }else if(cactusPosition>0 && cactusPosition<60 && position<60){
            clearInterval(leftInterval);
            document.body.innerHTML = "<h1 class='gameover'>Game over</h1>"
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';    
        }
    },20);

    setTimeout(createCactus, radomTime);
}

createCactus();
document.addEventListener('keydown',handleKeyUp);