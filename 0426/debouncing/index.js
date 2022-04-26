// debouncing
let timer;

function alertWhenTypingStops(){
    if(timer) clearTimeout(timer);

    const name = nameElement.value;
    timer = setTimeout(() => {
        alert(`Your Name: ${name}`);
    }, 1000)
}

const nameElement = document.getElementById('inputName');
nameElement.addEventListener('input', alertWhenTypingStops);