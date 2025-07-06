const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const message = document.getElementById("message");
const resetButton = document.getElementById("reset");

let colors = generateRandomColors(6);
let pickedColor = pickColor();

colorDisplay.textContent = pickedColor;

squares.forEach((square, i) => {
    square.style.backgroundColor = colors[i];

    square.addEventListener("click", function() {
        const clickedColor = this.style.backgroundColor;

        if (clickedColor === pickedColor) {
            message.textContent = "Correct!";
            changeColors(pickedColor);
            resetButton.textContent = "Play Again?";
        } else {
            this.style.backgroundColor = "#f0f0f0";
            message.textContent = "Try Again!";
        }
    });
});

resetButton.addEventListener("click", function() {
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "New Colors";

    squares.forEach((square, i) => {
        square.style.backgroundColor = colors[i];
    });
});

function changeColors(color) {
    squares.forEach(square => {
        square.style.backgroundColor = color;
    });
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    const arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
