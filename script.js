console.log("Wellcome to Tic Tac Toe")
let turn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let boxtext = document.querySelectorAll(".tic")
let turnx  = true;
let count = 0;
let msg = document.querySelector("#msg");
let msg_container = document.querySelector(".msg-container")
let resetbtm = document.getElementById("submit")
let new_btn = document.getElementById("new-btn")
let img = document.querySelector(".image")

let winnerPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
    


boxtext.forEach((element) => {
    element.addEventListener("click",()=>{
        console.log("Box was clicked")
        if(turnx){
            element.innerText = "X"
            turnx = false
        }else{
            element.innerText = "0"
            turnx = true
        }
        turn.play()
        let iswinner = checkwinner()
        count++;
        element.disabled = true
        if(count === 9 && !iswinner){
            msg.innerText = "Game is Over. Match Draw"
            disableBoxes()
            gameover.play()
        }
    })
    
});

const checkwinner = ()=>{
    for (let element of winnerPattern) {
        
        let position1value = boxtext[element[0]].innerText;
        let position2value = boxtext[element[1]].innerText;
        let position3value = boxtext[element[2]].innerText;

        if(position1value !="" && position2value!="" && position3value !=""){
            if(position1value === position2value && position2value === position3value){
                showwinner(position1value)
                console.log("Winner")
                return true;
            }
        }
    }
    return false
}

let showwinner = (winner)=>{
    // msg.ad
    msg.innerText = `Congratulations, Winner is ${winner}`;
    gameover.play()
    msg_container.classList.remove("hide");
    img.style.display = "block"
    disableBoxes();
}
let disableBoxes = ()=>{
    for(let box of boxtext){
        box.disabled = true;
        
    }
}
let enadblebox = ()=>{
    for (const box of boxtext) {
        box.disabled = false;
        box.innerHTML = ''
    }
}

resetbtm.addEventListener("click",()=>{
    // disableBoxes();
    enadblebox();
    msg.innerText = ""
    img.style.display = "none";
    count = 0
    turnx = true;
})