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



