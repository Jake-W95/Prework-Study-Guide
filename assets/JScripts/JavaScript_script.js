// var arraySection = document.getElementById('arraySection')
var arrayMethodButton = document.getElementById('arrayMethodButton')
var arrayInfoButton = document.getElementById('arrayInfoButton')
var arrayInfo = document.getElementById('arrayInfo')
var arrayMethod = document.getElementById('arrayMethod')


var arrayMethod = document.getElementById('arrayInfo')
var arrayInfo = document.getElementById('arrayMethod')

arrayMethodButton.addEventListener('click', toMethod);
arrayInfoButton.addEventListener('click', toInfo)

function toMethod(){
arrayInfoButton.style.display = 'block';
arrayInfo.style.display = 'block';
arrayMethodButton.style.display = 'none';
arrayMethod.style.display = 'none';
}
function toInfo() {
    arrayInfoButton.style.display = 'none';
    arrayInfo.style.display = 'none';
    arrayMethodButton.style.display = 'block';
    arrayMethod.style.display = 'block';   
}


