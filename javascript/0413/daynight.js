function day() {
    document.querySelector('body').style.backgroundColor = 'black';
    // $('body').css('background-color', 'black');
    document.querySelector('body').style.color = 'white';
    // $('body').css('color', 'white');
}

function night() {
    document.querySelector('body').style.backgroundColor = 'white';
    // $('body').css('background-color', 'white');
    document.querySelector('body').style.color = 'black';
    // $('body').css('color', 'black');

    // $('body').css('background-color', 'white').css('color', 'black');

    // let a_tags = document.querySelectorAll('a');
}

export function dayNight() {
    let a_tags = document.querySelectorAll('a');
                
    if (this.value === 'night') {

        night();
        
        for (let a of a_tags){
            a.style.color = 'white';
        }
        this.value = 'day';
    }

    else if (this.value === 'day') {
        
        day();

        for (let a of a_tags){
            a.style.color = 'black';
        }
        // $('a').css('color', 'black');
        this.value = 'night';
    }
}