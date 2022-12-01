// Arrays
var arrayMethodButton = document.getElementById('arrayMethodButton')
var arrayInfoButton = document.getElementById('arrayInfoButton')

var arrayInfo = document.getElementById('arrayInfo')
var arrayMethod = document.getElementById('arrayMethod')


// Objects
var objectMethodButton = document.getElementById('objectMethodButton')
var objectInfoButton = document.getElementById('objectInfoButton')

var objectInfo = document.getElementById('objectInfo')
var objectMethod = document.getElementById('objectMethod')

// Events
var showEventsButton = document.getElementById('showEventsButton')
var hideEventsButton = document.getElementById('hideEventsButton')
var events = document.getElementById('events')

// Array Buttons
arrayMethodButton.addEventListener('click', toArrayMethod);
arrayInfoButton.addEventListener('click', toArrayInfo);

// Object Buttons
objectMethodButton.addEventListener('click', toObjectMethod);
objectInfoButton.addEventListener('click', toObjectInfo);

// Events Buttons
showEventsButton.addEventListener('click', showEvents)
hideEventsButton.addEventListener('click', hideEvents)

function toArrayMethod() {
    arrayInfoButton.style.display = 'block';
    arrayMethod.style.display = 'block';
    arrayMethodButton.style.display = 'none';
    arrayInfo.style.display = 'none';
}
function toArrayInfo() {
    arrayInfoButton.style.display = 'none';
    arrayMethod.style.display = 'none';
    arrayMethodButton.style.display = 'block';
    arrayInfo.style.display = 'block';
}


function toObjectMethod() {
    objectInfoButton.style.display = 'block';
    objectMethodButton.style.display = 'none';
    objectInfo.style.display = 'none';
    objectMethod.style.display = 'block';
}

function toObjectInfo() {
objectInfoButton.style.display = 'none';
objectMethodButton.style.display = 'block';
objectInfo.style.display = 'block';
objectMethod.style.display = 'none';
}

function showEvents(){
    events.style.display = 'block';
    showEventsButton.style.display = 'none';
    hideEventsButton.style.display = 'block';
}
function hideEvents(){
    events.style.display = 'none';
    showEventsButton.style.display = 'block';
    hideEventsButton.style.display = 'none';
}
