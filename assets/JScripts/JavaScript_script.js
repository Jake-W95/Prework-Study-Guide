// var arraySection = document.getElementById('arraySection')
var arrayMethodButton = document.getElementById('arrayMethodButton')
var arrayInfoButton = document.getElementById('arrayInfoButton')

var arrayMethod = document.getElementById('arrayMethod')
var arrayInfo = document.getElementById('arrayInfo')

var objectMethodButton = document.getElementById('objectMethodButton')
var objectInfoButton = document.getElementById('objectInfoButton')
var objectInfo = document.getElementById('objectInfo')

arrayMethodButton.addEventListener('click', toArrayMethod);
arrayInfoButton.addEventListener('click', toArrayInfo)

function toArrayMethod(){
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


