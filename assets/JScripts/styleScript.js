const links = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');
const divs = document.querySelectorAll('div');
const headers = document.querySelectorAll('header')
const footers = document.querySelectorAll('footer')
// const lists = document.querySelectorAll('ul')

function addBorder(elementList) {
    for (element of elementList) {
        element.classList.add('border')
    }
}
function addColumn(elementList) {
    for (element of elementList) {
        element.classList.add('column')
    }
}

addBorder(links)
addBorder(sections)
addBorder(divs)
addBorder(headers)
addBorder(footers)

addColumn(sections)
addColumn(divs);

const arrayToggle = document.getElementsByClassName('arrayToggle');
// show info
const arrMethBtn = document.getElementById('arrMethBtn');
const arrInfoTxt = document.getElementById('arrInfoTxt');
// show methods
const arrInfoBtn = document.getElementById('arrInfoBtn');
const arrMethTxt = document.getElementById('arrMethTxt');


for (tog of arrayToggle) {
    tog.addEventListener('click', function () {
        toggle(arrMethBtn, arrInfoTxt, arrInfoBtn, arrMethTxt)
    })
}



function toggle(hideButton, hideText, showButton, showText) {
    
    const all = [hideButton, hideText, showButton, showText]

    if (all[0].classList.contains('show')) {


        all[0].classList.remove('show');
        all[0].classList.add('hide');

        all[1].classList.remove('show');
        all[1].classList.add('hide');

        all[2].classList.remove('hide');
        all[2].classList.add('show')

        all[3].classList.remove('hide');
        all[3].classList.add('show')
return
    }

    if (all[0].classList.contains('hide')) {

        all[0].classList.remove('hide');
        all[0].classList.add('show');

        all[1].classList.remove('hide');
        all[1].classList.add('show');

        all[2].classList.remove('show');
        all[2].classList.add('hide')

        all[3].classList.remove('show');
        all[3].classList.add('hide')

    }

    // for (element of all) {
    //     console.log(element.classList)
    //     if(element.classList.contains('show')){
    //         // element.classList.remove('show');
    //         element.classList.add('hide')
    //     }
    //     if(element.classList.contains('hide')){
    //         // element.class.remove('hide');
    //         element.classList.add('show')
    //     }
    //     console.log(element)
    // }
}


