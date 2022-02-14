'use strict';

const container = document.querySelector('.container');
const gridContainer = document.createElement('div');
gridContainer.classList.add('grid', 'container');
container.appendChild(gridContainer);

/* Silder from https://www.w3schools.com/howto/howto_js_rangeslider.asp */
const slider = document.getElementById('myRange');
const sliderValue = document.querySelector('span');
const value = slider.value + ' x ' + slider.value;
sliderValue.innerHTML = value; // Display the default slider value

const createGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    gridContainer.style.gridTemplateColumns = 'repeat(' + slider.value + ', 1fr)';
    gridContainer.style.gridTemplateRows = 'repeat(' + slider.value + ', 1fr)';
    for (let i = 0; i < slider.value * slider.value ; i++) {
            const rowItem = document.createElement('div');
            rowItem.classList.add('item');
            rowItem.setAttribute('id', i);
            gridContainer.appendChild(rowItem);
        }
}

createGrid();

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    const value = this.value + ' x ' + this.value;
    sliderValue.innerHTML = value;
}

const buttonClick = document.querySelector('.new');
buttonClick.addEventListener('click', createGrid);


const item = document.querySelector('.grid,container');
item.addEventListener('mouseover' , (e) => {
    let hover = document.getElementById(e.target.id);
    hover.style.backgroundColor = 'black';
})