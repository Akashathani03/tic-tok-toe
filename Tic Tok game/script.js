let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let msg = document.querySelector("#msg");

let turnO = true; // O = Akash , X = Sagar

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

/* Player move */
boxes.forEach(box=>{
    box.addEventListener("click",()=>{
        box.innerText = turnO ? "Akash" : "Sagar";
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
        checkDraw();
    });
});

/* Winner Check */
function checkWinner(){
    for(let pattern of winPatterns){
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;

        if(a !== "" && a === b && b === c){
            msg.innerHTML = `🎉 Winner: <span style="color:cyan;">${a}</span>`;
            disableAll();
            return;
        }
    }
}

/* Draw Check */
function checkDraw(){
    if([...boxes].every(box => box.innerText !== "") && msg.innerText === ""){
        msg.innerHTML = "🤝 Match Draw!";
        disableAll();
    }
}

/* Disable Board After Result */
function disableAll(){
    boxes.forEach(box => box.disabled = true);
}

/* Reset Game */
reset.addEventListener("click",()=>{
    boxes.forEach(box=>{
        box.innerText="";
        box.disabled=false;
    });
    msg.innerText="";
    turnO=true;
});

