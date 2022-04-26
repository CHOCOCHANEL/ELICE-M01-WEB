function fetchJsonData(e){
    e.preventDefault();

    const value = code.value;

    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            const matched = data["Employees"].find(object => object.employeeCode===value);
            result.innerHTML = matched.emailAddress;
        })
}

const code = document.getElementById('code');
const btn = document.getElementById('submit');
const result = document.getElementById('email');

btn.addEventListener('click', fetchJsonData);