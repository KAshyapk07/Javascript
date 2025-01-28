let boxes = document.querySelectorAll(".btn");
let winmsg= document.querySelector("#msg");
let hiddiv=document.querySelector(".hide");

let reserbtn= document.querySelector("#Reset")
let gamebtn = document.querySelector("#newgame-btn");


var count=0;
let turnP1= true;

const winpattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetgame = ()=>{
    enablebox();
    hiddiv.classList.add("hide");
    count=0;
}
const showWinner=(winner)=>{
    if(winner=== 'X'){
        winmsg.innerText= `Congratulations Player 1 you Won`
        hiddiv.classList.remove("hide");
        
    }else{
        winmsg.innerText= `Congratulations Player 2 you Won`
        hiddiv.classList.remove("hide");
    }

}

const disablebox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const draw = (count)=>{
  if(count === 9){
    winmsg.innerText= `Match draw `
    hiddiv.classList.remove("hide");
  }

}
const checkWinner = ()=>{
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText
        let pos2 = boxes[pattern[1]].innerText
        let pos3 = boxes[pattern[2]].innerText
        if(pos1!="" && pos2!=""&& pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                disablebox();
                showWinner(pos1);
    
            }
            else{
                draw(count);
            }
        }
    }
    }

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnP1){
            box.innerText="X";
            turnP1=false;
        }
        else{
            box.innerText="O";
            turnP1=true;
        }
        count=count+1;
        console.log(count);
        box.disabled=true;
        checkWinner();
    })
})

reserbtn.addEventListener("click",resetgame);
gamebtn.addEventListener("click",resetgame);