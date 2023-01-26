const links = document.querySelectorAll('a');
const sections = document.querySelectorAll('section');
const divs = document.querySelectorAll('div');
// const lists = document.querySelectorAll('ul')





function addBorder (elementList){
    for(element of elementList){
        element.classList.add('border')
    }
}


addBorder(links)
addBorder(sections)
addBorder(divs)
// addBorder(lists)
