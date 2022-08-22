let clickBox = document.getElementsByClassName('box')[0];
let clickedt = document.getElementById('clicked');
var count = 0;
clickBox.addEventListener('click',function(){
    count++;
    clickedt.innerHTML = count;
})