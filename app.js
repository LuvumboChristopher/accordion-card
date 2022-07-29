import { questions } from "./questions";

const btns = document.querySelector('.btn');
const answer =document.querySelector('.answer');

btns.forEach( btn => {
    btn.addEventListenner('click', e => {
        e.currentTarget
    })
    
});


