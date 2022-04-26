import Counter from "./Counter.js";

const App = () => {
    const syncButton = document.getElementById('sync');
    const asyncButton = document.getElementById('async');
    const result = document.getElementById('result');
    const blink = document.getElementById('blink');

    blink.style.width = "100px";
    blink.style.height = "100px";
    blink.style.background = "salmon";
    blink.style.marginTop = "14px";

    setInterval(()=>{
        blink.style.background = blink.style.background==="salmon"? "skyblue":"salmon";
    }, 500);

    syncButton.addEventListener('click', () => {

    });

    asyncButton.addEventListener('click', () => {

    });

    result.innerHTML = 0;
};

export default App;