const forLoopBtn = document.getElementById('forLoopBtn');
const forOfLoopBtn = document.getElementById('forOfLoopBtn');
const forInLoopBtn = document.getElementById('forInLoopBtn');
const whileLoopBtn = document.getElementById('whileLoopBtn');
const doWhileLoopBtn = document.getElementById('doWhileLoopBtn');

const forLoopSec = document.getElementById('forLoop');
const forOfLoopSec = document.getElementById('forOfLoop');
const forInLoopSec = document.getElementById('forInLoop');
const whileLoopSec = document.getElementById('whileLoop');
const doWhileLoopSec = document.getElementById('doWhileLoop');

const btn = [forLoopBtn, forOfLoopBtn, forInLoopBtn, whileLoopBtn, doWhileLoopBtn];
const sec = [forLoopSec, forOfLoopSec, forInLoopSec, whileLoopSec, doWhileLoopSec]

function loopFunc (button, show, hide1, hide2, hide3, hide4){
    button.addEventListener('click', () => {
        sec[show].classList.replace('hide', 'show');
        sec[hide1].classList.replace('show', 'hide');
        sec[hide2].classList.replace('show', 'hide');
        sec[hide3].classList.replace('show', 'hide');
        sec[hide4].classList.replace('show', 'hide');
    })
}

loopFunc (forLoopBtn,   0, 1,2,3,4)
loopFunc (forOfLoopBtn, 1, 0,2,3,4)
loopFunc (forInLoopBtn, 2, 0,1,3,4)
loopFunc (whileLoopBtn, 3, 0,1,2,4)
loopFunc (doWhileLoopBtn, 4, 0,1,2,3)





// for(i = 0; i < btn.length--; i++){
// btn[i].addEventListener('click', () => {
//     sec[i].classList.replace('hide', 'show');
//     sec[!i].classList.replace('show', 'hide')
// })
// }
