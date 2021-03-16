const span = document.querySelector('.mess-with-me');

span.style.fontSize = "40px"



const para = document.querySelector('p.mess-with-me');


para.style.backgroundColor = "green"


const dinosaur = document.querySelectorAll('img')
const dino1 = dinosaur[0]
const dino2 = document.querySelector('#hide-me-area')
dino2.style.display = "none";
dino1.style.width = '324px'

const oran = document.querySelector("#mess-with-me")

const feather = document.querySelector("#feathers")

const dinoRow = document.querySelector("#row")
const button = document.querySelector("#toggle")
const bigger = document.querySelector("#biggify")

function changeBackgroundToOrange() {
    mess.style.backgroundColor = 'orange';
}

mess.addEventListener('click', changeBackgroundToOrange);


function makeBorder() {
    trike.style.border = '1px solid red';
}

trike.addEventListener('click', makeBorder);

function sneaky() {
    feather.style.opacity = '0.5'
}

feather.addEventListener('click', sneaky);

function rowColor() {
    dinoRow.style.backgroundColor = 'blue';
}

button.addEventListener('click', rowColor);


function biggie() {
    bigger.style.width = "200px";
}

bigger.addEventListener('mouseover', biggie);