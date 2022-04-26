function showHexaCode(e) {
    e.preventDefault();

    const color = input.value;

    // fetch -> response.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const matched = data.find(object => object.color === color);

            result.innerHTML = matched.value;
            result.style.color = matched.value;
        });

    
}


const input = document.getElementById('inputColor');
const btn = document.getElementById('submit');
const result = document.getElementById('result');

btn.addEventListener('click', showHexaCode);