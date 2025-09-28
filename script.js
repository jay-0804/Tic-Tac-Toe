let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let turn_0 = true;

const win_values = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; 

        if (turn_0) {
            box.innerText = "X";
            turn_0 = false;
        } else {
            box.innerText = "O";
            turn_0 = true;
        }

        box.style.pointerEvents = "none"; 
        checkWinner();
    });
});
const checkWinner = () => {
    for (let pattern of win_values) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                document.getElementById("Winner").innerText = "Winner: " + val1;
                disableAll();
                return;
                
            }
        }
    }
    let allFilled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled) {
        document.getElementById("Winner").innerText = "Draw Match!";
    }
};
const disableAll = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none";
    });
};
reset_btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    document.getElementById("Winner").innerText = "";
    turn_0 = true;
});
