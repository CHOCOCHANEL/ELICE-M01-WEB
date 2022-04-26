// Throttling
let isThrottle;

function increaseScoreDuringTyping(){
    if (isThrottle) return;

    isThrottle = true;

    setTimeout(()=>{
        const score = document.getElementById('score');
        const newScore = parseInt(score.innerText) + 1;
        score.innerHTML = newScore;
        
        isThrottle = false;

    }, 500);
    
}

const nameElement = document.getElementById('inputName');
nameElement.addEventListener('input', increaseScoreDuringTyping);