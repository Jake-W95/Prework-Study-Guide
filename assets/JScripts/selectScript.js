const utilityBtn = document.getElementById('utilityBtn');
const sectionBtn = document.getElementById('sectionBtn');
const textBtn = document.getElementById('textBtn');

const utilitySec = document.getElementById('utilitySec');
const sectionSec = document.getElementById('sectionSec');
const textSec = document.getElementById('textSec');




utilityBtn.addEventListener('click', function () {
    utilitySec.classList.replace('hide', 'show');
    sectionSec.classList.replace('show', 'hide');
    textSec.classList.replace('show', 'hide')
})

sectionBtn.addEventListener('click', function () {
    utilitySec.classList.replace('show', 'hide');
    sectionSec.classList.replace('hide', 'show');
    textSec.classList.replace('show', 'hide')
})

textBtn.addEventListener('click', function () {
    utilitySec.classList.replace('show', 'hide');
    sectionSec.classList.replace('show', 'hide');
    textSec.classList.replace('hide', 'show')
})



