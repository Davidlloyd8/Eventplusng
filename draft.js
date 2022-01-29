const firstPage = document.querySelector('.first-page');
const continueOne = document.querySelectorAll('.continue-one');
const backOne = document.querySelector('.back-one');

const secondPage = document.querySelector('.second-page');
const continueTwo = document.querySelectorAll('.continue-two');
const backTwo = document.querySelector('.back-two');

const thirdPage = document.querySelector('.third-page');
const continueThree = document.querySelectorAll('.continue-three');
const backThree = document.querySelector('.back-three');

const forthPage = document.querySelector('.forth-page');
const continueFour = document.querySelectorAll('.continue-four');
const backFour = document.querySelector('.back-four');

const displayOne = document.querySelectorAll('.disp-one')
const displayTwo = document.querySelectorAll('.disp-two')
const displayThree = document.querySelectorAll('.disp-three')
const displayFour = document.querySelectorAll('.disp-four')


const seeMore = document.querySelector('.see-more');
const moreItems = document.querySelector('.more-items');
const seeLess = document.querySelector('.see-less')


seeMore.addEventListener('click', () => {
    moreItems.classList.remove('d-none')
    seeLess.classList.remove('d-none')
    seeMore.classList.add('d-none')
})

seeLess.addEventListener('click', () => {
    moreItems.classList.add('d-none')
    seeLess.classList.add('d-none')
    seeMore.classList.remove('d-none')
})


const displayFirstPage = () => {
    firstPage.classList.remove('d-none')
    secondPage.classList.add('d-none');
    thirdPage.classList.add('d-none')
    forthPage.classList.add('d-none')
};

const displaySecondPage = () => {
    firstPage.classList.add('d-none')
    secondPage.classList.remove('d-none')
    thirdPage.classList.add('d-none')
    forthPage.classList.add('d-none')
};

const displayThirdPage = () => {
    firstPage.classList.add('d-none')
    secondPage.classList.add('d-none');
    thirdPage.classList.remove('d-none')
    forthPage.classList.add('d-none')
};

const displayForthPage = () => {
    firstPage.classList.add('d-none')
    secondPage.classList.add('d-none');
    thirdPage.classList.add('d-none')
    forthPage.classList.remove('d-none')
}

continueOne.forEach(con => {
    con.addEventListener('click', displaySecondPage);
})

backTwo.addEventListener('click', displayFirstPage);

continueTwo.forEach(con => {
    con.addEventListener('click', displayThirdPage);
})

continueThree.forEach(con => {
    con.addEventListener('click', displayForthPage);
})

backThree.addEventListener('click',displaySecondPage);

backFour.addEventListener('click', displayThirdPage);

displayOne.forEach(display => {
    display.addEventListener('click', displayFirstPage);
})

displayTwo.forEach(display => {
    display.addEventListener('click', displaySecondPage);
})

displayThree.forEach(display => {
    display.addEventListener('click', displayThirdPage);
})

displayFour.forEach(display => {
    display.addEventListener('click', displayForthPage);
})



