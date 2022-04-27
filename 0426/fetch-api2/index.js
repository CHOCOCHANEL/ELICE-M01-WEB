function fetchAPI(e){
    e.preventDefault();
    
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            if (data.status === "success"){
                const src = data.message;
                result.src = src;
            } else {
                console.log("API Error");
            }
                
        });
}

const btn = document.getElementById('buttonSubmit');
const result = document.getElementById('dogImg');

btn.addEventListener('click', fetchAPI);