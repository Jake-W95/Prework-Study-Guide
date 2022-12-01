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


arrayMethodButton.addEventListener('click', toArrayMethod);
arrayInfoButton.addEventListener('click', toArrayInfo);

objectMethodButton.addEventListener('click', toObjectMethod);
objectInfoButton.addEventListener('click', toObjectInfo);

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

