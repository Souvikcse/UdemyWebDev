var p1show = document.getElementById('p1show');
var p2show = document.getElementById('p2show');

var gameOver = false;
var winningscore = 5;
var p1score = 0;
var p2score = 0;

var p1button = document.getElementById('p1');
var p2button = document.getElementById('p2');

var reset = document.getElementById('reset');
var limit = document.getElementById('limit')
var limitshow = document.getElementById('limitshow')

p1button.addEventListener('click', function(){
    if(!gameOver){
        p1score++;
        p1show.textContent = p1score;
        if(p1score >= winningscore){
            p1show.classList.add('winner');
            gameOver = true;
        }
    }
});
p2button.addEventListener('click', function(){
    if(!gameOver){
        p2score++;
        p2show.textContent = p2score;
        if(p2score >= winningscore){
            p2show.classList.add('winner');
            gameOver = true;
        }
    }
});
reset.addEventListener('click', function(){
    startover();
})
function startover(){
    p1score = p2score = 0;
    p1show.textContent = p2show.textContent = p1score;
    p1show.classList.remove('winner');
    p2show.classList.remove('winner');
    gameOver = false;
}
limit.addEventListener('change', function() {
    limitshow.textContent = this.value;
    winningscore = this.value;
    startover();
})
