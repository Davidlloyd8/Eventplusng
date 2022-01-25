const firstPage = document.querySelector('.first-page');
const continueOne = document.querySelector('.continue-one');
const backOne = document.querySelector('.back-one');

const secondPage = document.querySelector('.second-page');
const continueTwo = document.querySelector('.continue-two');
const backTwo = document.querySelector('.back-two');

const thirdPage = document.querySelector('.third-page');
const continueThree = document.querySelector('.continue-three');
const backThree = document.querySelector('.back-three');


const displayOne = document.querySelectorAll('.disp-one')
const displayTwo = document.querySelectorAll('.disp-two')
const displayThree = document.querySelectorAll('.disp-three')
const displayFour = document.querySelectorAll('.disp-four')

const displayFirstPage = () => {
    firstPage.classList.remove('d-none')
    secondPage.classList.add('d-none');
    thirdPage.classList.add('d-none')
};

const displaySecondPage = () => {
    firstPage.classList.add('d-none')
    secondPage.classList.remove('d-none')
    thirdPage.classList.add('d-none')
};

const displayThirdPage = () => {
    firstPage.classList.add('d-none')
    secondPage.classList.add('d-none');
    thirdPage.classList.remove('d-none')
};

continueOne.addEventListener('click', displaySecondPage);

backTwo.addEventListener('click', displayFirstPage);

continueTwo.addEventListener('click', displayThirdPage);

backThree.addEventListener('click',displaySecondPage);

displayOne.forEach(display => {
    display.addEventListener('click', displayFirstPage);
})

displayTwo.forEach(display => {
    display.addEventListener('click', displaySecondPage);
})

displayThree.forEach(display => {
    display.addEventListener('click', displayThirdPage);
})