// BASE VARIABLES
const drawingBoard = document.querySelector('.container');
const clearButton = document.querySelector('.clear');
const sizeButton = document.querySelector('.size');
const rainbowButton = document.querySelector('.rainbow');

// GENERATES THE DEFAULT DRAWING FIELD
for (i = 1; i <= 30 * 30; i++) {
    const div = document.createElement('div');
    div.classList.add('square', 'm');
    drawingBoard.appendChild(div);
}

// COLORES HOVERED OVER SQUARES TO BLACK
document.querySelectorAll('.square').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = 'black';
    })
});

// CLEARES BOARD BY SETTING BACKGROUND BACK TO WHITE
clearButton.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(item => {
        item.style.backgroundColor = 'white';
    })
});

// CHANGES BOARD SIZE
sizeButton.addEventListener('click', () => {
    let boardSize = window.prompt('xs = 50x50, s = 40x40, m = 30x30, l = 20x20, xl = 10x10', 'm');
    if (boardSize === 'xl') {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild);
        }
        for (i = 1; i <= 10 * 10; i++) {
            const div = document.createElement('div');
            div.classList.add('square', 'xl');
            drawingBoard.appendChild(div);
        }
    } else if (boardSize === 'l') {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild);
        }
        for (i = 1; i <= 20 * 20; i++) {
            const div = document.createElement('div');
            div.classList.add('square', 'l');
            drawingBoard.appendChild(div);
        }
    } else if (boardSize === 'm') {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild);
        }
        for (i = 1; i <= 30 * 30; i++) {
            const div = document.createElement('div');
            div.classList.add('square', 'm');
            drawingBoard.appendChild(div);
        }
    } else if (boardSize === 's') {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild);
        }
        for (i = 1; i <= 40 * 40; i++) {
            const div = document.createElement('div');
            div.classList.add('square', 's');
            drawingBoard.appendChild(div);
        }
    } else if (boardSize === 'xs') {
        while (drawingBoard.firstChild) {
            drawingBoard.removeChild(drawingBoard.firstChild);
        }
        for (i = 1; i <= 50 * 50; i++) {
            const div = document.createElement('div');
            div.classList.add('square', 'xs');
            drawingBoard.appendChild(div);
        }
    } else if (boardSize === null) {
        alert('Change cancelled')
    } else {
        alert('Invalid input')
    }

    // RE-ACTIVATES COLORING EVENT LISTENER BECAUSE OF DOM CHANGE AND RESETS RAINBOW MODE BUTTON
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'black';
        })
    })
    rainbowButton.classList.remove('rainbow-mode');
});

// TOGGLES RAINBOW MODE FOR RANDOM COLORING
rainbowButton.addEventListener('click', () => {
    rainbowButton.classList.toggle('rainbow-mode');
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const rainbowColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
            if (rainbowButton.classList.contains('rainbow-mode')) {
                item.style.backgroundColor = rainbowColor;
            } else {
                item.style.backgroundColor = 'black';
            }
        })
    })
});