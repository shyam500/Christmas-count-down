const days = document.querySelector('#days'),
    hours = document.querySelector('#hours'),
    min = document.querySelector('#min'),
    sec = document.querySelector('#sec');

const xmas = new Date(`25 dec 2022`);

function countDown() {
    const date = new Date();
    let seconds = (xmas.getTime() - date.getTime()) / 1000;
    
    dispFunc(days, seconds / 3600 / 24);
    dispFunc(hours,Math.abs(12 - (date.getHours()-12)))
    dispFunc(min, (seconds / 60) % 60);
    dispFunc(sec, (seconds % 60));

}

function dispFunc(element, d) {
    element.textContent = d < 10 ? '0' + Math.floor(d) : Math.floor(d);

}

setInterval(countDown, 1000);