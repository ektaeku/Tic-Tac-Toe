let boxes= document.querySelectorAll(".box");
let set= document.querySelector(".reset");
let newgamebtn= document.querySelector("#btn");
let container = document.querySelector(".container");
let msg = document.querySelector("#msg");
let turn0 = true;

let winingpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            box.innerText = "O";
            turn0 = false; 
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled =true;
        checkwinner();
    });
});
set.addEventListener("click",()=>{
    turn0= true;
    enablebtn();
    container.classList.add("hide");
});

newgamebtn.addEventListener("click",()=>{
    true0=true;
    enablebtn();
    container.classList.add("hide");
    set.classList.remove("hide");
})
const disablebtn =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enablebtn =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinner = (winner)=>{
    msg.innerText = `Congraluations Winner is ${winner}`;
    container.classList.remove("hide");
    disablebtn();
    set.classList.add("hide");
} 


const checkwinner = () =>{
     for(let pattern of winingpattern){
        let patval1 = boxes[pattern[0]].innerText;
        let patval2 = boxes[pattern[1]].innerText;
        let patval3 = boxes[pattern[2]].innerText;

        if (patval1 != "" && patval2 != "" && patval3 != ""){
            if(patval1 === patval2 && patval2 === patval3){
                console.log("winner");
                showwinner(patval1);
            }

        }
    }
};