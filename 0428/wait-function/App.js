import './app.css'
import wait from './Wait.js'

const App = () => {
    let cnt = 0;
    const btnImmediate = document.getElementById('immediate');
    const btnOneSecond = document.getElementById('after-one-second');
    const result = document.getElementById('count');

    btnImmediate.addEventListener('click', ()=>{
        cnt++;
        result.innerText = cnt;
    });

    btnOneSecond.addEventListener('click', ()=>{
        wait(1000).then(()=>{
            cnt++;
            result.innerText = cnt;
        });
    });

    result.innerText = cnt;
};

export default App;
