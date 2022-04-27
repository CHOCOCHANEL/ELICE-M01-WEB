// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.
function fetchAPI(e){
    e.preventDefault();
    
    fetch('https://randomuser.me/api/?password=upper,lower,number')
        .then(response => response.json())
        .then(data => {
            const password = data.results[0].login.password;
            result.innerHTML = password;
        });
}

const btn = document.getElementById('buttonSubmit');
const result = document.getElementById('password');

btn.addEventListener('click', fetchAPI);