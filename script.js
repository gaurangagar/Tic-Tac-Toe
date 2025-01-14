let boxes=document.querySelectorAll('.box');
let resetbutton=document.querySelector('#reset');

let turn0=true;
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        if(turn0 && box.innerHTML=="" ){
            box.innerHTML='O';
            turn0=!turn0;
        }else if(!turn0 && box.innerHTML==""){
            box.innerHTML='X';
            turn0=!turn0;
        } else {
            alert('This box is already filled');
        }
        setTimeout(checkWin, 50);
        setTimeout(isComplete,50);
    })
})

function checkWin(){
    winpatterns.forEach(function(pattern){
        let val1=document.getElementById(pattern[0]).innerHTML;
        let val2=document.getElementById(pattern[1]).innerHTML;
        let val3=document.getElementById(pattern[2]).innerHTML;
        if(val1!="" && val1===val2 && val3===val2 && val1===val3) {
            var winner;
            if(turn0){
                winner='X';
            } else winner='O';
            alert(`Winner is ${winner}`);
            resetGame();
        }

    })
}

function resetGame(){
    boxes.forEach((box)=>{
        box.innerHTML='';
    })
};

resetbutton.addEventListener('click', resetGame);

function isComplete(){
    var complete=true;
    boxes.forEach((box)=>{
        if(box.innerHTML==""){
            complete=false;
            return;
        }
    })
    if(complete) {
        alert('Game is a draw');
        resetGame();
    } else return;
}