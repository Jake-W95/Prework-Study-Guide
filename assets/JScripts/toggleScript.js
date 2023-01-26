
// Array Section (javascript)
const arrayToggle = document.getElementsByClassName('arrayToggle');
// show info
const arrMethBtn = document.getElementById('arrMethBtn');
const arrInfoTxt = document.getElementById('arrInfoTxt');
// show methods
const arrInfoBtn = document.getElementById('arrInfoBtn');
const arrMethTxt = document.getElementById('arrMethTxt');

// Toogle Array Sec (javascript)
for (tog of arrayToggle) {
    tog.addEventListener('click', function () {
        toggle(arrMethBtn, arrInfoTxt, arrInfoBtn, arrMethTxt)
    })
}

const objectToggle = document.getElementsByClassName('objectToggle');

const objMethBtn = document.getElementById('objMethBtn')
const objInfoTxt = document.getElementById('objInfoTxt')

const objInfoBtn = document.getElementById('objInfoBtn');
const objMethTxt = document.getElementById('objMethTxt')

for(tog of objectToggle){
    tog.addEventListener('click', function(){
        toggle(objMethBtn, objInfoTxt, objInfoBtn, objMethTxt)
    })
}


// head body section (html)

const headBodyToggle = document.getElementsByClassName('headBodyToggle')
// head section 
const showBodyBtn = document.getElementById('showBodyBtn');
const headTxt = document.getElementById('headTxt');
// body section 
const showHeadBtn = document.getElementById('showHeadBtn');
const bodyTxt = document.getElementById('bodyTxt')

for(tog of headBodyToggle){
    tog.addEventListener('click', function(){
        toggle(showBodyBtn, headTxt, showHeadBtn, bodyTxt)
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