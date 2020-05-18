var bg = document.querySelector('p');
bg.style.border = "2px solid black";
bg.style.width = "350px";
bg.style.height = "200px";
var button = document.querySelector('button');
button.addEventListener('click', function () {
    document.querySelector('p').classList.toggle('purple');
})