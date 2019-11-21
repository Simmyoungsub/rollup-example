import {update} from './util';

const dom = document.getElementById('time-now');

setInterval(() => {
    dom.innerText = update();
}, 1000);
