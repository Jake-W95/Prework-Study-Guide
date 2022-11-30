// var arraySection = document.getElementById('arraySection')
var arrayMethodButton = document.getElementById('arrayMethodButton')
var arrayInfoButton = document.getElementById('arrayInfoButton')
var arrayInfo = document.getElementById('arrayInfo')
var arrayMethodInfo = document.getElementById('arrayMethodInfo')




arrayInfoButton.addEventListener('click', toInfo)
arrayMethodButton.addEventListener('click', toMethod);


function toMethod(){
arrayInfoButton.style.display = 'block';
arrayInfo.style.display = 'block';
arrayMethodButton.style.display = 'none';
arrayMethodInfo.style.display = 'none';
}
function toInfo() {
    arrayInfoButton.style.display = 'none';
    arrayInfo.style.display = 'none';
    arrayMethodButton.style.display = 'block';
    arrayMethodInfo.style.display = 'block';

    
}


